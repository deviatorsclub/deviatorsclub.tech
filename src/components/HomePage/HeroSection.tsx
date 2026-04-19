"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { activities } from "@/data/heroSection";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % activities.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  const activity = activities[activeIndex];

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[100dvh] items-center overflow-hidden text-white"
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ─── Left: Club intro ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-7"
          >
            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <span className="glass-card text-brand-light inline-flex items-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium tracking-wide">
                Code. Create. Deviate.
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl leading-[1.05] sm:text-4xl lg:text-5xl"
            >
              Deviators Club
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-lg text-base leading-relaxed text-white/40 sm:text-lg"
            >
              A community of builders, hackers, and dreamers breaking the mold
              on campus. We ship open-source projects, run hackathons, and host
              workshops — all while having way too much fun doing it.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href="https://linktree.deviatorsclub.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Connect with us
              </Link>
              <Link href="/learn" className="btn-secondary">
                Explore resources
              </Link>
            </motion.div>
          </motion.div>

          {/* ─── Right: Activity cards (auto-rotate, no controls) ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="relative min-h-[280px] sm:min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 60, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -60, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="glass-card absolute inset-0 rounded-2xl p-6 sm:p-8"
                >
                  {/* Icon */}
                  <div className="border-brand/20 bg-brand/10 inline-flex rounded-xl border p-3.5">
                    <HugeiconsIcon
                      icon={activity.icon}
                      size={28}
                      className="text-brand-light"
                    />
                  </div>

                  {/* Title + stat */}
                  <div className="mt-5 flex items-center gap-3">
                    <h3 className="text-xl sm:text-2xl">{activity.title}</h3>
                    <span className="border-brand/20 bg-brand/10 text-brand-light shrink-0 rounded-full border px-3 py-1 text-xs font-medium">
                      {activity.stats}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-white/35 sm:text-[15px]">
                    {activity.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
