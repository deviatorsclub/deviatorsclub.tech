import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import events from "@/data/event";
import { notFound } from "next/navigation";

import "photoswipe/dist/photoswipe.css";
import ImageGallery from "@/components/Image";

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
    <div className="min-h-screen px-4 py-12 pt-20 text-white sm:px-6 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/gallery"
          className="mb-8 inline-flex items-center text-white"
        >
          <ChevronLeftIcon className="mr-2 h-5 w-5" />
          Back to Gallery
        </Link>
        <h1 className="mb-4 bg-white bg-clip-text font-pixelify text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
          {event.title}
        </h1>
        <p className="mb-2 text-xl text-gray-300">{event.caption}</p>
        <p className="mb-8 text-gray-400">
          {event.date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <ImageGallery images={event.images} />
      </div>
    </div>
  );
}
