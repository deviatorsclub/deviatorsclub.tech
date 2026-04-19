import kanak from "@/assets/team01/kanak.webp";
import Vivek from "@/assets/team01/vivek.webp";
import Pulkit from "@/assets/team01/pulkit.webp";
import KK from "@/assets/team01/kk.webp";
import Ayush from "@/assets/team01/ayush.webp";
import Deepika from "@/assets/team01/deepika.webp";
import Diksha from "@/assets/team01/diksha.webp";
import Vidushi from "@/assets/team01/vidushi.webp";
import Manas from "@/assets/team01/manas.webp";
import Kunal from "@/assets/team01/kunal.webp";
import Tanmay from "@/assets/team01/tanmay.webp";
import Pooja from "@/assets/team01/pooja.webp";
import Dipti from "@/assets/team01/dipti.webp";
import Divyansh from "@/assets/team01/divyansh.webp";
import Saurabh from "@/assets/team01/saurabh.webp";
import Yash from "@/assets/team01/yash.webp";
import Bhavya from "@/assets/team01/bhavya.webp";
import Aditya from "@/assets/team01/aditya.webp";
import SukratiMam from "@/assets/team02/SukratiMam.webp";

import { StaticImageData } from "next/image";

const team: {
  name: string;
  roles: string[];
  intro: string;
  urls: {
    github?: string;
    linkedin: string;
    twitter?: string;
    portfolio?: string;
  };
  image: StaticImageData;
  keywords: string[];
}[] = [
  {
    name: "Dr. Sukrati Chaturvedi",
    roles: ["Faculty Coordinator"],
    intro: "PhD in Artificial Intelligence and Machine Learning.",
    urls: {
      linkedin: "https://www.linkedin.com/in/sukrati-chaturvedi-7395621a5/",
    },
    image: SukratiMam,
    keywords: ["Faculty Coordinator"],
  },
  {
    name: "Kanak Tanwar",
    roles: ["Founder", "AI/ML", "DSA"],
    intro: "Can code in any language (if chatgpt is accessible)",
    urls: {
      github: "https://github.com/kanakOS01",
      linkedin: "https://www.linkedin.com/in/kanak-tanwar",
      twitter: "https://x.com/kanaktwts",
    },
    image: kanak,
    keywords: ["Founder", "AI/ML", "DSA"],
  },
  {
    name: "Vivek Chahal",
    roles: ["Founder", "IOS"],
    intro: "Interested in technology which no one uses.",
    urls: {
      github: "https://github.com/Vivek09Chahal",
      linkedin: "https://www.linkedin.com/in/vivekchahal09/",
      twitter: "https://x.com/vivekchahal09",
    },
    image: Vivek,
    keywords: ["IOS", "Founder"],
  },
  {
    name: "Pulkit",
    roles: ["Chairperson", "Founder", "Web Development"],
    intro: "Born to be CEO of Google, forced to be chairperson of Deviators",
    urls: {
      github: "https://github.com/pulkitxm",
      linkedin: "https://www.linkedin.com/in/pulkit-dce",
      twitter: "https://x.com/devpulkitt",
      portfolio: "https://pulkitxm.com",
    },
    image: Pulkit,
    keywords: ["Founder", "Web Development"],
  },
  {
    name: "Krishna Kartikay Bhatt",
    roles: ["Founder", "Cyber Security", "Event management"],
    intro: "Likes to put computer aside and talk about national duty",
    urls: {
      github: "https://github.com/kkbhatt07",
      linkedin: "https://www.linkedin.com/in/krishna-kartikay-bhatt/",
    },
    image: KK,
    keywords: ["Founder", "Cyber Security", "Event management"],
  },
  {
    name: "Ayush Goyal",
    roles: ["Founder", "Event management", "Web Development"],
    intro: "Recruiter and intern at same company",
    image: Ayush,
    urls: {
      github: "https://github.com/agayushh",
      linkedin: "https://www.linkedin.com/in/ayush-goyal-b4491324b",
      twitter: "http://x.com/agayushh",
      portfolio: "http://agayush.me/",
    },
    keywords: ["Founder", "Event management", "Web Development"],
  },
  {
    name: "Deepika Anand",
    roles: ["Event management", "Women in Tech"],
    intro: "Is a member of Dead Poets Society…until the alarm goes off.",
    urls: {
      github: "https://github.com/deepikaa0402",
      linkedin: "https://www.linkedin.com/in/deepika-anand-4a371a26b",
    },
    image: Deepika,
    keywords: ["Women in Tech", "Event management"],
  },
  {
    name: "Diksha Sharma",
    roles: ["UI/UX", "Women in Tech"],
    intro:
      "An engineering student by profession, a cat whisperer by obsesssion.",
    urls: {
      github: "https://github.com/diksha1504",
      linkedin: "https://www.linkedin.com/in/diksha-sharma-6b43a5213/",
    },
    image: Diksha,
    keywords: ["UI/UX", "Women in Tech"],
  },
  {
    name: "Pooja Goel",
    roles: ["Web Development", "UI/UX", "Women in Tech"],
    intro: "Likes to keep her glasses foggy to ignore the world.",
    urls: {
      github: "https://github.com/Freya2005",
      linkedin: "https://www.linkedin.com/in/pooja-goel-19a9b2241/",
    },
    image: Pooja,
    keywords: ["Web Development", "UI/UX", "Women in Tech"],
  },
  {
    name: "Vidushi Anand",
    roles: ["AI/ML", "Women in Tech"],
    intro: "Pray for my delulus to come true.",
    urls: {
      github: "https://github.com/Vidushi2709",
      linkedin: "https://www.linkedin.com/in/vidushi-anand-49420928a",
      twitter: "https://x.com/Vidushi_Anand_",
    },
    image: Vidushi,
    keywords: ["AI/ML", "Women in Tech"],
  },
  {
    name: "Manas Thakur",
    roles: ["AI/ML"],
    intro: "Prefer work over sleep and sleep over coffee",
    urls: {
      github: "https://github.com/Manas-thakur",
      linkedin: "https://www.linkedin.com/in/manasthakur30/",
      twitter: "https://x.com/Menace_thakur",
    },
    image: Manas,
    keywords: ["AI/ML"],
  },
  {
    name: "Kunal Verma",
    roles: ["Social Media", "Web Development"],
    intro: "A unique fusion of dancer and coder.",
    urls: {
      github: "https://www.github.com/kunalverma06",
      linkedin: "https://www.linkedin.com/in/kunal-verma-528431291",
    },
    image: Kunal,
    keywords: ["Social Media", "Web Development"],
  },
  {
    name: "Tanmay Verma",
    roles: ["Social Media", "Cyber Security"],
    intro:
      "I'm like a bug in the matrix, but instead of being fixed, I add more bugs (and caffeine)!",
    urls: {
      github: "https://github.com/Tanmay1906",
      linkedin: "https://www.linkedin.com/in/tanmayverma190605",
    },
    image: Tanmay,
    keywords: ["Social Media", "Cyber Security"],
  },
  {
    name: "Yash Kumar",
    roles: ["DSA", "Event management"],
    intro: "Lost a staring competition with his dog once.",
    urls: {
      github: "https://github.com/Hero-Alpha",
      linkedin: "https://www.linkedin.com/in/yash-kumar-4a936426b/",
    },
    image: Yash,
    keywords: ["DSA", "Event management"],
  },
  {
    name: "Saurabh Singh",
    roles: ["DSA"],
    intro: "Call for DSA support...or if your car breaks down.",
    urls: {
      github: "https://github.com/sa1-1rabh",
      linkedin: "https://www.linkedin.com/in/sa1-1rabh",
    },
    image: Saurabh,
    keywords: ["DSA"],
  },
  {
    name: "Dipti Chahar",
    roles: ["DSA", "Women in Tech"],
    intro: "Smashes DSA problems and shuttles with equal flair.",
    urls: {
      github: "https://github.com/DiptiChahar",
      linkedin: " https://www.linkedin.com/in/dipti-chahar-948a26247/",
    },
    image: Dipti,
    keywords: ["DSA", "Women in Tech"],
  },
  {
    name: "Divyansh Sethi",
    roles: ["DSA", "Event management"],
    intro:
      "Lives in Choomantar Gali and has applied to get into Hogwarts 235 times.",
    urls: {
      github: "https://github.com/coderizzz",
      linkedin: "https://www.linkedin.com/in/divyansh-sethi-035b7b25b",
    },
    image: Divyansh,
    keywords: ["DSA", "Event management"],
  },
  {
    name: "Bhavya Kataria",
    roles: ["Social Media", "Designer", "Editor"],
    intro: "Not on tinder, but you can find me on discord",
    urls: {
      github: "https://www.github.com/damnbhavya",
      linkedin: "https://www.linkedin.com/in/katariabhavya",
    },
    image: Bhavya,
    keywords: ["Social Media"],
  },
  {
    name: "Aditya Yadav",
    roles: ["Social Media", "Editor"],
    image: Aditya,
    intro: "Can edit everything except your sessional scorecard",
    urls: {
      github: "https://github.com/ADIXD0001",
      linkedin: "https://www.linkedin.com/in/aditya-yadav-098850289",
    },
    keywords: ["Social Media"],
  },
];

export default team.map((member) => ({
  ...member,
  keywords: [...member.keywords, "club"],
}));
