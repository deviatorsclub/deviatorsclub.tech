"use client";

import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function BackButton({
  href,
  label = "Back",
}: {
  href: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="group mb-6 inline-flex items-center gap-2 text-sm text-white/40 transition-colors duration-200 hover:text-white/70"
    >
      <IoArrowBack className="transition-transform duration-200 group-hover:-translate-x-0.5" />
      {label}
    </Link>
  );
}
