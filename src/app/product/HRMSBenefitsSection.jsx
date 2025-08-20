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

// ✅ Converted to JavaScript (removed TypeScript type annotations)
const FeatureItem = ({ title, description, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex gap-4 items-start mb-10 transition-all duration-700 transform ${
        inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <CheckIcon />
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
      }, 1500);
      return () => clearInterval(interval);
    }, [sliderImages.length]);

    const getVisibleSlides = () => {
      const slides = [];
      const totalSlides = sliderImages.length;

      const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
      slides.push({ index: prevIndex, position: "previous" });

      slides.push({ index: currentIndex, position: "current" });

      const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
      slides.push({ index: nextIndex, position: "next" });

      return slides;
    };

    return (
      <div className="flex items-center justify-center bg-white">
        <div className="relative w-80">
          <div className="relative h-[600px] w-full flex flex-col items-center justify-center overflow-hidden">
            {getVisibleSlides().map((slide) => {
              const isPrevious = slide.position === "previous";
              const isCurrent = slide.position === "current";

              return (
                <div
                  key={`${slide.index}-${slide.position}`}
                  className={`absolute transition-all duration-1000 ease-in-out transform ${
                    isPrevious
                      ? "-translate-y-32 scale-75 blur-[2px] opacity-70"
                      : isCurrent
                      ? "translate-y-0 scale-100 blur-0 opacity-100"
                      : "translate-y-32 scale-75 blur-[2px] opacity-70"
                  }`}
                  style={{
                    transformOrigin: "center",
                    zIndex: isCurrent ? 20 : 10,
                  }}
                >
                  <div className={`relative ${isCurrent ? "p-1" : ""}`}>
                    {isCurrent && (
                      <div
                        className="absolute inset-0 bg-black rounded-xl"
                        style={{ padding: "8px" }}
                      >
                        <div className="bg-white rounded-lg h-full w-full"></div>
                      </div>
                    )}

                    <Image
                      src={sliderImages[slide.index]}
                      alt={`Slide ${slide.index + 1}`}
                      width={320}
                      height={256}
                      className={`relative z-10 object-cover rounded-lg shadow-xl ${
                        isCurrent
                          ? "w-80 h-64 border-8 border-white"
                          : "w-80 h-64"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 items-start">
          <div>
            <div
              ref={ref}
              className={`mb-12 transition-all duration-1000 transform ${
                inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-orange-400 text-lg font-medium uppercase mb-4">
                BENEFITS
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                All-in-One HRMS Platform
              </h1>
              <p className="text-gray-600 text-md max-w-lg">
                Alongside Earned Wage Access, AGI Moneey offers a fully
                integrated HRMS solution designed to simplify workforce
                management through a secure web-based admin portal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 ml-4 gap-x-8 gap-y-10">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
          <VerticalImageSlider />
        </div>
      </div>
    </section>
  );
};

export default HRMSBenefitsSection;
