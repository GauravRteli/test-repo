import Image from "next/image";
import Link from "next/link";
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div className="relative">
      {/* Banner Section with Background */}
      <section
        className="relative h-auto md:min-h-[80vh] overflow-hidden px-8 md:px-16"
        style={{
          backgroundImage: `url('/assets/images/pro/Component 7.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center items-center min-h-[70vh]">
            <div className="text-center max-w-2xl mb-20">
              <div className="space-y-3">
                <h1
                  className={`text-xl font-bold text-white uppercase ${styles.fadeInUp}`}
                >
                  INDIA'S INTEGRATED EARNING ON DEMAND PLATFORM
                </h1>

                <h2
                  className={`text-3xl md:text-3xl tracking-wide lg:text-4xl font-bold text-black leading-tight ${styles.fadeInUp} ${styles.delaySmall}`}
                >
                  MAKING ANY DAY A PAY DAY
                </h2>

                <p
                  className={`text-sm md:text-base text-gray-800 leading-relaxed max-w-3xl mx-auto ${styles.fadeInUp} ${styles.delayMedium}`}
                >
                  A free, employer-backed product that helps employees manage
                  their
                  <br className="hidden md:block" />
                  mid-month liquidity crunch and lead stress-free, productive
                  lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Image with floating animation */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full flex flex-col items-center justify-center">
        <Image
          src="/assets/images/pro/1.2. banner phones.png"
          alt="Mobile phones showing app interface"
          width={1200}
          height={800}
          className={`w-[1200px] h-auto ${styles.float}`}
          priority
        />
        <ul
          className="flex justify-center items-center space-x-4"
          style={{ listStyle: "none", padding: 0, margin: 0 }}
        >
          <li>
            <Link href="#" className="block">
              <Image
                src="/assets/images/home1/banner/playstore.png"
                alt="Play Store"
                width={160}
                height={60}
                className="w-40 h-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </li>
          <li>
            <Link href="#" className="block">
              <Image
                src="/assets/images/home1/banner/applestore.png"
                alt="Apple Store"
                width={160}
                height={60}
                className="w-40 h-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroBanner;
