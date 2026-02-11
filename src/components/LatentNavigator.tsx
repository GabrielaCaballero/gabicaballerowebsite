import { useRef, useState, useEffect } from "react";
import { RotateCcw, X, Cpu } from "lucide-react";

interface LatentNavigatorProps {
  onClose: () => void;
}

const LatentNavigator = ({ onClose }: LatentNavigatorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameState, setGameState] = useState<"playing" | "over">("playing");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let planeY = canvas.height / 2;
    let velocity = 0;
    const gravity = 0.25;
    const lift = -6;
    let frameCount = 0;
    const symbols = ["Σ", "μ", "θ", "λ", "f(x)", "∫", "σ", "Δ"];

    interface Obstacle {
      x: number;
      y: number;
      type: "point" | "noise";
      symbol: string;
      speed: number;
      size: number;
    }

    let obstacles: Obstacle[] = [];

    const createObstacle = (): Obstacle => ({
      x: canvas.width,
      y: Math.random() * (canvas.height - 40) + 20,
      type: Math.random() > 0.4 ? "point" : "noise",
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      speed: 4 + Math.random() * 2,
      size: Math.random() > 0.4 ? 22 : 28,
    });

    const drawPlane = (y: number) => {
      ctx.save();
      ctx.translate(40, y);
      ctx.fillStyle = "#ec4899";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#ec4899";
      ctx.beginPath();
      ctx.moveTo(15, 0);
      ctx.lineTo(-10, -8);
      ctx.lineTo(-10, 8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(236, 72, 153, 0.05)";
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }

      if (gameState === "playing") {
        velocity += gravity;
        planeY += velocity;
        if (planeY > canvas.height) {
          planeY = canvas.height - 5;
          velocity = lift * 0.8;
        }
        if (planeY < 0) {
          planeY = 5;
          velocity = 1;
        }
        if (frameCount % 45 === 0) obstacles.push(createObstacle());

        obstacles = obstacles.filter((obs) => {
          obs.x -= obs.speed;
          const dx = obs.x - 40;
          const dy = obs.y - planeY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < obs.size) {
            if (obs.type === "noise") {
              setGameState("over");
            } else {
              setScore((s) => s + 5);
              return false;
            }
          }
          ctx.fillStyle = obs.type === "noise" ? "#ef4444" : "#ffffff";
          ctx.font = `bold ${obs.size}px monospace`;
          ctx.fillText(obs.symbol, obs.x, obs.y);
          return obs.x > -50;
        });
        drawPlane(planeY);
        frameCount++;
      }
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    const handleInput = (e: KeyboardEvent) => {
      if (
        gameState === "playing" &&
        (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === " ")
      ) {
        if (e.key === "ArrowUp" || e.key === " ") velocity = lift;
        if (e.key === "ArrowDown") velocity = -lift * 0.5;
      }
    };

    window.addEventListener("keydown", handleInput);
    gameLoop();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleInput);
    };
  }, [gameState]);

  useEffect(() => {
    if (gameState !== "playing") return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState("over");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2 text-primary font-bold text-sm">
            <Cpu className="w-4 h-4" />
            Latent Space Navigator
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instructions */}
        <div className="px-4 py-3 border-b border-border bg-muted/30">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="text-primary font-bold">How to play:</span> Press <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] font-mono">↑</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] font-mono">Space</kbd> to fly up, <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] font-mono">↓</kbd> to dive. Collect <span className="text-foreground font-bold">white symbols</span> (data points) to boost accuracy. Avoid <span className="text-destructive font-bold">red symbols</span> (noise) or your model overfits!
          </p>
        </div>

        <div className="relative">
          <canvas
            ref={canvasRef}
            width={600}
            height={300}
            className="w-full bg-background"
          />
          {gameState === "over" && (
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center gap-4">
              <p className="text-destructive font-black text-xl tracking-widest">
                MODEL OVERFITTED
              </p>
              <button
                onClick={() => {
                  setScore(0);
                  setTimeLeft(20);
                  setGameState("playing");
                }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                RE-TRAIN
              </button>
            </div>
          )}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-8">
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-1">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Time Remaining
              </p>
              <p className="text-foreground font-black text-lg text-center">
                {timeLeft}s
              </p>
            </div>
            <div className="bg-black/60 backdrop-blur-sm rounded-full px-4 py-1">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Accuracy
              </p>
              <p className="text-foreground font-black text-lg text-center">
                {score}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatentNavigator;
