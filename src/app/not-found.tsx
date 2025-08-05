"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl lg:text-8xl">
          404
        </h1>
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Page Not Found
        </h2>
        <p className="mx-auto mb-8 max-w-md text-lg text-gray-400 sm:text-xl">
          Oops! It seems you&apos;ve ventured into uncharted territory.
          Let&apos;s get you back on track.
        </p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center rounded-md border border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 px-6 py-3 text-base font-medium text-black hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
