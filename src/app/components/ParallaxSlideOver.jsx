"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
const slides = [
  { id: 1, image: "/assets/images/Default1.png", alt: "Slide 1" },
  { id: 2, image: "/assets/images/Default-11.png", alt: "Slide 2" },
  { id: 3, image: "/assets/images/Default-21.png", alt: "Slide 3" },
];
export default function ParallaxSlideOver() {
  return (
    <ParallaxProvider>
      {" "}
      {/* Slides wrapper */}{" "}
      <div className="relative">
        {" "}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="sticky top-0 h-screen w-full"
            style={{ zIndex: index + 1 }}
          >
            {" "}
            <div className="relative h-full w-full">
              {" "}
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={100}
                className="object-cover"
              />{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </ParallaxProvider>
  );
}
