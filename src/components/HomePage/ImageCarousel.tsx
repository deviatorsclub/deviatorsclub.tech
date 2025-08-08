"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Props for the carousel
interface CarouselProps {
  images: StaticImageData[];
}

// Animation variants for slide transitions
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
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
    <div
      className={`pointer-events-none flex h-16 w-16 items-center justify-center rounded-full bg-Blue opacity-60 shadow-lg`}
    >
      {isLeft ? (
        <ArrowLeft className="h-8 w-8 text-white" />
      ) : (
        <ArrowRight className="h-8 w-8 text-white" />
      )}
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
  // eslint-disable-next-line no-unused-vars
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
          className="rounded-full bg-black/70 p-2 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 sm:p-3"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            resetTimeout();
            paginate(1);
          }}
          className="rounded-full bg-black/70 p-2 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 sm:p-3"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
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
            className={`h-2 w-2 rounded-full shadow-lg transition-colors sm:h-3 sm:w-3 ${
              index === slideIndex ? "bg-white" : "bg-white/50"
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
  // eslint-disable-next-line no-unused-vars
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
          className="pointer-events-none absolute left-0 top-0 z-50"
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
            x: { type: "spring", stiffness: 250, damping: 30, mass: 0.8 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
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
        {/* Gallery heading and link */}
        <h2
          className="mb-1 font-pixelify text-3xl font-bold text-white sm:mb-2 sm:text-4xl md:text-5xl"
          style={{
            textShadow: "0 0 4px rgba(255, 255, 255, 0.3)",
          }}
        >
          View Our Gallery
        </h2>
        <p className="mb-4 text-sm text-gray-300 sm:text-base md:text-lg">
          Explore our curated collection
        </p>
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 rounded-full border border-Blue bg-white/0 px-4 py-2 text-sm text-white transition-all duration-300 hover:gap-3 hover:bg-Blue sm:text-base"
        >
          View Full Gallery
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative mx-auto mt-4 h-[250px] w-full max-w-4xl overflow-hidden sm:mt-8 sm:h-[350px] md:h-[450px] lg:h-[500px]">
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
                  x: { type: "spring", stiffness: 250, damping: 30, mass: 0.8 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
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
