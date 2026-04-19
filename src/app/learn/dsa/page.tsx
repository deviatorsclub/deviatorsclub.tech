"use client";

import React, { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SourceCodeIcon } from "@hugeicons/core-free-icons";
import { motion } from "motion/react";

import DsaRoadmap from "./_components/DsaRoadmap";
import DisplayTeam from "@/components/DisplayTeam";
import BackButton from "@/components/BackButton";
import DsaOnlineResources from "./_components/DsaOnlineResources";

const DsaResources = () => {
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    if (localStorage) {
      setSelectedTab(localStorage.getItem("dsaSelectedTab") || "roadmap");
    } else {
      setSelectedTab("roadmap");
    }
  }, []);

  return (
    <div className="min-h-screen w-full text-white">
      <div className="mx-auto max-w-5xl px-5 pt-32 pb-20 sm:px-8 sm:pt-36 lg:pt-40">
        <BackButton href="/learn" label="All Tracks" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-balance sm:mb-12"
        >
          <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Data Structures & Algorithms
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40 sm:text-base">
            Learn the basics of data structures and algorithms, and find
            resources to help you practice and improve your problem-solving
          </p>
          <p className="mx-auto mt-2 max-w-xl text-xs text-white/25 sm:text-sm">
            Note: Essential for technical interviews and coding challenges.
          </p>
        </motion.div>

        {/* Tab pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setSelectedTab(tab.key);
                localStorage.setItem("dsaSelectedTab", tab.key);
              }}
              className={`flex items-center gap-2 rounded-2xl px-3.5 py-1.5 text-xs font-medium transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                selectedTab === tab.key
                  ? "bg-brand text-white"
                  : "glass-card text-white/50 hover:text-white/80"
              }`}
            >
              <HugeiconsIcon icon={tab.icon} size={16} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tabs.map((tab) =>
          selectedTab === tab.key ? (
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-card rounded-2xl p-5 sm:p-6">
                <h2 className="text-xl text-white sm:text-2xl">{tab.title}</h2>
                <p className="mt-1.5 text-sm text-white/35">
                  {tab.description}
                </p>
                <div className="mt-6">{tab.content && <tab.content />}</div>
              </div>
            </motion.div>
          ) : null,
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <DisplayTeam keyword="DSA" />
        </motion.div>
      </div>
    </div>
  );
};

const tabs = [
  {
    key: "roadmap",
    name: "Roadmap",
    title: "Data Structures and Algorithms Roadmap",
    description:
      "A comprehensive roadmap to master Data Structures and Algorithms.",
    content: DsaRoadmap,
    icon: SourceCodeIcon,
  },
  {
    key: "resourcesa",
    name: "Resources",
    title: "Data Structures and Algorithms Resources",
    description:
      "A collection of resources to help you learn and practice Data Structures and Algorithms.",
    content: DsaOnlineResources,
    icon: SourceCodeIcon,
  },
];

export default DsaResources;
