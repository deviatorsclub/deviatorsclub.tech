"use client";

import React, { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SourceCodeIcon, Book01Icon } from "@hugeicons/core-free-icons";
import { motion } from "motion/react";

import CyberRoadmap from "./_components/CyberRoadmap";
import DisplayTeam from "@/components/DisplayTeam";
import BackButton from "@/components/BackButton";
import CyberResourcesContent from "./_components/CyberResources";

export default function CyberResources() {
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    if (localStorage) {
      setSelectedTab(localStorage.getItem("cyberSelectedTab") || "roadmap");
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
            Cyber Security Resources
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40 sm:text-base">
            A collection of resources to help you learn and practice Cyber
            Security.
          </p>
          <p className="mx-auto mt-2 max-w-xl text-xs text-white/25 sm:text-sm">
            <strong>Disclaimer:</strong> These resources are for educational
            purposes only. We do not endorse any illegal activities.
          </p>
        </motion.div>

        {/* Tab pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setSelectedTab(tab.key);
                localStorage.setItem("cyberSelectedTab", tab.key);
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
          <DisplayTeam keyword="Cyber Security" />
        </motion.div>
      </div>
    </div>
  );
}

const tabs = [
  {
    key: "roadmap",
    name: "Roadmap",
    title: "Cyber Security Roadmap",
    description: "A comprehensive roadmap to master Cyber Security.",
    content: CyberRoadmap,
    icon: SourceCodeIcon,
  },
  {
    key: "resourcesa",
    name: "Resources",
    title: "Cyber Security Resources",
    description:
      "A collection of resources to help you learn and practice Cyber Security.",
    content: CyberResourcesContent,
    icon: Book01Icon,
  },
];
