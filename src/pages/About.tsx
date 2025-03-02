
import { motion } from "framer-motion";
import { CheckCircle, Coffee, Code, User } from "lucide-react";

const About = () => {
  const experiences = [
    {
      company: "TechCorp Inc.",
      position: "Senior Developer",
      period: "2021 - Present",
      description: "Leading the development of web applications and mentoring junior developers."
    },
    {
      company: "Design Studio",
      position: "Frontend Developer",
      period: "2018 - 2021",
      description: "Collaborated with designers to implement responsive and accessible user interfaces."
    },
    {
      company: "Startup Hub",
      position: "Junior Developer",
      period: "2016 - 2018",
      description: "Developed and maintained various client websites and applications."
    }
  ];

  const education = [
    {
      institution: "University of Technology",
      degree: "Master of Computer Science",
      period: "2014 - 2016"
    },
    {
      institution: "Digital Arts College",
      degree: "Bachelor of Design",
      period: "2010 - 2014"
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
                    src="public/one.png" 
                    alt="Profile" 
                    className="object-cover w-full h-full"
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
                    <h3 className="font-medium mb-1">User-centered Design</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I prioritize understanding user needs and designing solutions that address them effectively.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Continuous Improvement</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I believe in iterative development, constantly learning and refining my work based on feedback and new insights.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Quality over Quantity</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I focus on delivering high-quality work that stands the test of time, rather than quick, temporary solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Collaborative Process</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      I value open communication and collaboration, working closely with clients and team members to achieve the best results.
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
