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

import { dsaRoadmapData } from "@/data/resources/dsa";

export default function DsaRoadmap() {
  return (
    <div className="space-y-8 p-4">
      <Accordion type="single" collapsible className="w-full">
        {dsaRoadmapData.map((category, idx) => (
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
                  const Element = item.link ? motion.a : motion.div;
                  return (
                    <Element
                      href={item.link}
                      target="_blank"
                      key={itemIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className={`flex items-center space-x-3 rounded-lg bg-[#0047AB]/30 p-3 ${
                        item.link ? "underline" : ""
                      }`}
                    >
                      <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-white" />
                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </Element>
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
