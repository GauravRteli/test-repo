"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
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
      {/* Link for Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        rel="stylesheet"
      />

      {/* About Section */}
      <section
        className="py-24 px-4 lg:px-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/pro/Component 127.png')",
        }}
      >
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 h-full flex items-center justify-center">
              <Image
                src="/assets/images/pro/16.png"
                alt="Floating"
                className="floating w-5/6  object-contain max-w-none"
              />
            </div>
            <div className="lg:w-1/2 h-full flex flex-col justify-center text-black space-y-6 px-8 lg:px-12">
              <h1 className="text-xl lg:text-2xl font-bold text-white">
                ABOUT US
              </h1>
              <h1 className="text-2xl lg:text-4xl font-bold leading-relaxed">
                Empowering Financial
              </h1>
              <h1 className="text-2xl lg:text-4xl font-bold leading-relaxed">
                Freedom, in One Tap
              </h1>
              <p className="text-justify leading-relaxed text-base">
                We&apos;re a fast-growing FinTech startup, backed by our own
                NBFC, on a mission to revolutionize earnings management. Our
                Earnings on Demand solution empowers employees with secure,
                transparent, and responsible access to their earned salary
                —whenever they need it.
              </p>
              <p className="text-justify leading-relaxed text-base">
                The traditional monthly pay cycle leaves employees financially
                strained, pushing many toward high-interest loans or risky
                borrowing. AGI Moneey bridges this gap, turning every day into
                payday. With real-time access to earned income, we reduce
                financial stress, boost productivity, and prevent debt
                traps—creating a movement toward true financial wellness.
              </p>
              <p className="font-bold text-xl">
                We are making every day a payday
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <div className="animate-on-scroll">
        <section className="py-24 px-4 lg:px-0">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <div className="lg:w-2/3">
                <h2 className="text-xl uppercase tracking-wider text-[#F2AB3C] mb-4">
                  our vision
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  <motion.h2
                    className="text-3xl lg:text-4xl font-bold leading-tight mb-6"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    To be India&apos;s Most Pioneer & Reliable
                    <br /> Salary on Demand Platform
                  </motion.h2>
                </h2>
              </div>
              <div className="lg:w-1/3">
                <motion.p
                  className="text-gray-700 leading-relaxed"
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

            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed">
                We are committed to transforming the way employees manage their
                finances by providing a flexible, transparent, and ethical
                Salary on Demand solution. Our vision goes beyond tradition
                payroll system; it&apos;s about empowering employees, enhancing
                workplace productivity, and breaking the cycle of debt traps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="feature-box zoom p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <svg
                    width="57"
                    height="55"
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
                <h3 className="text-lg font-bold mb-3">Empower Every Worker</h3>
                <p className="text-gray-600">
                  with instant access to earned income—no more waiting for
                </p>
              </div>

              <div className="feature-box zoom p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <svg
                    width="57"
                    height="55"
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
                <h3 className="text-lg font-bold mb-3">
                  Promote financial well-being
                </h3>
                <p className="text-gray-600">
                  by reducing dependency on loans and emergency credit
                </p>
              </div>

              <div className="feature-box zoom p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 bg-orange-50">
                <div className="mb-6">
                  <svg
                    width="57"
                    height="55"
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
                <h3 className="text-lg font-bold mb-3">Support employers</h3>
                <p className="text-gray-600">
                  in building a financially resilient and engaged workforce
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Story Section */}
      <div className="animate-on-scroll">
        <section className="py-24 px-4 lg:px-0">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-xl uppercase tracking-wider text-[#F2AB3C] mb-4">
                agi moneey
              </h2>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
                <span className="hidden lg:block">
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
                </span>
                <span className="lg:hidden">
                  AGI Moneey was founded on a simple truth: employees
                  shouldn&apos;t wait weeks to access their hard-earned moneey.
                  We reinvented India&apos;s payroll system with instant,
                  responsible salary access—because financial needs don&apos;t
                  follow a monthly calendar. Today, our Earnings on Demand
                  solution empowers workers, boosts productivity, and breaks
                  debt cycles
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-0">
              {/* Card 1 - Why We Exist */}
              <div className="process-card relative">
                <div>
                  <div className="absolute top-0 left-0 ">
                    <svg
                      width="98"
                      height="98"
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
                  <div className="pt-24">
                    <h3 className="text-xl font-bold mb-4">Why We Exist</h3>
                    <p className="text-gray-600">
                      <span className="hidden lg:block">
                        Salaried Indians face <br />
                        cash shortages
                        <br /> between salary cycle, <br />
                        forcing expensive loans. <br />
                        This stress hurts <br />
                        productivity and traps <br />
                        workers in endless debt cycles
                      </span>
                      <span className="lg:hidden">
                        Salaried Indians face cash shortages between salary
                        cycle, forcing expensive loans. This stress hurts
                        productivity and traps workers in endless debt cycles
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 - How We Solve It */}
              <div className="process-card relative">
                <div>
                  <div className="absolute top-0 left-0">
                    <svg
                      width="98"
                      height="98"
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
                          d="M51.9702 47.0181C53.8685 47.0181 55.7625 47.0181 57.6565 47.0181C58.088 47.0181 58.2303 46.9141 58.2217 46.4763C58.1958 45.4576 58.2001 44.4346 58.2217 43.4115C58.2217 43.0647 58.1009 42.9434 57.7601 42.952C56.9921 42.952 56.2242 42.952 55.4605 42.952C55.2958 42.9703 55.129 42.9513 54.9725 42.8965C54.8159 42.8418 54.6735 42.7525 54.5557 42.6354C54.4378 42.5182 54.3475 42.3761 54.2913 42.2194C54.2352 42.0627 54.2145 41.8953 54.231 41.7296C54.231 39.1287 54.231 36.5278 54.231 33.9268C54.215 33.7648 54.2349 33.6012 54.2892 33.4478C54.3435 33.2944 54.4309 33.1549 54.5451 33.0394C54.6592 32.9238 54.7974 32.8351 54.9497 32.7794C55.102 32.7238 55.2646 32.7026 55.426 32.7174C58.0319 32.7174 60.6377 32.7174 63.2436 32.7174C63.4022 32.7021 63.5623 32.7221 63.7124 32.7761C63.8625 32.83 63.9988 32.9166 64.1117 33.0297C64.2247 33.1427 64.3113 33.2794 64.3656 33.43C64.4199 33.5806 64.4404 33.7414 64.4257 33.9008C64.4257 36.5364 64.4257 39.1691 64.4257 41.799C64.4351 41.9542 64.4116 42.1096 64.3569 42.2551C64.3022 42.4006 64.2174 42.5327 64.1082 42.6429C63.999 42.753 63.8677 42.8387 63.7232 42.8942C63.5786 42.9498 63.424 42.9739 63.2695 42.965C62.5015 42.965 61.7379 42.991 60.9699 42.965C60.5385 42.965 60.422 43.1211 60.4306 43.5242C60.4522 44.5213 60.4565 45.5139 60.4306 46.5066C60.4306 46.9141 60.5601 47.0355 60.957 47.0355C64.3567 47.0355 67.7607 47.0355 71.1604 47.0355C71.5918 47.0355 71.9973 47.0615 72.4115 47.0355C72.8257 47.0095 72.9637 47.1352 72.9594 47.573C72.9594 49.6711 72.9594 51.7735 72.9594 53.8759C72.9594 54.4524 72.9594 54.4524 73.5375 54.4524C74.2321 54.4524 74.9311 54.4524 75.6257 54.4524C76.5231 54.4524 76.9588 54.8859 76.9588 55.8049C76.9588 58.3278 76.9588 60.8492 76.9588 63.3692C76.9588 64.2752 76.5274 64.7304 75.6343 64.7347C73.0975 64.7347 70.5621 64.7347 68.0282 64.7347C67.1653 64.7347 66.7339 64.3012 66.7339 63.4343C66.7339 60.8854 66.7339 58.3365 66.7339 55.7876C66.7339 54.8946 67.1394 54.4871 68.0282 54.4871C68.7659 54.4871 69.508 54.4871 70.2457 54.4871C70.5607 54.4871 70.6771 54.3917 70.6771 54.0536C70.6771 52.5538 70.6771 51.0539 70.6771 49.5584C70.6771 49.2549 70.5822 49.1249 70.2457 49.1249C67.0819 49.1249 63.918 49.1249 60.7542 49.1249C60.4608 49.1249 60.3573 49.2333 60.3616 49.5194C60.3616 51.0308 60.3616 52.5422 60.3616 54.0536C60.3616 54.3614 60.4738 54.4871 60.793 54.4871C61.548 54.4871 62.2987 54.4871 63.0494 54.4871C63.9554 54.4871 64.3696 54.9206 64.3696 55.8439C64.3696 58.3639 64.3696 60.8839 64.3696 63.4039C64.3696 64.3273 63.9684 64.7564 63.0494 64.7607C60.5299 64.7781 58.0089 64.7781 55.4864 64.7607C54.5761 64.7607 54.1921 64.3273 54.1921 63.3909C54.1921 60.8854 54.1921 58.3798 54.1921 55.8743C54.1921 54.9076 54.6236 54.4914 55.5598 54.4784C56.2846 54.4784 57.0094 54.4784 57.7169 54.4784C58.0319 54.4784 58.1742 54.3917 58.1484 54.045C58.1484 52.5451 58.1484 51.0467 58.1484 49.5497C58.1484 49.2159 58.0232 49.1162 57.7169 49.1162C54.5977 49.1162 51.4741 49.1162 48.3548 49.1162C47.9536 49.1162 47.8587 49.2593 47.863 49.6321C47.863 51.0712 47.8846 52.5147 47.863 53.9669C47.863 54.4004 48.0097 54.4914 48.398 54.4784C49.0926 54.4524 49.7915 54.4784 50.4861 54.4784C51.4223 54.4784 51.8322 54.9119 51.8322 55.8439C51.8322 58.3668 51.8322 60.8883 51.8322 63.4083C51.8322 64.3229 51.4008 64.7564 50.5127 64.7607C47.9881 64.7607 45.4686 64.7607 42.9447 64.7607C42.0473 64.7607 41.6504 64.3012 41.6504 63.3953V55.8569C41.6504 54.8382 42.0559 54.4351 43.0741 54.4308C43.773 54.4308 44.4676 54.4308 45.1622 54.4308C45.5549 54.4308 45.667 54.3007 45.667 53.9192C45.667 51.8212 45.667 49.7188 45.667 47.6207C45.667 47.0138 45.667 47.0138 46.2538 47.0138C48.1521 47.0138 50.0461 47.0138 51.94 47.0138L51.9702 47.0181Z"
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
                  <div className="pt-24">
                    <h3 className="text-xl font-bold mb-4">How We Solve It</h3>
                    <p className="text-gray-600">
                      <span className="hidden lg:block">
                        Our payroll integration <br />
                        provides instant earned <br />
                        wage access, giving
                        <br /> employees financial
                        <br /> relief while boosting <br />
                        workplace satisfaction <br />
                        and retention rates
                      </span>
                      <span className="lg:hidden">
                        Our payroll integration provides instant earned wage
                        access, giving employees financial relief while boosting
                        workplace satisfaction and retention rates
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 - The Impact */}
              <div className="process-card relative">
                <div>
                  <div className="absolute top-0 left-0">
                    <svg
                      width="98"
                      height="98"
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
                        d="M46.1472 36.7393C46.1472 36.7642 46.2243 36.8742 46.3186 36.9838C46.9115 37.6731 47.0615 38.8845 46.6553 39.7041C46.5962 39.8234 46.5478 39.9351 46.5478 39.9524C46.5478 39.9698 46.6776 39.984 46.8362 39.984C47.2702 39.984 48.1701 40.0939 48.7693 40.2199C51.2664 40.7456 53.476 42.3048 55.6703 45.0897C56.6096 46.2816 57.0295 46.9038 60.1308 51.6988C60.6715 52.535 61.3394 53.5276 61.6148 53.9047C61.8903 54.2818 62.1156 54.6239 62.1156 54.6648C62.1156 54.7057 61.9597 54.8961 61.7691 55.0879C61.267 55.5931 61.0853 55.8942 61.0856 56.2207C61.0859 56.5188 61.2285 56.8079 61.4479 56.9546C61.5622 57.031 65.5619 58.2583 67.7359 58.884C68.3463 59.0597 68.5816 59.0518 68.8365 58.8472C69.0138 58.7049 69.2127 58.331 69.2127 58.1403C69.2127 58.0059 66.9023 51.6718 66.7273 51.3264C66.5555 50.9871 66.1384 50.8109 65.7532 50.9146C65.568 50.9645 65.4046 51.102 64.9449 51.5943L64.3688 52.2114L63.9068 51.5455C63.6527 51.1793 63.0389 50.2487 62.543 49.4776C59.7094 45.0714 59.0124 44.0526 57.8899 42.6759C54.7233 38.7925 51.2624 36.8791 47.1345 36.7299C46.5914 36.7102 46.1472 36.7145 46.1472 36.7393Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="pt-24">
                    <h3 className="text-xl font-bold mb-4">The Impact</h3>
                    <p className="text-gray-600">
                      <span className="hidden lg:block">
                        Employees escape debt <br />
                        traps, businesses
                        <br /> improve retention, and <br />
                        predatory lending <br />
                        decreases through our
                        <br /> responsible financial <br />
                        access solution
                      </span>
                      <span className="lg:hidden">
                        Employees escape debt traps, businesses improve
                        retention, and predatory lending decreases through our
                        responsible financial access solution
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 - Our Future */}
              <div className="process-card relative">
                <div>
                  <div className="absolute top-0 left-0">
                    <svg
                      width="98"
                      height="98"
                      viewBox="0 0 118 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.00390625 0H105.672C112.299 0 117.672 5.37258 117.672 12V86.2366C117.672 92.864 112.299 98.2366 105.672 98.2366H0.00390625V0Z"
                        fill="#A96EDD"
                      />
                      <path
                        d="M76.0415 30.0463C70.7736 29.7367 65.5312 30.9844 60.9695 33.6334C59.1521 34.6775 57.4818 35.9581 56.0024 37.4416L54.6393 37.3641C53.8519 37.3243 53.065 37.4498 52.3293 37.7323C51.5935 38.0149 50.9252 38.4482 50.3673 39.0044L47.5362 41.8315C47.3894 41.9775 47.281 42.1575 47.2206 42.3555C47.1602 42.5534 47.1497 42.7632 47.1901 42.9662C47.2304 43.1692 47.3204 43.3591 47.4519 43.519C47.5834 43.6789 47.7525 43.8039 47.944 43.8829L51.6178 45.407C51.2348 46.4537 50.9183 47.5236 50.6703 48.6101L50.4994 49.3857C50.4648 49.5437 50.4706 49.7078 50.516 49.8629C50.5615 50.0181 50.6452 50.1594 50.7596 50.2738L56.6665 56.1993C56.7811 56.3135 56.9226 56.3971 57.0779 56.4425C57.2333 56.4879 57.3976 56.4936 57.5558 56.4592L58.3325 56.2885C59.4242 56.0477 60.4995 55.7381 61.552 55.3617L63.0705 59.0147C63.1516 59.2045 63.2783 59.3715 63.4394 59.5008C63.6004 59.6301 63.7909 59.7178 63.994 59.7561C64.1971 59.7944 64.4065 59.7822 64.6037 59.7206C64.801 59.6589 64.9799 59.5497 65.1249 59.4025L67.956 56.5755C68.513 56.0185 68.947 55.3511 69.2299 54.6164C69.5128 53.8817 69.6385 53.0959 69.5987 52.3097L69.5288 50.9486C71.0213 49.4787 72.3115 47.8173 73.3658 46.008C76.0171 41.4524 77.2652 36.2176 76.9542 30.9577C76.9411 30.7202 76.8408 30.4959 76.6724 30.3277C76.504 30.1595 76.2794 30.0593 76.0415 30.0463Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="pt-24">
                    <h3 className="text-xl font-bold mb-4">Our Future</h3>
                    <p className="text-gray-600">
                      <span className="hidden lg:block">
                        By 2026, we&apos;ll serve 1M+ <br />
                        employees while
                        <br /> expanding into
                        <br /> insurance, micro
                        <br />
                        -investments, and
                        <br /> financial education—
                        <br />
                        building true economic resilience
                      </span>
                      <span className="lg:hidden">
                        By 2026, we&apos;ll serve 1M+ employees while expanding
                        into insurance, micro-investments, and financial
                        education—building true economic resilience
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission Section */}
      <div className="animate-on-scroll">
        <section className="py-24 px-4 lg:px-0">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <Image
                  src="/assets/images/4.png"
                  alt="Mission"
                  className="w-full max-w-lg mx-auto"
                />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-base uppercase tracking-wider text-[#F2AB3C] mb-4">
                  our mission
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Making Any Day A Pay Day
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    At AGI Moneey, our mission is to empower India&apos;s
                    workforce by transforming how salaries are accessed and
                    managed—through trusted partnerships with employers.
                  </p>
                  <p>
                    We work hand-in-hand with organizations to provide their
                    employees with instant, responsible access to earned salary,
                    without waiting for payday. By disbursing salary advances on
                    behalf of the employer, we eliminate the need for costly
                    loans, reduce financial stress, and foster a more stable,
                    productive workforce.
                  </p>
                  <p>
                    Through our transparent, tech-driven platform, we are not
                    just solving a financial problem—we are creating a new
                    standard of flexibility, dignity, and control for every
                    worker. Our goal is a future where financial freedom starts
                    the moment you earn it, and no employee has to choose
                    between urgent needs and long-term well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="animate-on-scroll">
        <section className="py-20 bg-[#222222] text-white">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <div className="space-y-6">
              <p className="text-4xl lg:text-5xl font-bold leading-relaxed">
                Salary support that works <br /> both ways
              </p>
              <span className="text-gray-300 block">
                Whether you&apos;re an employer looking to offer smarter salary
                solutions, AGI Moneey is here to support you
              </span>
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 hover:bg-[#F2AB3C] border-2 text-[#F2AB3C] border-[#F2AB3C] hover:text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Get In Touch <i className="fa fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Team Section */}
      <div className="animate-on-scroll">
        <section className="py-24 px-4 lg:px-0">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-base uppercase tracking-wider text-[#F2AB3C] mb-4">
                Our Team
              </h2>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Meet The Team Behind AGI Moneey
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
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
                spaceBetween={30}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                className="mt-12"
              >
                <SwiperSlide>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <Image
                      src="/assets/images/pro/7.1.png"
                      alt="Sharad Agiwal"
                      className="mx-auto mb-6 zoom transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <h4 className="text-xl font-bold mb-2">Sharad Agiwal</h4>
                    <p className="text-gray-600 mb-4">FOUNDER & CEO</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 h-44">
                      Management Consultant with 15+ years in NBFCs,
                      demonstrating deep financial sector and regulatory
                      expertise. Currently leads a payday loan NBFC. Diversified
                      experience in hospitality and infrastructure sectors
                      highlights entrepreneurial versatility and operational
                      leadership
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                      >
                        <i className="fab fa-linkedin-in text-lg"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <Image
                      src="/assets/images/pro/7.2.png"
                      alt="Sangeeta Agiwal"
                      className="mx-auto mb-6 zoom transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <h4 className="text-xl font-bold mb-2">Sangeeta Agiwal</h4>
                    <p className="text-gray-600 mb-4">DIRECTOR</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 h-44">
                      Proven expertise in HR management, team development, and
                      compliance solutions. Strong service industry strategist
                      with exceptional analytical skills. Drives organizational
                      growth through employee training programs and performance
                      optimization initiatives
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                      >
                        <i className="fab fa-linkedin-in text-lg"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <Image
                      src="/assets/images/pro/7.3.png"
                      alt="Sumit Pareek"
                      className="mx-auto mb-6 zoom transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <h4 className="text-xl font-bold mb-2">Sumit Pareek</h4>
                    <p className="text-gray-600 mb-4">
                      CHIEF FINANCIAL OFFICER
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 h-44">
                      Financial expert with 10+ years&apos; experience in
                      advisory services. Specializes in RBI compliance, tax
                      planning, and financial analysis. Ensures robust fiscal
                      management through strategic planning and regulatory
                      adherence
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                      >
                        <i className="fab fa-linkedin-in text-lg"></i>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <Image
                      src="/assets/images/pro/7.4.png"
                      alt="Deepak Rawat"
                      className="mx-auto mb-6 zoom transition-transform duration-300 hover:scale-110"
                      loading="lazy"
                    />
                    <h4 className="text-xl font-bold mb-2">Deepak Rawat</h4>
                    <p className="text-gray-600 mb-4">
                      VICE PRESIDENT (FINANCE)
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 h-44">
                      Expert in NBFC product design, risk assessment, and
                      capital raising. Brings deep knowledge of MIS reporting,
                      financial projections, and taxation. Delivers data-driven
                      financial strategies for business growth
                    </p>
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                      >
                        <i className="fab fa-linkedin-in text-lg"></i>
                      </a>
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
        <section className="py-24 px-4 lg:px-0">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <h2 className="text-xl uppercase tracking-wider text-[#F2AB3C] mb-4">
                  Our culture
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Work Environment
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  At AGI Moneey, our culture is the foundation of everything we
                  build. We are guided by these core values
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="feature-box1 p-8 rounded-2xl bg-gray-50">
                    <div className="mb-6">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pulse"
                      >
                        <rect width="64" height="64" rx="16" fill="#F9F9F9" />
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
                    </div>
                    <h3 className="text-lg font-bold uppercase mb-3">
                      Innovate Boldly
                    </h3>
                    <p className="text-gray-600">
                      We embrace creativity, take smart risks, and learn
                      fast—because progress demands fearless thinking
                    </p>
                  </div>

                  <div className="feature-box1 p-8 rounded-2xl bg-gray-50">
                    <div className="mb-6">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pulse"
                      >
                        <rect width="64" height="64" rx="16" fill="#F9F9F9" />
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
                    </div>
                    <h3 className="text-lg font-bold uppercase mb-3">
                      Collaborate with Purpose
                    </h3>
                    <p className="text-gray-600">
                      We foster open dialogue, respect diverse ideas, and
                      succeed together as one team
                    </p>
                  </div>

                  <div className="feature-box1 p-8 rounded-2xl bg-gray-50">
                    <div className="mb-6">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pulse"
                      >
                        <rect width="64" height="64" rx="16" fill="#F9F9F9" />
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
                    </div>
                    <h3 className="text-lg font-bold uppercase mb-3">
                      Empower People
                    </h3>
                    <p className="text-gray-600">
                      We invest in continuous learning and support our
                      employees&apos; personal and professional growth.
                    </p>
                  </div>

                  <div className="feature-box1 p-8 rounded-2xl bg-gray-50">
                    <div className="mb-6">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pulse"
                      >
                        <rect width="64" height="64" rx="16" fill="#F9F9F9" />
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
                    </div>
                    <h3 className="text-lg font-bold uppercase mb-3">
                      Act with Integrity
                    </h3>
                    <p className="text-gray-600">
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
      <div className="animate-on-scroll pb-20">
        <section className="py-12 px-4 lg:px-0">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-gray-100 rounded-3xl p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Join Our Team
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                Join the AGI Moneey team and be part of a mission that&apos;s
                changing the way people access
                <br className="hidden lg:block" />
                their earnings. Let&apos;s innovate, grow and make a difference
                together!
              </p>
              <a
                href="mailto:contact@agimoneey.com"
                className="inline-flex items-center gap-2 border-2 border-[#F2AB3C] text-[#F2AB3C] hover:bg-[#F2AB3C] hover:text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Get In Touch <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .floating {
          animation: floating 5s ease-in-out infinite;
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
          box-shadow: inset 8px 0 8px -6px rgba(0, 0, 0, 0.15);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 400px;
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

export default AboutPage;
