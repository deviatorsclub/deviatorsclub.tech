import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/gitGithub24/1.png";
import Image2 from "@/assets/events/gitGithub24/2.png";
import Image3 from "@/assets/events/gitGithub24/3.png";
import Image4 from "@/assets/events/gitGithub24/4.png";
import Image5 from "@/assets/events/gitGithub24/5.png";
import Image6 from "@/assets/events/gitGithub24/6.png";
import Image7 from "@/assets/events/gitGithub24/7.png";
import Image8 from "@/assets/events/gitGithub24/8.png";

export const GitGithub24: Omit<EVENT, "slug"> = {
  title: "Git & Github Session 2024",
  caption: `Transforming Git commitment woes into seamless syncs, thanks to the senior squad! 🎓✨ Let's turn code chaos into Git-ful harmony, one commit at a time! 💻❤️`,
  // 1 feb 2024
  date: new Date("2024-02-01T18:25:00.000Z"),
  images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8],
  index: 1,
};
