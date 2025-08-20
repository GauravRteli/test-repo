"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <nav
          className={`transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md py-2" : "bg-white py-6"
          }`}
        >
          <div className="container max-w-[80vw] mx-auto">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
                <Image
                  src="/assets/images/Frame 4.png"
                  alt="AGI Money Logo"
                  width={150}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/"
                  className={`transition-all duration-800 hover:text-black hover:font-bold ${
                    isActive("/") ? "text-black font-bold" : "text-gray-800"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/product"
                  className={`transition-all duration-800 hover:text-black hover:font-bold ${
                    isActive("/product")
                      ? "text-black font-bold"
                      : "text-gray-800"
                  }`}
                >
                  Our Product
                </Link>
                <Link
                  href="/about"
                  className={`transition-all duration-800 hover:text-black hover:font-bold ${
                    isActive("/about")
                      ? "text-black font-bold"
                      : "text-gray-800"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  className={`transition-all duration-800 hover:text-black hover:font-bold ${
                    isActive("/faq") ? "text-black font-bold" : "text-gray-800"
                  }`}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="bg-[#f2ab3c] text-black font-semibold px-4 py-2 rounded-full transition-all duration-800 transform hover:font-bold"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden flex flex-col items-center justify-center w-10 h-10 bg-[#f2ab3c] rounded-lg focus:outline-none transition-all duration-300"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-xl transform transition-transform duration-300 z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <Image
              src="/assets/images/Frame 4.png"
              alt="AGI Money Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="p-4">
            <div className="space-y-4">
              <Link
                href="/"
                onClick={closeMenu}
                className={`block w-full py-3 px-4 font-medium transition-all duration-200 text-left ${
                  isActive("/")
                    ? "bg-yellow-100 text-amber-900 font-bold rounded-lg"
                    : "text-gray-800 hover:bg-gray-100 rounded-lg"
                }`}
              >
                Home
              </Link>
              <Link
                href="/product"
                onClick={closeMenu}
                className={`block w-full py-3 px-4 font-medium transition-all duration-200 text-left ${
                  isActive("/product")
                    ? "bg-yellow-100 text-amber-900 font-bold rounded-lg"
                    : "text-gray-800 hover:bg-gray-100 rounded-lg"
                }`}
              >
                Our Product
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block w-full py-3 px-4 font-medium transition-all duration-200 text-left ${
                  isActive("/about")
                    ? "bg-yellow-100 text-amber-900 font-bold rounded-lg"
                    : "text-gray-800 hover:bg-gray-100 rounded-lg"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/faq"
                onClick={closeMenu}
                className={`block w-full py-3 px-4 font-medium transition-all duration-200 text-left ${
                  isActive("/faq")
                    ? "bg-yellow-100 text-amber-900 font-bold rounded-lg"
                    : "text-gray-800 hover:bg-gray-100 rounded-lg"
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block w-full bg-[#f2ab3c] text-black font-semibold py-3 px-4 mt-6 text-left transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
