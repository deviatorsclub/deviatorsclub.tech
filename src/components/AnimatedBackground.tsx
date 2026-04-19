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
        <div className="absolute inset-0 bg-[#050508]" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 0%, hsla(213, 100%, 33%, 0.07) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 80% 80%, hsla(213, 100%, 33%, 0.04) 0%, transparent 50%),
              radial-gradient(ellipse 70% 40% at 10% 60%, hsla(213, 100%, 33%, 0.03) 0%, transparent 50%)
            `,
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
                  className="absolute h-1 w-1 rounded-full opacity-30"
                  style={{
                    backgroundColor: "hsl(213, 100%, 60%)",
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animationName: "float-slow",
                    animationDuration: `${particle.animationDuration}s`,
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: `${particle.animationDelay}s`,
                  }}
                />
              ))}
              {SMALL_PARTICLES.map((particle) => (
                <div
                  key={`small-${particle.id}`}
                  className="absolute h-0.5 w-0.5 rounded-full opacity-20"
                  style={{
                    backgroundColor: "hsl(215, 100%, 70%)",
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    animationName: "float-fast",
                    animationDuration: `${particle.animationDuration}s`,
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
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
                  className="absolute opacity-10"
                  style={{
                    borderWidth: "1px",
                    borderColor: "hsl(213, 100%, 33%)",
                    left: `${shape.left}%`,
                    top: `${shape.top}%`,
                    width: `${shape.width}px`,
                    height: `${shape.height}px`,
                    animationName: "spin-slow",
                    animationDuration: `${shape.animationDuration}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationDelay: `${shape.animationDelay}s`,
                    transform: `rotate(${shape.rotation}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Subtle glow effects — larger, dimmer for smooth ambient feel */}
            <div
              className="absolute rounded-full"
              style={{
                left: "15%",
                top: "10%",
                width: "500px",
                height: "500px",
                background:
                  "radial-gradient(circle, hsla(213, 100%, 33%, 0.06) 0%, transparent 70%)",
                filter: "blur(60px)",
                animationName: "pulse-slow",
                animationDuration: "10s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                right: "10%",
                bottom: "15%",
                width: "600px",
                height: "600px",
                background:
                  "radial-gradient(circle, hsla(213, 100%, 33%, 0.05) 0%, transparent 70%)",
                filter: "blur(80px)",
                animationName: "pulse-slow",
                animationDuration: "12s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: "5s",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: "800px",
                height: "400px",
                background:
                  "radial-gradient(ellipse, hsla(213, 100%, 33%, 0.04) 0%, transparent 70%)",
                filter: "blur(100px)",
                animationName: "pulse-slow",
                animationDuration: "14s",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: "3s",
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
