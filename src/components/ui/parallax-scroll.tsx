"use client";

import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ALLIMAGESDATA } from "@/types/event";

export const ParallaxScroll = memo(
  ({ images, className }: { images: ALLIMAGESDATA; className?: string }) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      container: gridRef,
      offset: ["start start", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
      <div
        className={`h-auto w-full items-start overflow-y-auto ${className}`}
        ref={gridRef}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:grid-cols-2 sm:px-6 sm:py-24 md:grid-cols-3 lg:grid-cols-3 lg:px-8">
          {images.map(({ image: el, title, slug }, idx) => (
            <RenderImage
              el={el}
              translateY={translateY}
              key={"grid-" + idx}
              title={title}
              slug={slug}
            />
          ))}
        </div>
      </div>
    );
  },
);

ParallaxScroll.displayName = "ParallaxScroll";

const RenderImage = memo(
  ({
    el,
    translateY,
    title,
    slug,
  }: {
    el: StaticImageData;
    translateY: MotionValue<number>;
    title: string;
    slug: string;
  }) => {
    return (
      <Link href={"/gallery/" + slug}>
        <motion.div
          style={{ y: translateY }}
          className="group relative overflow-hidden rounded-lg"
        >
          <Image
            src={el.src}
            className="transition-scale h-80 w-full object-cover duration-300 group-hover:scale-110"
            height={400}
            width={400}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R2rD5wcZooa5wXVeTb4YmFyjqq6zzTBXHEBp5JCWKFAOW7DVKX0aNTTDqf00EQM4kqEeYJ2mGOV4CmmHKhQRNE6nCNGAMb4K/PKUVHQ=="
          />
          <div className="absolute inset-0 flex items-end justify-start p-4 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
            <div className="relative">
              <div className="absolute inset-0 -m-2 rounded-xl border border-white/10 bg-black/40 shadow-lg backdrop-blur-md"></div>
              <h3 className="relative text-lg font-semibold text-white drop-shadow-sm">
                {title}
              </h3>
            </div>
          </div>
        </motion.div>
      </Link>
    );
  },
);

RenderImage.displayName = "RenderImage";
