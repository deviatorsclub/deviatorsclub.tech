import { getTeam } from "@/lib/team";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DisplayTeam({ keyword }: { keyword: string }) {
  const teamMembers = getTeam({ keyword });

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group relative"
        >
          <Link
            href={member.urls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex max-w-32 transform flex-col items-center justify-center text-balance transition-all duration-300 hover:scale-105"
          >
            <img
              src={member.image.src}
              alt={member.name}
              className="h-20 w-20 rounded-full object-cover transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50"
            />
            <p className="mt-2 text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
              {member.name}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
