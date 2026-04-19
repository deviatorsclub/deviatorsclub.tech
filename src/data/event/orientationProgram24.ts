import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/orientationProgram24/1.webp";
import Image2 from "@/assets/events/orientationProgram24/2.webp";
import Image3 from "@/assets/events/orientationProgram24/3.webp";
import Image4 from "@/assets/events/orientationProgram24/4.webp";
import Image5 from "@/assets/events/orientationProgram24/5.webp";

export const OrientationProgram24: Omit<EVENT, "slug"> = {
  title: "Orientation Program 2024",
  caption: `Welcome to the Deviators Club! 🎉 Our Orientation Program 2024 was a fantastic introduction to our tech community. New members got to know about our club activities, upcoming events, and the exciting journey ahead. Together, we're building a strong foundation for innovation and learning! 💻✨`,
  // 1 september 2024 (estimated date for orientation)
  date: new Date("2024-09-01T18:25:00.000Z"),
  images: [Image1, Image2, Image3, Image4, Image5],
  index: 2,
};
