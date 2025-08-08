"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutItems, { aboutClub } from "@/data/about";

// About section with animated carousel
export default function AboutSection() {
  // Carousel state
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted (for animation)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-advance carousel unless hovering
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prevIndex) =>
          prevIndex === aboutItems.length - 1 ? 0 : prevIndex + 1,
        );
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="about" className="relative min-h-screen w-full">
      {/* Subtle star effect with adjusted gradient */}
      <div className="absolute inset-0">
        <div className="from-black-900/20 absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent opacity-40" />
      </div>
      <div
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center p-4 py-12 sm:p-6 sm:py-20"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Section heading */}
        <motion.h2
          initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 text-center font-pixelify text-3xl font-bold text-white sm:mb-10 sm:text-4xl lg:text-5xl"
          style={{ textShadow: "0 0 4px rgba(255, 255, 255, 0.3)" }}
        >
          About Deviators
        </motion.h2>
        {/* Welcome message */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 max-w-3xl px-4 text-center sm:mb-16"
        >
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            {aboutClub}
          </p>
        </motion.div>
        {/* Animated carousel for about items */}
        <div className="relative h-[275px] w-full max-w-3xl px-4 sm:h-[300px]">
          {mounted ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 overflow-y-auto rounded-2xl border border-Blue bg-Bgblack/50 p-6 shadow-xl backdrop-blur-sm sm:p-12"
              >
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <h3
                    className="mb-4 font-pixelify text-2xl font-semibold text-white sm:mb-6 sm:text-3xl"
                    style={{
                      textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {aboutItems[activeIndex].title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                    {aboutItems[activeIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            // Static fallback for SSR
            <div className="absolute inset-0 overflow-y-auto rounded-2xl border border-Blue bg-Bgblack/50 p-6 shadow-xl backdrop-blur-sm sm:p-12">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <h3
                  className="mb-4 font-pixelify text-2xl font-semibold text-white sm:mb-6 sm:text-3xl"
                  style={{
                    textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {aboutItems[0].title}
                </h3>
                <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                  {aboutItems[0].desc}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Navigation dots for carousel */}
        <div className="mt-6 flex space-x-2 px-4 sm:mt-8">
          {aboutItems.map((_, index) => (
            <button
              key={index}
              onClick={() => mounted && setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-Blue sm:w-8"
                  : "bg-gray-500/50 hover:bg-gray-400/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
