import { Metadata } from "next";
// Home page sections
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import TeamPreviewSection from "@/components/HomePage/TeamPreview";
import ImageCarousel from "@/components/HomePage/ImageCarousel";
import events from "@/data/event";
import GroupPicture from "@/assets/group_pic.png";

// Enhanced metadata for homepage
export const metadata: Metadata = {
  title: "Deviators Club - Code. Create. Deviate.",
  description:
    "Deviators Club empowers coders and innovators to learn, build, and lead with workshops, hackathons, and collaborative tech projects. Join our passionate community of developers and tech enthusiasts to transform ideas into reality!",
  keywords:
    "Deviators Club, Code Create Deviate, tech community, hackathons, coding workshops, collaborative tech projects, programming club, innovation hub, developer community, tech empowerment",
  alternates: {
    canonical: "https://deviatorsclub.tech",
  },
  openGraph: {
    title: "Deviators Club - Code. Create. Deviate.",
    description:
      "Deviators Club empowers coders and innovators with workshops, hackathons, and collaborative tech projects. Join our community and transform ideas into reality!",
    images: ["/group_pic.jpg"],
    url: "https://deviatorsclub.tech",
  },
  twitter: {
    title: "Deviators Club - Code. Create. Deviate.",
    description:
      "Deviators Club empowers coders and innovators with workshops, hackathons & collaborative tech projects!",
    images: ["/group_pic.jpg"],
  },
};

// Main homepage component
export default function Home() {
  // Collect images for carousel: group picture + event images
  const images = [
    GroupPicture,
    ...events.map((event) => event.images[event.index]),
  ];
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TeamPreviewSection />
      <ImageCarousel images={images} />
    </main>
  );
}
