
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h1 className="text-9xl font-display font-bold text-gray-300 dark:text-gray-700 mb-4">404</h1>
        <h2 className="text-3xl font-display font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
