"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const ResponsiveSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { id: 1, image: "/assets/images/Default1.png", alt: "Slide 1" },
    { id: 2, image: "/assets/images/Default-11.png", alt: "Slide 2" },
    { id: 3, image: "/assets/images/Default-21.png", alt: "Slide 3" },
  ];

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slides.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, slides.length]);

  // Continuous auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="
        relative w-full
        h-[50vw] min-h-[250px]
        sm:h-[50vh] md:h-[65vh] lg:h-[80vh] xl:h-screen
        mb-10 overflow-hidden
      "
    >
      {/* Slider Container */}
      <div className="relative w-full h-full">
        <div
          className="flex w-full h-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                // Always crop a bit on mobile (object-cover)
                className="object-cover object-center"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Left Navigation Button */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 lg:left-6 xl:left-10 z-20">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="group w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black bg-opacity-70 hover:bg-opacity-90 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-200"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Right Navigation Button */}
        <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 lg:right-6 xl:right-10 z-20">
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="group w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-orange-500 hover:bg-orange-600 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
            aria-label="Next slide"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-200"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveSlider;
