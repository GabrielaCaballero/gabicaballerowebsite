import { motion } from "framer-motion";
import { University, GraduationCap } from "lucide-react";

const education = [
  {
    school: "New York University",
    degree: "MS in Management of Technology and Innovation (MoT)",
    location: "Brooklyn, NY",
    period: "August 2019 - May 2021",
    gpa: "3.9 GPA",
    icon: <University className="w-8 h-8 text-primary" />,
  },
  {
    school: "Universidad Tecnológica Nacional",
    degree: "BS in Systems Engineering",
    location: "Cordoba, Argentina",
    period: "March 2013 - December 2017",
    gpa: "9.22/10 GPA",
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
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

export function EducationSection() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Education
      </h2>
      <motion.div className="space-y-8">
        {education.map((edu) => (
          <motion.div
            key={edu.school}
            variants={itemVariants}
            className="p-6 rounded-lg border border-border hover:border-primary transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              {edu.icon}
              <div>
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-muted-foreground mt-1">{edu.degree}</p>
                <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.gpa}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}