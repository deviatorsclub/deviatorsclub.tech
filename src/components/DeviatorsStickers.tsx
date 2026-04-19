"use client";

import { Stickers } from "@bhavyapage/assets";
import "@bhavyapage/assets/styles.css";
import { usePathname } from "next/navigation";

import sticker1 from "@/assets/stickers/1.svg";
import sticker2 from "@/assets/stickers/2.svg";
import sticker3 from "@/assets/stickers/3.svg";
import sticker4 from "@/assets/stickers/4.svg";
import sticker5 from "@/assets/stickers/5.svg";
import sticker6 from "@/assets/stickers/6.svg";
import sticker7 from "@/assets/stickers/7.svg";
import sticker8 from "@/assets/stickers/8.svg";
import sticker9 from "@/assets/stickers/9.svg";
import sticker10 from "@/assets/stickers/10.svg";
import sticker11 from "@/assets/stickers/11.svg";
import sticker12 from "@/assets/stickers/12.svg";
import sticker13 from "@/assets/stickers/13.svg";
import sticker14 from "@/assets/stickers/14.svg";
import sticker15 from "@/assets/stickers/15.svg";
import sticker16 from "@/assets/stickers/16.svg";
import sticker17 from "@/assets/stickers/17.svg";
import sticker18 from "@/assets/stickers/18.svg";

const deviatorsStickers = [
  { id: "sticker1", src: sticker1.src },
  { id: "sticker2", src: sticker2.src },
  { id: "sticker3", src: sticker3.src },
  { id: "sticker4", src: sticker4.src },
  { id: "sticker5", src: sticker5.src },
  { id: "sticker6", src: sticker6.src },
  { id: "sticker7", src: sticker7.src },
  { id: "sticker8", src: sticker8.src },
  { id: "sticker9", src: sticker9.src },
  { id: "sticker10", src: sticker10.src },
  { id: "sticker11", src: sticker11.src },
  { id: "sticker12", src: sticker12.src },
  { id: "sticker13", src: sticker13.src },
  { id: "sticker14", src: sticker14.src },
  { id: "sticker15", src: sticker15.src },
  { id: "sticker16", src: sticker16.src },
  { id: "sticker17", src: sticker17.src },
  { id: "sticker18", src: sticker18.src },
];

export default function DeviatorsStickers() {
  const pathname = usePathname();
  return (
    <Stickers
      stickers={deviatorsStickers}
      pageId={pathname}
      position="bottom-right"
      buttonShape="squircle"
      buttonColor="hsl(var(--brand))"
      columns={5}
      theme="auto"
    />
  );
}
