import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/dockerSession/1.webp";
import Image2 from "@/assets/events/dockerSession/2.webp";
import Image3 from "@/assets/events/dockerSession/3.webp";
import Image4 from "@/assets/events/dockerSession/4.webp";
import Image5 from "@/assets/events/dockerSession/5.webp";
import Image6 from "@/assets/events/dockerSession/6.webp";

export const DockerSession: Omit<EVENT, "slug"> = {
  title: "Docker Basics Session",
  caption: `Can't"Containerizing creativity! 🐳✨ Our Docker basics session was a hit, diving into the world of containers with the incredible Deviators community. From setup to deployment, we're building the future, one Dockerfile at a time! 💻🚀"`,
  // 15 august 2024
  date: new Date("2024-08-15T18:25:00.000Z"),
  images: [Image1, Image2, Image3, Image4, Image5, Image6],
  index: 1,
};
