"use client";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollProgressBar from "../components/ScrollProgressBar";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  useEffect(() => {
    // Animation on scroll observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .ring-pulse-wrapper::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 9999px;
          border: 1.5px solid gray;
          box-sizing: border-box;
          animation: gray-ring-pulse 3s infinite;
          opacity: 0.5;
          z-index: 0;
        }

        @keyframes gray-ring-pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          70%,
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>

      <ScrollProgressBar />
      {/* Link for Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        rel="stylesheet"
      />

      {/* About Section */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0 bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/assets/images/pro/Component 127.png')",
        }}
        initial={{ y: 200, opacity: 0 }} // small offset, not full viewport height
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 3, // slower duration
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 1.2,
        }}
      >
        <div className="w-full max-w-[90vw] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Image Section with floating animation */}
            <motion.div
              className="w-full lg:w-1/2 flex items-center justify-center"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-xl">
                <Image
                  src="/assets/images/pro/16.png"
                  alt="Floating"
                  className="floating object-contain w-full h-auto"
                  width={600} /* Set to 600 */
                  height={600} /* Set to 600 */
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                />
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6">
              {/* About Us Tag */}
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white uppercase tracking-wider">
                ABOUT US
              </h1>

              {/* Main Headings */}
              <div className="space-y-1 sm:space-y-3">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black">
                  Empowering Financial
                </h2>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black">
                  Freedom, in One Tap
                </h2>
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base md:text-lg text-justify lg:text-left leading-relaxed text-gray-800">
                  We&apos;re a fast-growing FinTech startup, backed by our own
                  NBFC, on a mission to revolutionize earnings management. Our
                  Earnings on Demand solution empowers employees with secure,
                  transparent, and responsible access to their earned salary
                  —whenever they need it.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-justify lg:text-left leading-relaxed text-gray-800">
                  The traditional monthly pay cycle leaves employees financially
                  strained, pushing many toward high-interest loans or risky
                  borrowing. AGI Moneey bridges this gap, turning every day into
                  payday. With real-time access to earned income, we reduce
                  financial stress, boost productivity, and prevent debt
                  traps—creating a movement toward true financial wellness.
                </p>

                {/* Call to Action */}
                <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-black pt-2">
                  We are making every day a payday
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <div className="animate-on-scroll">
        <section className="py-12 sm:pt-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
          <div className="container mx-auto max-w-7xl">
            {/* Vision Header Section */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <div className="w-full text-center lg:text-left lg:w-2/3">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider text-[#F2AB3C] mb-3 sm:mb-4 font-semibold">
                  our vision
                </h2>
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl text-left font-bold leading-tight mb-4 sm:mb-6 text-gray-900"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  To be India&apos;s Most Pioneer & Reliable
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Salary on Demand Platform
                </motion.h2>
              </div>

              <div className="w-full lg:w-1/3 flex items-start lg:items-center">
                <motion.p
                  className="text-sm sm:text-base md:text-lg text-[#606060] leading-relaxed"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  At AGI Moneey, we envision a future where employees have
                  seamless, instant, and responsible access to their hard-earned
                  wages—because financial freedom shouldn&apos;t wait
                </motion.p>
              </div>
            </div>

            {/* Description Section */}
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <p className="text-sm sm:text-base md:text-lg text-[#606060] text-left leading-relaxed mx-auto">
                We are committed to transforming the way employees manage their
                finances by providing a flexible, transparent, and ethical
                Salary on Demand solution. Our vision goes beyond traditional
                payroll systems; it&apos;s about empowering employees, enhancing
                workplace productivity, and breaking the cycle of debt traps
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Feature Card 1 */}
              <div className="feature-box zoom p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-lg hover:border-purple-200 transition-all duration-300 group">
                <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[57px] lg:h-[55px] group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 57 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="28.3075"
                      cy="27.746"
                      rx="28.3075"
                      ry="26.9266"
                      fill="#A96EDD"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M39.2413 20.923C39.2145 20.368 38.9504 19.8666 38.5542 19.4973C38.158 19.128 37.6298 18.9423 37.0748 18.9959C36.5197 19.0227 36.0184 19.2869 35.6748 19.683L25.1106 31.5678L20.2793 27.1823C19.8831 26.813 19.3549 26.6273 18.7999 26.6541C18.2448 26.6809 17.7434 26.9182 17.3999 27.3144C17.0306 27.7105 16.8449 28.2387 16.8717 28.7938C16.8985 29.3488 17.1358 29.8502 17.532 30.1937L23.8974 35.9771C24.2668 36.3207 24.7692 36.5054 25.2706 36.5054H25.4026C25.9308 36.4785 26.4322 36.2412 26.8284 35.8183L38.7657 22.3758C39.0834 21.9796 39.2681 21.4513 39.2413 20.923Z"
                      fill="#A96EDD"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 text-center sm:text-left">
                  Empower Every Worker
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                  with instant access to earned income—no more waiting for
                  payday
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="feature-box zoom p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300 group">
                <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[57px] lg:h-[55px] group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 57 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="28.3075"
                      cy="27.746"
                      rx="28.3075"
                      ry="26.9266"
                      fill="#2FA62B"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M28.2237 16.3914C25.2123 16.3914 22.3243 17.5877 20.1949 19.7171C18.0655 21.8465 16.8692 24.7345 16.8691 27.746C16.8692 30.7574 18.0655 33.6454 20.1949 35.7748C22.3243 37.9042 25.2123 39.1005 28.2237 39.1006C31.2352 39.1005 34.1232 37.9042 36.2526 35.7748C38.382 33.6454 39.5783 30.7574 39.5783 27.746C39.5783 24.7345 38.382 21.8465 36.2526 19.7171C34.1232 17.5877 31.2352 16.3914 28.2237 16.3914ZM28.2237 21.9327C28.9872 21.9327 29.7431 22.083 30.4484 22.3752C31.1537 22.6673 31.7946 23.0955 32.3344 23.6353C32.8742 24.1751 33.3024 24.816 33.5945 25.5213C33.8867 26.2266 34.037 26.9825 34.037 27.746C34.037 28.5094 33.8867 29.2653 33.5945 29.9706C33.3024 30.6759 32.8742 31.3168 32.3344 31.8566C31.7946 32.3964 31.1537 32.8246 30.4484 33.1168C29.7431 33.4089 28.9872 33.5592 28.2237 33.5592C27.4603 33.5592 26.7044 33.4089 25.9991 33.1168C25.2938 32.8246 24.6529 32.3964 24.1131 31.8566C23.5733 31.3168 23.1451 30.6759 22.8529 29.9706C22.5608 29.2653 22.4105 28.5094 22.4105 27.746C22.4105 26.9825 22.5608 26.2266 22.8529 25.5213C23.1451 24.816 23.5733 24.1751 24.1131 23.6353C24.6529 23.0955 25.2938 22.6673 25.9991 22.3752C26.7044 22.083 27.4603 21.9327 28.2237 21.9327Z"
                      fill="#2FA62B"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 text-center sm:text-left">
                  Promote Financial Well-being
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                  by reducing dependency on loans and emergency credit
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="feature-box zoom p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-gray-200 hover:shadow-lg hover:border-orange-200 transition-all duration-300 bg-orange-50 group sm:col-span-2 lg:col-span-1">
                <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[57px] lg:h-[55px] group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 57 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="28.3075"
                      cy="27.746"
                      rx="28.3075"
                      ry="26.9266"
                      fill="#FFAA00"
                      fillOpacity="0.3"
                    />
                    <path
                      d="M28.1229 13.7961C25.1688 16.5627 21.23 18.2507 16.8691 18.2507V32.8806C18.7701 37.6278 23.2477 40.3034 28.1229 41.696C32.999 40.3029 37.4761 37.6273 39.3766 32.8806V18.2507C35.0158 18.2507 31.077 16.5627 28.1229 13.7961ZM28.1229 39.7266C26.7541 39.3435 23.1534 38.5675 20.2922 34.9907C21.5582 32.7399 23.7621 31.0988 26.3879 30.583C24.4185 29.9265 22.9649 28.004 22.9649 25.7532C22.9649 22.8929 25.2626 20.5953 28.1229 20.5953C30.9832 20.5953 33.2808 22.8929 33.2808 25.7532C33.2808 28.004 31.8272 29.9265 29.8578 30.6299C32.4837 31.1457 34.6876 32.7868 35.9536 35.0371C33.6982 37.7807 31.2059 38.9872 28.1229 39.7266Z"
                      fill="#F2AB3C"
                    />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900 text-center sm:text-left">
                  Support Employers
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                  in building a financially resilient and engaged workforce
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Story Section */}
      <div className="animate-on-scroll">
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
          <div className="container mx-auto max-w-7xl">
            {/* Header Section */}
            <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl uppercase tracking-wider text-[#F2AB3C] mb-3 sm:mb-4 font-semibold">
                agi moneey
              </h2>
              <h2 className="text-2xl text-left md:text-center sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-900">
                Our Story
              </h2>
              <div className="text-sm text-left md:text-center sm:text-base md:text-lg lg:text-xl text-[#606060] max-w-5xl mx-auto leading-relaxed px-2 sm:px-4">
                <p className="hidden lg:block">
                  AGI Moneey was founded on a simple truth: employees
                  shouldn&apos;t wait weeks to access their hard-earned
                  <br />
                  moneey. We reinvented India&apos;s payroll system with
                  instant, responsible salary access—because financial needs
                  <br />
                  don&apos;t follow a monthly calendar. Today, our Earnings on
                  Demand solution empowers workers, boosts productivity,
                  <br />
                  and breaks debt cycles
                </p>
                <p className="lg:hidden">
                  AGI Moneey was founded on a simple truth: employees
                  shouldn&apos;t wait weeks to access their hard-earned moneey.
                  We reinvented India&apos;s payroll system with instant,
                  responsible salary access—because financial needs don&apos;t
                  follow a monthly calendar. Today, our Earnings on Demand
                  solution empowers workers, boosts productivity, and breaks
                  debt cycles
                </p>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-6">
              {/* Card 1 - Why We Exist */}
              <div className="process-card rounded-xl lg:rounded-2xl border border-gray-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group relative overflow-hidden bg-white">
                <div className="relative h-full">
                  {/* Header Icon */}
                  <div className="absolute top-0 left-0 scale-105 z-10">
                    <svg
                      className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-[118px] lg:h-[99px] group-hover:scale-105 transition-transform duration-300"
                      viewBox="0 0 118 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0H105.668C112.295 0 117.668 5.37258 117.668 12V86.2366C117.668 92.864 112.295 98.2366 105.668 98.2366H0V0Z"
                        fill="#F2AB3C"
                      />
                      <path
                        d="M74.1774 61.6682L68.1349 55.6435C70.0845 53.1598 71.1423 50.0927 71.1384 46.9352C71.1384 44.1232 70.3046 41.3744 68.7423 39.0363C67.18 36.6982 64.9596 34.8759 62.3616 33.7998C59.7637 32.7237 56.905 32.4421 54.147 32.9907C51.3891 33.5393 48.8558 34.8934 46.8674 36.8818C44.879 38.8702 43.5249 41.4035 42.9763 44.1615C42.4277 46.9194 42.7093 49.7781 43.7854 52.376C44.8615 54.974 46.6838 57.1945 49.0219 58.7567C51.36 60.319 54.1088 61.1528 56.9208 61.1528C60.0783 61.1567 63.1453 60.0989 65.6291 58.1493L71.6538 64.1918C71.819 64.3584 72.0156 64.4906 72.2321 64.5809C72.4487 64.6711 72.681 64.7175 72.9156 64.7175C73.1502 64.7175 73.3825 64.6711 73.5991 64.5809C73.8157 64.4906 74.0122 64.3584 74.1774 64.1918C74.344 64.0266 74.4762 63.8301 74.5664 63.6135C74.6567 63.3969 74.7031 63.1646 74.7031 62.93C74.7031 62.6954 74.6567 62.4631 74.5664 62.2465C74.4762 62.03 74.344 61.8334 74.1774 61.6682ZM46.2575 46.9352C46.2575 44.8262 46.8829 42.7646 48.0546 41.011C49.2263 39.2574 50.8917 37.8907 52.8401 37.0836C54.7886 36.2766 56.9326 36.0654 59.0011 36.4768C61.0695 36.8883 62.9695 37.9039 64.4608 39.3951C65.9521 40.8864 66.9677 42.7864 67.3791 44.8549C67.7906 46.9233 67.5794 49.0674 66.7723 51.0158C65.9652 52.9643 64.5985 54.6296 62.8449 55.8013C61.0914 56.973 59.0298 57.5984 56.9208 57.5984C54.0927 57.5984 51.3805 56.475 49.3807 54.4752C47.381 52.4755 46.2575 49.7632 46.2575 46.9352Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-24 xl:pt-28 p-4 sm:p-6 lg:p-6 xl:p-8 mt-2">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                      Why We Exist
                    </h3>
                    <div className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed">
                      <p className="hidden lg:block">
                        Salaried Indians face <br />
                        cash shortages <br />
                        between salary cycle, <br />
                        forcing expensive loans. <br />
                        This stress hurts <br />
                        productivity and traps <br />
                        workers in endless debt cycles
                      </p>
                      <p className="lg:hidden">
                        Salaried Indians face cash shortages between salary
                        cycle, forcing expensive loans. This stress hurts
                        productivity and traps workers in endless debt cycles
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - How We Solve It */}
              <div className="process-card rounded-xl lg:rounded-2xl border border-gray-200 hover:shadow-xl hover:border-green-200 transition-all duration-300 group relative overflow-hidden bg-white">
                <div className="relative h-full">
                  {/* Header Icon */}
                  <div className="absolute top-0 left-0 scale-105 z-10">
                    <svg
                      className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-[119px] lg:h-[99px] group-hover:scale-105 transition-transform duration-300"
                      viewBox="0 0 119 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.667969 0H106.336C112.963 0 118.336 5.37258 118.336 12V86.2366C118.336 92.864 112.963 98.2366 106.336 98.2366H0.667969V0Z"
                        fill="#2FA62B"
                      />
                      <g clipPath="url(#clip0_648_13074)">
                        <path
                          d="M51.9702 47.0181C53.8685 47.0181 55.7625 47.0181 57.6565 47.0181C58.088 47.0181 58.2303 46.9141 58.2217 46.4763C58.1958 45.4576 58.2001 44.4346 58.2217 43.4115C58.2217 43.0647 58.1009 42.9434 57.7601 42.952C56.9921 42.952 56.2242 42.952 55.4605 42.952C55.2958 42.9703 55.129 42.9513 54.9725 42.8965C54.8159 42.8418 54.6735 42.7525 54.5557 42.6354C54.4378 42.5182 54.3475 42.3761 54.2913 42.2194C54.2352 42.0627 54.2145 41.8953 54.231 41.7296C54.231 39.1287 54.231 36.5278 54.231 33.9268C54.215 33.7648 54.2349 33.6012 54.2892 33.4478C54.3435 33.2944 54.4309 33.1549 54.5451 33.0394C54.6592 32.9238 54.7974 32.8351 54.9497 32.7794C55.102 32.7238 55.2646 32.7026 55.426 32.7174C58.0319 32.7174 60.6377 32.7174 63.2436 32.7174C63.4022 32.7021 63.5623 32.7221 63.7124 32.7761C63.8625 32.83 63.9988 32.9166 64.1117 33.0297C64.2247 33.1427 64.3113 33.2794 64.3656 33.43C64.4199 33.5806 64.4404 33.7414 64.4257 33.9008C64.4257 36.5364 64.4257 39.1691 64.4257 41.799C64.4351 41.9542 64.4116 42.1096 64.3569 42.2551C64.3022 42.4006 64.2174 42.5327 64.1082 42.6429C63.999 42.753 63.8677 42.8387 63.7232 42.8942C63.5786 42.9498 63.424 42.9739 63.2695 42.965C62.5015 42.965 61.7379 42.991 60.9699 42.965C60.5385 42.965 60.422 43.1211 60.4306 43.5242C60.4522 44.5213 60.4565 45.5139 60.4306 46.5066C60.4306 46.9141 60.5601 47.0355 60.957 47.0355C64.3567 47.0355 67.7607 47.0355 71.1604 47.0355C71.5918 47.0355 71.9973 47.0615 72.4115 47.0355C72.8257 47.0095 72.9637 47.1352 72.9594 47.573C72.9594 49.6711 72.9594 51.7735 72.9594 53.8759C72.9594 54.4524 72.9594 54.4524 73.5375 54.4524C74.2321 54.4524 74.9311 54.4524 75.6257 54.4524C76.5231 54.4524 76.9588 54.8859 76.9588 55.8049C76.9588 58.3278 76.9588 60.8492 76.9588 63.3692C76.9588 64.2752 76.5274 64.7304 75.6343 64.7347C73.0975 64.7347 70.5621 64.7347 68.0282 64.7347C67.1653 64.7347 66.7339 64.3012 66.7339 63.4343C66.7339 60.8854 66.7339 58.3365 66.7339 55.7876C66.7339 54.8946 67.1394 54.4871 68.0282 54.4871C68.7659 54.4871 69.508 54.4871 70.2457 54.4871C70.5607 54.4871 70.6771 54.3917 70.6771 54.0536C70.6771 52.5538 70.6771 51.0539 70.6771 49.5584C70.6771 49.2549 70.5822 49.1249 70.2457 49.1249C67.0819 49.1249 63.918 49.1249 60.7542 49.1249C60.4608 49.1249 60.3573 49.2333 60.3616 49.5194C60.3616 51.0308 60.3616 52.5422 60.3616 54.0536C60.3616 54.3614 60.4738 54.4871 60.793 54.4871C61.548 54.4871 62.2987 54.4871 63.0494 54.4871C63.9554 54.4871 64.3696 54.9206 64.3696 55.8439C64.3696 58.3639 64.3696 60.8839 64.3696 63.4039C64.3696 64.3273 63.9684 64.7564 63.0494 64.7607C60.5299 64.7781 58.0089 64.7781 55.4864 64.7607C54.5761 64.7607 54.1921 64.3273 54.1921 63.3909C54.1921 60.8854 54.1921 58.3798 54.1921 55.8743C54.1921 54.9076 54.6236 54.4914 55.5598 54.4784C56.2846 54.4784 57.0094 54.4784 57.7169 54.4784C58.0319 54.4784 58.1742 54.3917 58.1484 54.045C58.1484 52.5451 58.1484 51.0467 58.1484 49.5497C58.1484 49.2159 58.0232 49.1162 57.7169 49.1162C54.5977 49.1162 51.4741 49.1162 48.3548 49.1162C47.9536 49.1162 47.8587 49.2593 47.863 49.6321C47.863 51.0712 47.8846 52.5147 47.863 53.9669C47.863 54.4004 48.0097 54.4914 48.398 54.4784C49.0926 54.4524 49.7915 54.4784 50.4861 54.4784C51.4223 54.4784 51.8322 54.9119 51.8322 55.8439C51.8322 58.3668 51.8322 60.8883 51.8322 63.4083C51.8322 64.3229 51.4008 64.7564 50.512 64.7607C47.9881 64.7607 45.4686 64.7607 42.9447 64.7607C42.0473 64.7607 41.6504 64.3012 41.6504 63.3953V55.8569C41.6504 54.8382 42.0559 54.4351 43.0741 54.4308C43.773 54.4308 44.4676 54.4308 45.1622 54.4308C45.5549 54.4308 45.667 54.3007 45.667 53.9192C45.667 51.8212 45.667 49.7188 45.667 47.6207C45.667 47.0138 45.667 47.0138 46.2538 47.0138C48.1521 47.0138 50.0461 47.0138 51.94 47.0138L51.9702 47.0181Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_648_13074">
                          <rect
                            width="35.2653"
                            height="32"
                            fill="white"
                            transform="translate(41.6895 32.7175)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-24 xl:pt-28 p-4 sm:p-6 lg:p-6 xl:p-8 mt-2">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                      How We Solve It
                    </h3>
                    <div className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed">
                      <p className="hidden lg:block">
                        Our payroll integration <br />
                        provides instant earned <br />
                        wage access, giving <br />
                        employees financial <br />
                        relief while boosting <br />
                        workplace satisfaction <br />
                        and retention rates
                      </p>
                      <p className="lg:hidden">
                        Our payroll integration provides instant earned wage
                        access, giving employees financial relief while boosting
                        workplace satisfaction and retention rates
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 - The Impact */}
              <div className="process-card rounded-xl lg:rounded-2xl border border-gray-200 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group relative overflow-hidden bg-white">
                <div className="relative h-full">
                  {/* Header Icon */}
                  <div className="absolute top-0 left-0 scale-105 z-10">
                    <svg
                      className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-[118px] lg:h-[99px] group-hover:scale-105 transition-transform duration-300"
                      viewBox="0 0 118 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.335938 0H106.004C112.631 0 118.004 5.37258 118.004 12V86.2366C118.004 92.864 112.631 98.2366 106.004 98.2366H0.335938V0Z"
                        fill="#6ED4DD"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M46.1472 36.7393C46.1472 36.7642 46.2243 36.8742 46.3186 36.9838C46.9115 37.6731 47.0615 38.8845 46.6553 39.7041C46.5962 39.8234 46.5478 39.9351 46.5478 39.9524C46.5478 39.9698 46.6776 39.984 46.8362 39.984C47.2702 39.984 48.1701 40.0939 48.7693 40.2199C51.2664 40.7456 53.476 42.3048 55.6703 45.0897C56.6096 46.2816 57.0295 46.9038 60.1308 51.6988C60.6715 52.535 61.3394 53.5276 61.6148 53.9047C61.8903 54.2818 62.1156 54.6239 62.1156 54.6648C62.1156 54.7057 61.9597 54.8961 61.7691 55.0879C61.267 55.5931 61.0853 55.8942 61.0856 56.2207C61.0859 56.5188 61.2285 56.8079 61.4479 56.9546C61.5622 57.031 65.5619 58.2583 67.7359 58.884C68.3463 59.0597 68.5816 59.0518 68.8365 58.8472C69.0138 58.7049 69.2127 58.331 69.2127 58.1403C69.2127 58.0059 66.9023 51.6718 66.7273 51.3264C66.5555 50.9871 66.1384 50.8109 65.7532 50.9146C65.568 50.9645 65.4046 51.102 64.9449 51.5943L64.3688 52.2114L63.9068 51.5455C63.6527 51.1793 63.0389 50.2487 62.543 49.4776C59.7094 45.0714 59.0124 44.0526 57.8899 42.6759C54.7233 38.7925 51.2624 36.8791 47.1345 36.7299C46.5914 36.7102 46.1472 36.7145 46.1472 36.7393ZM71.1148 36.7769C69.4904 36.9697 67.758 37.6348 66.2937 38.628L65.6928 39.0356L65.1777 38.5543C64.8944 38.2896 64.5801 38.0298 64.4794 37.9769C64.2427 37.8527 63.9685 37.855 63.7223 37.9831C63.3394 38.1824 63.446 37.8673 62.0356 42.9656C61.7018 44.1717 61.4288 45.2368 61.4288 45.3326C61.4288 45.5748 61.6056 45.8893 61.8294 46.0453C62.1105 46.2412 62.4227 46.2171 63.1072 45.9467C63.4275 45.8202 64.8357 45.2652 66.2365 44.7134C67.6373 44.1617 68.8522 43.674 68.9363 43.6299C69.3134 43.4317 69.4868 42.8689 69.2906 42.4801C69.232 42.364 68.9652 42.0672 68.6976 41.8205C68.43 41.5738 68.2111 41.3446 68.2111 41.3113C68.2111 41.2232 69.2707 40.6632 69.8323 40.4544C70.7172 40.1253 71.3525 40.0215 72.5037 40.0177C73.6257 40.0141 74.0324 40.0741 75.0586 40.395C77.8884 41.28 80.117 43.7143 80.8039 46.6707C81.3292 48.9321 80.9837 51.2132 79.8123 53.2166C79.0151 54.5801 77.7407 55.7804 76.307 56.5182C75.6974 56.8319 74.6076 57.1973 73.9346 57.3135C73.2465 57.4324 71.8833 57.4488 71.2797 57.3457C71.0471 57.3059 70.8467 57.2837 70.8343 57.2965C70.8218 57.3092 70.8414 57.5038 70.8778 57.7289C71.0133 58.566 70.7042 59.4444 70.0601 60.0531C69.8506 60.2511 69.7493 60.3838 69.7957 60.3996C69.8371 60.4136 70.077 60.4649 70.3288 60.5136C73.0031 61.0302 75.8863 60.5448 78.2413 59.1815C82.7643 56.5632 85.0941 51.302 84.0002 46.1767C83.3214 42.9963 81.4176 40.2445 78.685 38.494C77.2705 37.5879 75.4965 36.966 73.7794 36.7744C73.1408 36.7031 71.725 36.7045 71.1148 36.7769ZM37.2758 37.8355C36.9965 37.9797 36.7607 38.3508 36.7607 38.6465C36.7607 38.7327 36.9668 39.2278 37.2186 39.7467C37.4704 40.2656 37.6765 40.7155 37.6765 40.7466C37.6765 40.7776 37.5254 40.9934 37.3409 41.226C36.6872 42.0498 36.0857 43.0823 35.6822 44.0735C33.29 49.9499 35.7346 56.6112 41.3319 59.4684C43.2579 60.4516 45.4184 60.8633 47.6464 60.6718C51.1076 60.3743 53.8265 59.0151 56.5967 56.1973C57.4382 55.3413 58.5942 54.0135 58.5433 53.9615C58.5293 53.9471 58.1809 54.0695 57.7691 54.2332C57.2164 54.4531 56.9437 54.5311 56.7274 54.5311C56.4577 54.5311 56.4144 54.5107 56.1843 54.2759C55.8217 53.9057 55.8238 53.8159 56.2297 52.351C56.3883 51.7785 56.5078 51.2996 56.4952 51.2867C56.4825 51.2738 56.3377 51.4467 56.1734 51.671C54.8215 53.5149 53.1648 55.1371 51.7362 56.0157C49.6258 57.3135 46.8732 57.762 44.5469 57.187C42.3334 56.6399 40.4692 55.256 39.2303 53.2398C37.9495 51.1556 37.6412 48.3983 38.4202 45.9953C38.6239 45.367 39.0423 44.4311 39.2389 44.1641C39.3185 44.056 39.3306 44.0659 39.4746 44.3561C39.7204 44.8512 40.1594 45.0465 40.6215 44.8663C40.8544 44.7755 41.0133 44.5767 42.9228 41.9867C44.0509 40.4565 45.0218 39.1126 45.0804 39.0001C45.2876 38.6024 45.1263 38.1017 44.7103 37.8516C44.5226 37.7387 44.398 37.7342 41.0247 37.7187L37.5334 37.7027L37.2758 37.8355Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-24 xl:pt-28 p-4 sm:p-6 lg:p-6 xl:p-8 mt-2">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                      The Impact
                    </h3>
                    <div className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed">
                      <p className="hidden lg:block">
                        Employees escape debt <br />
                        traps, businesses <br />
                        improve retention, and <br />
                        predatory lending <br />
                        decreases through our <br />
                        responsible financial <br />
                        access solution
                      </p>
                      <p className="lg:hidden">
                        Employees escape debt traps, businesses improve
                        retention, and predatory lending decreases through our
                        responsible financial access solution
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 - Our Future */}
              <div className="process-card rounded-xl lg:rounded-2xl border border-gray-200 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group relative overflow-hidden bg-white">
                <div className="relative h-full">
                  {/* Header Icon */}
                  <div className="absolute top-0 left-0 scale-105 z-10">
                    <svg
                      className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-[118px] lg:h-[99px] group-hover:scale-105 transition-transform duration-300"
                      viewBox="0 0 118 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00390625 0H105.672C112.299 0 117.672 5.37258 117.672 12V86.2366C117.672 92.864 112.299 98.2366 105.672 98.2366H0.00390625V0Z"
                        fill="#A96EDD"
                      />
                      <path
                        d="M54.1877 55.9473C54.0193 55.7635 53.7864 55.6518 53.5376 55.6355C53.2887 55.6191 53.0432 55.6994 52.8522 55.8596C52.6612 56.0198 52.5396 56.2474 52.5128 56.495C52.4859 56.7426 52.5559 56.991 52.708 57.1882C53.3566 57.9638 54.6964 59.9455 53.1663 61.8418C52.4371 62.699 51.402 63.2387 50.2808 63.3465C47.9313 63.6024 44.9021 64.2151 43.1234 65.6732C42.4826 62.6988 43.4186 60.2441 45.9739 58.2043C46.1053 58.0984 46.2066 57.9601 46.2678 57.8031C46.329 57.646 46.348 57.4757 46.3229 57.309C46.2977 57.1424 46.2294 56.9852 46.1245 56.8531C46.0197 56.721 45.8821 56.6187 45.7254 56.5561C44.9333 56.2698 44.0934 56.1382 43.2516 56.1683C43.8496 55.0321 44.871 53.6515 46.2769 53.2637C47.3293 52.9845 48.5332 53.3335 49.8536 54.2953C50.0604 54.4187 50.3058 54.4606 50.5418 54.4129C50.7779 54.3651 50.9876 54.2311 51.13 54.0371C51.2723 53.8431 51.337 53.603 51.3114 53.3638C51.2858 53.1247 51.1717 52.9037 50.9915 52.7441C49.1779 51.4178 47.4264 50.968 45.7914 51.4023C43.2826 52.0616 41.7952 54.6249 41.1312 56.0947C41.0196 56.3413 40.978 56.6138 41.011 56.8825C41.0439 57.1511 41.1502 57.4056 41.3181 57.618C41.486 57.8305 41.7091 57.9929 41.9631 58.0873C42.2171 58.1818 42.4922 58.2048 42.7584 58.1539C42.929 58.1217 43.1015 58.101 43.2749 58.0918C41.5506 60.0502 40.2845 62.9393 41.4574 66.9297C41.5446 67.238 41.7302 67.5094 41.9861 67.7026C42.242 67.8958 42.5541 68.0002 42.8749 68H42.9215C43.1256 67.994 43.3263 67.9457 43.5108 67.8583C43.6953 67.7709 43.8596 67.6461 43.9933 67.492C44.9332 66.4256 47.3021 65.6151 50.4944 65.266C52.1246 65.108 53.6264 64.3136 54.6731 63.0556C55.1873 62.4534 55.544 61.7334 55.7114 60.9599C55.8788 60.1864 55.8516 59.3835 55.6324 58.6231C55.3448 57.6396 54.8525 56.7278 54.1877 55.9473Z"
                        fill="white"
                      />
                      <path
                        d="M64.6807 37.8411C63.6485 37.8411 62.6482 38.1986 61.8502 38.8524C61.0523 39.5063 60.5061 40.4162 60.3046 41.4272C60.1031 42.4381 60.2588 43.4875 60.7453 44.3966C61.2317 45.3057 62.0187 46.0183 62.9723 46.413C63.9259 46.8077 64.987 46.8601 65.9748 46.5612C66.9627 46.2623 67.8163 45.6307 68.3901 44.7739C68.964 43.9171 69.2226 42.8881 69.1219 41.8623C69.0212 40.8365 68.5675 39.8772 67.838 39.148C67.4245 38.7324 66.9325 38.4029 66.3905 38.1786C65.8485 37.9543 65.2674 37.8396 64.6807 37.8411ZM66.471 44.0846C66.0568 44.4982 65.5117 44.7556 64.9287 44.8129C64.3457 44.8702 63.7608 44.7238 63.2738 44.3988C62.7867 44.0738 62.4276 43.5902 62.2576 43.0304C62.0876 42.4706 62.1172 41.8692 62.3414 41.3288C62.5657 40.7884 62.9706 40.3423 63.4873 40.0666C64.004 39.7909 64.6004 39.7026 65.1749 39.8168C65.7495 39.931 66.2666 40.2405 66.6382 40.6928C67.0098 41.145 67.2128 41.7119 67.2128 42.2969C67.213 42.6295 67.1477 42.9589 67.0204 43.2664C66.8931 43.5738 66.7064 43.8531 66.471 44.0885V44.0846Z"
                        fill="white"
                      />
                      <path
                        d="M76.0415 30.0463C70.7736 29.7367 65.5312 30.9844 60.9695 33.6334C59.1521 34.6775 57.4818 35.9581 56.0024 37.4416L54.6393 37.3641C53.8519 37.3243 53.065 37.4498 52.3293 37.7323C51.5935 38.0149 50.9252 38.4482 50.3673 39.0044L47.5362 41.8315C47.3894 41.9775 47.281 42.1575 47.2206 42.3555C47.1602 42.5534 47.1497 42.7632 47.1901 42.9662C47.2304 43.1692 47.3204 43.3591 47.4519 43.519C47.5834 43.6789 47.7525 43.8039 47.944 43.8829L51.6178 45.407C51.2348 46.4537 50.9183 47.5236 50.6703 48.6101L50.4994 49.3857C50.4648 49.5437 50.4706 49.7078 50.516 49.8629C50.5615 50.0181 50.6452 50.1594 50.7596 50.2738L56.6665 56.1993C56.7811 56.3135 56.9226 56.3971 57.0779 56.4425C57.2333 56.4879 57.3976 56.4936 57.5558 56.4592L58.3325 56.2885C59.4242 56.0477 60.4995 55.7381 61.552 55.3617L63.0705 59.0147C63.1516 59.2045 63.2783 59.3715 63.4394 59.5008C63.6004 59.6301 63.7909 59.7178 63.994 59.7561C64.1971 59.7944 64.4065 59.7822 64.6037 59.7206C64.801 59.6589 64.9799 59.5497 65.1249 59.4025L67.956 56.5755C68.513 56.0185 68.947 55.3511 69.2299 54.6164C69.5128 53.8817 69.6385 53.0959 69.5987 52.3097L69.5288 50.9486C71.0213 49.4787 72.3115 47.8173 73.3658 46.008C76.0171 41.4524 77.2652 36.2176 76.9542 30.9577C76.9411 30.7202 76.8408 30.4959 76.6724 30.3277C76.504 30.1595 76.2794 30.0593 76.0415 30.0463ZM71.7347 44.9649C70.7153 46.767 69.4326 48.4073 67.9288 49.8317L67.89 49.8666C67.7235 50.0242 67.6188 50.236 67.5948 50.4638C67.5898 50.5206 67.5898 50.5777 67.5948 50.6344L67.688 52.4299C67.7142 52.9467 67.6316 53.4631 67.4457 53.946C67.2597 54.429 66.9745 54.8676 66.6084 55.2337L64.488 57.3511L63.0006 53.7678C62.9041 53.5338 62.7191 53.3472 62.4857 53.2485C62.2523 53.1498 61.9894 53.1469 61.7539 53.2404C60.5155 53.7284 59.2403 54.1174 57.9403 54.4038L57.6762 54.462L52.5033 49.2966L52.5615 49.0328C52.8486 47.736 53.2381 46.4639 53.7266 45.2286C53.8193 44.9933 53.8158 44.7312 53.7171 44.4985C53.6183 44.2657 53.4321 44.0809 53.1985 43.9837L49.61 42.4985L51.7305 40.3811C52.0976 40.015 52.5375 39.7299 53.0218 39.5442C53.5061 39.3585 54.0241 39.2764 54.5422 39.303L56.3558 39.3961C56.5024 39.4024 56.6485 39.3753 56.7831 39.3168C56.9177 39.2584 57.0372 39.1701 57.1325 39.0587C58.5381 37.5733 60.1587 36.3067 61.9403 35.301C65.9168 32.9878 70.4584 31.8225 75.059 31.9349C75.1727 36.5009 74.0224 41.0097 71.7347 44.9649Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-24 xl:pt-28 p-4 sm:p-6 lg:p-6 xl:p-8 mt-2">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                      Our Future
                    </h3>
                    <div className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed">
                      <p className="hidden lg:block">
                        By 2026, we&apos;ll serve 1M+ <br />
                        employees while <br />
                        expanding into <br />
                        insurance, micro <br />
                        -investments, and <br />
                        financial education— <br />
                        building true economic resilience
                      </p>
                      <p className="lg:hidden">
                        By 2026, we&apos;ll serve 1M+ employees while expanding
                        into insurance, micro-investments, and financial
                        education—building true economic resilience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission Section */}
      <motion.div ref={ref} className="animate-on-scroll">
        <motion.section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
              {/* Image Section - Animate from LEFT */}
              <motion.div
                className="w-full lg:w-1/2 order-2 lg:order-1"
                initial={{ opacity: 0, x: -100 }} // Changed from +100 to -100 (comes from left)
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                }
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="relative w-full flex justify-center lg:justify-start">
                  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
                    <Image
                      src="/assets/images/4.png"
                      alt="Mission - Making Any Day A Pay Day"
                      className="w-full h-auto object-contain rounded-lg lg:rounded-xl transition-transform duration-300 hover:scale-105"
                      width={500}
                      height={500}
                      priority
                      sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, (max-width: 1280px) 600px, 700px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content Section - Animate from RIGHT */}
              <motion.div
                className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center text-left"
                initial={{ opacity: 0, x: 100 }} // Changed from -100 to +100 (comes from right)
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                }
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                {/* Mission Tag */}
                <motion.h2
                  className="text-s text-center md:text-left sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-wider text-[#F2AB3C] mb-3 sm:mb-4 lg:mb-6 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                >
                  our mission
                </motion.h2>

                {/* Main Heading */}
                <motion.h2
                  className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 xl:mb-10 text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                >
                  Making Any Day A Pay Day
                </motion.h2>

                {/* Mission Description */}
                <motion.div
                  className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 text-[#606060] leading-relaxed max-w-none lg:max-w-2xl xl:max-w-3xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <motion.p
                    className="text-sm sm:text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                    }}
                  >
                    At AGI Moneey, our mission is to empower India&apos;s
                    workforce by transforming how salaries are accessed and
                    managed—through trusted partnerships with employers.
                  </motion.p>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7,
                    }}
                  >
                    We work hand-in-hand with organizations to provide their
                    employees with instant, responsible access to earned salary,
                    without waiting for payday. By disbursing salary advances on
                    behalf of the employer, we eliminate the need for costly
                    loans, reduce financial stress, and foster a more stable,
                    productive workforce.
                  </motion.p>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8,
                    }}
                  >
                    Through our transparent, tech-driven platform, we are not
                    just solving a financial problem—we are creating a new
                    standard of flexibility, dignity, and control for every
                    worker. Our goal is a future where financial freedom starts
                    the moment you earn it, and no employee has to choose
                    between urgent needs and long-term well-being.
                  </motion.p>
                </motion.div>

                {/* Optional CTA Section */}
                <motion.div
                  className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                    ease: "easeOut",
                  }}
                >
                  <div className="inline-flex items-center justify-center lg:justify-start">
                    <motion.div
                      className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-1 bg-gradient-to-r from-[#F2AB3C] to-orange-400 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: "easeOut",
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* CTA Section */}
      <div className="animate-on-scroll">
        <section className="py-12 bg-[#222222] text-white relative overflow-hidden">
          {/* Optional Background Pattern/Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#222222] via-[#2a2a2a] to-[#1a1a1a] opacity-50"></div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
                  <span className="block">Salary support that works</span>
                  <span className="block">both ways</span>
                </h2>
                {/* Description */}
                <div className="max-w-3xl mx-auto px-2 sm:px-4">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                    Whether you&apos;re an employer looking to offer smarter
                    salary solutions, AGI Moneey is here to support you
                  </p>
                </div>
                {/* CTA Button */}
                <div className="pt-2 sm:pt-4 md:pt-6">
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 sm:gap-3 hover:bg-[#F2AB3C] border-2 text-[#F2AB3C] border-[#F2AB3C] hover:text-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F2AB3C]/20"
                      aria-label="Get in touch with AGI Moneey"
                    >
                      <span>Get In Touch</span>
                      <i className="fa fa-arrow-right text-xs sm:text-sm md:text-base lg:text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Bottom Border Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F2AB3C] to-transparent"></div>
        </section>
      </div>

      {/* Team Section */}
      <div className="animate-on-scroll">
        <section className="py-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
          <div className="container mx-auto max-w-7xl">
            {/* Header Section */}
            <div className="text-center">
              <h2 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-wider text-[#F2AB3C] mb-3 font-semibold">
                Our Team
              </h2>
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                Meet The Team Behind AGI Moneey
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#606060] max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                From strategy to delivery, our dedicated team combines
                creativity, expertise, and integrity to excel at every
                challenge.
              </p>
            </div>

            {/* Team Swiper */}
            <div className="overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 9000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides={false}
                breakpoints={{
                  480: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                    centeredSlides: true,
                  },
                  640: {
                    slidesPerView: 1.5,
                    spaceBetween: 24,
                    centeredSlides: true,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                    centeredSlides: false,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 28,
                    centeredSlides: false,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                    centeredSlides: false,
                  },
                }}
                className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 pb-4 sm:pb-6 md:pb-8"
              >
                {/* Team Member 1 - Sharad Agiwal */}
                <SwiperSlide>
                  <div className="group bg-white hover:bg-gray-50 rounded-xl lg:rounded-2xl border border-gray-200 hover:border-[#F2AB3C]/30 hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                    <div className="flex-shrink-0 mb-4 sm:mb-6">
                      <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                        <Image
                          src="/assets/images/pro/7.1.png"
                          alt="Sharad Agiwal - Founder & CEO"
                          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110 shadow-lg"
                          loading="lazy"
                          width={160}
                          height={160}
                          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F2AB3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">
                        Sharad Agiwal
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F2AB3C] font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
                        FOUNDER & CEO
                      </p>

                      <div className="flex-grow mb-4">
                        <p className="text-xs sm:text-sm md:text-base text-[#606060] leading-relaxed line-clamp-6 sm:line-clamp-none min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                          Management Consultant with 15+ years in NBFCs,
                          demonstrating deep financial sector and regulatory
                          expertise. Currently leads a payday loan NBFC.
                          Diversified experience in hospitality and
                          infrastructure sectors highlights entrepreneurial
                          versatility and operational leadership.
                        </p>
                      </div>

                      <div className="flex justify-center mt-auto">
                        <a
                          href="https://www.linkedin.com/in/sharadaagiwal/"
                          className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-[#F2AB3C] text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#F2AB3C]/20"
                          aria-label="Connect with Sharad Agiwal on LinkedIn"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in text-sm sm:text-base md:text-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Team Member 2 - Sangeeta Agiwal */}
                <SwiperSlide>
                  <div className="group bg-white hover:bg-gray-50 rounded-xl lg:rounded-2xl border border-gray-200 hover:border-[#F2AB3C]/30 hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                    <div className="flex-shrink-0 mb-4 sm:mb-6">
                      <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                        <Image
                          src="/assets/images/pro/7.2.png"
                          alt="Sangeeta Agiwal - Director"
                          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110 shadow-lg"
                          loading="lazy"
                          width={160}
                          height={160}
                          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F2AB3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">
                        Sangeeta Agiwal
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F2AB3C] font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
                        DIRECTOR
                      </p>

                      <div className="flex-grow mb-4">
                        <p className="text-xs sm:text-sm md:text-base text-[#606060] leading-relaxed line-clamp-6 sm:line-clamp-none min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                          Proven expertise in HR management, team development,
                          and compliance solutions. Strong service industry
                          strategist with exceptional analytical skills. Drives
                          organizational growth through employee training
                          programs and performance optimization initiatives.
                        </p>
                      </div>

                      <div className="flex justify-center mt-auto">
                        <a
                          href="https://www.linkedin.com/in/sangeetaagiwal"
                          className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-[#F2AB3C] text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#F2AB3C]/20"
                          aria-label="Connect with Sangeeta Agiwal on LinkedIn"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in text-sm sm:text-base md:text-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Team Member 3 - Sumit Pareek */}
                <SwiperSlide>
                  <div className="group bg-white hover:bg-gray-50 rounded-xl lg:rounded-2xl border border-gray-200 hover:border-[#F2AB3C]/30 hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                    <div className="flex-shrink-0 mb-4 sm:mb-6">
                      <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                        <Image
                          src="/assets/images/pro/7.3.png"
                          alt="Sumit Pareek - Chief Financial Officer"
                          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110 shadow-lg"
                          loading="lazy"
                          width={160}
                          height={160}
                          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F2AB3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">
                        Sumit Pareek
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F2AB3C] font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
                        CHIEF FINANCIAL OFFICER
                      </p>

                      <div className="flex-grow mb-4">
                        <p className="text-xs sm:text-sm md:text-base text-[#606060] leading-relaxed line-clamp-6 sm:line-clamp-none min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                          Financial expert with 10+ years&apos; experience in
                          advisory services. Specializes in RBI compliance, tax
                          planning, and financial analysis. Ensures robust
                          fiscal management through strategic planning and
                          regulatory adherence.
                        </p>
                      </div>

                      <div className="flex justify-center mt-auto">
                        <a
                          href="https://www.linkedin.com/in/ssumitpareek/"
                          className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-[#F2AB3C] text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#F2AB3C]/20"
                          aria-label="Connect with Sumit Pareek on LinkedIn"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in text-sm sm:text-base md:text-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Team Member 4 - Deepak Rawat */}
                <SwiperSlide>
                  <div className="group bg-white hover:bg-gray-50 rounded-xl lg:rounded-2xl border border-gray-200 hover:border-[#F2AB3C]/30 hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 text-center h-full flex flex-col">
                    <div className="flex-shrink-0 mb-4 sm:mb-6">
                      <div className="relative mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
                        <Image
                          src="/assets/images/pro/7.4.png"
                          alt="Deepak Rawat - Vice President Finance"
                          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110 shadow-lg"
                          loading="lazy"
                          width={160}
                          height={160}
                          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F2AB3C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col">
                      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">
                        Deepak Rawat
                      </h4>
                      <p className="text-xs sm:text-sm text-[#F2AB3C] font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
                        VICE PRESIDENT (FINANCE)
                      </p>

                      <div className="flex-grow mb-4">
                        <p className="text-xs sm:text-sm md:text-base text-[#606060] leading-relaxed line-clamp-6 sm:line-clamp-none min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
                          Expert in NBFC product design, risk assessment, and
                          capital raising. Brings deep knowledge of MIS
                          reporting, financial projections, and taxation.
                          Delivers data-driven financial strategies for business
                          growth.
                        </p>
                      </div>

                      <div className="flex justify-center mt-auto">
                        <a
                          href="https://www.linkedin.com/in/deepakrawat/"
                          className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-[#F2AB3C] text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#F2AB3C]/20"
                          aria-label="Connect with Deepak Rawat on LinkedIn"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in text-sm sm:text-base md:text-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>

      {/* Culture Section */}
      <div className="animate-on-scroll">
        <section className="py-8 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
              {/* Header Section */}
              <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                <h2 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-wider text-[#F2AB3C] mb-3 sm:mb-4 lg:mb-6 font-semibold text-center lg:text-left">
                  Our culture
                </h2>
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-gray-900 leading-tight text-center lg:text-left">
                  Work Environment
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#606060] leading-relaxed text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
                  At AGI Moneey, our culture is the foundation of everything we
                  build. We are guided by these core values
                </p>
              </div>

              {/* Values Grid Section */}
              <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
                  {/* Value Card 1 - Innovate Boldly */}
                  <div className="group feature-box1 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl bg-white border border-transparent border-[#F2AB3C]/20 hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                      <div className="relative bg-white ring-pulse-wrapper">
                        <svg
                          width="48"
                          height="48"
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 pulse group-hover:scale-110 transition-transform duration-300 relative z-10"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="64" height="64" rx="16" />
                          <path
                            opacity="0.3"
                            d="M31.1581 39.095C31.6231 38.6301 32.3768 38.6301 32.8417 39.095C33.3063 39.56 33.3065 40.3138 32.8417 40.7786L31.6992 41.9202H39.539V44.3011H31.6992L32.8417 45.4437C33.3065 45.9085 33.3063 46.6624 32.8417 47.1273C32.3769 47.5921 31.6231 47.5921 31.1581 47.1273L27.9833 43.9525C27.5185 43.4875 27.5185 42.7337 27.9833 42.2689L31.1581 39.095ZM20.0468 27.9837C20.5117 27.5188 21.2655 27.5188 21.7304 27.9837L24.9052 31.1585C25.3698 31.6235 25.37 32.3773 24.9052 32.8421C24.4404 33.3069 23.6866 33.3067 23.2216 32.8421L22.079 31.6995V39.5394H19.6982V31.6995L18.5556 32.8421C18.0907 33.3068 17.3369 33.3068 16.872 32.8421C16.4072 32.3773 16.4073 31.6234 16.872 31.1585L20.0468 27.9837ZM44.3007 32.3001L45.4433 31.1585C45.9082 30.6936 46.662 30.6936 47.1269 31.1585C47.5917 31.6234 47.5918 32.3772 47.1269 32.8421L43.9521 36.0159C43.7196 36.2484 43.415 36.3646 43.1103 36.3646C42.8058 36.3645 42.5009 36.2483 42.2685 36.0159L39.0947 32.8421C38.6298 32.3772 38.6298 31.6234 39.0947 31.1585C39.5596 30.6936 40.3134 30.6936 40.7783 31.1585L41.9199 32.3001V24.4603H44.3007V32.3001ZM31.1581 16.8724C31.6231 16.4077 32.3769 16.4075 32.8417 16.8724L36.0156 20.0472C36.4805 20.5121 36.4805 21.2659 36.0156 21.7308L32.8417 24.9056C32.377 25.3704 31.6231 25.3701 31.1581 24.9056C30.6932 24.4407 30.6932 23.6869 31.1581 23.222L32.2997 22.0794H24.4599V19.6986H32.2997L31.1581 18.556C30.6932 18.0911 30.6932 17.3373 31.1581 16.8724Z"
                            fill="#F2AB3C"
                          />
                          <path
                            d="M24.0645 37.556C25.3793 37.5561 26.4453 38.622 26.4453 39.9368V46.2855C26.4453 47.6003 25.3793 48.6662 24.0645 48.6663H17.7148C16.3999 48.6663 15.334 47.6004 15.334 46.2855V39.9368C15.334 38.6219 16.3999 37.556 17.7148 37.556H24.0645ZM46.2861 37.556C47.6011 37.556 48.667 38.6219 48.667 39.9368V46.2855C48.667 47.6004 47.6011 48.6663 46.2861 48.6663H39.9375C38.6225 48.6663 37.5566 47.6004 37.5566 46.2855V39.9368C37.5566 38.6219 38.6225 37.556 39.9375 37.556H46.2861ZM24.0645 15.3333C25.3792 15.3335 26.4453 16.3994 26.4453 17.7142V24.0638C26.4451 25.3785 25.3792 26.4445 24.0645 26.4446H17.7148C16.4 26.4446 15.3342 25.3786 15.334 24.0638V17.7142C15.334 16.3993 16.4 15.3334 17.7148 15.3333H24.0645ZM46.2861 15.3333C47.6011 15.3333 48.6669 16.3993 48.667 17.7142V24.0638C48.6668 25.3786 47.601 26.4446 46.2861 26.4446H39.9375C38.6226 26.4446 37.5568 25.3786 37.5566 24.0638V17.7142C37.5567 16.3993 38.6226 15.3333 39.9375 15.3333H46.2861Z"
                            fill="#F2AB3C"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F2AB3C]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold uppercase mb-2 sm:mb-3 text-gray-900 text-center sm:text-left">
                      Innovate Boldly
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                      We embrace creativity, take smart risks, and learn
                      fast—because progress demands fearless thinking
                    </p>
                  </div>

                  {/* Value Card 2 - Collaborate with Purpose */}
                  <div className="group feature-box1 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl bg-white border border-transparent border-green-500/20 hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                      <div className="relative bg-white ring-pulse-wrapper">
                        <svg
                          width="48"
                          height="48"
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 pulse group-hover:scale-110 transition-transform duration-300 relative z-10"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="64" height="64" rx="16" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.7149 15.3333H36.7626C38.0775 15.3333 39.1435 16.3993 39.1435 17.7143V36.7619C39.1435 38.0768 38.0775 39.1428 36.7626 39.1428H17.7149C16.4 39.1428 15.334 38.0768 15.334 36.7619V17.7143C15.334 16.3993 16.4 15.3333 17.7149 15.3333ZM45.4927 24.8571H46.2864C47.6013 24.8571 48.6673 25.9231 48.6673 27.2381V46.2857C48.6673 47.6007 47.6013 48.6666 46.2864 48.6666H27.2387C25.9238 48.6666 24.8578 47.6007 24.8578 46.2857V45.492H41.5245C43.7161 45.492 45.4927 43.7154 45.4927 41.5238V24.8571Z"
                            fill="#2FA62B"
                          />
                          <path
                            opacity="0.3"
                            d="M40.7306 20.0952H41.5243C42.8392 20.0952 43.9052 21.1612 43.9052 22.4762V41.5238C43.9052 42.8388 42.8392 43.9047 41.5243 43.9047H22.4767C21.1617 43.9047 20.0957 42.8388 20.0957 41.5238V40.7301H36.7624C38.954 40.7301 40.7306 38.9535 40.7306 36.7619V20.0952Z"
                            fill="#2FA62B"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold uppercase mb-2 sm:mb-3 text-gray-900 text-center sm:text-left">
                      Collaborate with Purpose
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                      We foster open dialogue, respect diverse ideas, and
                      succeed together as one team
                    </p>
                  </div>

                  {/* Value Card 3 - Empower People */}
                  <div className="group feature-box1 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl bg-white border border-transparent border-cyan-400/20 hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                      <div className="relative bg-white ring-pulse-wrapper">
                        <svg
                          width="48"
                          height="48"
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 pulse group-hover:scale-110 transition-transform duration-300 relative z-10"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="64" height="64" rx="16" />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.1816 26.9923C26.336 23.9407 27.6807 20.439 28.2202 16.4748C28.2716 16.0972 28.5398 15.7832 28.9079 15.6696C32.6179 14.5252 34.7272 16.3438 34.6923 20.4906C34.6856 21.2955 34.6483 22.011 34.569 23.1053C34.3918 25.5495 34.4059 26.2165 34.6804 26.6653C34.9443 27.0968 35.8011 27.2441 37.8273 26.8606C38.4667 26.7396 39.1081 26.6024 39.8186 26.4377C40.1321 26.365 42.391 25.8156 42.9684 25.6913C44.0698 25.4543 44.8601 25.354 45.555 25.3964C47.4376 25.5115 48.4366 26.7197 48.6093 29.0345C48.9133 33.111 47.9739 41.2991 47.0368 44.3151C46.0792 47.3971 44.4092 48.5604 40.4005 48.6307C37.8232 48.6759 33.8591 48.6759 28.4899 48.6306C27.1193 48.5988 25.8772 48.3343 24.7724 47.8397C25.0825 47.1996 25.2562 46.4826 25.2562 45.7255V30.0393C25.2562 28.8877 24.8543 27.8289 24.1816 26.9923Z"
                            fill="#6ED4DD"
                          />
                          <path
                            opacity="0.3"
                            d="M18.3106 27.098C16.6667 27.098 15.334 28.4148 15.334 30.0392V45.7255C15.334 47.3498 16.6667 48.6667 18.3106 48.6667H20.295C21.9389 48.6667 23.2716 47.3498 23.2716 45.7255V30.0392C23.2716 28.4148 21.9389 27.098 20.295 27.098H18.3106Z"
                            fill="#6ED4DD"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold uppercase mb-2 sm:mb-3 text-gray-900 text-center sm:text-left">
                      Empower People
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                      We invest in continuous learning and support our
                      employees&apos; personal and professional growth.
                    </p>
                  </div>

                  {/* Value Card 4 - Act with Integrity */}
                  <div className="group feature-box1 p-4 sm:p-6 md:p-8 lg:p-6 xl:p-8 rounded-xl lg:rounded-2xl bg-white border border-transparent border-purple-400/20 hover:shadow-xl transition-all duration-300">
                    <div className="mb-4 sm:mb-6 flex justify-center sm:justify-start">
                      <div className="relative bg-white ring-pulse-wrapper">
                        <svg
                          width="48"
                          height="48"
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 pulse group-hover:scale-110 transition-transform duration-300 relative z-10"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="64" height="64" rx="16" />
                          <path
                            opacity="0.3"
                            d="M37.5562 39.1429V46.2857C37.5562 47.6007 36.4902 48.6667 35.1753 48.6667H17.7149C16.4 48.6667 15.334 47.6007 15.334 46.2857V28.8254C15.334 27.5104 16.4 26.4445 17.7149 26.4445H24.8578V35.1746C24.8578 37.3662 26.6344 39.1429 28.826 39.1429H37.5562Z"
                            fill="#A96EDD"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.8263 15.3334H46.2866C47.6015 15.3334 48.6675 16.3994 48.6675 17.7143V35.1746C48.6675 36.4896 47.6015 37.5556 46.2866 37.5556H28.8263C27.5113 37.5556 26.4453 36.4896 26.4453 35.1746V17.7143C26.4453 16.3994 27.5113 15.3334 28.8263 15.3334Z"
                            fill="#A96EDD"
                          />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold uppercase mb-2 sm:mb-3 text-gray-900 text-center sm:text-left">
                      Act with Integrity
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                      We lead with honesty, transparency, and an unwavering
                      commitment to doing the right thing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Join Team Section */}
      <div className="animate-on-scroll max-w-7xl md:mx-auto shadow-md bg-[#f9f9f9] border border-gray-100 rounded-3xl mb-8 md:mb-20 mx-4 sm:mx-6">
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0">
          <div className="container mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center overflow-hidden">
              {/* Content Container */}
              <div className="relative z-10 mx-auto max-w-4xl">
                {/* Main Heading */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight px-2">
                  <span className="block sm:inline">Join Our Team</span>
                </h2>

                {/* Description */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-sm sm:text-base md:text-xl text-[#606060] leading-relaxed mx-auto px-2 sm:px-4 max-w-3xl">
                    <span className="block sm:inline">
                      Join the AGI Moneey team and be part of a mission
                      that&apos;s
                    </span>
                    <span className="block sm:inline">
                      {" "}
                      changing the way people access their earnings.
                    </span>
                    <br className="hidden lg:block" />
                    <span className="block sm:inline lg:inline">
                      {" "}
                      Let&apos;s innovate, grow and make a difference together!
                    </span>
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2 sm:pt-4 px-2">
                  <div className="flex justify-center">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 sm:gap-3 hover:bg-[#F2AB3C] border-2 text-[#F2AB3C] border-[#F2AB3C] hover:text-black px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#F2AB3C]/20 w-full sm:w-auto justify-center max-w-xs sm:max-w-none"
                      aria-label="Get in touch with AGI Moneey"
                    >
                      <span>Get In Touch</span>
                      <i className="fa fa-arrow-right text-xs sm:text-sm md:text-base lg:text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .floating {
          animation: floating 5s ease-in-out infinite;
        }

        /* Animation keyframes */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Animation classes */
        .animate-slide-in-left {
          opacity: 0;
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          opacity: 0;
          animation: slideInRight 0.8s ease-out forwards;
        }

        /* Add delays for staggered effect (optional) */
        .animate-slide-in-left {
          animation-delay: 0.2s;
        }

        .animate-slide-in-right {
          animation-delay: 0.4s;
        }

        @keyframes floating {
          0% {
            transform: translate(0, 0px);
          }
          50% {
            transform: translate(0, 15px);
          }
          100% {
            transform: translate(0, 0px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 40px;
          color: white;
          text-align: left;
          margin-bottom: 30px;
          border: 1px solid #ddd;
          transition: all 0.4s ease;
        }

        .feature-card:hover {
          transform: scale(1.05);
        }

        .process-card {
          background: white;
          // box-shadow: inset 8px 0 8px -6px rgba(0, 0, 0, 0.15);
          // padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          // min-height: 400px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .process-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            145deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .process-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: inset 8px 0 8px -6px rgba(0, 0, 0, 0.15),
            0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.08);
        }

        .process-card:hover::before {
          opacity: 1;
        }

        .process-card:hover svg {
          transform: scale(1.1);
          filter: brightness(1.1);
        }

        .process-card svg {
          transition: all 0.4s ease;
        }

        .team-card {
          background: rgba(221, 221, 221, 0.22);
          border-radius: 6px;
          padding: 2rem;
          text-align: center;
          transition: all 0.4s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .culture-card {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          padding: 40px;
          color: white;
          text-align: left;
          transition: all 0.4s ease;
        }

        .pulse-hover:hover {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
          }
          100% {
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
        }

        .team-swiper {
          overflow: visible;
        }
      `}</style>
    </>
  );
};

export default AboutUs;
