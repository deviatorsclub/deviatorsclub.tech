import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/gitGithub/1.png";
import Image2 from "@/assets/events/gitGithub/2.png";
import Image3 from "@/assets/events/gitGithub/3.png";
import Image4 from "@/assets/events/gitGithub/4.png";
import Image5 from "@/assets/events/gitGithub/5.png";
import Image6 from "@/assets/events/gitGithub/6.png";
import Image7 from "@/assets/events/gitGithub/7.png";
import Image8 from "@/assets/events/gitGithub/8.png";

export const GitGithub: Omit<EVENT, "slug"> = {
  title: "Git & Github Session",
  caption: `Transforming Git commitment woes into seamless syncs, thanks to the senior squad! 🎓✨ Let's turn code chaos into Git-ful harmony, one commit at a time! 💻❤️`,
  // 12 aug 2024
  date: new Date("2024-08-12T18:25:00.000Z"),
  images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8],
  index: 1,
};
