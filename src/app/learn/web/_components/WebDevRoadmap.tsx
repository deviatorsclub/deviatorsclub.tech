import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Gallery } from "react-photoswipe-gallery";
import ImageZoom from "@/components/ImageZoom";

import Syllabus0to100 from "@/assets/resources/web/syllabus.svg";
import { webDevRoadmapData } from "@/data/resources/web";

export default function WebDevRoadmap() {
  return (
    <div className="space-y-8 p-4">
      <Accordion type="single" collapsible className="w-full">
        {webDevRoadmapData.map((category, idx) => (
          <AccordionItem key={idx} value={category.category}>
            <AccordionTrigger>
              <h2 className="text-lg font-semibold text-white md:text-xl">
                {category.category}
              </h2>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIdx * 0.1 }}
                    className="flex items-start space-x-3 rounded-lg bg-[#0047AB]/30 p-3"
                  >
                    <ChevronRight className="text-white mt-1 h-5 w-5 flex-shrink-0" />
                    <div>
                      <h3 className="text-white/80 font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Card className="bg-black/5">
        <CardContent className="p-4">
          <p className="text-gray-200 w-full text-center font-mono text-sm">
            Note: Check out Harkirat Singh&apos;s courses for a comprehensive
            learning experience from beginner to advanced topics.
          </p>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Gallery>
          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-xl">
            <ImageZoom
              src={Syllabus0to100}
              alt="Full Stack Development Roadmap"
              className="zoom-image w-full cursor-pointer object-cover transition-all duration-300"
            />
          </div>
        </Gallery>
        <p className="mt-2 text-center text-sm text-gray-400">
          img credit: harkirat-cohort2.0
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 space-y-4 text-center"
      >
        <Button
          className="rounded-full bg-[#0047AB] text-white transition-all duration-300 hover:bg-[#003399]"
          size="lg"
          onClick={() =>
            window.open(
              "https://harkirat.classx.co.in/new-courses/8-live-0-100-complete",
              "_blank",
            )
          }
        >
          Check out Harkirat Singh&apos;s Courses
        </Button>
      </motion.div>
    </div>
  );
}
