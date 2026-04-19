"use client";

import React, { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SourceCodeIcon,
  CodeIcon,
  LaptopIcon,
  GlobeIcon,
  ServerStackIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "motion/react";

import FullStack from "./_components/FullStack";
import Html from "./_components/Html";
import WebDevRoadmap from "./_components/WebDevRoadmap";
import Css from "./_components/Css";
import Javascript from "./_components/Javascript";
import DisplayTeam from "@/components/DisplayTeam";
import BackButton from "@/components/BackButton";

const WebDevResources = () => {
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    if (localStorage) {
      setSelectedTab(localStorage.getItem("webSelectedTab") || "roadmap");
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
          className="mb-10 text-center sm:mb-12"
        >
          <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Web Development Resources
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40 sm:text-base">
            Comprehensive guide and resources for your web development journey
          </p>
          <p className="mx-auto mt-2 max-w-xl text-xs text-white/25 sm:text-sm">
            Note: These resources primarily cover the MERN stack
          </p>
        </motion.div>

        {/* Tab pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setSelectedTab(tab.key);
                localStorage.setItem("webSelectedTab", tab.key);
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
                <div className="mt-6">
                  <tab.content />
                </div>
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
          <DisplayTeam keyword="Web Development" />
        </motion.div>
      </div>
    </div>
  );
};

const tabs = [
  {
    key: "roadmap",
    name: "Roadmap",
    title: "Web Development Roadmap",
    description: "Follow this path to become a proficient web developer",
    content: WebDevRoadmap,
    icon: SourceCodeIcon,
  },
  {
    key: "html",
    name: "HTML",
    title: "HTML Resources",
    description: "Learn the basic layout and structure of web pages",
    content: Html,
    icon: CodeIcon,
  },
  {
    key: "css",
    name: "CSS",
    title: "CSS Resources",
    description: "Style your HTML pages and make them interactive",
    content: Css,
    icon: LaptopIcon,
  },
  {
    key: "javascript",
    name: "JavaScript",
    title: "JavaScript Resources",
    description: "Add functionality and interactivity to your web pages",
    content: Javascript,
    icon: GlobeIcon,
  },
  {
    key: "Full Stack",
    name: "Full Stack",
    title: "Full Stack Development Resources",
    description:
      "Learn server-side programming with Node.js, Express.js, and React.js",
    content: FullStack,
    icon: ServerStackIcon,
  },
];

export default WebDevResources;
