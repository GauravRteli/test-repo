import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="bg-[#f2ab3c] w-[100vw] lg:w-[60vw] mx-auto rounded-md px-8 py-4 h-[450px] md:h-[400px] xl:h-[349px] relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Content Section */}
          <div className="w-full pt-10 lg:w-7/12 z-10 pr-8">
            <div className="space-y-6">
              <h3 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Making any day
                <br />
                <span className="block">a pay day</span>
              </h3>

              <div className="text-black text-sm space-y-1">
                <p>
                  AGI Money - India's integrated Earnings on Demand platform.
                </p>
                <p>Download the mobile app and access your earnings, today.</p>
                <p>Now on iOS and Android.</p>
              </div>

              <ul className="flex justify-start items-center gap-4 pt-6">
                <li>
                  <a href="#!">
                    <Image
                      src="/assets/images/home1/banner/applestore.png"
                      alt="Apple Store"
                      width={144}
                      height={48}
                      className="h-12 w-auto"
                      priority
                    />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <Image
                      src="/assets/images/home1/banner/playstore.png"
                      alt="Play Store"
                      width={144}
                      height={48}
                      className="h-12 w-auto"
                      priority
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Phone Section - Half Outside */}
          <div className="w-full lg:w-5/12 flex justify-end items-center">
            <div className="absolute bottom-0">
              <Image
                src="/assets/images/9.png"
                alt="Mobile"
                className="mobwe bottom-image-bottom shadow-left max-w-xs lg:max-w-sm xl:max-w-sm h-auto"
                width={400}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
