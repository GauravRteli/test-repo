"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion(Image);

const FeatureSectionComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container mx-auto px-4 max-w-[1400px]">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Box - Instant Salary Access */}
        <div className="flex-1 rounded-2xl min-h-[600px] shadow bg-[#f9f9f9] border border-gray-100 transition-all duration-400 ease-out">
          <div className="h-full flex flex-col pt-8 px-8 lg:pt-10">
            {/* Icon Circle */}
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-5 lg:mb-6 hover:scale-110 transition-transform duration-300 ease-out">
              <svg
                width="38"
                height="38"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="42.7307"
                  height="42.7307"
                  rx="21.3653"
                  fill="#F2AB3C"
                ></rect>
                <path
                  d="M30.0137 9.11523C30.8949 9.11523 31.6151 9.82072 31.6152 10.6982C31.6152 11.5759 30.895 12.2822 30.0137 12.2822H25.2373C25.8334 13.1538 26.2412 14.1614 26.4023 15.249H30.0137C30.895 15.249 31.6152 15.9544 31.6152 16.832C31.6152 17.7097 30.8949 18.415 30.0137 18.415H26.4004C25.8849 21.8867 22.8581 24.5488 19.2031 24.5488H16.2686L23.7529 30.8242C24.4285 31.3906 24.5102 32.3913 23.9355 33.0586C23.3623 33.7242 22.354 33.8038 21.6807 33.2393L11.9902 25.1113V25.1123C10.4646 23.8334 11.3913 21.3818 13.377 21.3818H19.2031C21.087 21.3818 22.6692 20.1221 23.1367 18.415H12.7168C11.8357 18.4149 11.1154 17.7095 11.1152 16.832C11.1152 15.9544 11.8356 15.2482 12.7168 15.248H23.1367C22.6693 13.5412 21.087 12.2812 19.2031 12.2812H12.7168C11.8358 12.2811 11.1152 11.576 11.1152 10.6982C11.1154 9.82072 11.8356 9.11523 12.7168 9.11523H30.0137Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                ></path>
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 lg:mb-5 leading-tight">
              Instant Salary
              <span className="block text-[#F2AB3C] mt-1">Access</span>
            </h2>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 leading-relaxed font-light">
              Employees can withdraw earned salary anytime—no paperwork, no
              waiting.
            </p>

            {/* Image Container - Reduced */}
            <motion.div
              ref={ref}
              className="flex-1 flex items-center justify-center overflow-hidden rounded-xl lg:rounded-2xl"
              animate={isInView ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative w-full h-full min-h-[280px] max-h-[280px] lg:min-h-[450px] lg:max-h-[450px] overflow-hidden rounded-xl lg:rounded-2xl">
                <MotionImage
                  src="/assets/images/payroll.jpg"
                  alt="Payroll Details UI"
                  width={650} // required when not using "fill"
                  height={450} // bigger height than container
                  className="object-cover shadow border border-gray-100 mx-auto object-top scale-110 rounded-xl lg:rounded-2xl"
                  priority
                  initial={{ y: 0 }}
                  animate={
                    isInView
                      ? { y: ["0%", "-80%", "0%"], opacity: 1 } // move up then back
                      : { y: "0%", opacity: 1 }
                  }
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Box - Smart Attendance */}
        <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#141414] to-[#000000] min-h-[600px] transition-all duration-400 ease-out overflow-hidden">
          <div className="h-full flex flex-col pt-8 px-8 lg:pt-10 lg:px-12">
            {/* Icon Circle */}
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mb-5 lg:mb-6 hover:scale-110 transition-transform duration-300 ease-out">
              <svg
                width="38"
                height="38"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="42.7307"
                  height="42.7307"
                  rx="21.3653"
                  fill="#F2AB3C"
                ></rect>
                <g transform="translate(7 7) scale(1.2)">
                  <path
                    d="M24.402 11.1707C24.3635 10.8275 23.9632 10.5694 23.617 10.5694C22.4983 10.5694 21.5055 9.91276 21.0891 8.89649C20.6641 7.85584 20.9383 6.64242 21.7718 5.87779C22.0343 5.63777 22.0663 5.23587 21.8462 4.95688C21.2735 4.22974 20.6228 3.57282 19.9121 3.00354C19.6341 2.78052 19.2255 2.81157 18.9843 3.07862C18.2566 3.88454 16.9494 4.18401 15.9393 3.76258C14.8885 3.32044 14.2252 2.25528 14.2904 1.11198C14.3118 0.752636 14.0491 0.440385 13.691 0.398674C12.7789 0.293077 11.8589 0.290015 10.9442 0.391493C10.5907 0.430564 10.3281 0.735423 10.3399 1.09023C10.3795 2.22234 9.70871 3.2687 8.66805 3.69499C7.67005 4.1027 6.37194 3.80545 5.64575 3.00661C5.40573 2.74346 5.00436 2.71115 4.72442 2.92941C3.99284 3.50355 3.32747 4.16089 2.74944 4.88212C2.5242 5.16248 2.55746 5.56881 2.82219 5.80968C3.67214 6.57938 3.94617 7.80325 3.50488 8.85605C3.08355 9.85975 2.04141 10.5063 0.848477 10.5063C0.461358 10.4939 0.185856 10.7539 0.143089 11.106C0.035802 12.0229 0.0346405 12.9577 0.137914 13.8821C0.176457 14.2267 0.588603 14.4827 0.938552 14.4827C2.00191 14.4557 3.02219 15.1135 3.45081 16.1555C3.87732 17.1961 3.60277 18.409 2.76792 19.1747C2.50677 19.4147 2.47341 19.8157 2.69389 20.0943C3.26084 20.8169 3.91217 21.4743 4.62495 22.0484C4.90478 22.2737 5.31175 22.2422 5.55431 21.9748C6.28483 21.167 7.5918 20.868 8.59783 21.2903C9.65168 21.7313 10.3146 22.7963 10.2499 23.94C10.2287 24.2993 10.492 24.6125 10.8488 24.6533C11.3156 24.7079 11.7847 24.7349 12.2554 24.7349C12.7021 24.7349 13.1489 24.7105 13.5956 24.6608C13.9496 24.6217 14.2117 24.3165 14.1998 23.9616C14.1589 22.83 14.8311 21.7836 15.8705 21.3581C16.8752 20.9478 18.1675 21.2481 18.8941 22.0458C19.1354 22.3084 19.5343 22.3403 19.8154 22.1229C20.5457 21.5502 21.2098 20.8932 21.7904 20.17C22.0158 19.8902 21.9838 19.4833 21.7176 19.2421C20.8679 18.4729 20.5924 17.2485 21.0337 16.1967C21.4485 15.2066 22.4518 14.5417 23.5311 14.5417L23.6821 14.5457C24.0324 14.5741 24.3544 14.3043 24.3967 13.9469C24.5046 13.0291 24.5057 12.0955 24.402 11.1707ZM12.2701 19.5647C8.38272 19.5647 5.2316 16.4135 5.2316 12.5263C5.2316 8.63905 8.38283 5.48793 12.2701 5.48793C16.1573 5.48793 19.3085 8.63905 19.3085 12.5263C19.3085 13.8457 18.9448 15.0798 18.313 16.1352L15.231 13.0531C15.4541 12.527 15.572 11.9567 15.5719 11.3681C15.5719 10.2155 15.123 9.13198 14.3079 8.31708C13.493 7.50219 12.4095 7.0534 11.2571 7.0534C10.8725 7.0534 10.4897 7.10451 10.1194 7.20536C9.95718 7.2496 9.82455 7.38329 9.78136 7.5458C9.73722 7.71201 9.78696 7.88234 9.91684 8.01233L11.9475 10.0546C12.0008 10.1079 12.0007 10.2352 11.9932 10.281L11.9884 10.3145C11.9371 10.8741 11.8382 11.5459 11.7566 11.8041C11.7456 11.815 11.7352 11.8242 11.724 11.8354C11.7123 11.8471 11.7015 11.8584 11.6902 11.87C11.4287 11.954 10.7465 12.0541 10.178 12.105L10.1525 12.1083C10.0669 12.1095 9.9765 12.0923 9.89435 12.0102C9.36446 11.4804 7.90257 10.0289 7.90257 10.0289C7.77142 9.89819 7.63689 9.87074 7.54724 9.87074C7.33826 9.87074 7.15115 10.0217 7.09222 10.2383C6.68979 11.7276 7.1164 13.3295 8.20585 14.419C9.02095 15.234 10.1046 15.6828 11.2572 15.6828C11.8458 15.6828 12.4161 15.5651 12.9421 15.3419L16.0575 18.4574C14.9637 19.1573 13.6649 19.5647 12.2701 19.5647Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-5 leading-tight">
              Smart Attendance
              <span className="block text-[#F2AB3C] mt-1">with GPS</span>
            </h2>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed font-light">
              Geofencing and selfie check-in/out for accurate time tracking and
              transparency
            </p>

            {/* Feature Image - Reduced container */}
            <div className="flex-1 flex items-center justify-center mt-10">
              <div className="relative w-full h-auto max-w-full">
                <Image
                  src="/assets/images/Component 1134343.png"
                  alt="Smart Attendance Feature UI"
                  width={450}
                  height={320}
                  className="w-full h-auto object-contain rounded-xl lg:rounded-2xl scale-105 transition-transform duration-400 ease-out shadow-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Updated Custom CSS for reduced heights */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }

        /* Enhanced shadow utilities */
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .min-h-\[480px\] {
            min-height: 420px !important;
          }

          .text-2xl {
            font-size: 1.75rem !important;
          }

          .text-3xl {
            font-size: 2rem !important;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 768px) and (max-width: 1024px) {
          .lg\:text-4xl {
            font-size: 2.5rem !important;
          }

          .lg\:text-lg {
            font-size: 1.125rem !important;
          }
        }

        /* Desktop fine-tuning */
        @media (min-width: 1280px) {
          .lg\:text-4xl {
            font-size: 3rem !important;
          }

          .lg\:text-lg {
            font-size: 1.125rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FeatureSectionComponent;
