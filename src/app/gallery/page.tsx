import events from "@/data/event";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { Metadata } from "next";
import { metaDataBase } from "@/data/metaData";
// import ClientBackground3D from "@/components/3D/ClientBackground3D";

export default function GalleryPage() {
  return (
    <>
      {/* 3D Background */}
      {/* <ClientBackground3D /> */}

      <section className="relative px-4 py-12 pt-20 text-white sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 bg-white bg-clip-text text-center font-pixelify text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
            Event Gallery
          </h1>
          <ParallaxScroll
            images={events.map((event) => ({
              image: event.images[event.index],
              title: event.title,
              slug: event.slug,
            }))}
          />
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  ...metaDataBase,
  title: "Event Gallery | Deviators Club",
};
