import { Metadata } from "next";

export const metaDataBase: Metadata = {
  title: "Deviators Club - Premier Tech Community & Innovation Hub",
  description:
    "Deviators Club is the leading tech community fostering innovation, collaboration, and skill development. Join our exclusive network of developers, entrepreneurs, and tech enthusiasts to explore cutting-edge technologies, participate in hackathons, and transform groundbreaking ideas into reality.",
  keywords:
    "Deviators Club, tech community, innovation hub, programming club, developer community, tech events, hackathons, coding workshops, entrepreneurship, startup incubator, technology education, software development, web development, mobile app development, cybersecurity, data structures algorithms, DCE, Delhi College of Engineering, student tech community, coding bootcamp, tech meetups, innovation lab",
  authors: [{ name: "Deviators Club" }],
  creator: "Deviators Club",
  publisher: "Deviators Club",
  metadataBase: new URL("https://deviatorsclub.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deviators Club - Premier Tech Community & Innovation Hub",
    description:
      "Deviators Club is the leading tech community at DCE fostering innovation, collaboration, and skill development. Join our exclusive network of developers, entrepreneurs, and tech enthusiasts.",
    url: "https://deviatorsclub.tech",
    siteName: "Deviators Club",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deviators Club - Premier Tech Community & Innovation Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviators Club - Premier Tech Community & Innovation Hub",
    description:
      "Deviators Club is the leading tech community fostering innovation, collaboration, and skill development. Join our exclusive network of developers and tech enthusiasts.",
    images: ["/og-image.jpg"],
    creator: "@deviatorsclub",
    site: "@deviatorsclub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
