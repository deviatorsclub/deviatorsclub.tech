"use client";
import { motion } from "motion/react";
import aboutItems, { aboutClub } from "@/data/about";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            About Deviators
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/40 sm:text-lg">
            {aboutClub}
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="glass-card rounded-2xl p-4 sm:p-5"
            >
              <h3 className="text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/35">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
