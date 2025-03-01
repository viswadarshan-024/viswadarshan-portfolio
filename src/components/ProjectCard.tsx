
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group overflow-hidden rounded-lg bg-white dark:bg-gray-950 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {description}
        </p>
        
        <div className="flex gap-3">
          <Button asChild size="sm" className="rounded-full group">
            <a href={demoLink} target="_blank" rel="noreferrer">
              Live Demo
              <ArrowUpRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Button>
          
          {githubLink && (
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a href={githubLink} target="_blank" rel="noreferrer">
                <Github className="w-4 h-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
