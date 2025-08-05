import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { codingPlatforms, dsaResources } from "@/data/resources/dsa";

export default function DsaOnlineResources() {
  return (
    <div className="space-y-8 p-4">
      {dsaResources.map((category, idx) => (
        <motion.a
          key={idx}
          href={category.url}
          target="_blank"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-center space-x-3 rounded-lg bg-[#0047AB]/30 p-3"
        >
          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-white" />
          <div>
            <h3 className="font-semibold text-white underline">
              {category.title}
            </h3>
          </div>
        </motion.a>
      ))}

      <h2>
        <span className="text-xl font-semibold text-white">
          Coding Platforms
        </span>
      </h2>
      {codingPlatforms.map((category, idx) => (
        <motion.a
          key={idx}
          href={category.url}
          target="_blank"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-center space-x-3 rounded-lg bg-[#0047AB]/30 p-3"
        >
          <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-white" />
          <div>
            <h3 className="font-semibold text-white underline">
              {category.title}
            </h3>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
