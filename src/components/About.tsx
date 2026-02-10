import { useState } from "react";
import { MapPin, Globe, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import InteractiveBackground from "./InteractiveBackground";
import LatentNavigator from "./LatentNavigator";

const About = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <>
      <InteractiveBackground />
      {showGame && <LatentNavigator onClose={() => setShowGame(false)} />}

      <section className="min-h-screen pt-24 pb-16 animate-fade-in relative z-10">
        {/* Pink ambient background glow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-gradient-radial from-primary/20 via-primary/5 to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-40" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="space-y-6"
            >
              <p className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Technical Product Manager
              </p>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] tracking-tight">
                PRODUCT{" "}
                <br />
                <span className="text-foreground">
                  STRATEGY.
                </span>
              </h1>
              <div className="flex items-center gap-0 text-sm text-muted-foreground border border-border rounded-full w-fit">
                <span className="flex items-center gap-2 px-4 py-2 border-r border-border">
                  <Globe className="w-4 h-4 text-primary" /> ZURICH
                </span>
                <span className="flex items-center gap-2 px-4 py-2">
                  <MapPin className="w-4 h-4 text-primary" /> ARGENTINA
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I solve complex information challenges and build delightful AI
                experiences by bridging deep technical strategy with user-centric
                design.
              </p>
              <button
                onClick={() => setShowGame(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl shadow-primary/20 group uppercase tracking-widest text-xs"
              >
                ENTER LATENT SPACE
                <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
              className="relative flex justify-center"
            >
              {/* Pulsing pink glow behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[85%] h-[85%] rounded-[40px] bg-primary/30 blur-3xl"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-[70%] h-[70%] rounded-[40px] bg-primary/20 blur-2xl"
                  animate={{
                    scale: [1.05, 0.95, 1.05],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
              <img
                src="/lovable-uploads/gabriela-about.png"
                alt="Gabriela Caballero"
                className="relative w-full max-w-md h-auto aspect-[3/4] rounded-[40px] object-cover border-2 border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-amber-400/20">
                <Sparkles className="w-6 h-6 text-primary transition-colors duration-300 group-hover:text-amber-400 group-hover:fill-amber-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wide">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                "To create bridges between technology and humanity by simplifying
                the complex and telling meaningful stories."
              </p>
            </motion.div>

            {/* Vision Card with Rocket Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/40 transition-all group overflow-hidden relative"
            >
              <style>{`
                .vision-card-rocket {
                  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease;
                }
                .group:hover .vision-card-rocket {
                  transform: translateY(-180px) scale(0.6);
                  opacity: 0;
                }
                .vision-card-flame {
                  transition: height 0.4s ease, opacity 0.4s ease;
                  height: 0;
                  opacity: 0;
                }
                .group:hover .vision-card-flame {
                  height: 80px;
                  opacity: 1;
                }
              `}</style>

              <div className="absolute bottom-4 right-8 flex flex-col items-center pointer-events-none">
                <div className="vision-card-rocket flex flex-col items-center">
                  <Rocket className="w-8 h-8 text-muted-foreground/30 group-hover:text-primary rotate-[-45deg] transition-colors duration-300" />
                </div>
                <div className="vision-card-flame w-2 rounded-full bg-gradient-to-t from-orange-600 via-amber-400 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-wide">Vision Statement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I envision a future where technology evolves into an intuitive,
                  active partner, anticipating our needs and augmenting human
                  potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
