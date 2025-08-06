import Yukta from "@/assets/team/Yukta.webp";
import Anup from "@/assets/team/Anup.webp";
import Shaarvy from "@/assets/team/Shaarvy.webp";
import Daksh from "@/assets/team/Daksh.webp";
import Ayush from "@/assets/team/Ayush.webp";
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
  };
  image: StaticImageData;
  keywords: string[];
}[] = [
  {
    name: "Pooja Goel",
    roles: ["President"],
    intro: "Can code in any language (if chatgpt is accessible)",
    urls: {
      github: "https://github.com/kanakOS01",
      linkedin: "https://www.linkedin.com/in/kanak-tanwar",
      twitter: "https://x.com/kanaktwts",
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
      linkedin: "https://www.linkedin.com/in/vidushi-anand-49420928a",
      twitter: "https://x.com/Vidushi_Anand_",
    },
    image: Vidushi,
    keywords: ["President"],
  },
  {
    name: "Kunal Verma",
    roles: ["Lead", "Web Dev"],
    intro: "Either too crazy or too diabolic for you",
    urls: {
      github: "https://www.github.com/kunalverma06",
      linkedin: "https://www.linkedin.com/in/kunal-verma-528431291",
    },
    image: Kunal,
    keywords: ["Web Development", "lead"],
  },
  {
    name: "Bhavya Kataria",
    roles: ["Lead", "Social Media", "Designer"],
    intro: "My spidey-sense has been tingling since birth",
    urls: {
      github: "https://www.github.com/damnbhavya",
      linkedin: "https://www.linkedin.com/in/katariabhavya",
    },
    image: Bhavya,
    keywords: ["Social Media"],
  },
  {
    name: "Tanmay Verma",
    roles: [" Lead", "Cyber Security "],
    intro: "Guarding your data like it's my last Maggi packet",
    urls: {
      github: "https://github.com/Tanmay1906",
      linkedin: "https://www.linkedin.com/in/tanmayverma190605",
    },
    image: Tanmay,
    keywords: ["cyber security", "blockchain"],
  },

  {
    name: "Shaarvy",
    roles: ["Lead", "Web 3 "],
    intro: "I write novels with better logic than my code.",
    urls: {
      github: "https://github.com/Shaarvyxm",
      linkedin: "https://www.linkedin.com/in/Shaarvy-dce",
      twitter: "https://x.com/devShaarvyt",
      portfolio: "https://Shaarvyxm.com",
    },
    image: Shaarvy,
    keywords: ["web3"],
  },

  {
    name: "Anup Pandey",
    roles: ["Lead", "DSA"],
    intro: "If it's unsolvable, it's mine.",
    urls: {
      github: "https://github.com/Anup09Chahal",
      linkedin: "https://www.linkedin.com/in/Anupchahal09/",
      twitter: "https://x.com/Anupchahal09",
    },
    image: Anup,
    keywords: ["DSA", "lead"],
  },

  {
    name: "Arpita ",
    roles: ["Lead", "DSA"],
    intro: "Running on logic, debugging in peace.",
    urls: {
      github: "https://github.com/Arpitaa0402",
      linkedin: "https://www.linkedin.com/in/Arpita-anand-4a371a26b",
    },
    image: Arpita,
    keywords: ["women", "Co lead", "DSA"],
  },

  {
    name: "Risha ",
    roles: ["Co Lead", "Cyber Security "],
    intro: "I'm a calm browser, until you see 47 tabs open in my brain.",
    urls: {
      github: "https://github.com/rishabatra1802",
      linkedin: "https://www.linkedin.com/in/risha-batra-47186a289/",
    },
    image: Risha,
    keywords: ["Co lead", "women", "Cyber Security"],
  },

  {
    name: "Isha Nayal",
    roles: ["Co Lead", " AI/ML"],
    intro: "Training models and my patience.",
    urls: {
      github: "https://github.com/Isha-thakur",
      linkedin: "https://www.linkedin.com/in/Ishathakur30/",
      twitter: "https://x.com/Menace_thakur",
    },
    image: Isha,
    keywords: ["AI/ML "],
  },

  {
    name: "Radhika Khatter",
    roles: ["Co Lead", "Web Dev"],
    intro: "If sleep were an Olympic sport, I’d win — even on a park bench.",
    urls: {
      github: "https://www.github.com/kunalverma06",
      linkedin: "https://www.linkedin.com/in/kunal-verma-528431291",
    },
    image: Radhika,
    keywords: ["Web Development", "lead"],
  },
  {
    name: "Yukta Khatter ",
    roles: ["Lead", "Event Management"],
    intro: "Leading the crew that turns 'what if into 'what an event!",
    urls: {
      github: "https://github.com/Hero-Alpha",
      linkedin: "https://www.linkedin.com/in/yash-kumar-4a936426b/",
    },
    image: Yukta,
    keywords: ["lead", "event Management"],
  },
  {
    name: "Nishant Yadav ",
    roles: ["Co Lead", "Event Management"],
    intro: "If jugaad was a person, it'd be him.",
    urls: {
      github: "https://github.com/sa1-1rabh",
      linkedin: "https://www.linkedin.com/in/sa1-1rabh",
    },
    image: Nishant,
    keywords: ["Co lead", "event Management"],
  },
  {
    name: "Daksh Sharma",
    roles: ["Event Management"],
    intro: "Calm on the surface, chaos coordinator underneath.",
    urls: {
      github: "https://github.com/Dakshbhatt07",
      linkedin: "https://www.linkedin.com/in/krishna-kartikay-bhatt/",
    },
    image: Daksh,
    keywords: ["event Management"],
  },
  {
    name: "Aayush Kathuria",
    roles: ["Event Management"],
    intro: "Born to be a traveller forced to be an engineer.",
    image: Ayush,
    urls: {
      github: "https://github.com/agayushh",
      linkedin: "https://www.linkedin.com/in/ayush-goyal-b4491324b",
      twitter: "http://x.com/agayushh",
      portfolio: "http://agayush.me/",
    },
    keywords: ["event Management"],
  },

  {
    name: "Riya Sangwan",
    roles: ["Co Lead", "Social Media"],
    image: Riya,
    intro: "Low drama, high vibes - running on chai and quiet ambitious.",
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
