
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  githubLink?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  demoLink,
  githubLink,
  index,
}: ProjectCardProps) {
  return (
    <motion.div 
      className="group overflow-hidden rounded-lg bg-white dark:bg-gray-950 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          initial={{ opacity: 0.8, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#0284c7", 
                color: "#ffffff" 
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.h3 
          className="text-xl font-display font-semibold mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-3 mt-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="sm" className="rounded-full group">
              <a href={demoLink} target="_blank" rel="noreferrer">
                Live Demo
                <motion.span
                  initial={{ x: 0, y: 0 }}
                  whileHover={{ x: 2, y: -2 }}
                >
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </motion.span>
              </a>
            </Button>
          </motion.div>
          
          {githubLink && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <a href={githubLink} target="_blank" rel="noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
