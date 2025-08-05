import webDevLogo from "@/assets/resources/web/logos/webdev-logo.svg";
import swiftLogo from "@/assets/resources/ios/swift.png";
import dsaLogo from "@/assets/resources/dsa/logo.png";
import cyberLogo from "@/assets/resources/cyber/logo.png";
import { StaticImageData } from "next/image";

export const tracks: {
  name: string;
  url: string;
  desc: string;
  image: StaticImageData;
}[] = [
  {
    name: "Web Development",
    url: "web",
    desc: "Build websites and web applications",
    image: webDevLogo,
  },
  {
    name: "DSA",
    url: "dsa",
    desc: "Learn Data Structures and Algorithms",
    image: dsaLogo,
  },
  {
    name: "iOS Development",
    url: "ios",
    desc: "Build apps for iOS devices",
    image: swiftLogo,
  },
  {
    name: "Cybersecurity",
    url: "cyber",
    desc: "Learn about Cybersecurity",
    image: cyberLogo,
  },
];
