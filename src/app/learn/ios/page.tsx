"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { iosResources } from "@/data/resources/ios";
import DisplayTeam from "@/components/DisplayTeam";
// import ClientBackground3D from "@/components/3D/ClientBackground3D";

export default function IosLearnPage() {
  return (
    <>
      {/* 3D Background */}
      {/* <ClientBackground3D /> */}

      <div className="relative min-h-screen w-full text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-4"
          >
            <h1
              className="bg-white bg-clip-text text-center font-pixelify text-4xl font-extrabold text-transparent md:text-5xl"
              style={{
                textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
              }}
            >
              iOS Development Learning Resources
            </h1>
            <p className="mx-auto max-w-2xl text-center text-lg text-gray-300">
              A curated list of resources, challenges, and tutorials to boost
              your iOS development skills.
            </p>
          </motion.div>

          <div className="space-y-10">
            {iosResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-[#0047AB] bg-white/5 transition-all duration-300">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between">
                      <CardTitle
                        className="font-pixelify text-2xl font-semibold text-white"
                        style={{
                          textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        {resource.name}
                      </CardTitle>
                      <Link href={resource.url} target="_blank">
                        <Button className="relative rounded-full bg-[#0047AB] font-medium text-white transition-all duration-300 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:translate-y-2 after:bg-[#003366]/50 after:blur-lg hover:bg-[#003366] hover:after:translate-y-0">
                          Go to Resource
                        </Button>
                      </Link>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="overview">
                        <AccordionTrigger>
                          <h2 className="text-lg font-semibold text-white">
                            Overview
                          </h2>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mt-4 text-gray-300">
                            {resource.overview}
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="topics-covered">
                        <AccordionTrigger>
                          <h2 className="text-lg font-semibold text-white">
                            Topics Covered
                          </h2>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="ml-4 mt-4 list-disc space-y-2 text-gray-300">
                            {resource.topics.map((topic, topicIndex) => (
                              <li key={topicIndex}>{topic}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="goal">
                        <AccordionTrigger>
                          <h2 className="text-lg font-semibold text-white">
                            Goal
                          </h2>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="mt-4 text-gray-300">{resource.goal}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center text-sm text-gray-400"
          >
            <p className="mb-4 text-lg text-gray-300">
              For further assistance, contact the Deviators iOS team.
            </p>
            <DisplayTeam keyword="ios" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
