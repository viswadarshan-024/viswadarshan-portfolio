
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 md:px-6 relative z-10 text-center"
      >
        <motion.div variants={itemVariants} className="mb-3">
          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-xs font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6"
        >
          <span className="block">Crafting digital</span>
          <span className="block mt-2">
            <span className="text-gray-800 dark:text-gray-200">experiences with</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              precision
            </span>
          </span>
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
          <Button size="lg" className="rounded-full px-6">
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6"
          >
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
