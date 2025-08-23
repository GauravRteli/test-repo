import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="mt-10 md:mt-0 py-12 bg-[#222222] text-white relative overflow-hidden">
      {/* Optional Background Pattern/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#222222] via-[#2a2a2a] to-[#1a1a1a] opacity-50"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
              <span className="block">Smarter Payroll, Happier</span>
              <span className="block">Employees</span>
            </h2>
            {/* Description */}
            <div className="max-w-3xl mx-auto px-2 sm:px-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                From instant wage access to seamless payroll integration, AGI
                Moneey helps employers deliver a modern financial benefit that
                teams truly value
              </p>
            </div>
            {/* CTA Button */}
            import Link from "next/link";
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
  );
};

export default Banner;
