"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import team from "@/data/team02";

export default function TeamPreview() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [shuffledMembers, setShuffledMembers] = useState<typeof team>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const isMobile = windowWidth < 640;
    const count = isMobile ? 3 : 7;
    const shuffled = [...team].sort(() => Math.random() - 0.5).slice(0, count);
    setShuffledMembers(shuffled);
  }, [windowWidth]);

  const isMobile = windowWidth < 640;
  const cardWidth = isMobile ? 110 : 200;
  const cardHeight = isMobile ? 160 : 300;
  const archHeight = isMobile ? 30 : 60;
  const horizontalSpacing = isMobile ? 80 : 140;
  const middle = Math.floor(shuffledMembers.length / 2);

  return (
    <section className="overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex min-h-[400px] flex-col items-center justify-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-3 text-sm text-white/40 sm:text-base lg:text-lg">
              The people who make Deviators what it is
            </p>
          </motion.div>

          {/* Cards Container */}
          <div
            className="relative flex w-full items-center justify-center"
            style={{ height: isMobile ? "200px" : "380px" }}
          >
            {shuffledMembers.map((member, index) => {
              // Tilt & z-index
              let tilt = 0;
              let zIndex = 1;

              if (!isMobile) {
                const tiltMap = [-6, -4, -2, 0, 2, 4, 6];
                tilt = tiltMap[index] ?? 0;
                const zMap = [37, 38, 39, 40, 39, 38, 37];
                zIndex = zMap[index] ?? 37;
              } else {
                const tiltMap = [-4, 0, 4];
                tilt = tiltMap[index] ?? 0;
                zIndex = index === 1 ? 40 : 39;
              }

              // Arch positioning
              const distanceFromCenter = Math.abs(index - middle);
              const verticalOffset =
                distanceFromCenter *
                distanceFromCenter *
                (archHeight / (middle * middle || 1));

              const horizontalOffset = (index - middle) * horizontalSpacing;
              const left = `calc(50% + ${horizontalOffset}px - ${cardWidth / 2}px)`;
              const top = `calc(50% + ${verticalOffset}px - ${cardHeight / 2}px)`;

              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;
              const finalZIndex = isHovered ? zIndex + 5 : zIndex;

              // Hovered card scales up, others scale down & dim
              const scale =
                isAnyHovered && !isMobile ? (isHovered ? 1.08 : 0.95) : 1;
              const opacity = isAnyHovered && !isHovered && !isMobile ? 0.5 : 1;

              return (
                <div
                  key={member.name}
                  className="glass-card absolute overflow-hidden"
                  style={{
                    height: `${cardHeight}px`,
                    width: `${cardWidth}px`,
                    padding: isMobile ? "6px 6px 0" : "10px 10px 0",
                    transform: `rotate(${tilt}deg) scale(${scale})`,
                    transformOrigin: "center center",
                    opacity,
                    zIndex: finalZIndex,
                    left,
                    top,
                    transition: "transform 0.4s ease, opacity 0.4s ease",
                  }}
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                >
                  {/* Image */}
                  <div className="relative h-[75%] w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes={isMobile ? "110px" : "200px"}
                    />
                  </div>

                  {/* Name */}
                  <div className="flex h-[25%] w-full items-center justify-center px-1">
                    <p
                      className={`truncate text-center font-normal text-white/70 ${
                        isMobile ? "text-[10px]" : "text-sm"
                      }`}
                    >
                      {member.name}
                    </p>
                  </div>

                  {/* Hover overlay — desktop only */}
                  {isHovered && !isMobile && (
                    <div className="absolute inset-0 z-[41] flex items-center justify-center bg-black/50 transition-all duration-300">
                      <Link href="/team" className="btn-secondary !text-sm">
                        View Team
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-12 text-center sm:hidden">
            <Link href="/team" className="btn-primary">
              View Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
