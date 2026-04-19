import { EVENT } from "@/types/event";

import Image4 from "@/assets/events/iosLabSessions/4.webp";
import Image5 from "@/assets/events/iosLabSessions/5.webp";
import Image6 from "@/assets/events/iosLabSessions/6.webp";
import Image7 from "@/assets/events/iosLabSessions/7.webp";
import Image8 from "@/assets/events/iosLabSessions/8.webp";

export const IOSLabSessions: Omit<EVENT, "slug"> = {
  title: "IOS Lab Session",
  caption: `It's time to get your hands dirty with iOS. Join us and learn about iOS. We'll be having fun with you.`,
  // 4 oct 2024
  date: new Date("2024-10-04T18:25:00.000Z"),
  images: [Image4, Image5, Image6, Image7, Image8],
  index: 1,
};
