
import { Outlet } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export default function Layout() {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });
  const [showSpotlight, setShowSpotlight] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Using spring animation for smooth cursor movement with better performance settings
  const springX = useSpring(0, { damping: 20, stiffness: 200, mass: 0.2 });
  const springY = useSpring(0, { damping: 20, stiffness: 200, mass: 0.2 });

  useEffect(() => {
    setIsLoaded(true);
    
    // Throttle mouse movement for better performance
    let lastRenderTime = 0;
    const throttleMs = 10; // Lower value for smoother animation
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastRenderTime < throttleMs) return;
      
      lastRenderTime = currentTime;
      
      // Set springs for smooth movement
      springX.set(e.clientX);
      springY.set(e.clientY);
      
      if (!showSpotlight) setShowSpotlight(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastRenderTime < throttleMs) return;
      
      lastRenderTime = currentTime;
      
      if (e.touches.length > 0) {
        springX.set(e.touches[0].clientX);
        springY.set(e.touches[0].clientY);
        
        if (!showSpotlight) setShowSpotlight(true);
      }
    };
    
    // Use the newer .on('change') syntax to avoid deprecation warnings
    const unsubscribeX = springX.on('change', x => {
      setSpotlightPosition(prev => ({ ...prev, x }));
    });
    
    const unsubscribeY = springY.on('change', y => {
      setSpotlightPosition(prev => ({ ...prev, y }));
    });

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Create and animate background particles
    const createParticles = () => {
      const particleContainer = document.getElementById('particle-container');
      if (!particleContainer) return;
      
      // Clear existing particles
      particleContainer.innerHTML = '';
      
      // Create new particles - reduced for better performance
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 3 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.3 + 0.1;
        const animDuration = Math.random() * 20 + 10;
        const animDelay = Math.random() * 5;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = `${opacity}`;
        particle.style.animation = `float ${animDuration}s ease-in-out ${animDelay}s infinite`;
        
        particleContainer.appendChild(particle);
      }
    };
    
    // Preload images for a better experience
    const preloadImages = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        // Add loading class
        img.classList.add('loading');
        
        // When image is loaded, add loaded class
        img.onload = () => {
          img.classList.remove('loading');
          img.classList.add('loaded');
        };
        
        // If image is already loaded, add loaded class directly
        if (img.complete) {
          img.classList.remove('loading');
          img.classList.add('loaded');
        }
      });
    };
    
    createParticles();
    preloadImages();
    
    // Throttle resize event for better performance
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(createParticles, 100);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener('resize', handleResize);
      unsubscribeX();
      unsubscribeY();
      clearTimeout(resizeTimeout);
    };
  }, [showSpotlight, springX, springY]);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 to-gray-900 -z-10"></div>
      
      {/* Particle container */}
      <div id="particle-container" className="fixed inset-0 pointer-events-none -z-5"></div>
      
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-grid-small-white/[0.02] -z-5 mask-radial-faded"></div>
      
      {/* Animated blobs */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden -z-5">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      {showSpotlight && (
        <motion.div
          className="spotlight pointer-events-none fixed z-0"
          style={{
            left: spotlightPosition.x,
            top: spotlightPosition.y,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 0.2 }
          }}
        />
      )}
      
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main 
          className="flex-grow overflow-hidden relative z-10"
          key={window.location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}
