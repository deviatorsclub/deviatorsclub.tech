"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { iosResources } from "@/data/resources/ios";
import BackButton from "@/components/BackButton";

export default function IosLearnPage() {
  return (
    <div className="min-h-screen w-full text-white">
      <div className="mx-auto max-w-5xl px-5 pt-32 pb-20 sm:px-8 sm:pt-36 lg:pt-40">
        <BackButton href="/learn" label="All Tracks" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            iOS Development Resources
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40 sm:text-base">
            A curated list of resources, challenges, and tutorials to boost your
            iOS development skills.
          </p>
        </motion.div>

        <div className="space-y-4">
          {iosResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="glass-card rounded-2xl p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <p className="text-lg text-white sm:text-xl">{resource.name}</p>
                <Link
                  href={resource.url}
                  target="_blank"
                  className="btn-primary shrink-0 text-center text-sm"
                >
                  Go to Resource
                </Link>
              </div>

              <div className="mt-5 space-y-4">
                {/* Overview */}
                <div>
                  <p className="text-sm font-medium text-white/60">Overview</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/35">
                    {resource.overview}
                  </p>
                </div>

                {/* Topics */}
                <div>
                  <p className="text-sm font-medium text-white/60">
                    Topics Covered
                  </p>
                  <ul className="mt-1.5 ml-4 list-disc space-y-1 text-sm text-white/35">
                    {resource.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>

                {/* Goal */}
                <div>
                  <p className="text-sm font-medium text-white/60">Goal</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/35">
                    {resource.goal}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
