import React from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

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
          className="bg-brand/30 flex items-center space-x-3 rounded-lg p-3"
        >
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={20}
            className="mt-1 flex-shrink-0 text-white"
          />
          <div>
            <p className="font-semibold text-white underline">
              {category.title}
            </p>
          </div>
        </motion.a>
      ))}

      <p>
        <span className="text-xl font-semibold text-white">
          Coding Platforms
        </span>
      </p>
      {codingPlatforms.map((category, idx) => (
        <motion.a
          key={idx}
          href={category.url}
          target="_blank"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-brand/30 flex items-center space-x-3 rounded-lg p-3"
        >
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={20}
            className="mt-1 flex-shrink-0 text-white"
          />
          <div>
            <p className="font-semibold text-white underline">
              {category.title}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
