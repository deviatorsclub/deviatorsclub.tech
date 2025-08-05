import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FullStackResources } from "@/data/resources/web";
import { Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function FullStack() {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Accordion type="single" collapsible className="w-full">
      {FullStackResources.map((resource, index) => (
        <AccordionItem key={index} value={resource.name}>
          <AccordionTrigger>
            <h2 className="text-lg font-semibold text-white md:text-xl">
              {resource.name}
            </h2>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">{resource.desc}</p>
            <ul className="space-y-4">
              {resource.resources.map((item, index) => (
                <motion.li
                  key={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="rounded-lg bg-[#0047AB]/30 p-3"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:underline"
                  >
                    <Youtube className="mr-2 h-4 w-4" />
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="mb-2 text-lg font-semibold">
                {resource.name} on youtube
              </h4>
              <iframe
                width="100%"
                height="315"
                src={resource.ytSource}
                title="Node.js Tutorial Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
