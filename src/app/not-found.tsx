"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { IoArrowBack } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-white sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-brand-light text-sm font-medium tracking-wider">
          ERROR 404
        </p>
        <h1 className="mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/40 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="btn-primary mt-8 inline-flex items-center gap-2 text-sm"
        >
          <IoArrowBack />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
