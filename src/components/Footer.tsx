
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-b from-black to-gray-950 border-t border-gray-800">
      {/* Background blurred circles for innovation */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-80 h-80 bg-blue-500 rounded-full filter blur-[100px]" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-500 rounded-full filter blur-[100px]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-small-white/[0.03] pointer-events-none" />

      <div className="container relative mx-auto px-6 z-10">
        {/* Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and info column */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center group">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
                Portfolio
              </span>
              <div className="ml-2 h-1 w-1 rounded-full bg-primary animate-pulse"></div>
            </Link>
            <p className="text-gray-400 max-w-md">
              Building innovative digital experiences with a focus on clean design and powerful functionality. Let's create something amazing together.
            </p>
            <div className="pt-2">
              <p className="text-sm text-gray-500">© {currentYear} Portfolio. All rights reserved.</p>
            </div>
          </div>
          
          {/* Quick links column */}
          <div className="md:col-span-3 md:ml-auto">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 h-[1px] bg-white group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect column */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Connect</h3>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://github.com/viswadarshan-024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-gray-700 transition-colors">
                  <Github size={18} />
                </span>
                GitHub
              </a>
              
              <a 
                href="https://www.linkedin.com/in/viswadarshan-r-r-68b8b124b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-gray-700 transition-colors">
                  <Linkedin size={18} />
                </span>
                LinkedIn
              </a>
              
              <a 
                href="https://twitter.com/viswadarshan024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-gray-700 transition-colors">
                  <Twitter size={18} />
                </span>
                Twitter
              </a>
              
              <a 
                href="mailto:viswadarshanrramiya@gmail.com"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <span className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-gray-700 transition-colors">
                  <Mail size={18} />
                </span>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
