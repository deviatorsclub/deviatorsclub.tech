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

import { dsaRoadmapData } from "@/data/resources/dsa";

export default function DsaRoadmap() {
  return (
    <div className="space-y-8 p-4">
      <Accordion type="single" collapsible className="w-full">
        {dsaRoadmapData.map((category, idx) => (
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
                  const Element = item.link ? motion.a : motion.div;
                  return (
                    <Element
                      href={item.link}
                      target="_blank"
                      key={itemIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIdx * 0.1 }}
                      className={`bg-brand/30 flex items-center space-x-3 rounded-lg p-3 ${
                        item.link ? "underline" : ""
                      }`}
                    >
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        size={20}
                        className="mt-1 flex-shrink-0 text-white"
                      />
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
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
