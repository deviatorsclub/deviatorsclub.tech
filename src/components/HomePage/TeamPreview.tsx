"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import team from "@/data/team";

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
    // Shuffle all members and pick any 7 for desktop, 3 for mobile
    const isMobile = windowWidth < 640;
    const count = isMobile ? 3 : 7;
    const shuffled = [...team].sort(() => Math.random() - 0.5).slice(0, count);
    setShuffledMembers(shuffled);
  }, [windowWidth]);

  return (
    <section className="overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[400px] flex-col items-center justify-center">
          {/* Header */}
          <div className="mb-6 text-center">
            <h2
              className="mb-3 font-pixelify text-3xl font-bold text-white sm:mb-4 sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{ textShadow: "0 0 4px rgba(255, 255, 255, 0.3)" }}
            >
              Meet Our Team
            </h2>
            <p className="text-sm text-gray-400 sm:text-base lg:text-lg">
              The innovators behind Deviators Club
            </p>
          </div>

          {/* Cards Container - single line, no overlap, no tilt, no hover animation */}
          <div
            className="relative flex w-full items-center justify-center"
            style={{ height: windowWidth < 640 ? "200px" : "380px" }}
          >
            {shuffledMembers.map((member, index) => {
              let tilt = 0;
              let zIndex = 1;
              let overlap = windowWidth < 640 ? 20 : 40;
              let cardWidth = windowWidth < 640 ? 110 : 200;
              // Desktop properties
              if (windowWidth >= 640) {
                if (index === 0) tilt = -6;
                if (index === 1) tilt = -4;
                if (index === 2) tilt = -2;
                if (index === 4) tilt = 2;
                if (index === 5) tilt = 4;
                if (index === 6) tilt = 6;
                if (index === 3) zIndex = 40;
                else if (index === 2 || index === 4) zIndex = 39;
                else if (index === 1 || index === 5) zIndex = 38;
                else if (index === 0 || index === 6) zIndex = 37;
              } else {
                // Mobile properties
                if (index === 0) tilt = -4;
                if (index === 2) tilt = 4;
                // z-index order: card 2 > card 1,3
                if (index === 1) zIndex = 40;
                else zIndex = 39;
                // overlap
                overlap = 30;
                cardWidth = 110;
              }
              const cardHeight = windowWidth < 640 ? 160 : 300;
              const middle = Math.floor(shuffledMembers.length / 2);

              // Calculate arch positioning
              const distanceFromCenter = Math.abs(index - middle);
              const archRadius = windowWidth < 640 ? 100 : 180;
              const archHeight = windowWidth < 640 ? 30 : 60;

              // Calculate horizontal position (spread cards along the arch)
              const horizontalSpacing = windowWidth < 640 ? 80 : 140;
              const horizontalOffset = (index - middle) * horizontalSpacing;

              // Calculate vertical position (arch effect)
              const verticalOffset = distanceFromCenter * distanceFromCenter * (archHeight / (middle * middle));

              const left = `calc(50% + ${horizontalOffset}px - ${cardWidth / 2}px)`;
              const top = `calc(50% + ${verticalOffset}px - ${cardHeight / 2}px)`;

              const isMiddleCard = index === middle;
              const isHovered = hoveredIndex === index;

              // Increase z-index for hovered card
              const finalZIndex = isHovered ? zIndex + 50 : zIndex;

              const scale =
                hoveredIndex !== null && windowWidth >= 640
                  ? isHovered
                    ? 1.1
                    : 0.9
                  : 1;
              const blur =
                hoveredIndex !== null && isHovered && windowWidth >= 640
                  ? "blur(3px)"
                  : "none";

              return (
                <div
                  key={member.name}
                  className={`absolute flex flex-col items-center justify-center transition-all duration-500 overflow-hidden`}
                  style={{
                    height: `${cardHeight}px`,
                    width: `${cardWidth}px`,
                    padding: windowWidth < 640 ? "2px 10px" : "4px 10px",
                    transform: `rotate(${tilt}deg) scale(${scale})`,
                    transformOrigin: "center center",
                    zIndex: finalZIndex,
                    left,
                    top,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    boxShadow: `
                      0 8px 32px rgba(0,0,0,0.12),
                      inset 0 1px 0 rgba(255,255,255,0.2),
                      inset 0 -1px 0 rgba(255,255,255,0.1)
                    `
                  }}
                  onMouseEnter={() =>
                    windowWidth >= 640 && setHoveredIndex(index)
                  }
                  onMouseLeave={() =>
                    windowWidth >= 640 && setHoveredIndex(null)
                  }
                >
                  <div
                    className="relative mb-2 h-[75%] w-full overflow-hidden transition-all duration-300"
                    style={{ filter: blur }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes={windowWidth < 640 ? "110px" : "200px"}
                    />
                  </div>
                  <div
                    className="flex w-full justify-center transition-all duration-300"
                    style={{ filter: blur }}
                  >
                    <h3
                      className={`${windowWidth < 640 ? "text-xs" : "text-lg md:text-xl"} truncate text-center font-normal text-white`}
                    >
                      {member.name}
                    </h3>
                  </div>
                  {/* View Team Button on Card Hover */}
                  {hoveredIndex === index && (
                    <>
                      {/* Dark overlay for better button visibility */}
                      <div className="absolute inset-0 z-[90] bg-black/40 transition-all duration-500 ease-out" />

                      <div className="absolute inset-0 z-[100] flex items-center justify-center transition-all duration-300">
                        <Link
                          href="/team"
                          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2 text-sm text-white transition-all duration-500 hover:scale-105"
                          style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(20px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                            boxShadow: `
                            0 8px 32px rgba(0,0,0,0.12),
                            inset 0 1px 0 rgba(255,255,255,0.2),
                            inset 0 -1px 0 rgba(255,255,255,0.1)
                          `
                          }}
                        >
                          {/* Gradient overlay for extra glass effect */}
                          <div
                            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                              borderRadius: 'inherit'
                            }}
                          />

                          {/* Shimmer effect */}
                          <div
                            className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100"
                            style={{
                              background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                              transform: 'translateX(-100%)',
                              borderRadius: 'inherit'
                            }}
                          />

                          <span className="relative z-10 font-medium">View Full Team</span>
                          <svg
                            className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Call to Action - Fixed at bottom - Mobile only */}
          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-Blue to-blue-600 px-4 py-2.5 text-sm text-white transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-Blue hover:shadow-lg hover:shadow-Blue/30"
            >
              <span>View Team</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
