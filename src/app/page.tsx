// Home page sections
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import TeamPreviewSection from "@/components/HomePage/TeamPreview";
import ImageCarousel from "@/components/HomePage/ImageCarousel";
import events from "@/data/event";
import GroupPicture from "@/assets/group_pic.png";

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
