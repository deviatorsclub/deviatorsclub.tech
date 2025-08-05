import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/debugDecrypt/1.jpeg";
import Image2 from "@/assets/events/debugDecrypt/2.jpeg";
import Image3 from "@/assets/events/debugDecrypt/3.jpeg";
import Image4 from "@/assets/events/debugDecrypt/4.jpeg";
import Image5 from "@/assets/events/debugDecrypt/5.jpeg";
import Image6 from "@/assets/events/debugDecrypt/6.jpeg";
import Image7 from "@/assets/events/debugDecrypt/7.jpeg";
import Image8 from "@/assets/events/debugDecrypt/8.png";
import Image9 from "@/assets/events/debugDecrypt/9.png";

export const DebugDecrypt: Omit<EVENT, "slug"> = {
  title: "Debug Decrypt",
  caption: `Can't find errors in yourself,
Don't worry you might be perfect but these codes aren't,
Yes the much awaited debug decrypt event was organized in dronathon 2024 live with our enthusiastic team of deviators which made yet another event successful
The goal was to let the young budding minds to solve the incorrect codes with the utmost accuracy!!!
Stay tuned for more such events and participate as much as u can cause you know what they say???
NOBODY IS PERFECT`,
  // 13 august 2024
  date: new Date("2024-08-13T18:25:00.000Z"),
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
