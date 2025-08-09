"use client";

import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { ALLIMAGESDATA } from "@/types/event";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: ALLIMAGESDATA;
  className?: string;
}) => {
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
};

function RenderImage({
  el,
  translateY,
  title,
  slug,
}: {
  el: StaticImageData;
  translateY: MotionValue<number>;
  title: string;
  slug: string;
}) {
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
        />
        {/* Overlay container */}
        <div className="absolute inset-0 flex items-end justify-center bg-black/50 p-4 opacity-100 transition-opacity duration-300 sm:justify-start sm:opacity-0 sm:group-hover:opacity-100">
          <h3 className="truncate text-center text-lg font-semibold text-white sm:text-xl">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
