
import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ResearchSection from "@/components/ResearchSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import BlogsSection from "@/components/BlogsSection";
// import CodeSnippetsSection from "@/components/CodeSnippetsSection";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
      }
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AboutSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ResearchSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProjectsSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactSection />
      </motion.div>
      
      {/* Temporarily hidden sections 
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TestimonialsSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <BlogsSection />
      </motion.div>
      
      <motion.div 
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CodeSnippetsSection />
      </motion.div>
      */}
    </motion.div>
  );
};

export default Index;
