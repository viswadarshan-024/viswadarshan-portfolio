
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ProjectsSection() {
  // Added categories
  const categories = ["All", "Web Design", "Mobile Apps", "AI Models", "UI/UX"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless checkout and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      demoLink: "#",
      githubLink: "#",
      category: "Web Design"
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio for a photographer showcasing their work with elegant animations.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      demoLink: "#",
      githubLink: "#",
      category: "Web Design"
    },
    {
      title: "Health & Fitness App",
      description: "A comprehensive fitness tracking application with personalized workout plans.",
      tags: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      demoLink: "#",
      category: "Mobile Apps"
    },
    {
      title: "Real Estate Platform",
      description: "A platform connecting property buyers, sellers, and agents with advanced filtering.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      demoLink: "#",
      githubLink: "#",
      category: "Web Design"
    },
    {
      title: "Sentiment Analysis Model",
      description: "A machine learning model that analyzes customer feedback and categorizes sentiment.",
      tags: ["Python", "TensorFlow", "NLP"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      demoLink: "#",
      githubLink: "#",
      category: "AI Models"
    },
    {
      title: "Image Recognition API",
      description: "An API that uses deep learning to recognize and classify objects in images.",
      tags: ["PyTorch", "FastAPI", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      demoLink: "#",
      githubLink: "#",
      category: "AI Models"
    },
    {
      title: "Mobile Banking App",
      description: "A secure and intuitive mobile banking application with real-time transaction tracking.",
      tags: ["Flutter", "Firebase", "Biometrics"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      demoLink: "#",
      category: "Mobile Apps"
    },
    {
      title: "Design System",
      description: "A comprehensive design system with reusable components for consistent UX across products.",
      tags: ["Figma", "Storybook", "CSS Architecture"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      demoLink: "#",
      githubLink: "#",
      category: "UI/UX"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects-section" className="py-20">
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 relative">
            <span className="relative inline-block">
              Featured Projects
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
            A selection of my recent work, showcasing my skills in design and development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
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
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
