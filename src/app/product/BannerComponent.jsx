import Image from "next/image";
import Link from "next/link";
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-visible">
      {/* Main Banner Section */}
      <div
        className="relative h-auto min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] 2xl:min-h-[85vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24"
        style={{
          backgroundImage: `url('/assets/images/pro/Component 7.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/5"></div>

        <div className="container mx-auto px-2 sm:px-4 relative z-10 h-full">
          <div className="flex justify-center items-center h-full min-h-[30vh] sm:min-h-[35vh] md:min-h-[45vh] lg:min-h-[55vh] pt-4 sm:pt-6 md:pt-8 lg:pt-12">
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

        {/* Phone Image positioned with responsive translation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 sm:translate-y-3/5 md:translate-y-2/3 lg:translate-y-2/3 xl:translate-y-2/3 w-full flex flex-col items-center justify-center">
          <div className="relative w-full flex justify-center">
            <Image
              src="/assets/images/pro/1.2. banner phones.png"
              alt="Mobile phones showing app interface"
              width={1200}
              height={800}
              className={`w-[250px] sm:w-[300px] md:w-[400px] lg:w-[550px] xl:w-[700px] 2xl:w-[900px] h-auto ${styles.float} max-w-none`}
              priority
              style={{
                filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))",
              }}
            />
          </div>

          {/* App Store Links positioned below phones */}
          <div className="relative mt-2 sm:mt-3 md:mt-4">
            <ul
              className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6"
              style={{ listStyle: "none", padding: 0, margin: 0 }}
            >
              <li>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.agimoneey.app&pcampaignid=web_share"
                  className="block group"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/home1/banner/playstore.png"
                    alt="Download from Play Store"
                    width={160}
                    height={60}
                    className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-auto hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://apps.apple.com/in/app/agi-moneey/id6747022528"
                  className="block group"
                  target="_blank"
                >
                  <Image
                    src="/assets/images/home1/banner/applestore.png"
                    alt="Download from App Store"
                    width={160}
                    height={60}
                    className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-auto hover:scale-105 group-hover:shadow-lg transition-all duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Responsive spacer div */}
      <div className="h-20 sm:h-28 md:h-40 lg:h-56 xl:h-72 2xl:h-80 bg-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroBanner;
