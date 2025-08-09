"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import team from "@/data/team";
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
// import ClientBackground3D from "@/components/3D/ClientBackground3D";

const categories = [
  "All",
  "President",
  "Web Development",
  "AI/ML",
  "Cyber Security",
  "Web3",
  "DSA",
  "Social Media",
  "Event Management",
];

export default function TeamSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter team members by role
  const filteredTeam = useMemo(() => {
    if (selectedCategory === "All") return team;
    return team.filter((member) =>
      member.keywords.some((role) =>
        role.toLowerCase().includes(selectedCategory.toLowerCase()),
      ),
    );
  }, [selectedCategory]);

  return (
    <>
      {/* <ClientBackground3D /> */}

      <section
        id="team"
        className="relative overflow-hidden py-16 pt-20 text-white lg:pt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-12 text-center">
            <h2
              className="bg-white bg-clip-text font-pixelify text-3xl font-bold text-transparent md:text-5xl"
              style={{
                textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
              }}
            >
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-400 sm:text-lg">
              The brilliant minds behind Deviators Club pushing the boundaries
              of what&apos;s possible
            </p>
          </div>

          {/* Inner Navbar */}
          <div className="mb-12 flex flex-wrap justify-center gap-3 rounded-xl p-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-Blue text-white shadow-md"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Team Members Grid */}
          <div
            className={`${
              selectedCategory === "All" ||
              selectedCategory === "Event Management"
                ? "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
                : "flex flex-wrap justify-center gap-6"
            }`}
          >
            {filteredTeam.map((member, index) => (
              <div
                key={index}
                className={`rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:transform hover:shadow-xl hover:shadow-Blue/20 ${selectedCategory !== "All" && selectedCategory !== "Event Management" ? "h-[26rem] w-[24rem]" : ""} `}
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-4 h-40 w-40">
                    <Image
                      src={member.image.src}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="sm:border-3 size-full rounded-full border-2 border-black object-cover shadow-lg ring-2 ring-white sm:ring-2"
                      priority={index < 6}
                    />
                  </div>
                  <h3
                    className="mb-2 pb-2 text-xl text-white sm:text-2xl"
                    style={{
                      textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {member.name}
                  </h3>
                  <div className="mb-4 flex flex-wrap justify-center gap-2">
                    {member.roles.map((role, roleIndex) => (
                      <span
                        key={roleIndex}
                        className="rounded-full bg-Blue/50 px-3 py-1 text-sm text-[#99c3ff]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 pb-2 pt-2 text-center text-sm text-gray-400 sm:text-base">
                    {member.intro}
                  </p>
                  <div className="absolute bottom-4 flex justify-center gap-3 space-x-4">
                    {Object.entries(member.urls).map(([key, url]) => (
                      <Link
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors hover:text-Blue"
                      >
                        {key === "github" && <FaGithub className="h-5 w-5" />}
                        {key === "linkedin" && (
                          <FaLinkedin className="h-5 w-5" />
                        )}
                        {key === "twitter" && (
                          <FaXTwitter className="h-5 w-5" />
                        )}
                        {key === "portfolio" && <FaLink className="h-5 w-5" />}
                        {key === "leetcode" && (
                          <SiLeetcode className="h-5 w-5" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
