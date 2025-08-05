import { StaticImageData } from "next/image";
import { Item as ItemPSG } from "react-photoswipe-gallery";

export default function ImageZoom({
  src,
  width,
  height,
  alt,
  className,
}: {
  src: StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
}) {
  return (
    <ItemPSG
      original={src.src}
      thumbnail={src.src}
      width={src.width}
      height={src.height}
    >
      {({ ref, open }) => (
        <img
          ref={ref}
          onClick={open}
          src={src.src}
          width={width}
          height={height}
          alt={alt ?? "Image"}
          className={className}
        />
      )}
    </ItemPSG>
  );
}
