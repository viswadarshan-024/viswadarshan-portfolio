import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, FileText, Code, Bot, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Preload images for smoother experience
    const imagesToPreload = [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      "https://images.unsplash.com/photo-1673179874596-1b27a1883dab"
    ];
    
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const floatingVariants = {
    initial: {
      y: 0
    },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut"
      }
    }
  };
  
  const scrollToNext = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mask-radial-faded absolute inset-0 bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.03]" />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({length: 6}).map((_, i) => (
          <motion.div 
            key={i} 
            className="absolute rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 dark:from-primary/10 dark:to-primary/5" 
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`
            }} 
            animate={{
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
            }} 
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }} 
            style={{
              width: `${150 + Math.random() * 200}px`,
              height: `${150 + Math.random() * 200}px`,
              opacity: 0.1 + Math.random() * 0.15,
              filter: "blur(40px)"
            }} 
          />
        ))}
      </div>

      <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={containerVariants} className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div variants={itemVariants} className="mb-3">
          <motion.span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-xs font-medium" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }}>
            Welcome to my portfolio
          </motion.span>
        </motion.div>
        {/* Highlighted Name Section */}
<motion.h1 
  variants={itemVariants} 
  className="text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tight mb-6"
>
  <motion.span className="block" whileHover={{ scale: 1.02 }}>
    <span className="text-gray-800 dark:text-gray-200">Hi, I'm </span>  
    <motion.span 
      className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
    >
      Viswadarshan
    </motion.span>
  </motion.span>
</motion.h1>

{/* Slightly Smaller Tagline */}
<motion.h1 
  variants={itemVariants} 
  className="text-3xl md:text-4xl lg:text-6xl font-display font-bold tracking-tight mb-6"
>
  <motion.span className="block" whileHover={{ scale: 1.01 }}>
    Building Intelligent AI
  </motion.span>
  <motion.span className="block mt-2" whileHover={{ scale: 1.01 }}>
    <span className="text-gray-800 dark:text-gray-200">Solutions with</span>  
    <motion.span 
      className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
    >
      Innovation & Precision
    </motion.span>
  </motion.span>
</motion.h1>

        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-8">I'm an AI Developer & Researcher specializing in NLP, Generative AI, focusing on building efficient, scalable, and impactful AI solutions. Let's innovate and push the boundaries of AI together!</motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }} transition={{
          type: "spring",
          stiffness: 400,
          damping: 10
        }}>
            <Button size="lg" className="rounded-full px-6">
              <Link to="/projects" className="flex items-center">
                View Projects <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }} transition={{
          type: "spring",
          stiffness: 400,
          damping: 10
        }}>
            <Button variant="outline" size="lg" className="rounded-full px-6">
              <Link to="/contact" className="flex items-center">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
          <motion.a href="https://drive.google.com/file/d/1O0GJnvqjsQZdxP48Xy9gA7ojm4EXIJYw/view" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 1.6
        }}>
            <FileText size={18} />
            <span>Resume</span>
          </motion.a>
          
          <motion.a href="https://www.linkedin.com/in/viswadarshan-r-r-68b8b124b/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 1.7
        }}>
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </motion.a>
          
          <motion.a href="https://github.com/viswadarshan-024" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 1.8
        }}>
            <Github size={18} />
            <span>GitHub</span>
          </motion.a>
          
          <motion.a href="https://huggingface.co/viswadarshan06" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 1.9
        }}>
            <Bot size={18} />
            <span>HuggingFace</span>
          </motion.a>
          
          <motion.a href="https://www.kaggle.com/viswadarshanrr" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 2.0
        }}>
            <Code size={18} />
            <span>Kaggle</span>
          </motion.a>
          
          <motion.a href="https://wa.me/6380403325" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3,
          delay: 2.1
        }}>
            <MessageSquare size={18} />
            <span>WhatsApp</span>
          </motion.a>
        </div>

        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial="initial"
          animate="animate"
          variants={floatingVariants}
        >
          <motion.div 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">Scroll Down</span>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={scrollToNext} 
              aria-label="Scroll to next section"
              className="h-10 w-10 rounded-full bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm"
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>;
}
