"use client";

import { StaticImageData } from "next/image";
import { Gallery } from "react-photoswipe-gallery";
import ImageZoom from "./ImageZoom";

export default function ImageGallery({
  images,
}: {
  images: StaticImageData[];
}) {
  return (
    <Gallery>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-white/[0.06] will-change-transform"
          >
            <ImageZoom
              src={image}
              className="h-full w-full transform-gpu cursor-pointer object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Gallery>
  );
}
