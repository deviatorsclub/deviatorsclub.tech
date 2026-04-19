import events from "@/data/event";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Metadata } from "next";
import { metaDataBase } from "@/data/metaData";

export default function GalleryPage() {
  return (
    <div className="min-h-screen w-full text-white">
      <div className="mx-auto max-w-7xl px-5 pt-32 pb-20 sm:px-8 sm:pt-36 lg:pt-40">
        <div className="mb-10 text-center sm:mb-12">
          <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            Event Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40 sm:text-base">
            Relive the highlights from our workshops, hackathons, and community
            meetups.
          </p>
        </div>
        <ParallaxScroll
          images={events.map((event) => ({
            image: event.images[event.index],
            title: event.title,
            slug: event.slug,
          }))}
        />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  ...metaDataBase,
  title: "Event Gallery | Deviators Club",
};
