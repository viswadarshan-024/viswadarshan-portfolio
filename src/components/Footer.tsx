
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-3">
            <Link to="/" className="font-display font-semibold text-lg inline-block">
              Portfolio
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Creating digital experiences with precision and care.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="font-medium text-sm">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <h3 className="font-medium text-sm">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/viswadarshan-024" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <Github size={18} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/viswadarshan-r-r-68b8b124b/" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <Linkedin size={18} />
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter"
                className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <Twitter size={18} />
              </a>
              
              <a 
                href="mailto:viswadarshanrramiya@gmail.com" 
                aria-label="Email"
                className="rounded-full p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
