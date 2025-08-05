import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

import { cyberRoadmapData } from "@/data/resources/cyber";

export default function CyberRoadmap() {
  return (
    <div className="space-y-8 p-4">
      <Accordion type="single" collapsible className="w-full">
        {cyberRoadmapData.map((category, idx) => (
          <AccordionItem key={idx} value={category.category}>
            <AccordionTrigger>
              <h2 className="text-lg font-semibold text-white md:text-xl">
                {category.category}
              </h2>
            </AccordionTrigger>
            <AccordionContent>
              <motion.pre
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-5 text-wrap text-sm text-gray-400"
              >
                {category.desc}
              </motion.pre>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIdx) => {
                  return (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className="group relative overflow-hidden rounded-xl bg-[#0047AB]/30 p-4 transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex">
                          <ChevronRight className="h-6 w-6 text-white opacity-50 transition-all group-hover:text-white group-hover:opacity-100" />
                          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-white">
                            {item.title}
                          </h3>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-sm font-medium text-white">
                            Topics:{" "}
                            {item.topics.reduce(
                              (acc, curr) => acc + ", " + curr,
                            )}
                          </h4>
                          <ul className="grid gap-2">
                            {item.resources.map((resource, resIdx) => (
                              <li key={resIdx} className="text-sm text-white">
                                - {resource}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
