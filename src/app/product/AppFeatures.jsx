"use client"; // add this if you use Next.js App Router (app directory)

import Image from "next/image";

const AppFeatures = () => {
  return (
    <div
      className="min-h-screen py-10 md:pb-20 md:pt-10 px-4 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/assets/images/pro/222BG.png')",
      }}
    >
      <section className="flex items-center justify-center">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-white mb-3 tracking-wider uppercase">
                OUR PRODUCT
              </h2>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
                App Features
              </h1>
              <p className="text-sm md:text-md lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
                AGI Moneey brings together everything your workforce needs into
                one powerful mobile app. From real-time salary access to
                attendance tracking and insightful dashboards, our app is
                designed to offer ease, speed, and control to employees
              </p>
            </div>

            {/* Responsive grid - removed empty divs and improved column structure */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center mt-8 md:mt-12 lg:mt-16">
              {/* Left Feature List */}
              <div className="lg:order-1"></div>
              <div className="lg:col-span-3 flex flex-col justify-center space-y-4 md:space-y-6 order-2 lg:order-2">
                {[
                  {
                    title: "Secure & Simple Login",
                    desc: "Secure mobile login with 4-digit PIN protection",
                    icon: (
                      <svg
                        width="39"
                        height="50"
                        viewBox="0 0 39 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.240391 6.18047L8.14602 5.49145L19.3753 0L30.6046 5.49145L38.5103 6.18047L38.7503 27.781C38.8 32.0729 34.0483 38.0209 31.0889 40.4367L19.3753 50L7.66175 40.4367C4.70231 38.0209 -0.0452047 32.0729 0.000325079 27.781L0.240391 6.18047ZM4.33393 9.98672L4.13526 27.8267C4.10629 30.5454 8.27433 35.5886 10.2735 37.2198L19.3753 44.6538L28.4771 37.2198C30.4763 35.5886 34.6444 30.5454 34.6154 27.8267L34.4167 9.98672L30.2487 9.6256C29.7189 9.57994 29.2718 9.45542 28.7917 9.21883L19.3753 4.61564L9.95893 9.21883C9.48294 9.45542 9.03592 9.57994 8.50198 9.6256L4.33393 9.98672ZM19.3753 41.8355L27.103 35.5263C28.2702 34.5758 29.5161 33.0649 30.4018 31.8487C30.9771 31.056 32.4507 28.8519 32.4382 27.8516L32.2644 11.9915L30.0624 11.8006C29.2677 11.73 28.5516 11.5308 27.8397 11.1821L19.3753 7.04383V41.8355Z"
                          fill="white"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: "Smart Dashboard",
                    desc: "Workforce analytics and payroll management dashboard for employers",
                    icon: (
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.0703 25H23.5352V23.5352C23.5352 22.7268 22.8786 22.0703 22.0703 22.0703C21.262 22.0703 20.6055 22.7268 20.6055 23.5352C20.6055 24.3435 21.262 25 22.0703 25Z"
                          fill="white"
                        ></path>
                        <path
                          d="M23.5352 27.9297C23.2403 27.9297 18.8457 27.9297 19.1406 27.9297C18.3323 27.9297 17.6758 28.5862 17.6758 29.3945V30.8594H23.5352V27.9297Z"
                          fill="white"
                        ></path>
                        <path
                          d="M29.3945 23.5352C29.3945 22.7268 28.738 22.0703 27.9297 22.0703C27.1214 22.0703 26.4648 22.7268 26.4648 23.5352V25H27.9297C28.738 25 29.3945 24.3435 29.3945 23.5352Z"
                          fill="white"
                        ></path>
                        <path
                          d="M23.5352 33.7891H20.6055V39.6484H29.3945V33.7891H26.4648V35.2539C26.4648 36.0634 25.8095 36.7188 25 36.7188C24.1905 36.7188 23.5352 36.0634 23.5352 35.2539V33.7891Z"
                          fill="white"
                        ></path>
                        <path
                          d="M0 44.043C0 46.4661 1.97144 48.4375 4.39453 48.4375H45.6055C48.0286 48.4375 50 46.4661 50 44.043V16.2109H0V44.043ZM14.7461 29.3945C14.7461 27.3689 16.1308 25.676 17.9985 25.1694C17.7944 24.6632 17.6758 24.1135 17.6758 23.5352C17.6758 21.1121 19.6472 19.1406 22.0703 19.1406C23.1998 19.1406 24.2207 19.5808 25 20.2835C25.7793 19.5808 26.8002 19.1406 27.9297 19.1406C30.3528 19.1406 32.3242 21.1121 32.3242 23.5352C32.3242 24.1135 32.2056 24.6632 32.0015 25.1694C33.8692 25.676 35.2539 27.3689 35.2539 29.3945V32.3242C35.2539 33.1337 34.5985 33.7891 33.7891 33.7891H32.3242V41.1133C32.3242 41.9228 31.6689 42.5781 30.8594 42.5781H19.1406C18.3311 42.5781 17.6758 41.9228 17.6758 41.1133V33.7891H16.2109C15.4015 33.7891 14.7461 33.1337 14.7461 32.3242V29.3945Z"
                          fill="white"
                        ></path>
                        <path
                          d="M32.3238 29.3945C32.3238 28.5862 31.6673 27.9297 30.8589 27.9297C30.564 27.9297 26.1695 27.9297 26.4644 27.9297V30.8594H32.3238V29.3945Z"
                          fill="white"
                        ></path>
                        <path
                          d="M45.6055 1.5625H4.39453C1.97144 1.5625 0 3.53394 0 5.95703V13.2812H50V5.95703C50 3.53394 48.0286 1.5625 45.6055 1.5625ZM7.32155 10.3516C6.51245 10.3516 5.8567 9.69582 5.8567 8.88672C5.8567 8.07762 6.51245 7.42188 7.32155 7.42188C8.13065 7.42188 8.78639 8.07762 8.78639 8.88672C8.78639 9.69582 8.13065 10.3516 7.32155 10.3516ZM13.2786 10.3516C12.4695 10.3516 11.8137 9.69582 11.8137 8.88672C11.8137 8.07762 12.4695 7.42188 13.2786 7.42188C14.0877 7.42188 14.7434 8.07762 14.7434 8.88672C14.7434 9.69582 14.0877 10.3516 13.2786 10.3516ZM19.138 10.3516C18.3289 10.3516 17.6731 9.69582 17.6731 8.88672C17.6731 8.07762 18.3289 7.42188 19.138 7.42188C19.9471 7.42188 20.6028 8.07762 20.6028 8.88672C20.6028 9.69582 19.9471 10.3516 19.138 10.3516ZM42.6758 10.3516H33.7891C32.9796 10.3516 32.3242 9.6962 32.3242 8.88672C32.3242 8.07724 32.9796 7.42188 33.7891 7.42188H42.6758C43.4853 7.42188 44.1406 8.07724 44.1406 8.88672C44.1406 9.6962 43.4853 10.3516 42.6758 10.3516Z"
                          fill="white"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: "Real Time Tracking",
                    desc: "Real-time earnings tracking from anywhere with internet access",
                    icon: (
                      <svg
                        width="51"
                        height="51"
                        viewBox="0 0 51 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M33.194 37.7323C33.2083 38.0571 33.3194 38.3819 33.5291 38.6718C33.8066 39.0563 34.0903 39.4345 34.3781 39.8087C36.6293 38.2668 38.5145 36.3384 40.0874 34.0669C39.7256 33.7811 39.3576 33.4995 38.9855 33.2199C38.4037 32.784 37.6759 32.7511 37.055 33.1273C36.835 33.261 36.6212 33.4008 36.4136 33.5488L32.565 29.7003C38.4159 22.5832 37.9738 12.0716 31.3644 5.4598C24.3025 -1.59988 12.8554 -1.59988 5.79564 5.4598C-1.26627 12.5195 -1.26416 23.9642 5.79564 31.0239C12.426 37.6541 22.9251 38.0652 30.0365 32.2245L33.8974 36.0853C33.5644 36.6075 33.1676 37.0248 33.1964 37.73L33.194 37.7323ZM28.1077 8.71412C33.3687 13.975 33.3707 22.5088 28.1077 27.7717C22.8405 33.0388 14.3171 33.0388 9.04985 27.7717C3.78684 22.5088 3.78684 13.977 9.04985 8.71412C14.3129 3.45121 22.8447 3.45121 28.1077 8.71412ZM9.66878 17.6837C9.66878 18.1154 9.31928 18.4649 8.88754 18.4649C8.45579 18.4649 8.1063 18.1155 8.1063 17.6837C8.1063 12.2113 12.5449 7.77259 18.0176 7.77259C18.4493 7.77259 18.7988 8.12208 18.7988 8.55381C18.7988 8.98554 18.4493 9.33504 18.0176 9.33504C13.4063 9.33504 9.66878 13.0727 9.66878 17.6837ZM18.5791 3.15543C26.9114 3.15543 33.6649 9.91091 33.6649 18.2453C33.6649 26.5817 26.9157 33.3309 18.5791 33.3309C10.2424 33.3309 3.48896 26.5775 3.48896 18.2453C3.48896 9.91302 10.2446 3.15543 18.5791 3.15543ZM43.9689 37.467C45.7266 39.1754 48.6973 42.3722 50.1529 44.3478C50.5908 44.9419 50.6155 45.6841 50.2207 46.3028C49.2915 47.7604 48.0929 48.961 46.6415 49.8861C46.0226 50.2788 45.2846 50.2562 44.6905 49.8224C42.7025 48.3649 39.483 45.4188 37.7601 43.6732C40.2107 41.9895 42.2892 39.9193 43.9689 37.4688L43.9689 37.467ZM42.7826 36.3507C41.1379 38.8033 39.0924 40.8427 36.6375 42.4894C36.214 42.0268 35.7987 41.5519 35.3937 41.0688C37.721 39.455 39.6946 37.4403 41.3393 35.0886C41.8307 35.5018 42.3118 35.9232 42.7846 36.3529L42.7826 36.3507Z"
                          fill="white"
                        ></path>
                      </svg>
                    ),
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white/20 border border-white backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center xl:items-end h-full"
                  >
                    <div className="mb-3 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-[#061738] mb-2 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-[#606060] text-center md:text-end text-sm">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Center Image */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-3">
                <div className="w-52 h-96 pb-10 lg:pb-0 lg:w-96 lg:h-[200px] xl:w-[350px] xl:h-[450px] flex items-center justify-center transform hover:scale-105 transition-transform duration-300 animate-float">
                  <Image
                    // src="/assets/images/pro/5.2. without shadow.png"
                    src="/assets/images/features1.jpg"
                    alt="App Features"
                    width={420}
                    height={550}
                    className="h-auto rounded-3xl drop-shadow-xl"
                    priority
                  />
                </div>
              </div>

              {/* Right Feature List */}
              <div className="lg:col-span-3 flex flex-col justify-center space-y-4 md:space-y-6 order-4">
                {[
                  {
                    title: "Instant Notifications",
                    desc: "Real-time alerts for withdrawals and attendance updates",
                    icon: (
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M41.9686 3.3692H7.98254C4.42915 3.3692 1.53809 6.26027 1.53809 9.81366V30.6124C1.53809 34.159 4.41656 37.0449 7.95965 37.0569V46.4957L21.5229 37.0577H41.9686C45.522 37.0577 48.4131 34.1667 48.4131 30.6124V9.81366C48.4131 6.26027 45.522 3.3692 41.9686 3.3692ZM35.8669 27.54H14.0842V24.7934H35.8669V27.54ZM35.8669 21.6806H14.0842V18.934H35.8669V21.6806ZM35.8669 15.8212H14.0842V13.0746H35.8669V15.8212Z"
                          fill="white"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: "24/7 Access",
                    desc: "24/7 app access for urgent financial needs anytime",
                    icon: (
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.5184 0H14.4814C12.468 0 10.8428 1.63253 10.8428 3.64223V46.3614C10.8428 48.3693 12.468 50 14.4814 50H35.5184C37.5281 50 39.157 48.3693 39.157 46.3614V3.64223C39.157 1.63253 37.5281 0 35.5184 0ZM19.809 2.21194H30.1945C30.4569 2.21194 30.67 2.60367 30.67 3.08833C30.67 3.57299 30.4569 3.96655 30.1945 3.96655H19.809C19.5448 3.96655 19.3352 3.57299 19.3352 3.08833C19.3352 2.60367 19.5448 2.21194 19.809 2.21194ZM25.0017 46.4051C23.7208 46.4051 22.6786 45.3629 22.6786 44.0802C22.6786 42.7975 23.7208 41.759 25.0017 41.759C26.279 41.759 27.3212 42.7975 27.3212 44.0802C27.3212 45.3629 26.279 46.4051 25.0017 46.4051ZM36.4313 38.4447H13.5703V6.14569H36.4313V38.4447Z"
                          fill="white"
                        ></path>
                      </svg>
                    ),
                  },
                  {
                    title: "One Tap Transfers",
                    desc: "One-tap bank transfers with instant processing and no delays",
                    icon: (
                      <svg
                        width="30"
                        height="51"
                        viewBox="0 0 30 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.75871 1.965C12.9096 1.965 15.4726 4.52695 15.4726 7.67789C15.4726 8.02788 15.4396 8.37388 15.3806 8.70787C15.2926 9.19586 15.6166 9.66485 16.1056 9.75285C16.5906 9.84785 17.0626 9.51785 17.1496 9.02986C17.2296 8.58987 17.2726 8.13888 17.2726 7.67789C17.2726 3.53497 13.9026 0.165039 9.75971 0.165039C5.61779 0.165039 2.24686 3.53597 2.24686 7.67789C2.24686 8.13088 2.28686 8.57287 2.36386 9.00086C2.44786 9.48985 2.90685 9.82585 3.40384 9.73185C3.89283 9.64585 4.22182 9.18086 4.13482 8.69187C4.07782 8.36388 4.04682 8.02388 4.04682 7.67789C4.04582 4.52695 6.60777 1.965 9.75871 1.965ZM18.2475 19.0817C18.2475 17.5247 16.9716 16.2517 15.4176 16.2517C13.8616 16.2517 12.5877 17.5297 12.5877 19.0817V7.79689C12.5877 6.23792 11.3117 4.96694 9.75971 4.96694C8.20374 4.96694 6.92977 6.24192 6.92977 7.79689V31.7734C6.92977 31.1564 6.44378 30.1044 6.23178 29.5945C5.71179 28.3495 4.80781 27.4145 3.88083 26.8385C3.07784 26.3405 1.82487 25.7905 1.03688 26.5965C0.0889035 27.5695 0.597894 29.8794 1.03288 30.9444C1.88287 33.0314 2.29586 36.6703 3.14784 39.2363C4.80681 44.2432 5.80179 43.5592 8.71773 50.165H25.1704C25.6084 47.3081 27.4784 43.8152 28.4613 40.4852C29.1723 38.0753 28.9853 35.8593 28.9933 33.3774L29.0223 24.2856C29.0223 22.8036 27.8084 21.5926 26.3274 21.5926C24.8614 21.5926 23.6544 22.7866 23.6344 24.2466V24.2296V21.6806C23.6344 20.2006 22.4205 18.9877 20.9415 18.9877C19.4755 18.9877 18.2715 20.1796 18.2465 21.6356L18.2475 19.0817Z"
                          fill="white"
                        ></path>
                      </svg>
                    ),
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white/20 border border-white backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center xl:items-start h-full"
                  >
                    <div className="mb-3 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-[#061738] mb-2 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-[#606060] text-center md:text-start text-sm">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="lg:order-5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind custom animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AppFeatures;
