import { motion } from "framer-motion";
import { University, Building2, GraduationCap } from "lucide-react";

const Projects = () => {
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

  const experience = [
    {
      company: "Google",
      role: "Product Manager - Youtube Shopping",
      location: "London, UK",
      period: "March 2024 - Ongoing",
      responsibilities: [
        "Developed scalable, habit-forming shopping experiences integrated into YouTube's watch experience, including creator collections, and persistent entry points for channel stores.",
        "Defined the strategy for channels with stores on Youtube and developed a vision for future plans.",
        "Presented at the VP level outlining a top priority feature roadmap and fostering alignment across various stakeholders including business teams, marketing, and legal.",
        "Collaborated with research teams to establish the AI roadmap.",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      company: "Google",
      role: "Product Manager - Google Sheets",
      location: "London, UK",
      period: "July 2022 - March 2024",
      responsibilities: [
        "Developed and communicated the vision, strategy, and roadmap to secure buy-in from the director. Prioritized and executed the top-priority project, 'Tables', on Google Sheets, which increase our north-star metric by 5% and has engaged a team of +15 engineers.",
        "Led the execution and defined the beyond-MVP vision, strategy, and prioritization for Sheets Conditional Notifications with +5 engineers, leading to a 90% email open rate and 80% of user satisfaction.",
        "Led the definition, execution, and launch of several feature improvements to Sheets (new keyboard shortcuts, filter improvements, new formulas support, and localization improvements) which were all featured on the Workspace blog.",
        "Led the strategy and roadmap definition for Apps Script, including ideation and prioritization of incorporating Generative AI (GenAI) into the platform.",
      ],
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    // ... Additional experience entries follow the same pattern
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Education Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Education
            </h2>
            <motion.div className="space-y-8" variants={containerVariants}>
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

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Experience
            </h2>
            <motion.div className="space-y-8" variants={containerVariants}>
              {experience.map((exp) => (
                <motion.div
                  key={`${exp.company}-${exp.role}`}
                  variants={itemVariants}
                  className="p-6 rounded-lg border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {exp.icon}
                    <div>
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                      <div className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                        <span>{exp.location}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                      <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;