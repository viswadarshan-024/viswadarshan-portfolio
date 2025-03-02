
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ProjectsSection() {
  // Added categories
  const categories = ["All", "AI Applications", "Mobile Apps", "AI Models", "UI/UX Design"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      title: "AI Search Assistant",
      description: "An AI-powered search assistant that performs Google searches and delivers relevant results with intelligent responses.",
      tags: ["Streamlit", "Groq AI", "Google Search Engine"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      demoLink: "https://ai-search-assistant.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/Search-AI",
      category: "AI Applications"
    },
    {
      title: "Portfolio Website",
      description: "A minimalist portfolio for a AI Developer showcasing their work with elegant animations.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Typescript"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      demoLink: "#",
      githubLink: "https://github.com/viswadarshan-024/innovative-portfolio-spark",
      category: "UI/UX Design"
    },
    {
      title: "Image Sim AI",
      description: "This application measures the similarity between two images using various computer vision techniques.",
      tags: ["OpenCV", "Streamlit", "SciPy"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      demoLink: "https://simageai.streamlit.app/",
      category: "AI Models"
    },
    {
      title: "Personal Chatbot",
      description: "Personal Chatbot with Multi-Session Management seamlessly.",
      tags: ["Langchain", "Groq AI", "Streamlit"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      demoLink: "https://my-personalchatbot.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/personal_chatbot",
      category: "AI Applications"
    },
    {
      title: "Multilingual LLM Translator",
      description: "The application allows users to translate text into a variety of target languages effortlessly.",
      tags: ["Python", "Groq AI", "Langchain"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      demoLink: "https://llm-translation-app.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/llm-translation-app",
      category: "AI Applications"
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
      title: "QR Code Payment App",
      description: "A bus commuting system designed to simplify fare payments and provide seamless travel experiences for passengers.",
      tags: ["Android Studio", "MySQL", "RazorPay Payment System"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      demoLink: "https://drive.google.com/file/d/1QKM7-FQhRU4DKaTkcFBjIXYa8HIoSoq1/view",
      category: "Mobile Apps"
    },
    {
      title: "Taplyf App",
      description: "A comprehensive design of NFC Fair Payment Application by Taplyf.",
      tags: ["Figma", "UI/UX"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      demoLink: "https://www.figma.com/proto/iO2Pc6HYz20uuE5SBNoHoo/Taplyf-Application-Prototype?node-id=0-1886&starting-point-node-id=0%3A1886&t=ypo3nS170aymxxYW-1",
      githubLink: "https://github.com/viswadarshan-024/Taplyf-App",
      category: "UI/UX Design"
    },
    {
      title: "Magnus Webpage Design",
      description: "A comprehensive Web design for the Real time emotion Analyst Application.",
      tags: ["Figma", "UI/UX"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
      demoLink: "https://www.figma.com/proto/dymWu6ONkz0WIigsubfYyi/Magnus-Web-Page?node-id=34-2&starting-point-node-id=34%3A2&scaling=scale-down-width&content-scaling=fixed",
      githubLink: "https://github.com/viswadarshan-024/Magnus-webdesign",
      category: "UI/UX Design"
    }
    {
      title: "ANN Application",
      description: "Customer Churn Prediction App using Tensorflow and Python",
      tags: ["Python", "Tensorflow", "Streamlit"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      demoLink: "https://ann-predict-application.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/DL-ANN-application",
      category: "AI Applications"
    },
    {
      title: "SummariBot",
      description: "Document Summarization and Interactive Chatbot Application",
      tags: ["Python", "HF Inference", "Streamlit", "Groq AI"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      demoLink: "https://ann-predict-application.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/DL-ANN-application",
      category: "AI Applications"
    },
    {
      title: "MentAI Learning Assistant",
      description: "An interactive application assist with learning Data Science and Full Stack Development.",
      tags: ["Python", "Groq AI", "Streamlit"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      demoLink: "https://mentai-myapp.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/MentAI",
      category: "AI Applications"
    },
    {
      title: "RoBERT PD Model",
      description: "Robust Paraphrase Detection RoBERT Transformer Model",
      tags: ["HF Transformer", "Transfomer Architecture", "NLP"],
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      demoLink: "https://huggingface.co/viswadarshan06/pd-robert",
      githubLink: "https://github.com/viswadarshan-024/pd-robert",
      category: "AI Models"
    },
    {
      title: "BERT PD Model",
      description: "Robust Paraphrase Detection BERT Transformer Model",
      tags: ["HF Transformer", "Transfomer Architecture", "NLP"],
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      demoLink: "https://huggingface.co/viswadarshan06/pd-bert",
      githubLink: "https://github.com/viswadarshan-024/pd-bert",
      category: "AI Models"
    },
    {
      title: "MPNet PD Model",
      description: "Robust Paraphrase Detection MPNet Transformer Model",
      tags: ["HF Transformer", "Transfomer Architecture", "NLP"],
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      demoLink: "https://huggingface.co/viswadarshan06/pd-mpnet",
      githubLink: "https://github.com/viswadarshan-024/pd-mpnet",
      category: "AI Models"
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
