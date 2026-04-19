import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/cyberSec/1.webp";
import Image2 from "@/assets/events/cyberSec/2.webp";
import Image3 from "@/assets/events/cyberSec/3.webp";
import Image4 from "@/assets/events/cyberSec/4.webp";
import Image5 from "@/assets/events/cyberSec/5.webp";

export const CyberSec: Omit<EVENT, "slug"> = {
  title: "Cyber Security Session",
  caption: `🚨*Cybersecurity Unlocked!* 🚨

Deviators just completed an exciting session for our juniors, diving deep into the world of digital defense!🔐💻 Thanks to everyone who joined and made it a success! Stay tuned for more tech-packed sessions! ⚡`,
  // 13 sep 2024
  date: new Date("2024-09-13T18:25:00.000Z"),
  images: [Image1, Image2, Image3, Image4, Image5],
  index: 1,
};
