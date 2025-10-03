import { Metadata } from "next";

export const metaDataBase: Metadata = {
  title: {
    default: "Deviators Club - Code. Create. Deviate.",
    template: "%s | Deviators Club",
  },
  description:
    "Deviators Club empowers coders and innovators to learn, build, and lead with workshops, hackathons, and collaborative tech projects. Join our community of passionate developers, entrepreneurs, and tech enthusiasts to explore cutting-edge technologies and transform groundbreaking ideas into reality.",
  keywords:
    "Deviators Club, Code Create Deviate, tech community, innovation hub, developer community, programming club, tech events, hackathons, coding workshops, collaborative tech projects, entrepreneurship, startup incubator, technology education, software development, web development training, mobile app development, cybersecurity workshops, data structures algorithms, coding bootcamp, tech meetups, innovation lab, developer empowerment, tech leadership",
  authors: [{ name: "Deviators Club" }],
  creator: "Deviators Club",
  publisher: "Deviators Club",
  metadataBase: new URL("https://deviatorsclub.tech"),
  alternates: {
    canonical: "https://deviatorsclub.tech",
  },
  openGraph: {
    title: "Deviators Club - Code. Create. Deviate.",
    description:
      "Deviators Club empowers coders and innovators to learn, build, and lead. Join our community for workshops, hackathons, and collaborative tech projects. Transform ideas into reality!",
    url: "https://deviatorsclub.tech",
    siteName: "Deviators Club",
    images: [
      {
        url: "/group_pic.jpg",
        width: 1200,
        height: 630,
        alt: "Deviators Club - Code. Create. Deviate. Premier Tech Community",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deviators Club - Code. Create. Deviate.",
    description:
      "Deviators Club empowers coders and innovators with workshops, hackathons & collaborative tech projects. Join our community and transform ideas into reality!",
    images: ["/group_pic.jpg"],
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
  category: "Technology",
  classification: "Technology Organization",
  other: {
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};
