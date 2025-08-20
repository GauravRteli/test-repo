import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-black text-white py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2">
                Empower Your Team With
                <br />
                Financial Flexibility
              </h1>

              <p className="text-gray-300 text-sm max-w-4xl mx-auto mb-8 leading-relaxed">
                AGI Moneey enables businesses to provide on-demand salary
                access—helping employees manage finances
                <br />
                without affecting payroll cycles. A seamless, cost-free perk
                that boosts morale, loyalty, and performance
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 bg-transparent border-2 border-[#f2ab3c] text-[#f2ab3c] font-semibold rounded-full hover:bg-[#f2ab3c] hover:text-black transition-all duration-300 group"
                >
                  Get In Touch
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
