"use client";
import React from "react";
import Image from "next/image";

const AGIMoneyPlatform = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div
          className="w-full text-center wow fadeInUp"
          data-wow-delay="0.3s"
          data-wow-duration="1s"
        >
          <h2 className="text-lg text-[#f2ab3c] mb-4 tracking-wide">
            AGI MONEEY
          </h2>
          <h2 className="testim text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 pt-5">
            One Platform, Endless <br />
            Possibilities
          </h2>
        </div>
      </div>

      {/* Product Feature Row */}
      <div className="flex flex-col lg:flex-row items-center rounded-3xl p-4 sm:p-6 lg:p-8">
        {/* Image Column */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center mb-8 lg:mb-0">
          <div className="relative w-full max-h-[50vh] max-w-lg flex justify-center items-center overflow-hidden">
            {/* Main Image with animation */}
            <div className="relative z-10 transform phone-main">
              {/* 
                For one-time animation, use '.scroll-once'.
                For infinite smooth up-down, use '.scroll-infinite'.
                Comment/uncomment as needed.
              */}
              <div className="relative phone-container-main overflow-hidden rounded-3xl scroll-once">
                {/* For infinite: scroll-infinite */}
                <Image
                  src="/assets/images/3. third section 1.png"
                  alt="Welcome Screen"
                  width={320}
                  height={640}
                  className="w-full h-full object-contain rounded-3xl"
                  id="scrollImage"
                />
              </div>
            </div>

            {/* Secondary Image - no shake animation */}
            <div className="relative z-20 transform phone-secondary">
              <div className="relative phone-container-secondary overflow-hidden rounded-3xl scroll-infinite">
                <Image
                  src="/assets/images/3. third section 1.1.png"
                  alt="Converter Screen"
                  width={224}
                  height={448}
                  className="w-full h-full object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-8 text-center lg:text-left">
          <div className="icon mb-6 flex justify-center lg:justify-start">
            {/* SVG ... unchanged */}
            <svg
              width="60"
              height="60"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.54 31.3141C20.414 31.3107 20.2884 31.3052 20.1632 31.2976C18.7399 31.0336 17.411 29.9435 16.3685 28.1637C16.0663 27.6483 15.7974 27.0905 15.5634 26.4984C17.0928 26.9566 18.7843 27.211 20.54 27.2372L20.54 31.3141ZM17.9459 30.9374C16.0952 30.4392 14.3995 29.4626 13.0074 28.0705C11.6154 26.6785 10.6388 24.9828 10.1406 23.1321C10.7283 23.9086 11.5576 24.6201 12.606 25.2346C13.2824 25.6308 14.0263 25.9725 14.822 26.2558C15.1054 27.0515 15.447 27.7954 15.8432 28.4718C16.4578 29.5203 17.1693 30.3496 17.9459 30.9374ZM21.146 27.2373C21.5632 27.2313 21.979 27.2125 22.3918 27.1804C22.2965 27.5891 22.246 28.0148 22.246 28.452C22.246 29.304 22.4377 30.1121 22.7795 30.8359C22.3702 31.0644 21.951 31.2183 21.5252 31.2975C21.399 31.3052 21.2726 31.3108 21.146 31.3142L21.146 27.2373ZM9.78043 20.9161C9.77295 20.7921 9.7674 20.6677 9.76402 20.5429H13.8407C13.8673 22.2968 14.1216 23.9865 14.5794 25.5145C13.9872 25.2805 13.4296 25.0115 12.9141 24.7094C11.1349 23.6672 10.0449 22.3388 9.78043 20.9161ZM14.4518 20.5429H20.5399V26.6261C18.6729 26.5974 16.8839 26.304 15.301 25.7767C14.7742 24.1953 14.4809 22.4081 14.4518 20.5429ZM21.146 20.5429H27.2392C27.2265 21.3445 27.1646 22.1354 27.0549 22.9059C24.9835 23.2012 23.273 24.6341 22.579 26.5494C22.1058 26.5925 21.6264 26.6184 21.1459 26.626L21.146 20.5429ZM27.8454 20.5429H31.9221C31.9185 20.677 31.9126 20.8108 31.9042 20.9441C31.7294 21.8376 31.227 22.6978 30.4204 23.4758C29.6497 23.0758 28.7751 22.8494 27.8487 22.8494C27.7904 22.8494 27.7325 22.8506 27.6746 22.8524C27.7768 22.0974 27.8337 21.3245 27.8454 20.5429ZM31.5455 23.1281C31.4647 23.4271 31.3713 23.7231 31.2654 24.0155C31.1672 23.9397 31.0665 23.8669 30.9633 23.7976C31.1782 23.5801 31.3724 23.3567 31.5455 23.1281ZM9.76367 19.9369C9.76705 19.8087 9.77266 19.6809 9.78038 19.5535C10.0449 18.1308 11.1349 16.8025 12.914 15.7603C13.4295 15.4582 13.9872 15.1892 14.5793 14.9552C14.1207 16.4861 13.8663 18.1793 13.8404 19.9368L9.76367 19.9369ZM15.3009 14.693C16.8838 14.1657 18.6728 13.8723 20.5399 13.8436V19.9369H14.4516C14.4798 18.068 14.7732 16.2772 15.3009 14.693ZM21.1459 13.8436C23.0168 13.8722 24.8059 14.1659 26.3897 14.6923C26.9176 16.2767 27.2111 18.0678 27.2393 19.9369H21.1459L21.1459 13.8436ZM27.1036 14.9508C27.6982 15.1846 28.2585 15.4534 28.7769 15.7553C30.5378 16.7868 31.6235 18.0987 31.9021 19.5048C31.9114 19.6483 31.9182 19.7923 31.922 19.9369H27.8453C27.819 18.1775 27.5637 16.4827 27.1036 14.9508ZM10.1422 17.3353C10.6417 15.486 11.6192 13.7924 13.0074 12.4042C14.3989 11.0126 16.0959 10.0362 17.9458 9.53786C17.1693 10.1249 16.4572 10.9525 15.8431 11.9978C15.4469 12.6743 15.1053 13.4181 14.822 14.2139C14.0262 14.4972 13.2823 14.8388 12.6059 15.2351C11.5586 15.849 10.7299 16.5597 10.1422 17.3353ZM20.1236 9.17958C20.2619 9.17076 20.4007 9.16438 20.5399 9.16066V13.2325C18.7842 13.2587 17.0927 13.5131 15.5633 13.9713C15.7973 13.3792 16.0663 12.8214 16.3684 12.306C17.4013 10.5427 18.7153 9.45635 20.1236 9.17958ZM21.1459 9.16064C21.2858 9.16438 21.4252 9.17077 21.5642 9.17965C22.9746 9.45653 24.2854 10.5428 25.3225 12.3059C25.6249 12.8219 25.8941 13.3802 26.1283 13.973C24.5973 13.5137 22.9038 13.2588 21.1459 13.2325L21.1459 9.16064ZM23.7373 9.53661C25.589 10.0346 27.2857 11.0115 28.6785 12.4042C30.0686 13.7943 31.0445 15.4872 31.5433 17.335C30.9557 16.5595 30.1271 15.8489 29.0799 15.2351C28.4029 14.8385 27.6583 14.4967 26.8618 14.2132C26.5789 13.4196 26.238 12.6777 25.8427 12.0029C25.2279 10.954 24.5149 10.1244 23.7373 9.53661Z"
                fill="white"
              ></path>
              <g transform="translate(20 20) scale(0.4)">
                <circle cx="17" cy="17" r="10" fill="#F2AB3C"></circle>

                <path
                  d="M30.0137 9.11523C30.8949 9.11523 31.6151 9.82072 31.6152 10.6982C31.6152 11.5759 30.895 12.2822 30.0137 12.2822H25.2373C25.8334 13.1538 26.2412 14.1614 26.4023 15.249H30.0137C30.895 15.249 31.6152 15.9544 31.6152 16.832C31.6152 17.7097 30.8949 18.415 30.0137 18.415H26.4004C25.8849 21.8867 22.8581 24.5488 19.2031 24.5488H16.2686L23.7529 30.8242C24.4285 31.3906 24.5102 32.3913 23.9355 33.0586C23.3623 33.7242 22.354 33.8038 21.6807 33.2393L11.9902 25.1113V25.1123C10.4646 23.8334 11.3913 21.3818 13.377 21.3818H19.2031C21.087 21.3818 22.6692 20.1221 23.1367 18.415H12.7168C11.8357 18.4149 11.1154 17.7095 11.1152 16.832C11.1152 15.9544 11.8356 15.2482 12.7168 15.248H23.1367C22.6693 13.5412 21.087 12.2812 19.2031 12.2812H12.7168C11.8358 12.2811 11.1152 11.576 11.1152 10.6982C11.1154 9.82072 11.8356 9.11523 12.7168 9.11523H30.0137Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.1"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_731_3921">
                  <rect
                    width="24.4175"
                    height="24.4175"
                    fill="white"
                    transform="translate(9.15625 9.15649)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

          <p
            className="section-description tercs text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed font-bold max-w-xl mx-auto lg:mx-0"
            style={{ color: "#0f0f0f" }}
          >
            AGI Moneey is India's all-in-one Earned Wage Access and HRMS
            platform empowering employees with instant salary access while
            streamlining HR, payroll, and attendance for employers
          </p>
        </div>
      </div>

      <style jsx>{`
        .bgye {
          background: linear-gradient(135deg, #fefce8 0%, #fed7aa 100%);
        }

        .feat {
          color: #f97316;
          font-size: 1.125rem;
          font-weight: 500;
          letter-spacing: 0.025em;
          margin-bottom: 1rem;
        }

        .testim {
          color: #111827;
          font-weight: 700;
          line-height: 1.1;
        }

        .tercs {
          line-height: 1.7;
        }

        /* One-time move up then back smoothly & stop */
        .scroll-once {
          animation: updownOnce 5s ease-in-out 1;
        }
        @keyframes updownOnce {
          0% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-400px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* For infinite up-down, use this instead and remove scroll-once */
        .scroll-infinite {
          animation: updownInf 2.2s ease-in-out infinite;
        }
        @keyframes updownInf {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        .phone-main {
          transform: translateX(-16px);
        }
        .phone-secondary {
          transform: translateX(16px);
        }
        .phone-container-main {
          width: 200px;
          height: 360px;
        }
        .phone-container-secondary {
          width: 160px;
          height: 280px;
        }
        @media (max-width: 480px) {
          .testim {
            font-size: 1.5rem !important;
          }
          .feat {
            font-size: 0.875rem;
          }
          .tercs {
            font-size: 0.875rem !important;
          }
          .phone-main {
            transform: translateX(30px);
          }
          .phone-secondary {
            transform: translateX(-20px);
          }
          .phone-container-main {
            width: 140px;
            height: 240px;
          }
          .phone-container-secondary {
            width: 120px;
            height: 180px;
          }
        }
        @media (min-width: 481px) and (max-width: 768px) {
          .phone-main {
            transform: translateX(45px);
          }
          .phone-secondary {
            transform: translateX(-20px);
          }
          .phone-container-main {
            width: 160px;
            height: 270px;
          }
          .phone-container-secondary {
            width: 140px;
            height: 210px;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .phone-main {
            transform: translateX(45px) translateY(90px);
          }
          .phone-secondary {
            transform: translateX(-20px) translateY(60px);
          }
          .phone-container-main {
            width: 280px;
            height: 460px;
          }
          .phone-container-secondary {
            width: 150px;
            height: 300px;
          }
        }
        @media (min-width: 1025px) {
          .phone-main {
            transform: translateX(40px) translateY(90px);
          }
          .phone-secondary {
            transform: translateX(-24px) translateY(60px);
          }
          .phone-container-main {
            width: 300px;
            height: 560px;
          }
          .phone-container-secondary {
            width: 180px;
            height: 320px;
          }
        }
        @media (min-width: 1200px) {
          .phone-main {
            transform: translateX(42px) translateY(90px);
          }
          .phone-secondary {
            transform: translateX(-32px) translateY(30px);
          }
          .phone-container-main {
            width: 380px;
            height: 650px;
          }
          .phone-container-secondary {
            width: 170px;
            height: 380px;
          }
        }
      `}</style>
    </div>
  );
};

export default AGIMoneyPlatform;
