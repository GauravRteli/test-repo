"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";

const CheckIcon = () => (
  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M13.5 4.5L6 12L2.5 8.5"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const FeatureItem = ({ title, description, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex gap-4 items-start mb-6 sm:mb-8 transition-all duration-700 transform ${
        inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
      <CheckIcon />
    </div>
  );
};

const VerticalImageSlider = () => {
  const sliderImages = [
    "/assets/images/pro/6.11.png",
    "/assets/images/pro/6.22.png",
    "/assets/images/pro/6.33.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const getInfiniteImages = () => [
    sliderImages[sliderImages.length - 1],
    ...sliderImages,
    sliderImages[0],
  ];

  const infiniteImages = getInfiniteImages();

  // Define width and height separately based on your actual image dimensions
  const slideConfig = {
    base: { width: 240, height: 180 }, // 4:3 aspect ratio
    sm: { width: 280, height: 210 }, // 4:3 aspect ratio
    md: { width: 320, height: 240 }, // 4:3 aspect ratio
    lg: { width: 360, height: 270 }, // 4:3 aspect ratio
    xl: { width: 400, height: 300 }, // 4:3 aspect ratio
  };

  const breakpoints = [
    { min: 1280, config: slideConfig.xl },
    { min: 1024, config: slideConfig.lg },
    { min: 768, config: slideConfig.md },
    { min: 640, config: slideConfig.sm },
    { min: 0, config: slideConfig.base },
  ];

  const [slideSize, setSlideSize] = useState(slideConfig.base);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      for (const bp of breakpoints) {
        if (width >= bp.min) {
          setSlideSize(bp.config);
          break;
        }
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const visibleSlides = [-1, 0, 1];

  return (
    <div className="flex items-center justify-center w-full md:py-8">
      <div
        className="relative w-full mx-auto"
        style={{
          maxWidth: `${slideSize.width}px`,
          height: `${slideSize.height * 2.5}px`,
          overflow: "hidden",
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            width: "100%",
            height: "100%",
            top: `calc(50% - ${slideSize.height / 2}px)`,
            transition: "transform 1s cubic-bezier(.4,0,.2,1)",
            willChange: "transform",
            transform: `translateY(-${
              (currentIndex + 1) * (slideSize.height + 15)
            }px)`,
          }}
        >
          {infiniteImages.map((image, index) => {
            const relativeIndex = index - (currentIndex + 1);
            if (!visibleSlides.includes(relativeIndex)) return null;

            const scale = relativeIndex === 0 ? 1 : 0.85;
            const opacity = relativeIndex === 0 ? 1 : 0.55;
            const zIndex = relativeIndex === 0 ? 10 : 5;
            const border =
              relativeIndex === 0
                ? "4px solid #F59E0B"
                : "2px solid transparent";

            return (
              <div
                key={`slide-${index}-${image}`}
                style={{
                  position: "absolute",
                  top: `${index * (slideSize.height + 15)}px`,
                  left: "50%",
                  transform: `translateX(-50%) scale(${scale})`,
                  width: `${slideSize.width}px`,
                  height: `${slideSize.height}px`, // Different width and height
                  transition:
                    "transform 1s cubic-bezier(.4,0,.2,1), opacity 1s cubic-bezier(.4,0,.2,1)",
                  opacity,
                  zIndex,
                  borderRadius: 16,
                  background: "white",
                  boxShadow: "none",
                  overflow: "hidden",
                  border,
                  padding: "6px",
                }}
              >
                <Image
                  src={image}
                  alt=""
                  width={slideSize.width}
                  height={slideSize.height}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // Shows full image without cropping
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                  priority={relativeIndex === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const HRMSBenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Effortless Workforce Management",
      description:
        "Manage employee profiles, track attendance, shifts, leave, and team schedules in one place",
    },
    {
      title: "Automated Payroll Processing",
      description:
        "Streamline salary calculations, deductions, and disbursements with error-free automation",
    },
    {
      title: "Unified Workforce Dashboard",
      description:
        "Centralize all employee data across teams and departments for real-time access and insights",
    },
    {
      title: "All-in-One HR Platform",
      description:
        "Eliminate third-party dependencies by running payroll, attendance, & HR operations on a single secure system",
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-16 bg-white px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-10 items-start">
          {/* Left/Top content */}
          <div>
            <div
              ref={ref}
              className={`mb-12 transition-all duration-1000 transform ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-orange-400 text-center md:text-left text-base sm:text-lg uppercase mb-4 font-semibold tracking-wider">
                BENEFITS
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                All-in-One HRMS Platform
              </h1>
              <p className="text-gray-600 text-[15px] sm:text-base md:text-lg max-w-lg leading-relaxed">
                Alongside Earned Wage Access, AGI Moneey offers a fully
                integrated HRMS solution designed to simplify workforce
                management through a secure web-based admin portal
              </p>
            </div>

            {/* Features with card-like styling and hover effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500 transform hover:-translate-y-2 ${
                    inView
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-[#f2ab3c] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Enhanced CheckIcon with hover effects */}
                    <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="group-hover:scale-110 transition-transform duration-300"
                      >
                        <path
                          d="M13.5 4.5L6 12L2.5 8.5"
                          stroke="#F59E0B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:stroke-[#f2ab3c]"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Subtle bottom accent line that appears on hover */}
                </div>
              ))}
            </div>
          </div>

          {/* Right/Bottom image slider */}
          <div className="w-full pl-0 sm:pl-4 md:pl-8 flex justify-center items-center lg:justify-center">
            <VerticalImageSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRMSBenefitsSection;
