"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // Modern arrow icon

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(progress);
      setShowTop(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleGoToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div
        className="fixed top-0 left-0 h-1 z-50 rounded-full"
        style={{
          backgroundColor: "#F2AB3C",
          width: `${progress}%`,
          transition: "width 0.15s",
        }}
      />
      <div
        className={`fixed bottom-16 right-12 flex flex-col items-center z-50 ${
          showTop ? "" : "hidden"
        }`}
      >
        <button
          aria-label="Go to top"
          onClick={handleGoToTop}
          className="w-12 h-12 flex items-center justify-center bg-[#F2AB3C] text-white rounded-lg shadow-lg transition-opacity duration-300 animate-bounce"
        >
          <FaArrowUp size={24} />
        </button>
      </div>
    </>
  );
}
