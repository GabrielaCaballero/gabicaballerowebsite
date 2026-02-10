import { ExternalLink, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const INTERVIEWS = [
  {
    title: "Entrevista con Gabriela Caballero - Cómo conseguir trabajo en el extranjero",
    url: "https://www.youtube.com/watch?v=7TF6DWTW6jg&t=1s",
    platform: "YouTube",
    date: "2024",
    description: "Deep dive into the international tech landscape and relocation strategies.",
    tags: ["CAREER", "INTERNATIONAL"],
  },
  {
    title: "Gabriela Caballero - De Argentina a Londres como Product Manager",
    url: "https://www.youtube.com/watch?v=9wEfFLcN14E",
    platform: "YouTube",
    date: "2024",
    description: "Personal journey from Cordoba to London's tech scene.",
    tags: ["PERSONAL JOURNEY", "PM"],
  },
  {
    title: "Beyond SWE: Exploring Non-Engineering Roles in Tech",
    url: "https://careersonair.withgoogle.com/events/beyond-swe",
    platform: "Google OnAir",
    date: "2024",
    description: "Panel discussion about product and strategy roles at Google.",
    tags: ["GOOGLE", "CAREER"],
  },
  {
    title: "Gabriela Caballero - Product Manager Interview",
    url: "https://www.youtube.com/watch?v=8NieLyKCrbM",
    platform: "YouTube",
    date: "2024",
    description: "In-depth interview about the PM craft and breaking into tech.",
    tags: ["PM", "INTERVIEW"],
  },
  {
    title: "Taller de Proyectos Personales",
    url: "https://careersonair.withgoogle.com/events/taller-de-proyectos-personales",
    platform: "Google OnAir",
    date: "2024",
    description: "Workshop on building impactful personal projects for your career.",
    tags: ["WORKSHOP", "PROJECTS"],
  },
];

const Interviews = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="min-h-screen pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[3px] bg-primary rounded-full" />
            <span className="text-primary font-mono text-xs uppercase tracking-[0.3em]">Live Broadcasts</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight text-foreground">
            MEDIA<br />LOUNGE.
          </h1>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4">
          {INTERVIEWS.map((talk, i) => (
            <motion.a
              key={talk.url}
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`block p-6 md:p-8 rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                hoveredIdx === i
                  ? "border-primary/60 shadow-lg shadow-primary/10"
                  : "border-border/50 bg-card/30"
              }`}
            >
              {/* Hover gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent transition-opacity duration-500 ${
                  hoveredIdx === i ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex-1">
                  {/* Platform & date */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full transition-all duration-300 ${
                      hoveredIdx === i
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {talk.platform}
                    </span>
                    <span className="text-xs text-muted-foreground">{talk.date}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-base md:text-lg font-bold mb-2 group-hover:text-foreground transition-colors">
                    {talk.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3">{talk.description}</p>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {talk.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border border-border/60 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Play button */}
                <div className="ml-6 shrink-0">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                    hoveredIdx === i
                      ? "bg-primary text-primary-foreground scale-110 shadow-lg shadow-primary/30"
                      : "bg-muted/50 text-muted-foreground border border-border/50"
                  }`}>
                    <Play className="w-5 h-5 ml-0.5" fill={hoveredIdx === i ? "currentColor" : "none"} />
                  </div>
                  {/* Audio bars animation on hover */}
                  {hoveredIdx === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-end justify-center gap-[2px] mt-2 h-4"
                    >
                      {[0.6, 1, 0.4, 0.8, 0.5].map((h, j) => (
                        <motion.div
                          key={j}
                          className="w-[3px] bg-primary rounded-full"
                          animate={{ height: [h * 16, h * 6, h * 16] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: j * 0.1 }}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interviews;
