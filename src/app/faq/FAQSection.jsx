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
    <div className="bg-gray-50 py-16">
      <div className="max-w-full mx-auto">
        {/* Header Section */}

        {/* FAQ Items */}
        <div className="space-y-4 px-4 max-w-4xl mx-auto mb-20">
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
  <div className="mb-8">
    <p className="text-[#f2ab3c] text-md mb-1">Frequently Asked Questions</p>
    <h2 className="text-3xl font-bold text-gray-900 mb-2">
      Do You Have Questions?
    </h2>
    <p className="text-gray-600 text-md">
      We have answers (well most of the times)
    </p>
  </div>
);

// Individual FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-gray-300 rounded-md bg-white overflow-hidden">
    <button
      className="w-full px-6 py-3 text-left flex items-center justify-between hover:text-[#f2ab3c] transition-colors duration-300 group"
      onClick={onClick}
    >
      <span className="font-semibold text-sm text-gray-700 group-hover:text-[#f2ab3c] transition-colors duration-300">
        {question}
      </span>
      <div className="ml-4 flex-shrink-0">
        <div
          className={`transform transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <MinusIcon
              className="w-3 h-3 text-[#f2ab3c] transition-all duration-700 ease-in-out"
              strokeWidth={4}
            />
          ) : (
            <PlusIcon
              className="w-3 h-3 text-[#f2ab3c] transition-all duration-700 ease-in-out"
              strokeWidth={4}
            />
          )}
        </div>
      </div>
    </button>

    {/* Only outer component slides up - no text animation */}
    <div
      className={`transition-all duration-700 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="px-6 pb-5 border-t border-gray-100 pt-4">
        <p className="text-gray-600 text-xs">{answer}</p>
      </div>
    </div>
  </div>
);

// Call to Action Component
const FAQCallToAction = () => (
  <section className="bg-black text-white py-10 px-4">
    <div className="container mx-auto max-w-6xl">
      <div className="flex justify-center">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2">
              Have Something not being
              <br />
              answered?
            </h1>

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

export default FAQSection;
