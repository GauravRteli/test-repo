"use client";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    // Initialize intersection observer for animation
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Head>
        <title>AGI Moneey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      {/* Start Hero Section */}
      <section className="relative z-20 ">
        <div
          className="max-w-7xl bg-[#f2ab3c] mx-auto px-4 sm:px-6 lg:px-8 md:rounded-lg relative overflow-visible"
          style={{ transform: "translateY(10.33%)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 py-6 sm:py-8 lg:py-10 text-black text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                Making any day <br />
                <span className="text-black">a pay day</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-md mb-8 sm:mb-6 lg:mb-8">
                AGI Moneey - India's integrated Earnings on Demand platform.
                <br />
                Download the mobile app and access your earnings, today.
                <br />
                Now on iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 items-start">
                <Link
                  href="https://apps.apple.com/in/app/agi-moneey/id6747022528"
                  className="transition-transform hover:scale-105"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/home1/banner/applestore.png"
                    alt="Apple Store"
                    width={150}
                    height={50}
                    className="h-8 sm:h-10 lg:h-12 w-auto"
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.agimoneey.app&pcampaignid=web_share"
                  className="transition-transform hover:scale-105"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/home1/banner/playstore.png"
                    alt="Play Store"
                    width={150}
                    height={50}
                    className="h-8 sm:h-10 lg:h-12 w-auto"
                  />
                </Link>
              </div>
            </div>

            {/* Phone Image Container - Mobile & Tablet (BOTTOM RIGHT) */}
            <div className="lg:hidden absolute bottom-0 right-4 sm:right-6 w-32 sm:w-40 pointer-events-none">
              <Image
                src="/assets/images/9.png"
                alt="Mobile App"
                width={300}
                height={600}
                priority
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Phone Image Container - Desktop (UNCHANGED from original) */}
            <div className="hidden lg:block absolute bottom-0 right-10 w-80 xl:w-96 h-full pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/images/9.png"
                  alt="Mobile App"
                  width={700}
                  height={800}
                  priority
                  className="absolute bottom-0 w-64 lg:w-72 xl:w-96 h-auto drop-shadow-2xl z-30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Start Footer Area */}
      <footer className="bg-[#111] text-gray-300 font-sans pt-20 sm:pt-24 lg:pt-32 pb-6 sm:pb-8 relative z-10 -mt-4 sm:-mt-6 lg:-mt-8 xl:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
            {/* Logo + Partner Info */}
            <div className="lg:col-span-1 text-center sm:text-left">
              <div className="mb-4 sm:mb-5">
                <Link href="/" className="transition-transform hover:scale-105">
                  <Image
                    src="/assets/images/Frame 6.png"
                    alt="AGI Moneey"
                    width={150}
                    height={50}
                    className="w-32 sm:w-36 h-auto mx-auto sm:mx-0"
                  />
                </Link>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 border border-[#2a2a2a]">
                <div className="text-xs sm:text-sm font-medium text-gray-200">
                  <strong>NBFC Partner</strong>
                  <br />
                  SURMIT INVESTMENT PRIVATE LIMITED
                  <br />
                  RBI COR: B-14.02076
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61576157237828"
                  className="flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110"
                >
                  <FaFacebookF className="font-semibold" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/agimoneey/"
                  className="flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="font-semibold" />
                </a>
                <a
                  target="_blank"
                  href="https://x.com/AGIMoneey"
                  className="flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110"
                >
                  <FaTwitter className="font-semibold" />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@AGIMoneey"
                  className="flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110"
                >
                  <FaYoutube className="font-semibold" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/agi-moneey/?originalSubdomain=in"
                  className="flex items-center justify-center w-7 sm:w-8 h-7 sm:h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedinIn className="font-semibold" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="text-center sm:text-left">
              <h5 className="text-white font-semibold mb-3 sm:mb-4 text-lg sm:text-2xl">
                Company
              </h5>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300"
                  >
                    Our Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300"
                  >
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="text-center sm:text-left">
              <h5 className="text-white font-semibold mb-3 sm:mb-4 text-lg sm:text-2xl">
                Policies
              </h5>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/grievance"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300"
                  >
                    Grievance Redressal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300"
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacypolicy"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            {/* Contact Us */}
            <div className="text-center sm:text-left">
              <h5 className="text-white font-semibold mb-3 sm:mb-4 text-lg lg:text-2xl">
                Contact Us
              </h5>
              <div className="space-y-2 sm:space-y-3">
                <p className="flex items-center gap-2 text-gray-300 text-md font-semibold justify-center sm:justify-start">
                  <FaEnvelope className="text-lg" aria-label="email" />
                  {/* <a
                    href="mailto:contact@agimoneey.com"
                    className="underline decoration-dotted hover:text-orange-400 transition-colors duration-300"
                  > */}
                  contact@agimoneey.com
                  {/* </a> */}
                </p>
                <p className="flex items-center gap-2 text-gray-300 text-md font-semibold justify-center sm:justify-start">
                  <FaPhoneAlt className="text-lg" aria-label="phone" />
                  {/* <a
                    href="tel:+919953616633"
                    className="underline decoration-dotted hover:text-orange-400 transition-colors duration-300"
                  > */}
                  +91 9953616633
                  {/* </a> */}
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#606060] pt-4 sm:pt-5 flex flex-col sm:flex-row justify-between items-center text-sm md:text-md text-[#606060] gap-2 text-center sm:text-left">
            <p>© 2025 AGI Moneey. All Rights Reserved.</p>
            <p>CIN: U64990DL1996PTC079056</p>
          </div>
        </div>
      </footer>
      {/* End Footer Area */}
    </>
  );
}
