import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn - Tech Resources & Tutorials | Deviators Club",
  description:
    "Explore comprehensive learning resources for web development, cybersecurity, iOS development, and data structures & algorithms. Free tutorials, projects, and coding resources curated by Deviators Club.",
  keywords:
    "tech learning resources, web development tutorials, cybersecurity courses, iOS development, DSA practice, coding tutorials, programming resources, developer education",
  openGraph: {
    title: "Learn - Tech Resources & Tutorials | Deviators Club",
    description:
      "Explore comprehensive learning resources for web development, cybersecurity, iOS development, and DSA. Free tutorials and projects by Deviators Club.",
    images: ["/banner.png"],
    url: "https://www.deviatorsclub.tech/learn",
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
