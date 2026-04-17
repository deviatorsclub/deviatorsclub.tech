"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import type { PanInfo } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowLeft01Icon,
  ArrowLeft02Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";

// Props for the carousel
interface CarouselProps {
  images: StaticImageData[];
}

// Animation variants — smooth crossfade with subtle zoom
const variants = {
  enter: () => ({
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
  },
  exit: () => ({
    zIndex: 0,
    opacity: 0,
    scale: 0.98,
  }),
};

// Swipe logic for drag navigation
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

// Custom mouse cursor for desktop carousel
function CustomCursor({ isLeft }: { isLeft: boolean }) {
  return (
    <div className="glass-card-active pointer-events-none flex h-14 w-14 items-center justify-center rounded-full">
      <HugeiconsIcon
        icon={isLeft ? ArrowLeft01Icon : ArrowRight01Icon}
        size={24}
        className="text-white/70"
      />
    </div>
  );
}

// Carousel controls for touch devices
function TouchableControls({
  paginate,
  images,
  setPage,
  slideIndex,
  resetTimeout,
}: {
  paginate: (newDirection: number) => void;
  images: StaticImageData[];
  setPage: React.Dispatch<React.SetStateAction<[number, number]>>;
  slideIndex: number;
  resetTimeout: () => void;
}) {
  return (
    <>
      <div className="absolute inset-0 z-10 flex cursor-none items-center justify-between p-2 sm:p-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            resetTimeout();
            paginate(-1);
          }}
          className="glass-card-active flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-all hover:text-white sm:h-10 sm:w-10"
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            resetTimeout();
            paginate(1);
          }}
          className="glass-card-active flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-all hover:text-white sm:h-10 sm:w-10"
        >
          <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
        </motion.button>
      </div>
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 transform space-x-1.5 sm:bottom-4 sm:space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              resetTimeout();
              setPage([index, index > slideIndex ? 1 : -1]);
            }}
            className={`h-1.5 rounded-full shadow-sm transition-all sm:h-2 ${
              index === slideIndex
                ? "bg-brand w-5 sm:w-6"
                : "w-1.5 bg-white/20 sm:w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

// Carousel for non-touch devices with custom mouse and drag
function NonTouchableCarousel({
  images,
  page,
  direction,
  paginate,
  slideIndex,
  resetTimeout,
  stopInterval,
}: {
  images: StaticImageData[];
  page: number;
  direction: number;
  paginate: (newDirection: number) => void;
  slideIndex: number;
  resetTimeout: () => void;
  stopInterval: () => void;
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCustomMouse, setShowCustomMouse] = useState(false);

  // Track mouse position and which side is hovered
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setCursorPosition({ x: x - 32, y: y - 32 });
      setHoveredSide(x < rect.width / 2 ? "left" : "right");
    },
    [],
  );

  // Handle drag end for swipe navigation
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      onMouseEnter={() => {
        setShowCustomMouse(true);
        stopInterval();
      }}
      onMouseLeave={() => {
        setShowCustomMouse(false);
        resetTimeout();
      }}
      onClick={() => resetTimeout()}
    >
      {showCustomMouse && (
        <motion.div
          className="pointer-events-none absolute top-0 left-0 z-50"
          style={{
            x: cursorPosition.x,
            y: cursorPosition.y,
          }}
        >
          <CustomCursor isLeft={hoveredSide === "left"} />
        </motion.div>
      )}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[slideIndex].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: 0.6, ease: "easeInOut" },
          }}
          className="absolute h-full w-full overflow-hidden rounded-xl object-cover"
          alt={`Slide ${slideIndex + 1}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          onClick={() =>
            hoveredSide && paginate(hoveredSide === "left" ? -1 : 1)
          }
        />
      </AnimatePresence>
    </div>
  );
}

// Main image carousel component
export default function ImageCarousel({ images }: CarouselProps) {
  const [isTouchableDevice, setIsTouchableDevice] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slideIndex = Math.abs(page % images.length);

  // Change slide by direction
  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  // Detect touch device for controls
  const checkIsTouchableDevice = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsTouchableDevice(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    checkIsTouchableDevice();
    window.addEventListener("resize", checkIsTouchableDevice);
    return () => window.removeEventListener("resize", checkIsTouchableDevice);
  }, [checkIsTouchableDevice]);

  // Auto-advance slides
  useEffect(() => {
    if (!mounted) return;

    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paginate, mounted]);

  // Reset auto-advance timer
  const resetTimeout = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 3000);
  }, [paginate]);

  // Stop auto-advance timer
  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  return (
    <div className="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto mb-4 max-w-4xl text-center sm:mb-6">
        <h2 className="mb-2 text-3xl text-white sm:text-4xl md:text-5xl">
          View Our Gallery
        </h2>
        <p className="mb-5 text-sm text-white/40 sm:text-base md:text-lg">
          Explore our curated collection
        </p>
        <Link href="/gallery" className="btn-primary">
          View Full Gallery
        </Link>
      </div>

      <div className="relative mx-auto mt-4 h-[220px] w-full max-w-3xl overflow-hidden rounded-2xl sm:mt-8 sm:h-[300px] md:h-[380px] lg:h-[420px]">
        {!mounted ? (
          // Static fallback for SSR
          <Image
            src={images[0].src}
            alt="Gallery preview"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1024px"
            className="absolute h-full w-full object-cover"
          />
        ) : isTouchableDevice ? (
          <>
            {/* Touch device carousel */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={page}
                src={images[slideIndex].src}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.6, ease: "easeInOut" },
                  scale: { duration: 0.6, ease: "easeInOut" },
                }}
                className="absolute h-full w-full object-cover"
                alt={`Slide ${slideIndex + 1}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, info) => {
                  const swipe = swipePower(info.offset.x, info.velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
            <TouchableControls
              paginate={paginate}
              images={images}
              setPage={setPage}
              slideIndex={slideIndex}
              resetTimeout={resetTimeout}
            />
          </>
        ) : (
          // Desktop carousel with custom mouse
          <NonTouchableCarousel
            images={images}
            page={page}
            direction={direction}
            paginate={paginate}
            slideIndex={slideIndex}
            resetTimeout={resetTimeout}
            stopInterval={stopInterval}
          />
        )}
      </div>
    </div>
  );
}
