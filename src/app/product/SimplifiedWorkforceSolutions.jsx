"use client";
import React from "react";
import Image from "next/image";

const SimplifiedWorkforceSolutions = () => {
  return (
    <div className="w-full">
      <section
        className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
        style={{
          background: "linear-gradient(135deg, #ffe4b961 0%, #fff2d461 100%)",
        }}
      >
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Side - Image */}
            <div className="flex justify-center items-start order-2 lg:order-1 relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] xl:min-h-[500px]">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center">
                <Image
                  src="/assets/images/pro/Frame 1171276628.png"
                  className="floating w-full h-auto drop-shadow-lg object-contain"
                  width={450}
                  height={400}
                  alt="Workforce Solutions - AGI Moneey Platform"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, (max-width: 1280px) 420px, 450px"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left">
              {/* Subheading */}
              <h4 className="text-orange-400 uppercase tracking-wider font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base lg:text-lg">
                Simplified Workforce Solutions
              </h4>

              {/* Main Heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight text-gray-900">
                What We <span className="text-orange-400">Offer</span>?
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                AGI Moneey simplifies payroll, boosts workforce visibility, and
                enhances employee financial wellness
              </p>

              {/* Feature List */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 xl:space-y-10">
                {/* Feature 1 */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full bg-orange-50 flex items-center justify-center">
                    <svg
                      width="90"
                      height="70"
                      viewBox="0 0 100 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_dddd_454_1605)">
                        <ellipse
                          cx="53.1795"
                          cy="38.4146"
                          rx="36.1795"
                          ry="34.4146"
                          fill="white"
                        ></ellipse>
                        <path
                          d="M71.9776 38.9659H34.5337C34.1809 38.9659 33.8945 39.2522 33.8945 39.6051V42.7293C33.8945 43.0821 34.1809 43.3684 34.5337 43.3684H37.1531C37.562 45.1285 38.2518 46.793 39.2094 48.3291L37.3562 50.1823C37.2363 50.3022 37.1689 50.4646 37.1689 50.6342C37.1689 50.8038 37.2363 50.9662 37.3562 51.0861L41.7746 55.5045C41.8944 55.6243 42.0568 55.6917 42.2265 55.6917C42.3961 55.6917 42.5585 55.6243 42.6783 55.5045L44.5315 53.6513C46.0685 54.6088 47.7331 55.2986 49.4922 55.7075V58.3265C49.4922 58.6794 49.7786 58.9657 50.1314 58.9657H56.3799C56.7327 58.9657 57.019 58.6794 57.019 58.3265V55.7075C58.779 55.2982 60.4436 54.6084 61.9802 53.6513L63.8329 55.5045C63.9528 55.6243 64.1152 55.6917 64.2848 55.6917C64.4544 55.6917 64.6168 55.6243 64.7367 55.5045L69.155 51.0861C69.2749 50.9662 69.3423 50.8038 69.3423 50.6342C69.3423 50.4646 69.2749 50.3022 69.155 50.1823L67.3018 48.3291C68.2594 46.7926 68.9492 45.128 69.3586 43.3684H71.9776C72.3304 43.3684 72.6167 43.0821 72.6167 42.7293V39.6051C72.6167 39.2522 72.3304 38.9659 71.9776 38.9659ZM61.5988 40.2442C61.2709 44.5603 57.6545 47.9723 53.2556 47.9723C48.8567 47.9723 45.2403 44.5603 44.9128 40.2442H61.5988ZM71.3384 42.0902H68.8425C68.5376 42.0902 68.2752 42.3055 68.2155 42.6045C67.8256 44.5612 67.0643 46.3972 65.9534 48.0618C65.7843 48.3151 65.8177 48.653 66.033 48.8688L67.7989 50.6347L64.2843 54.1493L62.5184 52.3834C62.3027 52.1676 61.9652 52.1346 61.7115 52.3038C60.0478 53.4142 58.2118 54.1755 56.2541 54.5659C55.9551 54.6256 55.7398 54.8879 55.7398 55.1928V57.6888H50.7705V55.1928C50.7705 54.8879 50.5552 54.6256 50.2562 54.5659C48.2999 54.176 46.4639 53.4147 44.7989 52.3038C44.5451 52.1346 44.2077 52.1681 43.9919 52.3834L42.226 54.1493L38.7118 50.6347L40.4777 48.8688C40.6935 48.653 40.7265 48.3156 40.5574 48.0618C39.4469 46.3981 38.6856 44.5617 38.2957 42.6045C38.236 42.3055 37.9736 42.0902 37.6688 42.0902H35.1728V40.2442H43.6318C43.962 45.266 48.152 49.251 53.2556 49.251C58.3593 49.251 62.5492 45.2664 62.8794 40.2446H71.338L71.3384 42.0902ZM35.1927 38.0178H50.3625C50.7153 38.0178 51.0017 37.7315 51.0017 37.3787C51.0017 36.6536 50.9067 35.9502 50.7298 35.2799H55.7805C55.6037 35.9502 55.5087 36.6536 55.5087 37.3787C55.5087 37.7315 55.795 38.0178 56.1478 38.0178H71.3181C71.6709 38.0178 71.9572 37.7315 71.9572 37.3787C71.9572 33.7804 69.6345 30.715 66.4094 29.6022C67.6537 28.7473 68.4715 27.3148 68.4715 25.6945C68.4715 23.0814 66.3456 20.9559 63.7329 20.9559C61.1198 20.9559 58.9943 23.0814 58.9943 25.6945C58.9943 27.3148 59.8121 28.7473 61.0565 29.6022C60.7109 29.7216 60.3757 29.8632 60.0523 30.0256C59.0414 28.5438 57.584 27.4433 55.9257 26.8679C57.1732 26.0134 57.9938 24.5791 57.9938 22.9561C57.9938 20.343 55.8678 18.2175 53.2552 18.2175C50.6425 18.2175 48.517 20.343 48.517 22.9561C48.517 24.5791 49.3375 26.0134 50.5851 26.8679C48.9268 27.4428 47.4694 28.5438 46.4585 30.0256C46.135 29.8632 45.7999 29.7212 45.4543 29.6022C46.6986 28.7473 47.5165 27.3148 47.5165 25.6945C47.5165 23.0814 45.391 20.9559 42.7778 20.9559C40.1647 20.9559 38.0392 23.081 38.0392 25.6941C38.0392 27.3143 38.857 28.7469 40.1014 29.6018C36.8767 30.715 34.5536 33.7804 34.5536 37.3782C34.5536 37.7315 34.8399 38.0178 35.1927 38.0178ZM60.2731 25.6941C60.2731 23.7862 61.8255 22.2338 63.7334 22.2338C65.6413 22.2338 67.1937 23.7862 67.1937 25.6941C67.1937 27.602 65.6413 29.1544 63.7334 29.1544C61.8255 29.1544 60.2731 27.602 60.2731 25.6941ZM70.65 36.7391H56.8168C57.1407 33.2077 60.1193 30.4327 63.7334 30.4327C67.3475 30.4327 70.3266 33.2077 70.65 36.7391ZM49.7953 22.9561C49.7953 21.0482 51.3477 19.4958 53.2556 19.4958C55.1635 19.4958 56.7159 21.0482 56.7159 22.9561C56.7159 24.8641 55.1635 26.4165 53.2556 26.4165C51.3477 26.4165 49.7953 24.8641 49.7953 22.9561ZM53.2556 27.6947C55.5277 27.6947 57.6604 28.8283 58.9568 30.6878C57.7816 31.5292 56.8367 32.6713 56.2351 34.0016H50.2761C49.6745 32.6717 48.7296 31.5292 47.5544 30.6878C48.8504 28.8278 50.9836 27.6947 53.2556 27.6947ZM39.3175 25.6941C39.3175 23.7862 40.8699 22.2338 42.7778 22.2338C44.6858 22.2338 46.2382 23.7862 46.2382 25.6941C46.2382 27.602 44.6858 29.1544 42.7778 29.1544C40.8699 29.1544 39.3175 27.602 39.3175 25.6941ZM42.7778 30.4327C46.3924 30.4327 49.3706 33.2077 49.6944 36.7391H35.8613C36.1847 33.2077 39.1633 30.4327 42.7778 30.4327Z"
                          fill="#F2AB3C"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_dddd_454_1605"
                          x="0.731262"
                          y="0.871397"
                          width="104.897"
                          height="129.524"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="2.50288"></feOffset>
                          <feGaussianBlur stdDeviation="2.81574"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.945098 0 0 0 0 0.670588 0 0 0 0 0.239216 0 0 0 0.21 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_454_1605"
                          ></feBlend>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="10.6373"></feOffset>
                          <feGaussianBlur stdDeviation="5.31863"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.945098 0 0 0 0 0.670588 0 0 0 0 0.239216 0 0 0 0.18 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="effect1_dropShadow_454_1605"
                            result="effect2_dropShadow_454_1605"
                          ></feBlend>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="23.1517"></feOffset>
                          <feGaussianBlur stdDeviation="6.88293"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.945098 0 0 0 0 0.670588 0 0 0 0 0.239216 0 0 0 0.11 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="effect2_dropShadow_454_1605"
                            result="effect3_dropShadow_454_1605"
                          ></feBlend>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="41.2976"></feOffset>
                          <feGaussianBlur stdDeviation="8.13437"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.945098 0 0 0 0 0.670588 0 0 0 0 0.239216 0 0 0 0.03 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="effect3_dropShadow_454_1605"
                            result="effect4_dropShadow_454_1605"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect4_dropShadow_454_1605"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h5 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                      Earning on Demand Platform
                    </h5>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                      Instant salary access for employees, seamless payroll
                      integration
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-full flex items-center justify-center">
                    <svg
                      width="90"
                      height="70"
                      viewBox="0 0 100 85"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_dddd_454_1703)">
                        <ellipse
                          cx="53.1795"
                          cy="38.4148"
                          rx="36.1795"
                          ry="34.4146"
                          fill="white"
                        ></ellipse>
                        <path
                          d="M64.6059 34.9285H61.0216V22.8611C61.0216 22.6464 60.8992 22.4519 60.7046 22.3596L52.0013 18.2705C51.8269 18.1884 51.6239 18.2018 51.4629 18.3074L45.1683 22.3982C45.0124 22.5005 44.9168 22.6749 44.9168 22.8628V31.3076L41.1648 32.4833V32.4817C40.9333 32.5555 40.7757 32.7702 40.7774 33.0134L40.8226 56.3101V56.3084C40.8226 56.5533 40.982 56.768 41.2168 56.8384L47.9695 58.8729V58.8712C48.0215 58.888 48.0752 58.8964 48.1288 58.8964C48.1573 58.8947 48.1842 58.893 48.2093 58.8897L51.9412 58.9216H64.6058C64.9128 58.9216 65.161 58.6733 65.161 58.3664V35.484C65.161 35.3364 65.1023 35.1955 64.9983 35.0915C64.8943 34.9875 64.7535 34.9285 64.6059 34.9285ZM52.3203 19.6438L59.9133 23.2147V34.9283H55.3345V31.594C55.3345 31.3105 55.1215 31.074 54.8414 31.0421L52.3205 30.7654L52.3203 19.6438ZM47.5771 57.598L41.9317 55.8973L41.9166 48.5478L44.7947 47.0601H44.7964C44.9289 46.9947 45.0295 46.8773 45.0765 46.7364C45.1234 46.5955 45.11 46.4412 45.0429 46.3087C44.9742 46.1762 44.8551 46.0772 44.7142 46.0336C44.5716 45.99 44.4173 46.0051 44.2865 46.0756L41.9149 47.3016L41.9099 44.9988L43.7599 44.0427C44.0333 43.9035 44.1406 43.5681 43.9997 43.2964C43.8588 43.023 43.5251 42.9156 43.2517 43.0565L41.9099 43.7509L41.9049 41.121L43.7615 40.1616C43.8957 40.0962 43.998 39.9788 44.045 39.8363C44.0936 39.6954 44.0802 39.5394 44.0115 39.4069C43.9427 39.2744 43.8236 39.1754 43.681 39.1318C43.5385 39.0882 43.3825 39.1033 43.2517 39.1754L41.9015 39.8732V38.9037L44.7981 37.406C45.0715 37.2667 45.1771 36.9313 45.0363 36.6596C44.897 36.3879 44.5616 36.2805 44.2899 36.4214L41.8965 37.6575L41.8881 33.4175L47.579 31.6346L47.5771 57.598ZM47.9662 30.3532L46.0256 30.962V23.163L51.2116 19.7934V30.6436L48.268 30.345C48.1691 30.3182 48.0651 30.3215 47.9661 30.3517L47.9662 30.3532ZM51.3877 35.4837V57.8144H48.6857L48.684 31.4803L54.2238 32.0908V34.9287H51.9444C51.7968 34.9287 51.6542 34.9874 51.5503 35.0914C51.4463 35.1954 51.3877 35.3361 51.3877 35.4837ZM64.0524 57.8144H52.4981V36.0389H64.0524V57.8144ZM54.6784 40.9414V38.7258C54.6784 38.5799 54.7371 38.4373 54.8411 38.3333C54.9451 38.2293 55.086 38.1723 55.2336 38.1723H56.6274C56.9259 38.1807 57.1657 38.4256 57.1657 38.7258C57.1657 39.0261 56.9259 39.2726 56.6274 39.281H55.7871V40.9431V40.9415C55.7787 41.2417 55.5338 41.4815 55.2336 41.4815C54.9334 41.4815 54.6885 41.2417 54.6784 40.9414ZM59.368 40.9414V38.7275L59.3697 38.7258C59.3697 38.5799 59.4284 38.4374 59.5324 38.3334C59.6364 38.2294 59.7772 38.1724 59.9232 38.1724H61.3169C61.4662 38.1673 61.6121 38.2244 61.7195 38.3283C61.8268 38.4323 61.8872 38.5766 61.8872 38.7258C61.8872 38.8751 61.8268 39.0194 61.7195 39.1233C61.6121 39.2273 61.4662 39.2844 61.3169 39.281H60.4783V40.9431V40.9415C60.47 41.2417 60.2234 41.4815 59.9232 41.4815C59.6229 41.4815 59.3781 41.2417 59.3697 40.9415L59.368 40.9414ZM54.6784 46.1089V43.895C54.6784 43.7474 54.7371 43.6065 54.8411 43.5025C54.9451 43.3985 55.086 43.3398 55.2336 43.3398H56.6274C56.9259 43.3482 57.1657 43.5948 57.1657 43.895C57.1657 44.1952 56.9259 44.4401 56.6274 44.4485H55.7871V46.1106C55.7787 46.4109 55.5338 46.649 55.2336 46.649C54.9334 46.649 54.6885 46.4109 54.6784 46.1106L54.6784 46.1089ZM59.368 46.1089V43.895H59.3697C59.3697 43.7474 59.4284 43.6065 59.5324 43.5025C59.6364 43.3985 59.7772 43.3398 59.9232 43.3398H61.3169C61.4662 43.3365 61.6121 43.3918 61.7195 43.4975C61.8268 43.6015 61.8872 43.744 61.8872 43.895C61.8872 44.0443 61.8268 44.1885 61.7195 44.2925C61.6121 44.3965 61.4662 44.4535 61.3169 44.4485H60.4783V46.1106C60.47 46.4108 60.2234 46.649 59.9232 46.649C59.6229 46.649 59.3781 46.4108 59.3697 46.1106L59.368 46.1089ZM54.6784 51.2781V49.0642C54.6784 48.9166 54.7371 48.7757 54.8411 48.6717C54.9451 48.5677 55.086 48.509 55.2336 48.509H56.6274C56.9259 48.5174 57.1657 48.7639 57.1657 49.0642C57.1657 49.3627 56.9259 49.6093 56.6274 49.6177H55.7871V51.2798C55.7787 51.58 55.5338 51.8182 55.2336 51.8182C54.9334 51.8182 54.6885 51.58 54.6784 51.2798L54.6784 51.2781ZM59.368 51.2781V49.0642H59.3697C59.3697 48.9166 59.4284 48.7757 59.5324 48.6717C59.6364 48.5677 59.7772 48.509 59.9232 48.509H61.3169C61.4662 48.504 61.6121 48.561 61.7195 48.665C61.8268 48.7707 61.8872 48.9132 61.8872 49.0642C61.8872 49.2134 61.8268 49.356 61.7195 49.4617C61.6121 49.5657 61.4662 49.6227 61.3169 49.6177H60.4783V51.2798C60.47 51.58 60.2234 51.8182 59.9232 51.8182C59.6229 51.8182 59.3781 51.58 59.3697 51.2798L59.368 51.2781Z"
                          fill="#F2AB3C"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_dddd_454_1703"
                          x="0.731262"
                          y="0.871397"
                          width="104.897"
                          height="129.524"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          ></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="2.50288"></feOffset>
                          <feGaussianBlur stdDeviation="2.81574"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.945098 0 0 0 0 0.670588 0 0 0 0 0.239216 0 0 0 0.21 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_454_1703"
                          ></feBlend>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="10.6373"></feOffset>
                          <feGaussianBlur stdDeviation="5.31863"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.945098 0 0 0 0 0.670588 0 0 0 0 0.239216 0 0 0 0.18 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="effect1_dropShadow_454_1703"
                            result="effect2_dropShadow_454_1703"
                          ></feBlend>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="23.1517"></feOffset>
                          <feGaussianBlur stdDeviation="6.88293"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.945098 0 0 0 0 0.670588 0 0 0 0 0.239216 0 0 0 0.11 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="effect2_dropShadow_454_1703"
                            result="effect3_dropShadow_454_1703"
                          ></feBlend>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="41.2976"></feOffset>
                          <feGaussianBlur stdDeviation="8.13437"></feGaussianBlur>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.945098 0 0 0 0 0.670588 0 0 0 0 0.239216 0 0 0 0.03 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="effect3_dropShadow_454_1703"
                            result="effect4_dropShadow_454_1703"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect4_dropShadow_454_1703"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h5 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                      Fully Automated Payroll Module
                    </h5>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed">
                      Platform that automates attendance, payroll, and employee
                      management - saving time and reducing errors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Animations */}
        <style jsx>{`
          .floating {
            animation: floating 6s ease-in-out infinite;
            transform-origin: center center;
          }

          @keyframes floating {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-8px) rotate(1deg);
            }
            66% {
              transform: translateY(8px) rotate(-1deg);
            }
          }

          /* Responsive animation adjustments */
          @media (max-width: 640px) {
            .floating {
              animation-duration: 4s;
            }

            @keyframes floating {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-6px);
              }
            }
          }

          @media (max-width: 480px) {
            .floating {
              animation-duration: 3s;
            }

            @keyframes floating {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-4px);
              }
            }
          }

          /* Reduced motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .floating {
              animation: none;
            }

            .group:hover {
              transform: none !important;
            }
          }

          /* Enhanced hover effects */
          .group:hover svg {
            transform: scale(1.1);
            transition: transform 0.3s ease;
          }

          /* Background pattern enhancement */
          section {
            position: relative;
            overflow: hidden;
          }

          section::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
                circle at 20% 20%,
                rgba(242, 171, 60, 0.1) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 80% 80%,
                rgba(242, 171, 60, 0.05) 0%,
                transparent 50%
              );
            pointer-events: none;
          }
        `}</style>
      </section>
    </div>
  );
};

export default SimplifiedWorkforceSolutions;
