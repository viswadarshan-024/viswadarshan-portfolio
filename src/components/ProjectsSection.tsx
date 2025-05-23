
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  useEffect(() => {
    // Preload project images for better performance
    const preloadImages = () => {
      const imagesToPreload = [
        "R.jpg",
        "thumb_1200_676.png",
        "Research_Fellowship_in_AI_pillars.jpg"
      ];
      
      imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
  }, []);
  
  // Only show these 3 specific projects in home page with relevant images
  const projects = [
    {
      title: "AI Search Assistant",
      description: "An AI-powered search assistant that performs Google searches and delivers relevant results with intelligent responses.",
      tags: ["Streamlit", "Groq AI", "Google Search Engine"],
      image: "R.jpg",
      demoLink: "https://ai-search-assistant.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/Search-AI",
      category: "AI Applications"
    },
    {
      title: "திருக்குறள் AI",
      description: "AI-agentic application that retrieves exact Tamil Kurals based on user queries ensuring precise and efficient results through an agentic workflow.",
      tags: ["FAISS", "Llama 2", "Sentence Transformer", "Python", "Streamlit"],
      image: "thumb_1200_676.png",
      demoLink: "https://kural-ai.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/Thirukkural-AI",
      category: "AI Application"
    },
    {
      title: "Image Sim AI",
      description: "This application measures the similarity between two images using various computer vision techniques.",
      tags: ["OpenCV", "Streamlit", "SciPy"],
      image: "Research_Fellowship_in_AI_pillars.jpg",
      demoLink: "https://simageai.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/image-similarity-ai",
      category: "AI Models"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects-section" className="py-20">
      <motion.div 
        ref={sectionRef}
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 relative">
            <span className="relative inline-block">
              Featured Projects
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
            A selection of my recent work, showcasing my skills in design and development.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="hover-card"
            >
              <ProjectCard
                index={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mt-12"
        >
          <Button 
            size="lg" 
            className="rounded-full"
            asChild
          >
            <Link to="/projects" className="flex items-center">
              View More Projects <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
