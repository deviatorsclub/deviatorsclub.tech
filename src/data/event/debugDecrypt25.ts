import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/debugDecrypt25/1.webp";
import Image2 from "@/assets/events/debugDecrypt25/2.webp";
import Image3 from "@/assets/events/debugDecrypt25/3.webp";
import Image4 from "@/assets/events/debugDecrypt25/4.webp";
import Image5 from "@/assets/events/debugDecrypt25/5.webp";
import Image6 from "@/assets/events/debugDecrypt25/6.webp";
import Image7 from "@/assets/events/debugDecrypt25/7.webp";
import Image8 from "@/assets/events/debugDecrypt25/8.webp";
import Image9 from "@/assets/events/debugDecrypt25/9.webp";
import Image10 from "@/assets/events/debugDecrypt25/10.webp";

export const DebugDecrypt25: Omit<EVENT, "slug"> = {
  title: "Debug Decrypt 2.0",
  caption:
    "Thought debugging was tough the first time? We just took it to the next level! 💻🔥 Debug Decrypt 2.0 was back in Dronathon 2025, bigger, trickier, and full of energy thanks to our amazing team of Deviators who made it yet another grand success. This time, participants faced even more challenging buggy codes and had to put their logic, speed, and accuracy to the test. The thrill of solving what looked “impossible” pushed young coders to think sharper and faster than ever before! Stay tuned, because Debug Decrypt only gets better from here—remember, no code is perfect… and that’s where the fun begins! 😉",
  // 29th august-30th august 2025
  date: new Date("2025-08-30T18:25:00.000Z"),
  images: [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
  ],
  index: 2,
};
