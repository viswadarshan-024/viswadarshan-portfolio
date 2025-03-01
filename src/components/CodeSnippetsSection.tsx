
import { motion } from "framer-motion";
import { Copy, Check, Code, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function CodeSnippetsSection() {
  const codeSnippets = [
    {
      title: "Responsive Card Component",
      language: "jsx",
      description: "A reusable and responsive card component with Tailwind CSS",
      code: `function Card({ title, description, image, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden 
                  shadow-lg transition-all duration-300 hover:shadow-xl 
                  hover:translate-y-[-5px]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <a 
          href={link} 
          className="text-blue-500 hover:underline inline-flex items-center"
        >
          Learn more <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}`
    },
    {
      title: "Animated Button",
      language: "jsx",
      description: "A button component with hover animations using Framer Motion",
      code: `import { motion } from "framer-motion";

function AnimatedButton({ children, onClick }) {
  return (
    <motion.button
      className="bg-gradient-to-r from-purple-500 to-indigo-600 
                text-white font-medium py-2 px-6 rounded-full"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}`
    },
    {
      title: "Dark Mode Toggle",
      language: "jsx",
      description: "A custom dark mode toggle component with smooth transitions",
      code: `import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800
                transition-colors duration-300"
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-800" />
      )}
    </button>
  );
}`
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
    <section id="code-snippets-section" className="py-20 bg-white dark:bg-gray-950">
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
              UI Design Snippets
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A collection of reusable UI components and design patterns to help you build beautiful interfaces.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {codeSnippets.map((snippet, index) => (
            <CodeSnippetCard key={index} snippet={snippet} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CodeSnippetCard({ snippet, index }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1
          }
        }
      }}
      className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="p-5 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <div>
          <h3 className="font-display font-medium text-lg">{snippet.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{snippet.description}</p>
        </div>
        <div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={copyToClipboard}
            className="text-gray-500 hover:text-primary"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <div className="p-5 bg-gray-900 dark:bg-black/50 overflow-x-auto">
        <pre className="text-gray-300 text-sm">
          <code>{snippet.code}</code>
        </pre>
      </div>
      <div className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Code className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          <span className="text-xs text-gray-500 dark:text-gray-400">{snippet.language}</span>
        </div>
        <Button variant="ghost" size="sm" className="text-primary">
          View Full Code
        </Button>
      </div>
    </motion.div>
  );
}
