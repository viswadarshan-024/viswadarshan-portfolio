
import { motion } from "framer-motion";
import { BookText, Link, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default function ResearchSection() {
  const researches = [
    {
      title: "Advances in Neural Network Architectures",
      journal: "Journal of Artificial Intelligence Research",
      date: "August 2023",
      abstract: "This research explores novel neural network architectures designed for efficient processing of multimodal data with reduced computational requirements.",
      link: "#"
    },
    {
      title: "User Experience Patterns in Mobile Applications",
      journal: "Human-Computer Interaction",
      date: "March 2023",
      abstract: "A comprehensive study analyzing emerging UX patterns in mobile applications and their impact on user engagement and retention.",
      link: "#"
    },
    {
      title: "Sustainable Design Practices in Digital Products",
      journal: "Journal of Sustainable Design",
      date: "November 2022",
      abstract: "This paper examines how implementing sustainable design practices can reduce digital carbon footprints while maintaining excellent user experiences.",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="research-section" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 relative">
            <span className="relative inline-block">
              Research Publications
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Exploring the frontiers of technology and design through academic research and industry applications.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-8"
        >
          {researches.map((research, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BookText className="text-primary w-5 h-5" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{research.journal}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-gray-400 w-4 h-4" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">{research.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-3">{research.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{research.abstract}</p>
                
                <div className="flex justify-end">
                  <Button asChild variant="outline" size="sm" className="group">
                    <a href={research.link} target="_blank" rel="noreferrer">
                      Read Full Paper
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
