import { motion } from "framer-motion";
import { EducationSection } from "./education/EducationSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { VolunteeringSection } from "./volunteering/VolunteeringSection";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
          <EducationSection />
          <ExperienceSection />
          <VolunteeringSection />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;