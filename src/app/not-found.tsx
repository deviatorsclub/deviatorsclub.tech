"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/24/outline";

// Custom 404 Not Found page with animation and styled button
export default function NotFound() {
  return (
    <div className="flex h-[74vh] flex-col items-center justify-center px-4 text-white sm:px-6 lg:px-8">
      {/* Animated container for fade-in effect */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Main 404 heading */}
        <h1 className="mb-4 bg-white bg-clip-text font-pixelify text-6xl font-bold text-transparent sm:text-7xl lg:text-8xl">
          404
        </h1>
        {/* Subheading */}
        <h2 className="mb-6 font-pixelify text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Page Not Found
        </h2>
        {/* Description */}
        <p className="mx-auto mb-8 max-w-md text-lg text-gray-400 sm:text-xl">
          Oops! It seems you&apos;ve ventured into uncharted territory.
          Let&apos;s get you back on track.
        </p>
        {/* Back to Home button */}
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-md border border-transparent bg-Blue px-6 py-3 text-base font-medium text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
