"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const StatisticsSlider = () => {
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

  return (
    <div className="py-6 md:py-8 lg:py-16 bg-white">
      <div className="max-w-[80vw] mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-800 leading-relaxed mx-auto px-2">
            THE YOUNG POPULATION ASPIRATION HAS CHANGED THEIR SPENDING
            PATTERN.FINANCIAL PRESSURE LEADING TO STRESS AND ANXIETY HAS BECOME
            A COMMON PHENOMENON.
          </h2>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              dynamicBullets: true,
              dynamicMainBullets: 1,
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
              clickable: false,
              bulletClass:
                "swiper-pagination-bullet !w-2 !h-2 sm:!w-2.5 sm:!h-2.5 !bg-gray-300 !opacity-100",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-orange-400",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={1200}
            loop={true}
            loopedSlides={statisticsData.length}
            className="statistics-swiper"
          >
            {statisticsData.map((stat, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-col justify-center items-center border-r border-yellow-300 last:border-r-0 transform transition-all duration-500 hover:scale-105 hover:bg-orange-50/30">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-2 sm:mb-3 md:mb-4 leading-none">
                    {stat.percentage}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-snug font-medium max-w-xs sm:max-w-sm md:max-w-md">
                    {stat.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom CSS for Swiper styling */}
        <style jsx global>{`
          .statistics-swiper {
            padding-bottom: 35px !important;
            min-height: 180px;
          }

          @media (min-width: 640px) {
            .statistics-swiper {
              min-height: 200px;
              padding-bottom: 40px !important;
            }
          }

          @media (min-width: 1024px) {
            .statistics-swiper {
              min-height: 220px;
              padding-bottom: 45px !important;
            }
          }

          .statistics-swiper .swiper-pagination {
            bottom: 15px !important;
          }

          .statistics-swiper .swiper-pagination-bullet {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
            margin: 0 3px !important;
          }

          .statistics-swiper .swiper-pagination-bullet:hover {
            background-color: #fb923c !important;
            transform: scale(1.2) !important;
          }

          .statistics-swiper .swiper-pagination-bullet-active {
            transform: scale(1.3) !important;
            background-color: #f97316 !important;
          }

          .statistics-swiper .swiper-slide {
            transition: all 0.5s ease-in-out !important;
          }

          .statistics-swiper .swiper-wrapper {
            transition-timing-function: cubic-bezier(
              0.25,
              0.46,
              0.45,
              0.94
            ) !important;
          }

          /* Mobile optimizations */
          @media (max-width: 639px) {
            .statistics-swiper .swiper-slide > div {
              border-right: none !important;
              border-bottom: 1px solid #fde68a;
              padding-bottom: 12px;
              margin-bottom: 12px;
            }

            .statistics-swiper .swiper-slide:last-child > div {
              border-bottom: none !important;
              margin-bottom: 0;
            }
          }

          /* Smooth infinite animation */
          .statistics-swiper.swiper-horizontal > .swiper-pagination-bullets {
            width: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default StatisticsSlider;
