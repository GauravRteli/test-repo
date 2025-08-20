import Image from "next/image";
import Link from "next/link";
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-visible">
      {/* Main Banner Section */}
      <div
        className="relative h-auto min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32"
        style={{
          backgroundImage: `url('/assets/images/pro/Component 7.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/5"></div>

        <div className="container mx-auto px-2 sm:px-4 relative z-10 h-full">
          <div className="flex justify-center items-center h-full min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] pt-6 sm:pt-8 md:pt-12 lg:pt-16">
            <div className="text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl">
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                <h1
                  className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white uppercase tracking-wider leading-tight ${styles.fadeInUp}`}
                >
                  INDIA'S INTEGRATED EARNING ON DEMAND PLATFORM
                </h1>

                <h2
                  className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl tracking-wide font-bold text-black leading-tight ${styles.fadeInUp} ${styles.delaySmall}`}
                >
                  MAKING ANY DAY A PAY DAY
                </h2>

                <p
                  className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-800 leading-relaxed max-w-full mx-auto px-2 sm:px-4 ${styles.fadeInUp} ${styles.delayMedium}`}
                >
                  A free, employer-backed product that helps employees manage
                  their
                  <br className="hidden sm:block" />
                  mid-month liquidity crunch and lead stress-free, productive
                  lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phone Image positioned to extend outside component (2/3 outside, 1/3 inside) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2/3 w-full flex flex-col items-center justify-center">
          <div className="relative w-full flex justify-center">
            <Image
              src="/assets/images/pro/1.2. banner phones.png"
              alt="Mobile phones showing app interface"
              width={1200}
              height={800}
              className={`w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] 2xl:w-[1000px] h-auto ${styles.float} max-w-none`}
              priority
              style={{
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
              }}
            />
          </div>

          {/* App Store Links positioned below phones */}
          <div className="relative">
            <ul
              className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              <li>
                <Link href="#" className="block group">
                  <Image
                    src="/assets/images/home1/banner/playstore.png"
                    alt="Download from Play Store"
                    width={160}
                    height={60}
                    className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-auto hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link href="#" className="block group">
                  <Image
                    src="/assets/images/home1/banner/applestore.png"
                    alt="Download from App Store"
                    width={160}
                    height={60}
                    className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-auto hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spacer div to accommodate the 2/3 of phone image that extends outside */}
      <div className="h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 2xl:h-96 bg-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroBanner;
