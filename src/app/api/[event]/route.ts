import events from "@/data/event";

export async function GET(
  request: Request,
  { params }: { params: { event: string } },
) {
  const { event } = params;

  const eventData = events.find((e) => e.slug === event);

  if (eventData) {
    return new Response(
      JSON.stringify(
        eventData.images.map((image) => ({
          ...image,
          src: `${process.env.NEXT_PUBLIC_API_URL}${image.src.replace("/server/assets/", "/_next/static/media/")}`,
        })),
      ),
      { status: 200 },
    );
  }

  return new Response(JSON.stringify({ error: "Event not found" }), {
    status: 404,
  });
}
