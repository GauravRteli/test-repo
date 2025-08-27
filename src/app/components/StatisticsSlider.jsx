"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

// Import required modules
import { Autoplay } from "swiper/modules";

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
    <div className="py-6 md:py-10 lg:py-14 bg-white">
      <div className="max-w-[90vw] mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10 lg:mb-12">
          <h2 className="text-sm sm:text-xl text-[#141414] leading-relaxed mx-auto px-2">
            THE YOUNG POPULATION ASPIRATION HAS CHANGED THEIR SPENDING PATTERN.
            FINANCIAL PRESSURE LEADING TO STRESS AND ANXIETY HAS BECOME A COMMON
            PHENOMENON.
          </h2>
        </div>

        {/* Swiper Slider (No Pagination, No Borders) */}
        <Swiper
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
          className="statistics-swiper"
        >
          {statisticsData.map((stat, index) => (
            <Swiper
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
              className="statistics-swiper"
            >
              {statisticsData.map((stat, index) => (
                <SwiperSlide key={`${index}-${Math.random()}`}>
                  {({ isActive, isPrev, isNext }) => (
                    <div
                      className={`text-center p-4 sm:p-5 md:p-6 lg:p-7 h-full flex flex-col justify-between items-center bg-white transition-transform duration-500 hover:scale-105 min-h-[200px] ${
                        !isActive && (isPrev || isNext)
                          ? "sm:border-l md:border-r border-[#f2ab3c]/50"
                          : ""
                      }`}
                    >
                      <div className="flex-grow flex flex-col justify-center items-center">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f2ab3c] mb-2 sm:mb-3 md:mb-4 leading-none">
                          {stat.percentage}
                        </h3>
                      </div>
                      <p className="text-[#141414] text-xs sm:text-sm md:text-xl max-w-xs">
                        {stat.text}
                      </p>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
        </Swiper>
      </div>

      {/* Custom Styling */}
      <style jsx global>{`
        .statistics-swiper {
          padding-bottom: 0px !important; /* no extra spacing */
        }
        .statistics-swiper .swiper-pagination {
          display: none !important; /* hide dots completely */
        }
      `}</style>
    </div>
  );
};

export default StatisticsSlider;
