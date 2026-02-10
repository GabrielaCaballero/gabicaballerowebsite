import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const INTERVIEWS = [
  {
    title: "Entrevista con Gabriela Caballero - Cómo conseguir trabajo en el extranjero",
    url: "https://www.youtube.com/watch?v=7TF6DWTW6jg&t=1s",
    platform: "YouTube",
    date: "2024",
  },
  {
    title: "Gabriela Caballero - De Argentina a Londres como Product Manager",
    url: "https://www.youtube.com/watch?v=9wEfFLcN14E",
    platform: "YouTube",
    date: "2024",
  },
  {
    title: "Beyond SWE: Exploring Non-Engineering Roles in Tech",
    url: "https://careersonair.withgoogle.com/events/beyond-swe",
    platform: "Google OnAir",
    date: "2024",
  },
  {
    title: "Gabriela Caballero - Product Manager Interview",
    url: "https://www.youtube.com/watch?v=8NieLyKCrbM",
    platform: "YouTube",
    date: "2024",
  },
  {
    title: "Taller de Proyectos Personales",
    url: "https://careersonair.withgoogle.com/events/taller-de-proyectos-personales",
    platform: "Google OnAir",
    date: "2024",
  },
];

const Interviews = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 animate-fade-in">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Hall of Fame
        </motion.h1>

        <div className="space-y-4">
          {INTERVIEWS.map((talk, i) => (
            <motion.a
              key={talk.url}
              href={talk.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all group"
            >
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  {talk.platform} • {talk.date}
                </p>
                <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {talk.title}
                </h2>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interviews;
