"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaCode, FaShieldAlt } from "react-icons/fa";
import { SiSwift } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";

const tracks = [
  {
    name: "Web Development",
    url: "web",
    desc: "Build websites and web applications with the MERN stack",
    icon: FaCode,
  },
  {
    name: "DSA",
    url: "dsa",
    desc: "Master Data Structures and Algorithms for interviews",
    icon: TbBinaryTree,
  },
  {
    name: "iOS Development",
    url: "ios",
    desc: "Build apps for iOS devices using Swift & SwiftUI",
    icon: SiSwift,
  },
  {
    name: "Cybersecurity",
    url: "cyber",
    desc: "Learn offensive and defensive security fundamentals",
    icon: FaShieldAlt,
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-[90vh] w-full text-white">
      <div className="mx-auto max-w-4xl px-5 pt-32 pb-20 sm:px-8 sm:pt-36 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Learn with Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40 sm:text-base">
            Explore our comprehensive resources and roadmaps designed to
            accelerate your learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <Link
                  href={`/learn/${track.url}`}
                  className="glass-card group flex h-full flex-col rounded-2xl p-5 transition-colors duration-300 hover:bg-white/[0.06] sm:p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="border-brand/20 bg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
                      <Icon className="text-brand-light h-5 w-5" />
                    </div>
                    <p className="text-lg text-white">{track.name}</p>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/35">
                    {track.desc}
                  </p>
                  <span className="btn-primary mt-5 text-center text-sm">
                    Explore Track
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
