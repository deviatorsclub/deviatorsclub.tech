import React from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { CardContent } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

import { cyberRoadmapData } from "@/data/resources/cyber";

export default function CyberRoadmap() {
  return (
    <div className="space-y-8 p-4">
      <Accordion type="single" collapsible className="w-full">
        {cyberRoadmapData.map((category, idx) => (
          <AccordionItem key={idx} value={category.category}>
            <AccordionTrigger>
              <p className="text-lg font-semibold text-white md:text-xl">
                {category.category}
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <motion.pre
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-5 text-sm text-wrap text-gray-400"
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
                      className="group bg-brand/30 relative overflow-hidden rounded-xl p-4 transition-all duration-300"
                    >
                      <div className="space-y-4">
                        <div className="flex">
                          <HugeiconsIcon
                            icon={ArrowRight01Icon}
                            size={24}
                            className="text-white opacity-50 transition-all group-hover:text-white group-hover:opacity-100"
                          />
                          <p className="text-lg font-semibold text-white transition-colors group-hover:text-white">
                            {item.title}
                          </p>
                        </div>
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-white">
                            Topics:{" "}
                            {item.topics.reduce(
                              (acc, curr) => acc + ", " + curr,
                            )}
                          </p>
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
