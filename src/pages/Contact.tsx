
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import { FileText, Github, Linkedin, Code, Bot, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out with any questions or project inquiries.
          </p>
          
          {/* Social links similar to home page */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <motion.a 
              href="https://drive.google.com/file/d/1O0GJnvqjsQZdxP48Xy9gA7ojm4EXIJYw/view"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <FileText size={18} />
              <span>Resume</span>
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/viswadarshan-r-r-68b8b124b/"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href="https://github.com/viswadarshan-024"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Github size={18} />
              <span>GitHub</span>
            </motion.a>
            
            <motion.a 
              href="https://huggingface.co/viswadarshan06"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Bot size={18} />
              <span>HuggingFace</span>
            </motion.a>
            
            <motion.a 
              href="https://www.kaggle.com/viswadarshanrr"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Code size={18} />
              <span>Kaggle</span>
            </motion.a>
            
            <motion.a 
              href="https://wa.me/6380403325"
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <MessageSquare size={18} />
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <ContactSection />
    </div>
  );
};

export default Contact;
