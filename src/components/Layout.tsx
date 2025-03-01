
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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showSpotlight]);

  return (
    <div className="flex flex-col min-h-screen">
      {showSpotlight && (
        <div
          className="spotlight"
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
