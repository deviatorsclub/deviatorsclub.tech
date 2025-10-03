import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - Deviators Club",
  description:
    "Meet the passionate team behind Deviators Club. Our diverse group of developers, designers, and tech enthusiasts driving innovation and fostering community growth through collaborative tech projects.",
  keywords:
    "Deviators Club team, tech community leadership, developer team, programming community, innovation team, tech enthusiasts",
  openGraph: {
    title: "Our Team - Deviators Club",
    description:
      "Meet the passionate team behind Deviators Club. Diverse group of developers, designers, and tech enthusiasts driving innovation.",
    images: ["/group_pic.jpg"],
    url: "https://deviatorsclub.tech/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
