"use client";

import { useState, useEffect, memo } from "react";

interface AnimatedBackgroundProps {
  className?: string;
}

// Pre-generate particle positions
const LARGE_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 100),
  top: Math.floor(Math.random() * 100),
  animationDuration: 8 + Math.floor(Math.random() * 4),
  animationDelay: Math.floor(Math.random() * 8),
}));

const SMALL_PARTICLES = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 100),
  top: Math.floor(Math.random() * 100),
  animationDuration: 5 + Math.floor(Math.random() * 3),
  animationDelay: Math.floor(Math.random() * 12),
}));

const SHAPES = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  left: Math.floor(Math.random() * 90) + 5,
  top: Math.floor(Math.random() * 90) + 5,
  width: 40 + Math.floor(Math.random() * 25),
  height: 40 + Math.floor(Math.random() * 25),
  animationDuration: 20 + Math.floor(Math.random() * 8),
  animationDelay: Math.floor(Math.random() * 15),
  rotation: Math.floor(Math.random() * 360),
}));

const AnimatedBackground = memo(
  ({
    className = "fixed left-0 top-0 w-full -z-50",
  }: AnimatedBackgroundProps) => {
    const [mounted, setMounted] = useState(false);
    const [vh, setVh] = useState("100vh");

    useEffect(() => {
      function setFullHeight() {
        // Handle mobile viewport changes more robustly
        const height = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${height}px`);
        setVh(`calc(var(--vh) * 100)`);
      }

      setFullHeight();
      window.addEventListener("resize", setFullHeight);
      window.addEventListener("orientationchange", setFullHeight);

      // Reduce delay to minimize white flash
      const timer = setTimeout(() => setMounted(true), 50);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", setFullHeight);
        window.removeEventListener("orientationchange", setFullHeight);
      };
    }, []);

    return (
      <div
        className={className}
        style={{
          height: vh,
          minHeight: "100dvh",
          position: "fixed",
          width: "100vw",
          // Ensure coverage on mobile browsers
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
        }}
      >
        {/* Base gradient background - always visible to prevent white flash */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Static grid overlay - always visible */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Conditionally render only the animated elements */}
        {mounted && (
          <>
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {LARGE_PARTICLES.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute h-1 w-1 rounded-full bg-blue-400 opacity-60"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animation: `float-slow ${particle.animationDuration}s ease-in-out infinite`,
                    animationDelay: `${particle.animationDelay}s`,
                  }}
                />
              ))}
              {SMALL_PARTICLES.map((particle) => (
                <div
                  key={`small-${particle.id}`}
                  className="absolute h-0.5 w-0.5 rounded-full bg-blue-300 opacity-40"
                  style={{
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animation: `float-fast ${particle.animationDuration}s ease-in-out infinite`,
                    animationDelay: `${particle.animationDelay}s`,
                  }}
                />
              ))}
            </div>

            {/* Geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {SHAPES.map((shape) => (
                <div
                  key={`shape-${shape.id}`}
                  className="absolute border border-blue-500/20"
                  style={{
                    left: `${shape.left}%`,
                    top: `${shape.top}%`,
                    width: `${shape.width}px`,
                    height: `${shape.height}px`,
                    animation: `spin-slow ${shape.animationDuration}s linear infinite`,
                    animationDelay: `${shape.animationDelay}s`,
                    transform: `rotate(${shape.rotation}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Subtle glow effects */}
            <div
              className="bg-blue-500/3 absolute left-1/4 top-1/4 h-80 w-80 rounded-full blur-3xl"
              style={{ animation: "pulse-slow 8s ease-in-out infinite" }}
            />
            <div
              className="bg-blue-500/2 absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full blur-3xl"
              style={{
                animation: "pulse-slow 8s ease-in-out infinite",
                animationDelay: "4s",
              }}
            />
          </>
        )}
      </div>
    );
  },
);

AnimatedBackground.displayName = "AnimatedBackground";

export default AnimatedBackground;
