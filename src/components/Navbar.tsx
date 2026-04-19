"use client";

import { useState, useEffect, memo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import deviatorsLogoMin from "@/assets/logo/sm.svg";
import navItems from "@/data/navItems";

const Navigation = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle hash links (/#about, /#contact) from non-home pages
  const handleNavClick = useCallback(
    (e: React.MouseEvent, link: string) => {
      const hashIndex = link.indexOf("#");
      if (hashIndex === -1) return; // normal link, let Next.js handle it

      const basePath = link.substring(0, hashIndex) || "/";
      const hash = link.substring(hashIndex + 1);

      if (pathname === basePath || (pathname === "/" && basePath === "/")) {
        // Same page — just scroll
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Different page — navigate, then scroll after load
        e.preventDefault();
        router.push(basePath);
        const waitAndScroll = () => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            setTimeout(waitAndScroll, 100);
          }
        };
        setTimeout(waitAndScroll, 300);
      }
    },
    [pathname, router],
  );

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
      className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
    >
      <div
        className={`relative w-full max-w-5xl rounded-2xl transition-all duration-500 ease-out ${
          mounted && (isScrolled || isMenuOpen)
            ? "glass-card-active"
            : "border border-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-5 md:h-16 md:px-6">
          {/* Logo */}
          <Link href="/" className="group relative flex-shrink-0">
            <Image
              src={deviatorsLogoMin.src}
              alt="Deviators Logo"
              width={40}
              height={40}
              className="h-6 w-auto transition-all duration-300 group-hover:brightness-125 md:h-7"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:block">
            <div
              className="relative flex items-center gap-1"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="relative z-10 flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={(e) => handleNavClick(e, item.link)}
                >
                  {/* Animated hover pill */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        className="absolute inset-0 rounded-xl bg-white/[0.08]"
                        layoutId="navHover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  <HugeiconsIcon
                    icon={item.icon}
                    size={16}
                    className="relative z-10 transition-colors duration-200"
                  />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={handleMenuToggle}
            className="relative inline-flex items-center justify-center rounded-xl p-2 text-white/80 transition-colors duration-200 hover:bg-white/[0.08] hover:text-white md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <HugeiconsIcon
                  icon={Cancel01Icon}
                  size={22}
                  aria-hidden="true"
                />
              ) : (
                <HugeiconsIcon icon={Menu01Icon} size={22} aria-hidden="true" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" as const }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-white/[0.06] px-4 pt-2 pb-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.link}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium text-white/70 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                      onClick={(e) => {
                        handleNavClick(e, item.link);
                        handleMenuClose();
                      }}
                    >
                      <HugeiconsIcon icon={item.icon} size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
