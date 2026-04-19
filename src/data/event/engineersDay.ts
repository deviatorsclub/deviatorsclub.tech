import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/engineersDay/1.webp";
import Image3 from "@/assets/events/engineersDay/3.webp";
import Image4 from "@/assets/events/engineersDay/4.webp";
import Image5 from "@/assets/events/engineersDay/5.webp";
import Image6 from "@/assets/events/engineersDay/6.webp";
import Image7 from "@/assets/events/engineersDay/7.webp";

export const EngineersDay: Omit<EVENT, "slug"> = {
  title: "Engineers Day",
  caption: `On Engineers' Day, we honor the legacy of Sir M. Visvesvaraya, one of India's greatest engineers 🛠️, whose contributions shaped modern engineering in the country 🇮🇳. To celebrate this spirit of innovation and problem-solving 💡, Deviators Club hosted a thrilling Technical Quiz 🎉, bringing together sharp minds to showcase their engineering expertise 🧠. It was a day where knowledge met competition 🏆, and the future of engineering shined bright! ✨`,
  // 15 sep 2024
  date: new Date("2024-09-15T18:25:00.000Z"),
  images: [Image1, Image3, Image4, Image5, Image6, Image7],
  index: 3,
};
