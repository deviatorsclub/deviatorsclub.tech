import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HugeiconsIcon } from "@hugeicons/react";
import { YoutubeIcon } from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import { JavaScriptResources } from "@/data/resources/web";

export default function Javacript() {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="resources">
        <AccordionTrigger>
          <p className="text-lg font-semibold text-white md:text-xl">
            Learning Resources
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-4">
            {JavaScriptResources.resources.map((resource, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-brand/30 rounded-lg p-3"
              >
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:underline"
                >
                  <HugeiconsIcon
                    icon={YoutubeIcon}
                    size={16}
                    className="mr-2"
                  />
                  {resource.title}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="mb-2 text-lg font-semibold">JavaScript Playlist</p>
            <iframe
              width="100%"
              height="315"
              src={JavaScriptResources.ytSource}
              title="JavaScript Tutorial Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="projects">
        <AccordionTrigger>
          <p className="text-lg font-semibold text-white md:text-xl">
            Projects to Test Your Skills
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <motion.ol className="space-y-4">
            {JavaScriptResources.projects.map((project, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-brand/30 flex items-center space-x-3 rounded-lg p-3"
              >
                <span className="bg-brand flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold text-white">
                  {index + 1}
                </span>
                <span>{project}</span>
              </motion.li>
            ))}
          </motion.ol>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
