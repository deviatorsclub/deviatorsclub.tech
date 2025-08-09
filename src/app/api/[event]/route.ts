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
          // For static imports, src is already the correct path
          src: image.src,
        })),
      ),
      { status: 200 },
    );
  }

  return new Response(JSON.stringify({ error: "Event not found" }), {
    status: 404,
  });
}
