
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const About = () => {
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
    <div className={`min-h-screen flex ${isMobile ? 'flex-col' : 'flex-col md:flex-row'} items-start justify-center p-4 md:p-8 animate-fade-in`}>
      {/* Left Column */}
      <div className={`${isMobile ? 'w-full pt-16 pb-8' : 'md:w-1/3 md:fixed left-0 p-8 bg-[#1A1F2C] h-screen'} flex flex-col justify-between`}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mb-8">
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
              <img
                src="/lovable-uploads/2c341fe6-1e35-4457-b659-5312283682a4.png"
                alt="Profile"
                className="rounded-full w-32 h-32 mb-6 object-cover border-4 border-primary/30 shadow-lg hover:border-primary transition-all duration-300 animate-float"
              />
            </motion.div>
            <div className={`text-${isMobile ? 'center' : 'left'}`}>
              <motion.div variants={itemVariants} className="text-sm text-pink-300 mb-1">HELLO, I'M</motion.div>
              <motion.h2 variants={itemVariants} className="text-2xl font-bold text-white mb-4">gabriela caballero</motion.h2>
            </div>
            <motion.div variants={itemVariants} className={`text-${isMobile ? 'center' : 'left'} mb-4`}>
              <div className="text-sm text-pink-300 mb-1">I'M A</div>
              <div className="text-white">product manager</div>
            </motion.div>
            <motion.div variants={itemVariants} className={`text-${isMobile ? 'center' : 'left'} mb-4`}>
              <div className="text-sm text-pink-300 mb-1">LIVING IN</div>
              <div className="text-white">london, uk.</div>
            </motion.div>
            <motion.div variants={itemVariants} className={`text-${isMobile ? 'center' : 'left'}`}>
              <div className="text-sm text-pink-300 mb-1">FROM</div>
              <div className="text-white">argentina</div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className={`text-2xl font-bold text-white mb-8 ${isMobile ? 'text-center' : ''}`}
        >
          gabriela caballero
        </motion.div>
      </div>

      {/* Right Column */}
      <div className={`${isMobile ? 'w-full pt-4' : 'md:w-2/3 md:ml-[33.333333%] pt-8'}`}>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-4 text-left"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8">
            <div className="bg-gradient-to-r from-[#7ee787] via-[#ffdee2] to-[#ff9bce] text-transparent bg-clip-text gradient-text">
              Product Manager.
            </div>
            <div className="bg-gradient-to-r from-[#7ee787] via-[#ffdee2] to-[#ff9bce] text-transparent bg-clip-text gradient-text">
              Data and AI
            </div>
            <div className="bg-gradient-to-r from-[#7ee787] via-[#ffdee2] to-[#ff9bce] text-transparent bg-clip-text gradient-text">
              enthusiastic.
            </div>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg mb-6">
            Hi there! I'm Gabriela Caballero, a Product Manager based in London, UK. With experience on both large consumer products and B2B products. Argentinian at heart, embracing the world's diversity. My endless curiosity and tech passion fuel my role as a product manager, solving problems obsessively.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg mb-8">
            My mission is to make a better and simpler world with the use of technology for the good and create a sense of belonging to everyone.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link to="/projects">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
                Learn More About Gabriela
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
