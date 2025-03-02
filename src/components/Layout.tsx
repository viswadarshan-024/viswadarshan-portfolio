
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 });
  const [showSpotlight, setShowSpotlight] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setSpotlightPosition({ x: e.clientX, y: e.clientY });
      if (!showSpotlight) setShowSpotlight(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setSpotlightPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        if (!showSpotlight) setShowSpotlight(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    // Create and animate background particles
    const createParticles = () => {
      const particleContainer = document.getElementById('particle-container');
      if (!particleContainer) return;
      
      // Clear existing particles
      particleContainer.innerHTML = '';
      
      // Create new particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
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
    
    createParticles();
    
    // Recreate particles on window resize for better distribution
    window.addEventListener('resize', createParticles);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener('resize', createParticles);
    };
  }, [showSpotlight]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 -z-10"></div>
      
      {/* Particle container */}
      <div id="particle-container" className="fixed inset-0 pointer-events-none -z-5"></div>
      
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-grid-small-black/[0.02] dark:bg-grid-small-white/[0.02] -z-5 mask-radial-faded"></div>
      
      {/* Animated blobs */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden -z-5">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      {showSpotlight && (
        <div
          className="spotlight pointer-events-none fixed z-0"
          style={{
            left: `${spotlightPosition.x}px`,
            top: `${spotlightPosition.y}px`
          }}
        />
      )}
      <Navbar />
      <main className="flex-grow overflow-hidden relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
