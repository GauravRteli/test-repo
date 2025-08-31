"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const AGIMoneyOnboarding = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const steps = [
    {
      id: 1,
      icon: (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            className="svg-bg"
            cx="12.6154"
            cy="12"
            rx="12.6154"
            ry="12"
            fill="#FFE4B9"
          />
          <path
            d="M5.03413 8.61499L6.4645 11.0781L8.51074 7.65491L5.57898 7.67987C5.07355 7.68259 4.78242 8.18524 5.03413 8.61499Z"
            fill="#F2AB3C"
          />
          <path
            d="M10.0649 17.262L11.6426 19.9786C11.8906 20.4094 12.5226 20.4195 12.7837 19.9952L14.418 17.2924L10.0649 17.262Z"
            fill="#F2AB3C"
          />
          <path
            d="M15.9553 7.67993L18.1072 11.2106L19.6073 8.69908C19.8552 8.2676 19.531 7.70291 19.0246 7.70366L15.9553 7.67993Z"
            fill="#F2AB3C"
          />
          <path
            d="M13.1836 4.86673L12.1558 6.542L11.1601 4.85635L11.6724 3.96867C11.8824 3.60465 12.4169 3.59921 12.6344 3.95903L13.1836 4.86673Z"
            fill="#F2AB3C"
          />
          <path
            d="M10.2381 6.36779C10.3981 6.09175 10.8039 6.08977 10.9667 6.36408L11.509 7.2782C11.5843 7.40522 11.5846 7.56165 11.5098 7.68892L7.88936 13.8935C7.72813 14.1676 7.93081 14.5094 8.25403 14.5089H8.36978C8.51989 14.5084 8.65838 14.43 8.73318 14.3028L13.3852 6.39299C13.5459 6.11992 13.948 6.11819 14.1112 6.38978L19.5305 15.4109C19.7905 15.8439 19.4719 16.3895 18.9583 16.3905L11.4494 16.4024C11.1284 16.4029 10.9257 16.0655 11.0819 15.7917L13.4163 11.6998C13.5732 11.425 13.975 11.4176 14.1421 11.6867L14.9422 12.9755C15.112 13.2488 14.9108 13.5987 14.5838 13.5992C14.4337 13.5992 14.2952 13.678 14.2204 13.8051L14.1742 13.8836C14.0129 14.1577 14.2156 14.4995 14.5388 14.499L16.1259 14.4965C16.4491 14.496 16.6505 14.1535 16.4885 13.8799L14.1201 9.8839C13.9571 9.60885 13.55 9.61157 13.3907 9.8886L9.76351 16.1963C9.68921 16.3253 9.54971 16.4053 9.39808 16.4056L5.59015 16.4115C5.08017 16.4122 4.75922 15.8747 5.01042 15.4408L10.2384 6.36779H10.2381Z"
            fill="#F2AB3C"
          />
        </svg>
      ),
      title: "UNDERSTAND",
      description:
        "We begin by understanding your payroll schedule, employee structure, and operational workflow to design a solution that fits your needs perfectly",
      image: "/assets/images/pro/Frame 1171276842.png",
      imageClasses: "w-5/6 pt-10",
    },
    {
      id: 2,
      icon: (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            className="svg-bg"
            cx="12.6154"
            cy="12"
            rx="12.6154"
            ry="12"
            fill="#FFE4B9"
          />
          <path
            d="M5.03413 8.61499L6.4645 11.0781L8.51074 7.65491L5.57898 7.67987C5.07355 7.68259 4.78242 8.18524 5.03413 8.61499Z"
            fill="#F2AB3C"
          />
          <path
            d="M10.0649 17.262L11.6426 19.9786C11.8906 20.4094 12.5226 20.4195 12.7837 19.9952L14.418 17.2924L10.0649 17.262Z"
            fill="#F2AB3C"
          />
          <path
            d="M15.9553 7.67993L18.1072 11.2106L19.6073 8.69908C19.8552 8.2676 19.531 7.70291 19.0246 7.70366L15.9553 7.67993Z"
            fill="#F2AB3C"
          />
          <path
            d="M13.1836 4.86673L12.1558 6.542L11.1601 4.85635L11.6724 3.96867C11.8824 3.60465 12.4169 3.59921 12.6344 3.95903L13.1836 4.86673Z"
            fill="#F2AB3C"
          />
          <path
            d="M10.2381 6.36779C10.3981 6.09175 10.8039 6.08977 10.9667 6.36408L11.509 7.2782C11.5843 7.40522 11.5846 7.56165 11.5098 7.68892L7.88936 13.8935C7.72813 14.1676 7.93081 14.5094 8.25403 14.5089H8.36978C8.51989 14.5084 8.65838 14.43 8.73318 14.3028L13.3852 6.39299C13.5459 6.11992 13.948 6.11819 14.1112 6.38978L19.5305 15.4109C19.7905 15.8439 19.4719 16.3895 18.9583 16.3905L11.4494 16.4024C11.1284 16.4029 10.9257 16.0655 11.0819 15.7917L13.4163 11.6998C13.5732 11.425 13.975 11.4176 14.1421 11.6867L14.9422 12.9755C15.112 13.2488 14.9108 13.5987 14.5838 13.5992C14.4337 13.5992 14.2952 13.678 14.2204 13.8051L14.1742 13.8836C14.0129 14.1577 14.2156 14.4995 14.5388 14.499L16.1259 14.4965C16.4491 14.496 16.6505 14.1535 16.4885 13.8799L14.1201 9.8839C13.9571 9.60885 13.55 9.61157 13.3907 9.8886L9.76351 16.1963C9.68921 16.3253 9.54971 16.4053 9.39808 16.4056L5.59015 16.4115C5.08017 16.4122 4.75922 15.8747 5.01042 15.4408L10.2384 6.36779H10.2381Z"
            fill="#F2AB3C"
          />
        </svg>
      ),
      title: "INTEGRATE",
      description:
        "Our team collaborates with your HR and payroll departments to set up secure data integration and eligibility mapping—whether through API, SFTP, or a lightweight manual process",
      image: "/assets/images/pro/Frame 1171276864.svg",
      imageClasses: "w-5/6 pt-24",
    },
    {
      id: 3,
      icon: (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            className="svg-bg"
            cx="12.6154"
            cy="12"
            rx="12.6154"
            ry="12"
            fill="#FFE4B9"
          />
          <path
            d="M5.03413 8.61499L6.4645 11.0781L8.51074 7.65491L5.57898 7.67987C5.07355 7.68259 4.78242 8.18524 5.03413 8.61499Z"
            fill="#F2AB3C"
          />
          <path
            d="M10.0649 17.262L11.6426 19.9786C11.8906 20.4094 12.5226 20.4195 12.7837 19.9952L14.418 17.2924L10.0649 17.262Z"
            fill="#F2AB3C"
          />
          <path
            d="M15.9553 7.67993L18.1072 11.2106L19.6073 8.69908C19.8552 8.2676 19.531 7.70291 19.0246 7.70366L15.9553 7.67993Z"
            fill="#F2AB3C"
          />
          <path
            d="M13.1836 4.86673L12.1558 6.542L11.1601 4.85635L11.6724 3.96867C11.8824 3.60465 12.4169 3.59921 12.6344 3.95903L13.1836 4.86673Z"
            fill="#F2AB3C"
          />
          <path
            d="M10.2381 6.36779C10.3981 6.09175 10.8039 6.08977 10.9667 6.36408L11.509 7.2782C11.5843 7.40522 11.5846 7.56165 11.5098 7.68892L7.88936 13.8935C7.72813 14.1676 7.93081 14.5094 8.25403 14.5089H8.36978C8.51989 14.5084 8.65838 14.43 8.73318 14.3028L13.3852 6.39299C13.5459 6.11992 13.948 6.11819 14.1112 6.38978L19.5305 15.4109C19.7905 15.8439 19.4719 16.3895 18.9583 16.3905L11.4494 16.4024C11.1284 16.4029 10.9257 16.0655 11.0819 15.7917L13.4163 11.6998C13.5732 11.425 13.975 11.4176 14.1421 11.6867L14.9422 12.9755C15.112 13.2488 14.9108 13.5987 14.5838 13.5992C14.4337 13.5992 14.2952 13.678 14.2204 13.8051L14.1742 13.8836C14.0129 14.1577 14.2156 14.4995 14.5388 14.499L16.1259 14.4965C16.4491 14.496 16.6505 14.1535 16.4885 13.8799L14.1201 9.8839C13.9571 9.60885 13.55 9.61157 13.3907 9.8886L9.76351 16.1963C9.68921 16.3253 9.54971 16.4053 9.39808 16.4056L5.59015 16.4115C5.08017 16.4122 4.75922 15.8747 5.01042 15.4408L10.2384 6.36779H10.2381Z"
            fill="#F2AB3C"
          />
        </svg>
      ),
      title: "ACTIVATE",
      description:
        "We support your internal communication with ready-to-use materials, employee training, and ongoing assistance to ensure a smooth and successful launch",
      image: "/assets/images/pro/Frame 1171276848.svg",
      imageClasses: "w-11/12 pt-12",
    },
  ];

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-cycling animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep === 3 ? 1 : prevStep + 1));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentStep = steps.find((step) => step.id === activeStep);

  // Calculate responsive dimensions
  const getImageDimensions = () => {
    if (windowSize.width < 640) {
      return { width: 280, height: 280 };
    } else if (windowSize.width < 768) {
      return { width: 350, height: 350 };
    } else if (windowSize.width < 1024) {
      return { width: 400, height: 400 };
    }
    return { width: 500, height: 500 };
  };

  const imageDimensions = getImageDimensions();

  return (
    <section className="mt-20 m-auto animate-on-scroll">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="row">
          <div className="col-span-12 text-center mb-8 lg:mb-12">
            <h2 className="text-base sm:text-lg text-[#f2ab3c] mb-2">
              HOW WE WORK?
            </h2>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Onboard AGI Moneey in Three Simple Steps
            </h2>

            {/* Responsive description */}
            <div className=" md:max-w-lg lg:max-w-3xl mx-auto">
              <p className="text-gray-600 text-left md:text-center text-xs sm:text-sm md:text-base leading-relaxed">
                AGI Moneey's Earned Wage Access platform integrates seamlessly
                with your payroll, HRMS, and attendance systems— eliminating
                extra work for your team. Prefer simplicity? We also offer a
                single tool with built-in HRMS, payroll, and attendance. Our
                team handles technical setup and partners with you to craft a
                smooth, customized launch strategy
              </p>
            </div>
          </div>

          <div className="w-full max-w-[95vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[70vw] xl:max-w-[60vw] m-auto grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] overflow-visible">
            {/* IMAGE COLUMN - Responsive container */}
            <div className="text-center order-2 xl:order-1 flex justify-center items-center overflow-visible">
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: imageDimensions.width,
                  height: imageDimensions.height,
                  minWidth: imageDimensions.width,
                  minHeight: imageDimensions.height,
                }}
              >
                {currentStep && (
                  <Image
                    src={currentStep.image}
                    alt={`Step ${activeStep}`}
                    width={imageDimensions.width}
                    height={imageDimensions.height}
                    className={`${currentStep.imageClasses} transition-opacity duration-500 ease-in-out object-contain`}
                    priority={activeStep === 1}
                  />
                )}
              </div>
            </div>

            {/* STEPS COLUMN - Responsive layout */}
            <div className="order-1 xl:order-2 flex justify-center items-center">
              <div className="w-full space-y-2 sm:space-y-3 lg:space-y-4 flex flex-col justify-center">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`p-2 sm:p-3 lg:p-4 rounded-md sm:rounded-lg transition-all duration-300 ease-in-out cursor-pointer w-full max-w-full sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] flex flex-col justify-center mx-auto ${
                      activeStep === step.id
                        ? "bg-[#f2ab3c] text-white shadow-lg"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <h4 className="flex items-center text-xs sm:text-sm lg:text-base font-bold uppercase mb-1">
                      <span className="mr-1 sm:mr-2 flex-shrink-0 text-xs">
                        {step.icon}
                      </span>
                      <span className="leading-tight">{step.title}</span>
                    </h4>
                    <p
                      className={`text-xs sm:text-xs lg:text-sm ml-4 sm:ml-6 lg:ml-8 leading-relaxed ${
                        activeStep === step.id ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .floating-animation {
          animation: floating 3s ease-in-out infinite;
        }

        .animate-on-scroll {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s ease-out;
        }

        /* Mobile specific styles */
        @media (max-width: 640px) {
          .grid {
            gap: 1rem !important;
          }
        }

        /* Tablet specific styles */
        @media (min-width: 641px) and (max-width: 1024px) {
          .grid {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AGIMoneyOnboarding;
