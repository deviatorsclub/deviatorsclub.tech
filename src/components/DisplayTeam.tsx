import { getTeam } from "@/lib/team";
import Link from "next/link";
import Image from "next/image";
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
            <Image
              src={member.image}
              alt={member.name}
              className="h-20 w-20 rounded-full object-cover transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#0047AB]/50"
              width={80}
              height={80}
            />
            <p className="group-hover:text-[#99c3ff]/300 mt-2 text-white transition-colors duration-300">
              {member.name}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
