import events from "@/data/event";
import { notFound } from "next/navigation";

import "photoswipe/dist/photoswipe.css";
import ImageGallery from "@/components/Image";
import BackButton from "@/components/BackButton";

interface PageParams {
  eventSlug: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

export default async function Page({ params }: PageProps) {
  const { eventSlug } = await params;
  const event = events.find((e) => e.slug == decodeURIComponent(eventSlug));

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full text-white">
      <div className="mx-auto max-w-7xl px-5 pt-32 pb-20 sm:px-8 sm:pt-36 lg:pt-40">
        <BackButton href="/gallery" label="All Events" />

        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl">
            {event.title}
          </h1>
          <p className="mt-3 text-sm text-white/50 sm:text-base">
            {event.caption}
          </p>
          <p className="mt-1 text-xs text-white/25 sm:text-sm">
            {event.date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <ImageGallery images={event.images} />
      </div>
    </div>
  );
}
