"use client";

import { getTeam } from "@/lib/team";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { FaLinkedinIn } from "react-icons/fa";

export default function DisplayTeam({ keyword }: { keyword: string }) {
  const teamMembers = getTeam({ keyword });

  return (
    <div className="glass-card rounded-2xl px-6 py-8 sm:px-8 sm:py-10">
      <p className="mb-6 text-center text-sm text-white/30">
        Need help? Reach out to the team
      </p>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.3 }}
          >
            <Link
              href={member.urls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-20 flex-col items-center sm:w-24"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="group-hover:border-brand/30 relative h-14 w-14 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-all duration-300 sm:h-16 sm:w-16">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-300 group-hover:brightness-110"
                    sizes="64px"
                  />
                </div>
                {/* LinkedIn badge */}
                <div className="bg-brand absolute -right-1.5 -bottom-1.5 flex h-5 w-5 items-center justify-center rounded-lg text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                  <FaLinkedinIn size={10} />
                </div>
              </div>

              {/* Name */}
              <p className="mt-3 text-center text-[11px] leading-tight text-white/35 transition-colors duration-200 group-hover:text-white/70 sm:text-xs">
                {member.name}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
