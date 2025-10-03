import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { Quicksand } from "next/font/google";
import { metaDataBase } from "@/data/metaData";
import {
  organizationStructuredData,
  websiteStructuredData,
} from "@/data/structuredData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Local Pixelify font configuration for headings and highlights
const pixelifySans = localFont({
  src: "../../public/fonts/Pixelify.ttf",
  display: "swap",
  fallback: ["cursive", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-pixelify",
  weight: "400",
});

// Quicksand font for body text
const quicksand = Quicksand({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
  preload: true,
  variable: "--font-quicksand",
  adjustFontFallback: false,
});

// Next.js metadata configuration
export const metadata: Metadata = {
  ...metaDataBase,
};

// Root layout for the entire app
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${pixelifySans.variable} ${quicksand.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Basic meta tags and icons */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className={`${quicksand.className} min-h-screen antialiased`}>
        {/* Animated background and navigation */}
        <AnimatedBackground />
        <Navbar />
        {/* Main content */}
        {children}
        <Footer />
        {/* Vercel analytics & speed counter (only in production) */}
        {process.env.NODE_ENV === "production" && <Analytics />}
        {process.env.NODE_ENV === "production" && <SpeedInsights />}
      </body>
    </html>
  );
}
