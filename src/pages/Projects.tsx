
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, Tag } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sample project data with updated project-relevant images
  const allProjects = [
    {
      id: 1,
      title: "திருக்குறள் AI",
      description: "AI-agentic application that retrieves exact Tamil Kurals based on user queries ensuring precise and efficient results through an agentic workflow.",
      tags: ["FAISS", "Llama 2", "Sentence Transformer", "Python", "Streamlit"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
      demoLink: "https://kural-ai.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/Thirukkural-AI",
      category: "AI Application"
    },
    {
      id: 2,
      title: "AI Search Assistant",
      description: "An AI-powered search assistant that performs Google searches and delivers relevant results with intelligent responses.",
      tags: ["Streamlit", "Groq AI", "Google Search Engine"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      demoLink: "https://ai-search-assistant.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/Search-AI",
      category: "AI Applications"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A minimalist portfolio for a AI Developer showcasing their work with elegant animations.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Typescript"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      demoLink: "#",
      githubLink: "https://github.com/viswadarshan-024/innovative-portfolio-spark",
      category: "UI/UX Design"
    },
    {
      id: 4,
      title: "Image Sim AI",
      description: "This application measures the similarity between two images using various computer vision techniques.",
      tags: ["OpenCV", "Streamlit", "SciPy"],
      image: "https://images.unsplash.com/photo-1561518776-e76a5e48f731",
      demoLink: "https://simageai.streamlit.app/",
      category: "AI Models"
    },
    {
      id: 5,
      title: "Multilingual LLM Translator",
      description: "The application allows users to translate text into a variety of target languages effortlessly.",
      tags: ["Python", "Groq AI", "Langchain"],
      image: "https://images.unsplash.com/photo-1526040652367-ac003a0475fe",
      demoLink: "https://llm-translation-app.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/llm-translation-app",
      category: "AI Applications"
    },
    {
      id: 6,
      title: "QR Code Payment App",
      description: "A bus commuting system designed to simplify fare payments and provide seamless travel experiences for passengers.",
      tags: ["Android Studio", "MySQL", "RazorPay Payment System"],
      image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c",
      demoLink: "https://drive.google.com/file/d/1QKM7-FQhRU4DKaTkcFBjIXYa8HIoSoq1/view",
      category: "Mobile Apps"
    },
    {
      id: 7,
      title: "Taplyf App",
      description: "A comprehensive design of NFC Fair Payment Application by Taplyf.",
      tags: ["Figma", "UI/UX"],
      image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597",
      demoLink: "https://www.figma.com/proto/iO2Pc6HYz20uuE5SBNoHoo/Taplyf-Application-Prototype?node-id=0-1886&starting-point-node-id=0%3A1886&t=ypo3nS170aymxxYW-1",
      githubLink: "https://github.com/viswadarshan-024/Taplyf-App",
      category: "UI/UX Design"
    },
    {
      id: 8,
      title: "Magnus Webpage Design",
      description: "A comprehensive Web design for the Real time emotion Analyst Application.",
      tags: ["Figma", "UI/UX"],
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
      demoLink: "https://www.figma.com/proto/dymWu6ONkz0WIigsubfYyi/Magnus-Web-Page?node-id=34-2&starting-point-node-id=34%3A2&scaling=scale-down-width&content-scaling=fixed",
      githubLink: "https://github.com/viswadarshan-024/Magnus-webdesign",
      category: "UI/UX Design"
    },
    {
      id: 9,
      title: "ANN Application",
      description: "Customer Churn Prediction App using Tensorflow and Python",
      tags: ["Python", "Tensorflow", "Streamlit"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      demoLink: "https://ann-predict-application.streamlit.app/",
      githubLink: "https://github.com/viswadarshan-024/DL-ANN-application",
      category: "AI Applications"
    },
    {
      id: 10,
      title: "RoBERT PD Model",
      description: "Robust Paraphrase Detection RoBERT Transformer Model",
      tags: ["HF Transformer", "Transfomer Architecture", "NLP"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
      demoLink: "https://huggingface.co/viswadarshan06/pd-robert",
      githubLink: "https://github.com/viswadarshan-024/pd-robert",
      category: "AI Models"
    },
    {
      id: 11,
      title: "BERT PD Model",
      description: "Robust Paraphrase Detection BERT Transformer Model",
      tags: ["HF Transformer", "Transfomer Architecture", "NLP"],
      image: "https://images.unsplash.com/photo-1642681718639-1e172cd3e0cf",
      demoLink: "https://huggingface.co/viswadarshan06/pd-bert",
      githubLink: "https://github.com/viswadarshan-024/pd-bert",
      category: "AI Models"
    },
    {
      id: 12,
      title: "MPNet PD Model",
      description: "Robust Paraphrase Detection MPNet Transformer Model",
      tags: ["HF Transformer", "Transfomer Architecture", "NLP"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      demoLink: "https://huggingface.co/viswadarshan06/pd-mpnet",
      githubLink: "https://github.com/viswadarshan-024/pd-mpnet",
      category: "AI Models"
    },
    {
      id: 13,
      title: "Tamil BERT",
      description: "Specifically Trained BERT model for Tamil",
      tags: ["HF Transformer", "Transfomer Architecture", "NLP"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
      demoLink: "https://huggingface.co/viswadarshan06/Tamil-MLM",
      category: "AI Models"
    }
  ];

  const filterOptions = [
    { id: "all", label: "All Projects" },
    { id: "AI Applications", label: "AI Applications" },
    { id: "AI Models", label: "AI Models" },
    { id: "UI/UX Design", label: "UI/UX Design" },
    { id: "Mobile Apps", label: "Mobile Apps" }
  ];

  useEffect(() => {
    // Filter projects based on active filter
    if (activeFilter === "all") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.category === activeFilter)
      );
    }

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore my portfolio of work across various technologies and platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === option.id
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {option.id === "all" ? (
                <span className="flex items-center gap-1">
                  <Folder className="w-4 h-4" />
                  {option.label}
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {option.label}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {isLoaded && filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && isLoaded && (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
