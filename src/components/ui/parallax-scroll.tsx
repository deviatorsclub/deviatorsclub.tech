"use client";

import { MotionValue, useScroll, useTransform } from "motion/react";
import { useRef, memo } from "react";
import { motion } from "motion/react";
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
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
          className="group relative overflow-hidden rounded-2xl border border-white/[0.06] will-change-transform"
        >
          <Image
            src={el.src}
            className="aspect-[4/3] w-full transform-gpu object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            height={400}
            width={400}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R2rD5wcZooa5wXVeTb4YmFyjqq6zzTBXHEBp5JCWKFAOW7DVKX0aNTTDqf00EQM4kqEeYJ2mGOV4CmmHKhQRNE6nCNGAMb4K/PKUVHQ=="
          />
          <div className="absolute inset-x-0 bottom-0 p-3">
            <p className="glass-card-active inline-block rounded-xl px-3 py-1.5 text-base font-medium text-white sm:text-lg">
              {title}
            </p>
          </div>
        </motion.div>
      </Link>
    );
  },
);

RenderImage.displayName = "RenderImage";
