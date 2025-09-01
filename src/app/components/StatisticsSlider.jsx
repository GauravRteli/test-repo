"use client";

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay } from "swiper/modules";

// Odometer Hook
const useOdometer = (targetValue, isActive, duration = 2000) => {
  const [currentValue, setCurrentValue] = useState(0);
  const animationRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isActive && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      // Extract numeric value from percentage string
      const numericTarget = parseFloat(targetValue.replace(/[^\d.-]/g, ""));

      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const current = startValue + (numericTarget - startValue) * easeOutQuad;

        setCurrentValue(current);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, targetValue, duration]);

  // Reset animation flag when isActive becomes false
  useEffect(() => {
    if (!isActive) {
      hasAnimatedRef.current = false;
      setCurrentValue(0);
    }
  }, [isActive]);

  // Format the current value back to percentage or range format
  const formatValue = (value) => {
    if (targetValue.includes("-")) {
      // Handle range values like "11-34%"
      const [start, end] = targetValue.split("-");
      const startNum = parseFloat(start);
      const endNum = parseFloat(end.replace(/[^\d.-]/g, ""));
      const ratio = value / endNum;
      const currentStart = Math.round(startNum * ratio);
      const currentEnd = Math.round(value);
      return `${currentStart}-${currentEnd}%`;
    } else {
      // Handle single percentage values
      return `${Math.round(value)}%`;
    }
  };

  return formatValue(currentValue);
};

const StatisticsSlider = () => {
  const [activeSlides, setActiveSlides] = useState(new Set());
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(1);
  const swiperRef = useRef(null);

  const statisticsData = [
    {
      percentage: "70%",
      text: "of Indian employees face mid-month cash shortages, forcing them to borrow.",
    },
    {
      percentage: "42%",
      text: "of employees take high-interest loans before payday.",
    },
    {
      percentage: "83%",
      text: "of employees would stay longer at companies offering on demand salary access.",
    },
    {
      percentage: "40%",
      text: "of employees consider the loan documentation process to be time-consuming and burdensome.",
    },
    {
      percentage: "57%",
      text: "of gig employees rely on predatory lending apps due to irregular cash flow.",
    },
    {
      percentage: "11-34%",
      text: "Financial stress reduces productivity by 11% – 34% costing employers ₹1.2L per employee annually.",
    },
  ];

  // Get current slides per view based on window width
  const getSlidesPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 640) {
        return 2;
      }
    }
    return 1;
  };

  const updateActiveSlides = (swiper) => {
    const newActiveSlides = new Set();
    const activeIndex = swiper.realIndex;
    const slidesPerView = getSlidesPerView();

    // Add currently visible slides to active set
    for (let i = 0; i < slidesPerView; i++) {
      const slideIndex = (activeIndex + i) % statisticsData.length;
      newActiveSlides.add(slideIndex);
    }

    setActiveSlides(newActiveSlides);
    setCurrentSlidesPerView(slidesPerView);
  };

  const handleSlideChange = (swiper) => {
    updateActiveSlides(swiper);
  };

  const handleResize = () => {
    if (swiperRef.current) {
      updateActiveSlides(swiperRef.current);
    }
  };

  useEffect(() => {
    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Initialize active slides based on current viewport
    const initialSlidesCount = getSlidesPerView();
    const initialActiveSlides = new Set();

    for (let i = 0; i < initialSlidesCount; i++) {
      initialActiveSlides.add(i);
    }

    setActiveSlides(initialActiveSlides);
    setCurrentSlidesPerView(initialSlidesCount);
  }, []);

  return (
    <div className="py-6 md:py-10 lg:py-14 bg-white">
      <div className="max-w-[90vw] mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <p className="text-sm uppercase sm:text-xl text-[#141414] leading-relaxed mx-auto px-2">
            The young population's aspirations have changed their spending
            pattern. Financial pressure leading to stress and anxiety has become
            a common phenomenon.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={1000}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Set initial active slides after swiper is ready
            setTimeout(() => updateActiveSlides(swiper), 100);
          }}
          onBreakpoint={(swiper) => {
            // Handle breakpoint changes
            setTimeout(() => updateActiveSlides(swiper), 100);
          }}
          className="statistics-swiper"
        >
          {statisticsData.map((stat, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isPrev, isNext }) => {
                const isSlideActive = activeSlides.has(index);

                return (
                  <div
                    className={`text-center p-4 sm:p-5 md:p-6 lg:p-7 h-full flex flex-col justify-between items-center bg-white transition-transform duration-500 hover:scale-105 min-h-[200px] ${
                      !isActive && (isPrev || isNext)
                        ? "sm:border-l md:border-r border-[#f2ab3c]/50"
                        : ""
                    }`}
                  >
                    <div className="flex-grow flex flex-col justify-center items-center">
                      <StatisticNumber
                        percentage={stat.percentage}
                        isActive={isSlideActive}
                      />
                    </div>
                    <p className="text-[#141414] text-xs sm:text-sm md:text-xl max-w-xs">
                      {stat.text}
                    </p>
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Styling */}
      <style jsx global>{`
        .statistics-swiper {
          padding-bottom: 0px !important;
        }
        .statistics-swiper .swiper-pagination {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

// Separate component for the animated number
const StatisticNumber = ({ percentage, isActive }) => {
  const animatedValue = useOdometer(percentage, isActive, 2000);

  return (
    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f2ab3c] mb-2 sm:mb-3 md:mb-4 leading-none">
      {animatedValue}
    </h3>
  );
};

export default StatisticsSlider;
