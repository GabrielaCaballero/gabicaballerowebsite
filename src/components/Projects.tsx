
import { motion } from "framer-motion";
import { EducationSection } from "./education/EducationSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { VolunteeringSection } from "./volunteering/VolunteeringSection";
import { useIsMobile } from "@/hooks/use-mobile";

const Projects = () => {
  const isMobile = useIsMobile();
  
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
    <section className={`min-h-screen ${isMobile ? 'pt-20' : 'pt-24'} pb-16 mobile-padding`}>
      <div className="container mx-auto px-4 md:px-6">
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
