"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileCode } from "lucide-react";
import "photoswipe/dist/photoswipe.css";
import CyberRoadmap from "./_components/CyberRoadmap";
import DisplayTeam from "@/components/DisplayTeam";
import DsaOnlineResources from "./_components/CyberResources";
// import ClientBackground3D from "@/components/3D/ClientBackground3D";

export default function CyberResources() {
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    if (localStorage) {
      setSelectedTab(localStorage.getItem("cyberSelectedTab") || "roadmap");
    } else {
      setSelectedTab("roadmap");
    }
  }, []);

  const tabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* 3D Background */}
      {/* <ClientBackground3D /> */}

      <div className="relative min-h-screen w-full text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 space-y-4 text-balance"
          >
            <h1
              className="bg-white bg-clip-text text-center font-pixelify text-4xl font-bold text-transparent md:text-6xl lg:text-7xl"
              style={{
                textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
              }}
            >
              Cyber Security Resources
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-gray-300">
              A collection of resources to help you learn and practice Cyber
              Security.
            </p>
            <p className="text-md mx-auto max-w-2xl text-center text-gray-400">
              <strong>Disclaimer:</strong> The resources provided here are for
              educational purposes only. We do not endorse any illegal
              activities or hacking
            </p>
          </motion.div>

          <Tabs
            value={selectedTab}
            onValueChange={(e) => {
              setSelectedTab(e);
              localStorage.setItem("cyberSelectedTab", e);
            }}
            className="space-y-8"
          >
            <div className="h-20 md:h-24 lg:h-auto">
              <TabsList className="mb-10 flex flex-wrap justify-center gap-2 bg-transparent p-1 text-gray-300 sm:gap-4 lg:mb-0">
                {tabs.map((tab, index) => (
                  <TabsTrigger
                    key={index}
                    value={tab.key}
                    className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-[#0047AB] sm:px-5 sm:py-2 sm:text-base"
                  >
                    <tab.icon className="mr-2 h-4 w-4 sm:mr-3 sm:h-5 sm:w-5" />
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <motion.div
              key={selectedTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
            >
              {tabs.map((tab, index) => (
                <TabsContent key={index} value={tab.key} className="space-y-4">
                  <Card className="border-[#0047AB] bg-white/5 transition-all duration-300">
                    <CardHeader>
                      <CardTitle
                        className="font-pixelify text-2xl text-white"
                        style={{
                          textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        {tab.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {tab.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>{tab.content && <tab.content />}</CardContent>
                  </Card>
                </TabsContent>
              ))}
            </motion.div>
          </Tabs>

          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 text-center text-sm text-gray-400"
          >
            <p className="mb-4 text-lg text-gray-300">
              For further assistance, contact the Deviators web dev team:
            </p>
            <DisplayTeam keyword="Cyber Security" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

const tabs = [
  {
    key: "roadmap",
    name: "Roadmap",
    title: "Cyber Security Roadmap",
    description: "A comprehensive roadmap to master Cyber Security.",
    content: CyberRoadmap,
    icon: FileCode,
  },
  {
    key: "resourcesa",
    name: "Resources",
    title: "Cyber Security Resources",
    description:
      "A collection of resources to help you learn and practice Cyber Security .",
    content: DsaOnlineResources,
    icon: FileCode,
  },
];
