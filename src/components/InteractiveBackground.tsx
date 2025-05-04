
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Atom, Globe, Database, ChartBar } from 'lucide-react';

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to container center
      const mouseX = (clientX / width) - 0.5;
      const mouseY = (clientY / height) - 0.5;
      
      // Update elements position based on mouse movement
      const elements = containerRef.current.querySelectorAll('.interactive-element');
      elements.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-depth') || '0');
        const moveX = mouseX * depth * 30;
        const moveY = mouseY * depth * 30;
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* World map outline */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Globe className="interactive-element w-full h-full max-w-[800px] text-primary/30" data-depth="0.1" />
      </div>
      
      {/* Tech and data elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
      >
        <Atom 
          className="interactive-element absolute bottom-[20%] left-[15%] w-24 h-24 text-pink-300/30" 
          data-depth="0.2" 
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
      >
        <Database 
          className="interactive-element absolute top-[25%] left-[20%] w-16 h-16 text-primary/30" 
          data-depth="0.3" 
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
      >
        <ChartBar 
          className="interactive-element absolute bottom-[30%] right-[25%] w-20 h-20 text-secondary/40" 
          data-depth="0.25" 
        />
      </motion.div>
      
      {/* Floating data particles with improved animations */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: [0.33, 1, 0.68, 1]
            }}
          />
        ))}
      </div>
      
      {/* Light gradient overlay with subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-transparent to-background/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
      />
    </div>
  );
};

export default InteractiveBackground;
