import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/debugDecrypt/1.webp";
import Image2 from "@/assets/events/debugDecrypt/2.webp";
import Image3 from "@/assets/events/debugDecrypt/3.webp";
import Image4 from "@/assets/events/debugDecrypt/4.webp";
import Image5 from "@/assets/events/debugDecrypt/5.webp";
import Image6 from "@/assets/events/debugDecrypt/6.webp";
import Image7 from "@/assets/events/debugDecrypt/7.webp";
import Image8 from "@/assets/events/debugDecrypt/8.webp";
import Image9 from "@/assets/events/debugDecrypt/9.webp";

export const DebugDecrypt: Omit<EVENT, "slug"> = {
  title: "Debug Decrypt",
  caption: `Can't find errors in yourself,
Don't worry you might be perfect but these codes aren't,
Yes the much awaited debug decrypt event was organized in dronathon 2024 live with our enthusiastic team of deviators which made yet another event successful
The goal was to let the young budding minds to solve the incorrect codes with the utmost accuracy!!!
Stay tuned for more such events and participate as much as u can cause you know what they say???
NOBODY IS PERFECT`,
  // 5 april 2024
  date: new Date("2024-04-05T18:25:00.000Z"),
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
  ],
  index: 5,
};
