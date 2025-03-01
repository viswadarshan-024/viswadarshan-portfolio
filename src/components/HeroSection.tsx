import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  FileText, 
  Code, 
  Bot,
  MessageSquare,
  BookOpen
} from "lucide-react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mask-radial-faded absolute inset-0 bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.03]" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5"
            initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
            animate={{
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              width: `${150 + Math.random() * 200}px`,
              height: `${150 + Math.random() * 200}px`,
              opacity: 0.1 + Math.random() * 0.15,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 md:px-6 relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="mb-3">
          <motion.span 
            className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-xs font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Welcome to my portfolio
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6"
        >
          <motion.span className="block" whileHover={{ scale: 1.01 }}>Crafting digital</motion.span>
          <motion.span className="block mt-2" whileHover={{ scale: 1.01 }}>
            <span className="text-gray-800 dark:text-gray-200">experiences with</span>{" "}
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              precision
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8"
        >
          I'm a [Your Title] specializing in creating elegant, functional, and user-centered digital experiences. Let's bring your vision to life.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button size="lg" className="rounded-full px-6">
              View Projects
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6"
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <motion.a
            href="#" // Replace with actual resume link
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.6 }}
          >
            <FileText size={18} />
            <span>Resume</span>
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/" // Replace with actual LinkedIn link
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.7 }}
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.a
            href="https://github.com/" // Replace with actual GitHub link
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          >
            <Github size={18} />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a
            href="https://huggingface.co/" // Replace with actual HuggingFace link
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.9 }}
          >
            <Bot size={18} />
            <span>HuggingFace</span>
          </motion.a>
          
          <motion.a
            href="https://kaggle.com/" // Replace with actual Kaggle link
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.0 }}
          >
            <Code size={18} />
            <span>Kaggle</span>
          </motion.a>
          
          <motion.a
            href="https://wa.me/1234567890" // Replace with actual WhatsApp link
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 2.1 }}
          >
            <MessageSquare size={18} />
            <span>WhatsApp</span>
          </motion.a>
        </div>

        <motion.div
          variants={itemVariants}
          initial="initial"
          animate="animate"
          variants={floatingVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToNext}
              aria-label="Scroll to next section"
              className="animate-bounce"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
