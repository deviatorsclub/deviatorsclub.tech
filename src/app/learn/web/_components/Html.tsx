import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { HtmlResources } from "@/data/resources/web";

export default function Html() {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="resources">
        <AccordionTrigger>
          <h2 className="text-lg font-semibold text-white md:text-xl">
            Learning Resources
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="space-y-4">
            {HtmlResources.resources.map((resource, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="rounded-lg bg-[#0047AB]/30 p-3"
              >
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:underline"
                >
                  <Youtube className="mr-2 h-4 w-4" />
                  {resource.title}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="mt-4">
            <h4 className="mb-2 text-lg font-semibold">HTML Playlist</h4>
            <iframe
              width="100%"
              height="315"
              src={HtmlResources.ytSource}
              title="HTML Tutorial Playlist"
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
          <h2 className="text-lg font-semibold text-white md:text-xl">
            Projects to Test Your Skills
          </h2>
        </AccordionTrigger>
        <AccordionContent>
          <motion.ol className="space-y-4">
            {HtmlResources.projects.map((project, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 rounded-lg bg-[#0047AB]/30 p-3"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0047AB] font-bold text-white">
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
