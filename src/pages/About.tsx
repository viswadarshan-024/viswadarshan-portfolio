
import { motion } from "framer-motion";
import { CheckCircle, Coffee, Code, User } from "lucide-react";

const About = () => {
  const experiences = [
    {
      company: "HireBus",
      position: "Product Development Intern",
      period: "June 2024",
      description: "Collaborated with Bus application UI/UX Design and App development"
    },
    {
      company: "Gateway Software Solutions",
      position: "ML/NLP Intern",
      period: "December 2024",
      description: "Collaborated with system design and Learning application development."
    },
    {
      company: "Joint Treasurer",
      position: "CSBS Association, TCE",
      period: "August 2024 - Present",
      description: "I manage financial planning, budgeting, and event coordination for the CSBS Association, TCE"
    },
    {
      company: "General Secretary",
      position: "IEEE CIS Society, TCE",
      period: "January 2025 - Present",
      description: "I lead and oversee the activities, organizing events, managing the society's operations, and fostering a collaborative environment."
    }
  ];

  const education = [
    {
      institution: "Thiagarajar College of Engineering",
      degree: "B.Tech Computer Science and Business Systems",
      period: "2022 - 2026"
    },
    {
      institution: "Indian Institute of Technology, Ropar",
      degree: "Minor in AI",
      period: "2024 - 2025"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Learn more about my journey, experience, and what drives me.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="aspect-square relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img 
                    src="public/lovable-uploads/9321a1dc-07d1-44c7-8d96-ea2da32111cf.png" 
                    alt="public/lovable-uploads/9321a1dc-07d1-44c7-8d96-ea2da32111cf.png" 
                    className="object-cover w-full h-full"
                    loading="eager"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-display font-semibold mb-4">My Story</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I am a pre-final year B.Tech student in Computer Science and Business Systems, specializing in Natural Language Processing (NLP), Generative AI, and AI system development. My expertise lies in low-resource language processing, LLM fine-tuning, tokenization, and scalable AI deployment.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  I actively work on AI research and real-world applications, including multilingual chatbots, AI-driven learning platforms, and storytelling AI. With a deep technical focus, I build efficient and high-performing AI models while continuously exploring new advancements in the field.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-display font-semibold mb-6">What I Do</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-display font-medium mb-2">AI Research & Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I design and build cutting-edge AI models focused on NLP, LLM fine-tuning, and multilingual AI solutions.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-display font-medium mb-2">LLM Engineering & Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I develop and optimize LLM-based applications, including custom tokenizers, RAG systems, and scalable AI deployments.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-display font-medium mb-2">End-to-End AI Application Development</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I create real-world AI solutions, such as multilingual AI systems, Agentic AI platforms, and generative AI applications.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-display font-semibold mb-6">Experience</h2>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-medium">{exp.position}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                    </div>
                    <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-display font-semibold mb-6">Education</h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-medium">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    </div>
                    <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-800 dark:text-gray-200">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-display font-semibold mb-6">My Approach</h2>
            
            <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Problem-Solving Mindset</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I thrive on tackling complex AI challenges, from low-resource language processing to LLM fine-tuning, always seeking the most effective and impactful solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Real-World Impact</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I focus on building AI applications that matter, AI systems that bridge the gap between research and real-world needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Research-Driven Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I combine cutting-edge AI research with practical implementation, ensuring that every project is backed by deep technical understanding and the latest advancements.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Efficiency & Precision</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I work with high speed and accuracy, optimizing models, refining workflows, and delivering scalable, high-performance AI solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
