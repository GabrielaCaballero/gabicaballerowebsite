import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const volunteering = [
  {
    organization: "New York University Design for America",
    location: "Brooklyn, NY",
    period: "March 2019 - December 2020",
    description: "Led 4 different projects in partnership with organizations to solve social and global issues",
    icon: <Heart className="w-8 h-8 text-primary" />,
  },
  {
    organization: "Girls Who Code",
    role: "Lead Instructor and Mentor",
    location: "Cordoba, Argentina",
    period: "April 2018 - May 2021",
    description: "Taught basic coding principles and software engineering fundamentals to a group of 15 young women interested in technology.",
    icon: <Heart className="w-8 h-8 text-primary" />,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function VolunteeringSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Volunteering
      </h2>
      <motion.div className="space-y-8">
        {volunteering.map((vol) => (
          <motion.div
            key={`${vol.organization}-${vol.period}`}
            variants={itemVariants}
            className="p-6 rounded-lg border border-border hover:border-primary transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              {vol.icon}
              <div>
                <h3 className="text-xl font-semibold">{vol.organization}</h3>
                {vol.role && <p className="text-primary font-medium">{vol.role}</p>}
                <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                  <span>{vol.location}</span>
                  <span>•</span>
                  <span>{vol.period}</span>
                </div>
                <p className="mt-4 text-muted-foreground">{vol.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}