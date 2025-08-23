"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialsComponent = () => {
  const testimonials = [
    {
      id: 1,
      text: "We're excited to onboard AGI Moneey. It promises to reduce the pressure of salary advance requests and improve employee well-being. The integration plan looks smooth.",
      name: "Gurjeet Singh Arora",
      designation: "Sahil Fashion Bazaar",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 2,
      text: "We've been exploring Earned Wage Access for our staff, and AGI Moneey offers the exact solution we need. The team has been responsive, and the integration process looks promising.",
      name: "Hitesh Udhani",
      designation: "Guruji Traders",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 3,
      text: "Our team values the potential of AGI Moneey to ease financial anxiety. We've had employees ask us when it's going live, which shows the kind of anticipation this tool has created.",
      name: "Manish Jain",
      designation: "Abhishek Megamech Pvt Ltd",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 4,
      text: "Even before launch, the AGI Moneey team has shown exceptional professionalism. The platform design reflects a strong understanding of the financial needs of employees.",
      name: "Bharat Malhotra",
      designation: "Cognoscente Fintech Pvt Ltd",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: 5,
      text: "As a finance professional, I see AGI Moneey bringing more discipline and transparency to salary advances. It's simple, safe, and integrates smoothly without adding to the employer's workload.",
      name: "CA Manish Lathura",
      designation: "Agiwal & Associates",
      avatar: "/api/placeholder/80/80",
    },
  ];

  return (
    <div className="relative w-full min-h-[600px]">
      <div className="mx-auto w-[80%]">
        <div className="relative overflow-hidden rounded-3xl py-10 md:py-24">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-[#f2ab3c] text-lg tracking-widest mb-2">
              Testimonials
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-neutral-800">
              What Our Clients Says About Us
            </h3>
          </div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            className="min-h-[50vh]"
            style={{
              backgroundImage: "url('/assets/images/565y.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-3xl p-8 md:pt-32 max-w-xl w-full mx-auto flex flex-col items-center">
                  {/* Avatar/Logo */}
                  <div className="mb-6 flex justify-center w-16 h-16 p-2 border-2 border-[#f2ab3c] rounded-full bg-white shadow">
                    <Image
                      src="/assets/images/Testimonials.png"
                      alt="Testimonial Logo"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-center text-gray-600 text-lg leading-relaxed mb-8">
                    "{item.text}"
                  </p>

                  {/* Name & Designation */}
                  <div className="text-center">
                    <h6 className="text-gray-800 font-bold text-lg mb-1">
                      {item.name}
                    </h6>
                    <p className="text-[#f2ab3c] font-medium text-sm">
                      {item.designation}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
