import { StaticImageData } from "next/image";

export type EVENT = {
  title: string;
  caption?: string;
  date: Date;
  images: StaticImageData[];
  index: number;
  slug: string;
};

export type ALLIMAGESDATA = {
  image: StaticImageData;
  title: string;
  slug: string;
}[];
