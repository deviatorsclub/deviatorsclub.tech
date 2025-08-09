import Yukta from "@/assets/team/Yukta.webp";
import Anup from "@/assets/team/Anup.webp";
import Shaarvy from "@/assets/team/Shaarvy.webp";
import Daksh from "@/assets/team/Daksh.webp";
import Aayush from "@/assets/team/Aayush.webp";
import Arpita from "@/assets/team/Arpita.webp";
import Risha from "@/assets/team/Risha.webp";
import Vidushi from "@/assets/team/Vidushi.webp";
import Isha from "@/assets/team/Isha.webp";
import Kunal from "@/assets/team/Kunal.webp";
import Tanmay from "@/assets/team/Tanmay.webp";
import Pooja from "@/assets/team/Pooja.webp";
import Nishant from "@/assets/team/Nishant.webp";
import Riya from "@/assets/team/Riya.webp";
import Bhavya from "@/assets/team/Bhavya.webp";
import Radhika from "@/assets/team/Radhika.webp";

import { StaticImageData } from "next/image";

const team: {
  name: string;
  roles: string[];
  intro: string;
  urls: {
    github: string;
    linkedin: string;
    twitter?: string;
    portfolio?: string;
    leetcode?: string;
  };
  image: StaticImageData;
  keywords: string[];
}[] = [
  {
    name: "Pooja Goel",
    roles: ["President"],
    intro: "Emotionally located at Platform 9¾, physically stuck in traffic.",
    urls: {
      github: "https://github.com/Freya2005",
      linkedin: "https://www.linkedin.com/in/pooja-goel-19a9b2241/",
      twitter: "https://x.com/pooja16985",
    },
    image: Pooja,
    keywords: ["President"],
  },
  {
    name: "Vidushi Anand",
    roles: ["Vice President"],
    intro: "Pray for my delulus to come true.",
    urls: {
      github: "https://github.com/Vidushi2709",
      linkedin: "https://www.linkedin.com/in/vidushii-anand/",
      twitter: "https://x.com/idkwhyvi62159",
    },
    image: Vidushi,
    keywords: ["President"],
  },
  {
    name: "Kunal Verma",
    roles: ["Lead", "Web Dev"],
    intro: "Either too crazy or too diabolical for you.",
    urls: {
      github: "https://www.github.com/kunalverma06",
      linkedin: "https://www.linkedin.com/in/kunal-verma06",
    },
    image: Kunal,
    keywords: ["Lead", "Web Development"],
  },
  {
    name: "Radhika Khatter",
    roles: ["Co Lead", "Web Dev"],
    intro: "If sleep were an Olympic sport, I'd win — even on a park bench.",
    urls: {
      github: "https://github.com/radhika-khatter",
      linkedin: "https://www.linkedin.com/in/radhika-khatter-94a60b28a/",
    },
    image: Radhika,
    keywords: ["Co Lead", "Web Development"],
  },
  {
    name: "Tanmay Verma",
    roles: ["Lead", "Cyber Security"],
    intro: "Guarding your data like it's my last Maggi packet.",
    urls: {
      github: "https://github.com/Tanmay1906",
      linkedin: "https://www.linkedin.com/in/tanmayverma190605",
    },
    image: Tanmay,
    keywords: ["Lead", "Cyber Security", "Blockchain"],
  },
  {
    name: "Risha ",
    roles: ["Co Lead", "Cyber Security"],
    intro: "I'm a calm browser, until you see 47 tabs open in my brain.",
    urls: {
      github: "https://github.com/rishabatra1802",
      linkedin: "https://www.linkedin.com/in/risha-batra-47186a289/",
    },
    image: Risha,
    keywords: ["Co Lead", "Cyber Security"],
  },
  {
    name: "Anup Pandey",
    roles: ["Lead", "DSA"],
    intro: "If it's unsolvable, it's mine.",
    urls: {
      github: "https://github.com/Anupkumarpandey1",
      linkedin: "https://www.linkedin.com/in/anup-kumar-pandey-b9b118282/",
      portfolio: "https://anupsportfolio.vercel.app/",
      leetcode: "https://leetcode.com/u/Anup_Kumar_Pandey/",
    },
    image: Anup,
    keywords: ["Lead", "DSA"],
  },
  {
    name: "Arpita",
    roles: ["Co Lead", "DSA"],
    intro: "Running on logic, debugging in peace.",
    urls: {
      github: "https://github.com/arpita-kukreja",
      linkedin: "https://www.linkedin.com/in/arpita-kukreja-6416a4289/",
      leetcode: "https://leetcode.com/u/arpitakukreja18/",
    },
    image: Arpita,
    keywords: ["Co Lead", "DSA"],
  },
  {
    name: "Isha Nayal",
    roles: ["Co Lead", "AI/ML"],
    intro: "Training models and my patience.",
    urls: {
      github: "https://github.com/IshaNayal",
      linkedin: "https://www.linkedin.com/in/isha-nayal",
      portfolio: "https://final-portfolio-74ea.vercel.app/#projects",
    },
    image: Isha,
    keywords: ["Co Lead", "AI/ML"],
  },
  {
    name: "Shaarvy",
    roles: ["Lead", "Web3"],
    intro: "I write novels with better logic than my code.",
    urls: {
      github: "https://github.com/Shaarvy",
      linkedin: "https://www.linkedin.com/in/shaarvy-chauhan-07126827b/",
      portfolio: "https://shaarvyportfolio.vercel.app/",
    },
    image: Shaarvy,
    keywords: ["Lead", "Web3"],
  },
  {
    name: "Bhavya Kataria",
    roles: ["Lead", "Social Media", "Designer"],
    intro: "My spidey-sense has been tingling since birth.",
    urls: {
      github: "https://www.github.com/damnbhavya",
      linkedin: "https://www.linkedin.com/in/katariabhavya",
      twitter: "https://x.com/damnbhavya",
    },
    image: Bhavya,
    keywords: ["Lead", "Social Media", "Designer"],
  },
  {
    name: "Riya Sangwan",
    roles: ["Co Lead", "Social Media"],
    image: Riya,
    intro: "Low drama, high vibes - running on chai and quiet ambitious.",
    urls: {
      github: "https://github.com/riyasangwan31",
      linkedin: "https://www.linkedin.com/in/riya-sangwan-3a1363324",
      portfolio: "https://sangwanriya.netlify.app/",
    },
    keywords: ["Co Lead", "Social Media"],
  },
  {
    name: "Yukta Khatter ",
    roles: ["Lead", "Event Management"],
    intro: "Leading the crew that turns what if into what an event!",
    urls: {
      github: "https://github.com/yukta2340",
      linkedin: "https://www.linkedin.com/in/yukta-khatter-ba70102b5",
    },
    image: Yukta,
    keywords: ["Lead", "Event Management"],
  },
  {
    name: "Nishant Yadav ",
    roles: ["Co Lead", "Event Management"],
    intro: "If jugaad was a person, I'd be him.",
    urls: {
      github: "https://github.com/nishant04202005",
      linkedin: "https://www.linkedin.com/in/nishant-yadav-914684289",
    },
    image: Nishant,
    keywords: ["Co Lead", "Event Management"],
  },
  {
    name: "Daksh Sharma",
    roles: ["Event Management"],
    intro: "Calm on the surface, chaos coordinator underneath.",
    urls: {
      github: "https://github.com/221104daksh",
      linkedin: "https://www.linkedin.com/in/daksh-sharma-9a9a1630a/",
      twitter: "https://x.com/DakshSh221104",
    },
    image: Daksh,
    keywords: ["Event Management"],
  },
  {
    name: "Aayush Kathuria",
    roles: ["Event Management"],
    intro: "Born to be a traveller forced to be an engineer.",
    image: Aayush,
    urls: {
      github: "https://github.com/beast955",
      linkedin: "https://www.linkedin.com/in/aayush-kathuria-8a4a96325",
    },
    keywords: ["Event Management"],
  },
];

export default team.map((member) => ({
  ...member,
  keywords: [...member.keywords, "club"],
}));
