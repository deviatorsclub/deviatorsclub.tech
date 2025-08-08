import { Metadata } from "next";

export const metaDataBase: Metadata = {
  title: "Deviators Club",
  description:
    "Join Deviators Club to explore groundbreaking ideas, collaborate with innovative minds, and transform concepts into reality. Connect with fellow creators and entrepreneurs.",
  keywords:
    "innovation, collaboration, creative ideas, entrepreneurship, startup community, idea exploration, DCE tech community",
  authors: [{ name: "Deviators Club" }],
  creator: "Deviators Club",
  publisher: "Deviators Club",
  metadataBase: new URL("https://deviatorsclub.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deviators Club",
    description:
      "Join Deviators Club to explore groundbreaking ideas, collaborate with innovative minds, and transform concepts into reality.",
    url: "https://deviatorsclub.tech",
    siteName: "Deviators Club",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deviators Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviators Club",
    description:
      "Join Deviators Club to explore groundbreaking ideas, collaborate with innovative minds, and transform concepts into reality.",
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
