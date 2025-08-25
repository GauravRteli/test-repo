"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// First Slide Component - Man with Background Image
const FirstSlide = ({ isActive }) => {
  return (
    <div
      className="min-w-full h-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "url(/assets/images/bmai.png)",
      }}
    >
      <div className="container mx-auto h-full px-4">
        <div className="flex h-full items-center">
          {/* Man Image - Left Side */}
          <motion.div
            className="w-1/2 h-full flex items-end justify-start"
            initial={{ opacity: 0, x: -100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/images/manhome.png"
                alt="Happy man with phone"
                width={600}
                height={700}
                className="h-[85vh] w-auto object-contain object-bottom"
                priority
                style={{
                  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            className="w-1/2 h-full flex flex-col justify-center pl-16"
            initial={{ opacity: 0, x: 100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Rotating Circular Text with Play Button */}
            <motion.div
              className="relative w-24 h-24 mb-8"
              initial={{ scale: 0 }}
              animate={isActive ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Circular Text - Only this rotates */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath-1"
                      d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  {/* i want more letter spacing */}
                  <text className="text-sm font-medium">
                    <textPath
                      href="#circlePath-1"
                      startOffset="0%"
                      style={{ fill: "white" }}
                    >
                      AGI • VIDEO • AGI • VIDEO • AGI • VIDEO •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Static Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.a
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 43 48"
                    fill="none"
                  >
                    <path
                      d="M0.60498 44.1207V4.10577C0.60498 1.47896 3.44273 -0.167845 5.72343 1.13541L40.7365 21.1429C43.0349 22.4562 43.0349 25.7702 40.7365 27.0836L5.72343 47.0911C3.44273 48.3943 0.60498 46.7475 0.60498 44.1207Z"
                      fill="white"
                    ></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Instant Financial Freedom
            </motion.h1>

            <motion.h2
              className="text-3xl lg:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Making Anyday a Payday
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl mb-12 max-w-2xl leading-relaxed text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              A free, employer-backed product that helps employees manage their
              mid-month liquidity crunch and lead stress-free, productive lives.
            </motion.p>

            {/* App Store Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/images/home1/banner/playstore.png"
                  alt="Google Play Store"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/images/home1/banner/applestore.png"
                  alt="Apple App Store"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/images/home1/banner/Frame 9.png"
                  alt="Contact Us"
                  width={150}
                  height={45}
                  className="h-12 w-auto brightness-0 invert"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Second Slide Component - Mobile App with Orange Background
const SecondSlide = ({ isActive }) => {
  return (
    <div className="min-w-full h-full bg-[#f2ab3c] relative overflow-hidden">
      <div className="container mx-auto max-w-[80vw] h-full px-4">
        <div className="grid lg:grid-cols-12 h-full items-center">
          {/* Content - Left Side */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center pr-16"
            initial={{ opacity: 0, x: -100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Rotating Circular Text with Play Button */}
            <motion.div
              className="relative w-24 h-24 mb-8"
              initial={{ scale: 0 }}
              animate={isActive ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Circular Text - Only this rotates */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath-2"
                      d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text className="text-sm font-medium tracking-wide">
                    <textPath
                      href="#circlePath-2"
                      startOffset="0%"
                      style={{ fill: "black" }}
                    >
                      AGI • VIDEO • AGI • VIDEO • AGI • VIDEO •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Static Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.a
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="w-8 h-8 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 43 48"
                    fill="none"
                  >
                    <path
                      d="M0.60498 44.1207V4.10577C0.60498 1.47896 3.44273 -0.167845 5.72343 1.13541L40.7365 21.1429C43.0349 22.4562 43.0349 25.7702 40.7365 27.0836L5.72343 47.0911C3.44273 48.3943 0.60498 46.7475 0.60498 44.1207Z"
                      fill="black"
                    ></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl lg:text-6xl font-bold mb-4 text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Instant Financial Freedom
            </motion.h1>

            <motion.h2
              className="text-3xl lg:text-5xl font-bold mb-6 text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Making Anyday a Payday
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl mb-12 max-w-2xl leading-relaxed text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              A free, employer-backed product that helps employees manage their
              mid-month liquidity crunch and lead stress-free, productive lives.
            </motion.p>

            {/* App Store Buttons */}
            <motion.div
              className="flex flex-wrap gap-6 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/images/home1/banner/playstore.png"
                  alt="Google Play Store"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/images/home1/banner/applestore.png"
                  alt="Apple App Store"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/assets/images/home1/banner/Frame 9.png"
                  alt="Contact Us"
                  width={150}
                  height={45}
                  className="h-12 w-auto"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Mobile App Image - Right Side */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative max-w-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/images/home1/banner/frame1171276884.png"
                alt="Mobile App Interface"
                width={450}
                height={550}
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Main Slider Component
const InfiniteSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:h-screen overflow-hidden">
      {/* Desktop Slider */}
      <div className="hidden lg:block w-full h-full">
        <motion.div
          className="flex w-full h-full"
          animate={{
            x: `${-currentSlide * 100}%`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <FirstSlide isActive={currentSlide === 0} />
          <SecondSlide isActive={currentSlide === 1} />
        </motion.div>
      </div>

      {/* Mobile Image Slider - Only Images */}
      <div className="block lg:hidden w-full">
        <motion.div
          className="flex w-full h-full"
          animate={{
            x: `${-currentSlide * 100}%`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {/* Mobile First Image */}
          <div className="min-w-full h-full flex items-center justify-center bg-white">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/assets/images/Component 5.png"
                alt="Component 5"
                width={800}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Mobile Second Image */}
          <div className="min-w-full h-full flex items-center justify-center bg-white">
            <motion.div
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/assets/images/Property 1=Frame 1000011535111.png"
                alt="Property Frame"
                width={800}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
