"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import team from "@/data/team";

export default function TeamPreview() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // Select exactly 7 members for the showcase
  const showcaseMembers = team.slice(0, 7);

  useEffect(() => {
    setMounted(true);

    // Set initial window width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      // Handle resize
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Calculate rotation angles for fan layout
  const getCardRotation = (index: number) => {
    const totalCards = showcaseMembers.length;
    const maxRotation = 40; // Increased for bigger semi-circle
    const centerIndex = Math.floor(totalCards / 2);
    const step = maxRotation / centerIndex;
    return (index - centerIndex) * step;
  };

  // Calculate horizontal offset for fan layout
  const getCardOffset = (index: number) => {
    const totalCards = showcaseMembers.length;
    const centerIndex = Math.floor(totalCards / 2);
    // Responsive offset based on screen size
    const baseOffset = windowWidth < 640 ? 20 : windowWidth < 1024 ? 30 : 35;
    const step = baseOffset / centerIndex;
    return (index - centerIndex) * step;
  };

  // Calculate vertical offset for perfect arc (like holding cards in hand)
  const getCardVerticalOffset = (index: number) => {
    const totalCards = showcaseMembers.length;
    const centerIndex = Math.floor(totalCards / 2);
    // Responsive vertical offset
    const maxVerticalOffset =
      windowWidth < 640 ? 20 : windowWidth < 1024 ? 25 : 30;
    const distance = Math.abs(index - centerIndex);
    const normalizedDistance = distance / centerIndex;
    // Use quadratic curve for natural arc
    return normalizedDistance * normalizedDistance * maxVerticalOffset;
  };

  if (!mounted) {
    return (
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center">
              <h2 className="font-bitcount mb-4 text-3xl font-light text-white sm:text-[9.5vh]">
                Meet Our Team
              </h2>
              <p className="text-base text-gray-400 sm:text-lg">
                The innovators behind Deviators Club
              </p>
            </div>
            <div className="flex min-h-[300px] items-end justify-center space-x-2 sm:space-x-4">
              {/* Loading skeleton */}
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="xs:h-40 xs:w-32 h-36 w-28 animate-pulse rounded-xl bg-gray-700 sm:h-40 sm:w-32"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[400px] flex-col items-center justify-center sm:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
          {/* Header */}
          <div className="mb-6 text-center sm:mb-8">
            <h2
              className="mb-3 font-pixelify text-2xl font-bold text-white sm:mb-4 sm:text-3xl lg:text-4xl xl:text-5xl"
              style={{
                textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
              }}
            >
              Meet Our Team
            </h2>
            <p className="text-sm text-gray-400 sm:text-base lg:text-lg">
              The innovators behind Deviators Club
            </p>
          </div>

          {/* Fan Layout Cards - Centered */}
          <div className="relative flex h-72 max-h-[280px] w-full flex-1 items-end justify-center sm:h-80 sm:max-h-[450px] md:h-96 lg:h-[26rem] lg:max-h-[300px] xl:h-[32rem]">
            {showcaseMembers.map((member, index) => {
              const rotation = getCardRotation(index);
              const horizontalOffset = getCardOffset(index);
              const verticalOffset = getCardVerticalOffset(index);
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={`${member.name}-${index}`}
                  className="absolute transition-all duration-500 ease-out will-change-transform"
                  style={{
                    transform: `translateX(${horizontalOffset * (typeof window !== "undefined" && window.innerWidth < 640 ? 4 : window.innerWidth < 1024 ? 7 : 8)}px) translateY(${
                      isHovered
                        ? typeof window !== "undefined" &&
                          window.innerWidth < 640
                          ? -20
                          : -35
                        : verticalOffset
                    }px) rotate(${windowWidth < 640 ? rotation * 0.6 : rotation}deg)`,
                    zIndex: isHovered ? 50 : 20 - index,
                    transformOrigin: "bottom center",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card */}
                  <div className="group relative cursor-pointer">
                    <div
                      className={`xs:h-40 xs:w-32 h-36 w-28 overflow-hidden rounded-lg border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl transition-all duration-300 sm:h-40 sm:w-32 sm:rounded-xl sm:border-2 sm:shadow-2xl md:h-[12rem] md:w-36 lg:h-[14rem] lg:w-40 xl:h-[15.5rem] xl:w-44 ${
                        isHovered
                          ? "border-Blue shadow-[0_0_20px_rgba(37,99,235,0.4)] sm:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
                          : ""
                      }`}
                    >
                      {/* Member Image */}
                      <div className="relative h-3/4 w-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          sizes="(max-width: 475px) 96px, (max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, (max-width: 1280px) 160px, 176px"
                        />
                      </div>

                      {/* Member Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2 sm:p-2">
                        <h3 className="truncate text-xs font-semibold leading-tight text-white sm:text-sm">
                          {member.name}
                        </h3>
                        <p className="truncate text-[10px] leading-tight text-gray-300 sm:text-xs">
                          {member.roles[0]}
                        </p>
                      </div>

                      {/* Glassmorphic Overlay on Hover */}
                      {isHovered && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
                          <Link
                            href="/team"
                            className="rounded-full border border-white/30 bg-white/20 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-Blue hover:bg-Blue/80 sm:px-4 sm:py-2 sm:text-sm"
                          >
                            <span className="hidden sm:inline">View Team</span>
                            <span className="sm:hidden">View</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action - Fixed at bottom */}
          <div className="mt-6 text-center sm:mt-14">
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-Blue to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-Blue hover:shadow-lg hover:shadow-Blue/30 sm:gap-3 sm:px-6 sm:py-3 sm:text-base"
            >
              <span className="hidden sm:inline">View Full Team</span>
              <span className="sm:hidden">View Team</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
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
