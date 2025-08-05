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
      <div className="flex flex-wrap items-center justify-center gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-auto w-[97vw] overflow-hidden rounded-lg sm:h-[300px] sm:w-[300px] lg:h-[350px] lg:w-[350px] 2xl:h-[400px] 2xl:w-[400px]"
          >
            <ImageZoom
              src={image}
              className="border-20 aspect-square h-full w-full scale-110 cursor-pointer object-cover transition-transform hover:scale-100"
            />
          </div>
        ))}
      </div>
    </Gallery>
  );
}
