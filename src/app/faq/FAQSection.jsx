"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(0); // Only one item can be open at a time

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? -1 : index);
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
    {
      question: "How much salary can be accessed before payday?",
      answer:
        "The accessible amount depends on the policy set by the employer and the number of days worked. In many cases, users can access up to 100% of their earned wages.",
    },
    {
      question: "Are multiple withdrawals permitted?",
      answer:
        "Yes, multiple withdrawals are allowed as long as the total does not exceed the available earned salary. The minimum withdrawal amount is Rs. 1,000.",
    },
    {
      question: "How quickly are funds transferred?",
      answer:
        "Funds are generally credited to the registered bank account within 60 seconds after the withdrawal request is made.",
    },
    {
      question: "How is repayment handled?",
      answer:
        "Repayment is managed automatically. The withdrawn amount is deducted from the user's salary by the employer at the end of the month and transferred to AGI Moneey. The remaining salary is credited to the employee's account.",
    },
    {
      question: "Are there any fees for using AGI Moneey?",
      answer:
        "A transparent platform fee is applied per withdrawal and is shown upfront in the app. There are no hidden charges, interest rates, subscription fees, or penalties.",
    },
    {
      question: "Is there any interest charged?",
      answer:
        "No interest is charged since AGI Moneey is not a loan or credit product.",
    },
    {
      question: "What happens if the service is not used?",
      answer:
        "There are no charges if no withdrawal is made. Users incur no cost for simply being enrolled.",
    },
    {
      question: "Is personal and salary data secure?",
      answer:
        "Yes, the platform complies with RBI's KYC regulations and adheres to DPDP, VAPT, labor laws, SOC-2, and ISO 27001 standards. Bank-grade encryption is used to safeguard all data.",
    },
    {
      question: "Does using AGI Moneey affect credit scores?",
      answer:
        "No, using the service has no impact on credit scores, as it does not involve loans or credit bureau reporting.",
    },
    {
      question: "Why might the earned salary balance not appear in the app?",
      answer:
        "Only the portion of salary already earned—based on attendance or days worked—is shown in the app. The data is updated in coordination with the employer's payroll system.",
    },
    {
      question: "How does AGI Moneey integrate with payroll systems?",
      answer:
        "The platform is designed to work directly with HR and payroll teams, enabling automated disbursement and repayment without disrupting existing workflows.",
    },
    {
      question: "How soon can an organization implement AGI Moneey?",
      answer:
        "Basic implementation can be completed within 24 hours of signing an agreement. Custom integration may take between 3 to 10 working days.",
    },
    {
      question:
        "What can be done if AGI Moneey is not yet available in a company?",
      answer:
        "Employees may suggest the platform to their HR or employer for consideration as a financial wellness benefit.",
    },
    {
      question:
        "What happens if an employee resigns or leaves the organization?",
      answer:
        "Any pending withdrawal is adjusted against the final salary. If necessary, AGI Moneey coordinates directly with the user to facilitate smooth settlement.",
    },
    {
      question: "How can users update a changed phone number?",
      answer:
        "It is advised to contact customer support through the app or via email to update any account-related details such as a mobile number.",
    },
    {
      question: "What are the benefits of AGI Moneey for employers?",
      answer:
        "The platform supports improved employee satisfaction, reduces financial stress, enhances productivity, and aids in talent retention—offering these benefits at no cost to the employer.",
    },
    {
      question: "How can AGI Moneey customer support be contacted?",
      answer:
        "Customer support is accessible through: Phone: +91-, Email (Support): support@agimoneey.com, Email (Sales/HR Onboarding): contact@agimoneey.co.in, In-app chat (available 24×7)",
    },
  ];

  return (
    <div className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-full mx-auto">
        {/* FAQ Items Container */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <FAQHeader />
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <FAQCallToAction />
      </div>
    </div>
  );
};

// Header Component
const FAQHeader = () => (
  <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center sm:text-left">
    <p className="text-[#f2ab3c] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wider mb-2 sm:mb-3">
      Frequently Asked Questions
    </p>
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
      Do You Have Questions?
    </h2>
    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto sm:mx-0">
      We have answers (well most of the times!)
    </p>
  </div>
);

// Individual FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-200 hover:border-[#f2ab3c]/30 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
    <button
      className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-start sm:items-center justify-between hover:bg-gray-50 transition-all duration-300"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${question
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <span className="font-semibold text-sm sm:text-base md:text-lg text-gray-800 group-hover:text-[#f2ab3c] transition-colors duration-300 pr-4 leading-relaxed flex-1">
        {question}
      </span>
      <div className="ml-4 flex-shrink-0 self-start sm:self-center pt-1 sm:pt-0">
        <div
          className={`transform transition-all duration-500 ease-in-out p-1 rounded-full hover:bg-[#f2ab3c]/10 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <MinusIcon
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#f2ab3c] transition-all duration-300"
              strokeWidth={2.5}
            />
          ) : (
            <PlusIcon
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#f2ab3c] transition-all duration-300"
              strokeWidth={2.5}
            />
          )}
        </div>
      </div>
    </button>

    {/* Expandable Answer Section */}
    <div
      className={`transition-all duration-700 ease-in-out overflow-hidden ${
        isOpen ? "max-h-[500px] sm:max-h-96" : "max-h-0"
      }`}
      id={`faq-answer-${question.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 border-t border-gray-100 pt-4 sm:pt-5 lg:pt-6 bg-gray-50/50">
        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

// Call to Action Component
const FAQCallToAction = () => (
  <section className="bg-[#222222] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-0 relative overflow-hidden">
    <div className="container mx-auto max-w-6xl relative z-10">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white leading-tight">
              <span className="block sm:inline">Have Something not being</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> answered?</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Can't find what you're looking for? We're here to help!
            </p>

            <div className="flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 bg-transparent border-2 border-[#f2ab3c] text-[#f2ab3c] font-semibold text-sm sm:text-base md:text-lg lg:text-xl rounded-full hover:bg-[#f2ab3c] hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#f2ab3c]/20 active:scale-95"
                aria-label="Get in touch with AGI Moneey support"
              >
                <span>Get In Touch</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
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

            {/* Optional Contact Methods */}
            <div className="mt-8">
              <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4">
                Or reach us directly:
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm md:text-base text-gray-300">
                <a
                  href="mailto:support@agimoneey.com"
                  className="hover:text-[#f2ab3c] transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  support@agimoneey.com
                </a>
                <span className="hidden sm:block text-gray-500">|</span>
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  24×7 In-app Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;
