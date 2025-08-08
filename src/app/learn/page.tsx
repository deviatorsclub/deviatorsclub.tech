"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { tracks } from "@/data/resources";

export default function LearnPage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-[90vh] w-full text-white">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 space-y-6"
        >
          <h1
            className="bg-white bg-clip-text text-center font-pixelify text-4xl font-extrabold text-transparent md:text-6xl lg:text-6xl"
            style={{
              textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
            }}
          >
            Learn with Us
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg font-medium text-gray-300">
            Explore our comprehensive resources and roadmaps designed to
            accelerate your learning journey.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              variants={scaleInVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="h-full overflow-hidden rounded-lg bg-white/5 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-lg bg-[#0047AB]/30 p-2 transition-transform duration-300 hover:scale-110">
                      <Image
                        src={track.image}
                        alt={`${track.name} icon`}
                        className="h-full w-full object-contain p-1"
                        fill
                      />
                    </div>
                    <CardTitle
                      className="font-pixelify text-2xl font-bold text-white"
                      style={{
                        textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      {track.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-4 pt-3 text-base font-medium text-gray-400">
                    {track.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-4">
                  <Link href={`/learn/${track.url}`}>
                    <Button className="relative rounded-full bg-[#0047AB] font-medium text-white transition-all duration-300 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:translate-y-2 after:bg-[#003366]/50 after:blur-lg hover:bg-[#003366] hover:after:translate-y-0">
                      Explore Track
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
