
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="space-y-3">
            <Link to="/" className="font-display font-semibold text-lg">
              Portfolio
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Creating digital experiences with precision and care.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="font-medium text-sm">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Button 
                variant="link" 
                className="justify-start h-auto p-0 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                asChild
              >
                <Link to="/">Home</Link>
              </Button>
              <Button 
                variant="link" 
                className="justify-start h-auto p-0 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                asChild
              >
                <Link to="/about">About</Link>
              </Button>
              <Button 
                variant="link" 
                className="justify-start h-auto p-0 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                asChild
              >
                <Link to="/projects">Projects</Link>
              </Button>
              <Button 
                variant="link" 
                className="justify-start h-auto p-0 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                asChild
              >
                <Link to="/contact">Contact</Link>
              </Button>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-3">
            <h3 className="font-medium text-sm">Connect</h3>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                asChild
              >
                <a 
                  href="https://github.com/viswadarshan-024" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                asChild
              >
                <a 
                  href="https://www.linkedin.com/in/viswadarshan-r-r-68b8b124b/" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                asChild
              >
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                asChild
              >
                <a 
                  href="mailto:viswadarshanrramiya@gmail.com" 
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-sm text-center text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
