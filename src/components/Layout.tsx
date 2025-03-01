
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [showSpotlight]);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {showSpotlight && (
        <div
          className="spotlight pointer-events-none fixed"
          style={{
            left: `${spotlightPosition.x}px`,
            top: `${spotlightPosition.y}px`
          }}
        />
      )}
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
