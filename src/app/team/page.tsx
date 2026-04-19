"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import team01 from "@/data/team01";
import team02 from "@/data/team02";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  Linkedin01Icon,
  Link01Icon,
} from "@hugeicons/core-free-icons";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";

const sessions = [
  { id: "02", label: "Session 2", subtitle: "2025–26", data: team02 },
  { id: "01", label: "Session 1", subtitle: "2024–25", data: team01 },
];

const socialIcon: Record<string, React.ReactNode> = {
  github: <HugeiconsIcon icon={Github01Icon} size={16} />,
  linkedin: <HugeiconsIcon icon={Linkedin01Icon} size={16} />,
  twitter: <FaXTwitter className="h-4 w-4" />,
  portfolio: <HugeiconsIcon icon={Link01Icon} size={16} />,
  leetcode: <SiLeetcode className="h-4 w-4" />,
};

export default function TeamSection() {
  const [activeSession, setActiveSession] = useState("02");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const session = sessions.find((s) => s.id === activeSession)!;
  const team = session.data;

  // Build dynamic categories from current team
  const categories = useMemo(() => {
    const allKeywords = new Set<string>();
    team.forEach((m) => m.keywords.forEach((k) => allKeywords.add(k)));
    // Filter out generic "club" keyword
    allKeywords.delete("club");
    return ["All", ...Array.from(allKeywords)];
  }, [team]);

  const filteredTeam = useMemo(() => {
    if (selectedCategory === "All") return team;
    return team.filter((member) =>
      member.keywords.some((role) =>
        role.toLowerCase().includes(selectedCategory.toLowerCase()),
      ),
    );
  }, [selectedCategory, team]);

  // Reset category when switching sessions
  const handleSessionSwitch = (id: string) => {
    setActiveSession(id);
    setSelectedCategory("All");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="team"
      className="relative overflow-hidden pt-32 pb-20 text-white sm:pt-36 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12"
        >
          <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Meet Our Team
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40 sm:text-base">
            The people behind Deviators Club pushing boundaries
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-2xl px-3.5 py-1.5 text-xs font-medium capitalize transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                selectedCategory === category
                  ? "bg-brand text-white"
                  : "glass-card text-white/50 hover:text-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Team grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSession}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2"
          >
            {filteredTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="glass-card flex gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-white/[0.06] sm:gap-5 sm:p-5"
              >
                {/* Photo */}
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-28">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                    priority={index < 6}
                  />
                </div>

                {/* Details */}
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <h3 className="truncate text-base text-white sm:text-lg">
                    {member.name}
                  </h3>

                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {member.roles.map((role) => (
                      <span
                        key={role}
                        className="bg-brand/15 text-brand-light rounded-lg px-2 py-0.5 text-[10px] font-medium sm:text-xs"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/35 sm:text-sm">
                    {member.intro}
                  </p>

                  <div className="mt-2.5 flex gap-2">
                    {Object.entries(member.urls).map(([key, url]) => (
                      <Link
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-light text-white/25 transition-colors duration-200"
                        title={key}
                      >
                        {socialIcon[key]}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Session switcher */}
        <div className="mt-12 flex justify-center sm:mt-16">
          <div className="glass-card inline-flex rounded-2xl p-1">
            {sessions.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSessionSwitch(s.id)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 sm:px-5 sm:py-2.5 ${
                  activeSession === s.id
                    ? "bg-brand text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                <span>{s.label}</span>
                <span className="ml-1.5 text-[10px] opacity-60 sm:text-xs">
                  {s.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
