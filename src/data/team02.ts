import Yukta from "@/assets/team02/Yukta.webp";
import Anup from "@/assets/team02/Anup.webp";
import Daksh from "@/assets/team02/Daksh.webp";
import Aayush from "@/assets/team02/Aayush.webp";
import Arpita from "@/assets/team02/Arpita.webp";
import Risha from "@/assets/team02/Risha.webp";
import Vidushi from "@/assets/team02/Vidushi.webp";
import Isha from "@/assets/team02/Isha.webp";
import Kunal from "@/assets/team02/Kunal.webp";
import Tanmay from "@/assets/team02/Tanmay.webp";
import Pooja from "@/assets/team02/Pooja.webp";
import Riya from "@/assets/team02/Riya.webp";
import Bhavya from "@/assets/team02/Bhavya.webp";
import Radhika from "@/assets/team02/Radhika.webp";
import SukratiMam from "@/assets/team02/SukratiMam.webp";
import Nikhil from "@/assets/team02/Nikhil.webp";
import Kartik from "@/assets/team02/Kartik.webp";
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
    leetcode?: string;
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
      portfolio: "https://vinspace.live",
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
    keywords: ["Web Development"],
  },
  {
    name: "Radhika Khatter",
    roles: ["Co Lead", "Web Dev"],
    intro: "Expecto patronum - against null pointers.",
    urls: {
      github: "https://github.com/radhika-khatter",
      linkedin: "https://www.linkedin.com/in/radhika-khatter-94a60b28a/",
      twitter: "https://x.com/Radhika_Khatter",
    },
    image: Radhika,
    keywords: ["Web Development"],
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
    keywords: ["Cyber Security"],
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
    keywords: ["Cyber Security"],
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
    keywords: ["DSA"],
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
    keywords: ["DSA"],
  },
  {
    name: "Kartik",
    roles: ["Lead", "AI/ML"],
    intro: "It's me and my huh against the world.",
    urls: {
      github: "https://github.com/KartikGhansela",
      linkedin: "https://www.linkedin.com/in/kartik-ghansela-a9bb41332/",
    },
    image: Kartik,
    keywords: ["AI/ML"],
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
    keywords: ["AI/ML"],
  },
  {
    name: "Bhavya Kataria",
    roles: ["Lead", "Social Media", "Designer"],
    intro: "My spidey-sense has been tingling since birth.",
    urls: {
      github: "https://www.github.com/damnbhavya",
      linkedin: "https://www.linkedin.com/in/katariabhavya",
      twitter: "https://x.com/dizzywebhead",
      portfolio: "https://bhavya.page",
    },
    image: Bhavya,
    keywords: ["Social Media", "Designer"],
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
    keywords: ["Social Media"],
  },
  {
    name: "Nikhil",
    roles: ["Co Lead", "Video Editor", "Social Media"],
    image: Nikhil,
    intro: "Editing life frame by frame.",
    urls: {
      github: "https://github.com/nikkhil-05",
      linkedin: "https://www.linkedin.com/in/nikhil-kumar-engg",
    },
    keywords: ["Social Media"],
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
    keywords: ["Event Management"],
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
      twitter: "https://x.com/Aaaayyuuuuuuuuu",
    },
    keywords: ["Event Management"],
  },
];

export default team.map((member) => ({
  ...member,
  keywords: [...member.keywords, "club"],
}));
