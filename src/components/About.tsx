import { useState } from "react";
import { MapPin, Globe, Rocket, Sparkles, Layout, Cpu } from "lucide-react";
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
        <div className="container mx-auto px-6">
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
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Product{" "}
                <span className="bg-gradient-to-r from-[#7ee787] via-[#ffdee2] to-primary bg-clip-text text-transparent">
                  Strategy.
                </span>
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" /> Zurich
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-primary" /> Argentina
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-[40px] blur-3xl" />
              <img
                src="/lovable-uploads/2c341fe6-1e35-4457-b659-5312283682a4.png"
                alt="Gabriela Caballero"
                className="relative w-80 h-80 rounded-[40px] object-cover border-2 border-border shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/40 transition-all"
            >
              <Sparkles className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">My Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                "To create bridges between technology and humanity by simplifying
                the complex and telling meaningful stories."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/40 transition-all"
            >
              <div className="flex gap-2 mb-4">
                <Layout className="w-6 h-6 text-primary" />
                <Cpu className="w-6 h-6 text-primary" />
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vision Statement</h3>
              <p className="text-muted-foreground leading-relaxed">
                I envision a future where technology evolves into an intuitive,
                active partner, anticipating our needs and augmenting human
                potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
