"use client";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { activities } from "@/data/heroSection";
import Link from "next/link";

// Hero section with animated activity showcase and navigation
export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-advance activity unless hovering
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prev) => (prev + 1) % activities.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center overflow-hidden pt-10 text-white"
    >
      <div
        className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content - Club intro */}
          <div className="relative z-10 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-block rounded-full border border-Blue bg-Blue px-4 py-1">
                <span className="text-black-400 text-sm sm:text-base">
                  Code. Create. Deviate.
                </span>
              </div>
              <h1
                className="bg-white bg-clip-text font-pixelify text-5xl font-bold text-transparent sm:text-5xl lg:text-6xl"
                style={{
                  textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                }}
              >
                Deviators Club
              </h1>
              <p className="max-w-xl text-xl text-gray-300 sm:text-2xl">
                Welcome to Deviators – The coolest tech haven on the campus!
              </p>
              <p className="max-w-xl text-xl text-gray-400 sm:text-xl">
                Whether you&apos;re a newbie or seasoned coder, we provide a
                platform full of innovation, learnings, and fun. Let&apos;s
                build and push the boundaries of what&apos;s possible together!
              </p>
              <Link
                href="https://linktree.deviatorsclub.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:text-md group inline-flex w-full items-center justify-center gap-2 rounded-full border border-Blue bg-Blue px-6 py-3 text-base text-white transition-all duration-300 hover:gap-3 hover:bg-Blue sm:w-auto sm:bg-white/0 sm:px-8 sm:py-4 sm:text-base"
              >
                Connect with us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Activity Showcase */}
          <div className="relative h-[400px] sm:h-[420px] lg:h-[450px]">
            <AnimatePresence mode="wait">
              {activities.map(
                (activity, index) =>
                  index === activeIndex && (
                    <motion.div
                      key={activity.title}
                      className="absolute inset-0 max-w-[40rem] rounded-2xl bg-black/60 p-6 backdrop-blur-md sm:p-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 1 }}
                    >
                      <div className="flex items-center gap-3 sm:block">
                        <div className="inline-flex rounded-xl bg-Blue p-4">
                          <activity.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3
                          className="font-pixelify text-xl font-semibold sm:mt-4 sm:text-3xl"
                          style={{
                            textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          {activity.title}
                        </h3>
                      </div>
                      <p className="text-md sm:text-md mt-2 text-gray-400">
                        {activity.description}
                      </p>
                      <div className="mt-6 flex items-center gap-2">
                        <div className="text-white-300 rounded-full bg-Blue px-3 py-1 text-sm">
                          {activity.stats}
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
            {/* Navigation arrows and dots */}
            <div className="absolute bottom-4 left-0 right-0 flex w-full -translate-y-1 items-center justify-center gap-x-12 px-8 text-gray-500">
              <FiChevronLeft
                className="h-7 w-7 cursor-pointer"
                onClick={() => {
                  setActiveIndex((prev) =>
                    prev === 0 ? activities.length - 1 : prev - 1,
                  );
                }}
              />
              <div className="flex justify-center gap-2">
                {activities.map((_, index) => (
                  <button
                    name="activity"
                    title="Activity"
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                      index === activeIndex
                        ? "bg-Blue"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <FiChevronRight
                className="h-7 w-7 cursor-pointer"
                onClick={() => {
                  setActiveIndex((prev) => (prev + 1) % activities.length);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
