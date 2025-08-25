"use client";

import { useState } from "react";
import Link from "next/link";

const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  const faqData = [
    {
      question: "What is AGI Moneey?",
      answer:
        "AGI Moneey is known as a leading Earnings on Demand platform that offers Advance Salary On-Demand, helping employees manage mid-month cash flow challenges and unexpected expenses. It is not categorized as a loan and does not involve any interest, debt, or paperwork—just advance access to earned income.",
    },
    {
      question: "How does AGI Moneey work?",
      answer:
        "The platform functions by integrating with an organization's attendance and payroll systems to determine real-time earned wages. Users can download the app, register with their employer-linked mobile number, confirm their profile, and start using the service after verifying KYC and bank details.",
    },
    {
      question: "Who can use AGI Moneey?",
      answer:
        "AGI Moneey is made available to employees of organizations that have partnered with the platform. Eligible users typically include on-roll employees, field staff, consultants, contingent workers, and temporary personnel.",
    },
    {
      question: "Can individuals sign up for AGI Moneey directly?",
      answer:
        "Direct sign-up by individuals is not supported. The platform is exclusively accessible through employer partnerships.",
    },
  ];

  return (
    <div className="px-10 bg-[#f9f9f9]">
      <div
        className="py-12 lg:py-32 w-full"
        style={{
          backgroundImage: 'url("assets/images/faqq.png")',
          backgroundSize: "cover",
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-[#f2ab3c] text-xl font-medium">
                  Frequently Asked Questions
                </h3>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Do You Have Questions?
                </h2>
                <p className="text-black text-lg">
                  We have answers (well most of the times)
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-20">
                <Link
                  href="/contact"
                  className="bg-[#f2ab3c] hover:bg-[#f2ab3c] text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-lg inline-block text-center"
                >
                  Contact Us
                </Link>
                <Link
                  href="/faq"
                  className="text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200 inline-block text-center"
                >
                  View All FAQ
                </Link>
              </div>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-[#f2ab3c] pr-4 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 flex items-center justify-center text-[#f2ab3c] font-bold text-xl relative">
                        {/* Plus Icon */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                            openAccordion === index
                              ? "transform rotate-90 opacity-0 scale-75"
                              : "transform rotate-0 opacity-100 scale-100"
                          }`}
                        >
                          +
                        </div>

                        {/* Minus Icon */}
                        <div
                          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                            openAccordion === index
                              ? "transform rotate-0 opacity-100 scale-100"
                              : "transform -rotate-90 opacity-0 scale-75"
                          }`}
                        >
                          −
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openAccordion === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
