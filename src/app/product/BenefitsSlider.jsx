"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

// Custom arrow components
const PrevArrow = ({ onClick, disabled }) => {
  return (
    <button
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
        disabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-black hover:bg-gray-800"
      }`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 18l-6-6 6-6"
        />
      </svg>
    </button>
  );
};

const NextArrow = ({ onClick, disabled }) => {
  return (
    <button
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
        disabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-orange-400 hover:bg-orange-500"
      }`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
      </svg>
    </button>
  );
};

const BenefitsSlider = () => {
  const benefits = [
    {
      id: 1,
      title: "Seamless HR & Payroll Integration",
      description:
        "Automates HR and payroll processes via API integration, enabling real-time attendance tracking and analytics",
      color: "#2FA62B",
      bgColor: "rgba(47, 166, 43, 0.3)",
      icon: (
        <svg
          width="88"
          height="84"
          viewBox="0 0 88 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pulse"
        >
          <ellipse
            cx="43.6282"
            cy="42.2217"
            rx="43.6282"
            ry="41.5"
            fill="#2FA62B"
            fillOpacity="0.3"
          ></ellipse>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.4929 50.6785L56.4941 26.6262L40.2901 26.698V28.8653H54.2549V50.6785H56.4929ZM52.6276 54.5438L52.6287 30.4915L36.4248 30.5633V32.7307H50.3896V54.5438H52.6276ZM47.2941 45.5488C47.2941 41.6279 44.1155 38.4493 40.195 38.4493C36.2741 38.4493 33.0959 41.6279 33.0959 45.5488C33.0959 49.4692 36.2741 52.6478 40.195 52.6478C44.1155 52.6478 47.2941 49.4692 47.2941 45.5488ZM58.1203 25V52.3765H54.2549V56.2418H50.3896V57.3171L47.7067 60L45.8197 58.1133L43.9062 59.9953L42.0401 58.1292L40.1422 59.9953L38.2765 58.1292L36.3786 59.9953L34.5012 58.118L32.6196 60L30 57.3808V32.7307H34.7264V28.8653H38.5921V25H58.1203Z"
            fill="#2FA62B"
          ></path>
          <path
            d="M35.7211 43.6276L36.6049 45.1495L37.8691 43.0344L36.0577 43.0498C35.7455 43.0515 35.5656 43.3621 35.7211 43.6276Z"
            fill="#2FA62B"
          ></path>
          <path
            d="M38.829 48.9702L39.8038 50.6487C39.957 50.9148 40.3475 50.9211 40.5088 50.6589L41.5186 48.989L38.829 48.9702Z"
            fill="#2FA62B"
          ></path>
          <path
            d="M42.4684 43.0498L43.7979 45.2313L44.7248 43.6795C44.878 43.4129 44.6776 43.064 44.3647 43.0645L42.4684 43.0498Z"
            fill="#2FA62B"
          ></path>
          <path
            d="M40.7559 41.3118L40.1208 42.3468L39.5056 41.3053L39.8221 40.7569C39.9519 40.532 40.2821 40.5286 40.4166 40.7509L40.7559 41.3118Z"
            fill="#2FA62B"
          ></path>
          <path
            d="M38.9359 42.2393C39.0347 42.0687 39.2855 42.0675 39.386 42.237L39.7211 42.8018C39.7676 42.8802 39.7678 42.9769 39.7216 43.0555L37.4847 46.8891C37.3851 47.0584 37.5103 47.2696 37.71 47.2693H37.7815C37.8743 47.2689 37.9598 47.2205 38.006 47.1419L40.8803 42.2548C40.9796 42.0861 41.228 42.085 41.3289 42.2528L44.6772 47.8266C44.8379 48.0941 44.641 48.4312 44.3237 48.4318L39.6842 48.4391C39.486 48.4395 39.3607 48.231 39.4572 48.0619L40.8995 45.5337C40.9965 45.3639 41.2447 45.3593 41.3479 45.5256L41.8423 46.3218C41.9472 46.4907 41.8229 46.7069 41.6209 46.7072C41.5281 46.7072 41.4426 46.7559 41.3963 46.8344L41.3678 46.883C41.2681 47.0523 41.3934 47.2635 41.5931 47.2631L42.5736 47.2616C42.7734 47.2613 42.8978 47.0497 42.7977 46.8807L41.3344 44.4117C41.2336 44.2418 40.9821 44.2434 40.8837 44.4146L38.6426 48.3118C38.5967 48.3915 38.5105 48.441 38.4168 48.4411L36.0641 48.4448C35.749 48.4453 35.5507 48.1132 35.7059 47.845L38.936 42.2393H38.9359Z"
            fill="#2FA62B"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Smart Attendance Solutions",
      description:
        "GPS geofencing for automated time tracking, overtime calculation, leave balance sync, and compliance alerts",
      color: "#F2AB3C",
      bgColor: "#FFE4B9",
      icon: (
        <svg
          width="88"
          height="84"
          viewBox="0 0 88 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pulse"
        >
          <ellipse
            cx="43.6282"
            cy="42.2217"
            rx="43.6282"
            ry="41.5"
            fill="#FFE4B9"
          ></ellipse>
          <path
            d="M60.996 31.7058C60.954 30.8504 60.5409 30.0777 59.9212 29.5084C59.3015 28.9392 58.4752 28.653 57.607 28.7357C56.7387 28.777 55.9545 29.1841 55.4171 29.7947L38.8918 48.1118L31.3344 41.3528C30.7147 40.7836 29.8884 40.4973 29.0202 40.5387C28.1519 40.58 27.3677 40.9457 26.8302 41.5563C26.2525 42.1669 25.962 42.981 26.004 43.8364C26.0459 44.6919 26.4171 45.4646 27.0368 45.9941L36.9941 54.9076C37.5718 55.4371 38.3578 55.7217 39.1421 55.7217H39.3486C40.1749 55.6803 40.9592 55.3146 41.5789 54.6627L60.252 33.9448C60.7491 33.3343 61.0379 32.5199 60.996 31.7058Z"
            fill="#F2AB3C"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "One-Tap Salary",
      description:
        "Employees access earned wages instantly via mobile app—no paperwork, just real-time transfers.",
      color: "#6ED4DD",
      bgColor: "rgba(110, 212, 221, 0.3)",
      icon: (
        <svg
          width="88"
          height="84"
          viewBox="0 0 88 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pulse"
        >
          <ellipse
            cx="43.6282"
            cy="42.2217"
            rx="43.6282"
            ry="41.5"
            fill="#6ED4DD"
            fillOpacity="0.3"
          ></ellipse>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M40.4811 26.26C42.6868 26.26 44.4808 28.0533 44.4808 30.259C44.4808 30.504 44.4577 30.7462 44.4164 30.98C44.3548 31.3216 44.5816 31.6499 44.9239 31.7115C45.2634 31.778 45.5938 31.547 45.6547 31.2054C45.7107 30.8974 45.7408 30.5817 45.7408 30.259C45.7408 27.359 43.3818 25 40.4818 25C37.5825 25 35.2228 27.3597 35.2228 30.259C35.2228 30.5761 35.2508 30.8855 35.3047 31.1851C35.3635 31.5274 35.6848 31.7626 36.0327 31.6968C36.375 31.6366 36.6053 31.3111 36.5444 30.9688C36.5045 30.7392 36.4828 30.5012 36.4828 30.259C36.4821 28.0533 38.2754 26.26 40.4811 26.26ZM46.4233 38.2416C46.4233 37.1518 45.5301 36.2607 44.4423 36.2607C43.3531 36.2607 42.4614 37.1553 42.4614 38.2416V30.3423C42.4614 29.251 41.5682 28.3613 40.4818 28.3613C39.3926 28.3613 38.5008 29.2538 38.5008 30.3423V47.1259C38.5008 46.694 38.1606 45.9576 38.0122 45.6006C37.6483 44.7291 37.0155 44.0746 36.3666 43.6714C35.8045 43.3228 34.9274 42.9378 34.3758 43.502C33.7122 44.1831 34.0685 45.8001 34.373 46.5456C34.968 48.0064 35.2571 50.5537 35.8535 52.3499C37.0148 55.8547 37.7113 55.3759 39.7524 60H51.2693C51.5759 58.0001 52.8848 55.5551 53.5729 53.2241C54.0706 51.5372 53.9397 49.986 53.9453 48.2486L53.9656 41.8844C53.9656 40.847 53.1158 39.9993 52.0792 39.9993C51.053 39.9993 50.2081 40.8351 50.1941 41.8571V41.8452V40.0609C50.1941 39.0249 49.3443 38.1758 48.309 38.1758C47.2829 38.1758 46.4401 39.0102 46.4226 40.0294L46.4233 38.2416Z"
            fill="#6ED4DD"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "On-Demand Salary Access",
      description:
        "Workers withdraw accrued salaries before month-end at no cost to employers, without cash flow disruption",
      color: "#A96EDD",
      bgColor: "rgba(169, 110, 221, 0.3)",
      icon: (
        <svg
          width="88"
          height="84"
          viewBox="0 0 88 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pulse"
        >
          <ellipse
            cx="43.6282"
            cy="42.2217"
            rx="43.6282"
            ry="41.5"
            fill="#A96EDD"
            fillOpacity="0.3"
          ></ellipse>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M53.8441 44.1331C51.7562 45.4096 48.9641 46.1127 45.9819 46.1127C43.7522 46.1127 41.6289 45.7195 39.8267 44.9876C40.0456 44.9947 40.2654 44.9989 40.4862 44.9989C43.754 44.9989 46.8377 44.2139 49.1692 42.7883C51.6217 41.289 52.9722 39.2543 52.9722 37.0592V34.8808C53.2743 35.0302 53.5658 35.1893 53.8441 35.3594C55.8111 36.5621 56.8945 38.12 56.8945 39.7463C56.8945 41.3726 55.8111 42.9305 53.8441 44.1331ZM49.6793 52.3277C47.5915 53.6042 44.7993 54.3072 41.8171 54.3072C38.8349 54.3072 36.0428 53.6042 33.9549 52.3277C31.9879 51.1249 30.9046 49.567 30.9046 47.9408C30.9046 46.4465 31.8215 45.0108 33.4958 43.8545V43.8658C33.4958 46.0609 34.8464 48.0955 37.2988 49.5948C39.6303 51.0205 42.7141 51.8056 45.9819 51.8056C47.8501 51.8056 49.6574 51.5478 51.2992 51.0616C50.8552 51.5141 50.314 51.9396 49.6793 52.3277ZM29.5736 32.9397C29.5736 31.3135 30.6568 29.7555 32.6239 28.5528C34.7117 27.2764 37.5039 26.5734 40.4862 26.5734C43.4683 26.5734 46.2604 27.2764 48.3483 28.5528C50.3153 29.7555 51.3985 31.3135 51.3985 32.9397C51.3985 34.566 50.3153 36.1239 48.3483 37.3265C46.2604 38.6031 43.4683 39.3061 40.4862 39.3061C37.5039 39.3061 34.7117 38.6031 32.6239 37.3265C30.6568 36.1239 29.5736 34.566 29.5736 32.9397ZM54.6651 34.0172C54.1377 33.6948 53.57 33.4068 52.9722 33.1517V32.9397C52.9722 30.7447 51.6217 28.71 49.1692 27.2106C46.8377 25.785 43.754 25 40.4862 25C37.2183 25 34.1345 25.785 31.803 27.2106C29.3506 28.71 28 30.7447 28 32.9397V37.0592C28 39.2543 29.3506 41.289 31.803 42.7883C31.8915 42.8424 31.9833 42.8938 32.074 42.9461C30.3373 44.3129 29.3777 46.0044 29.3334 47.8102L29.3309 52.0602C29.3309 54.2553 30.6815 56.29 33.1339 57.7894C35.4655 59.2149 38.5493 60 41.8171 60C45.0849 60 48.1687 59.2149 50.5004 57.7894C52.9527 56.29 54.3033 54.2553 54.3033 52.0602V49.8057C54.4253 49.7367 54.5468 49.6672 54.6651 49.5948C57.1175 48.0955 58.4681 46.0609 58.4681 43.8658V39.8395H58.4663C58.4668 39.8084 58.4681 39.7775 58.4681 39.7463C58.4681 37.5513 57.1175 35.5166 54.6651 34.0172Z"
            fill="#A96EDD"
          ></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Employee Retention & Productivity Tools",
      description:
        "Reduces financial stress with flexible salary access and self-service HR features, boosting retention and efficiency",
      color: "#F2AB3C",
      bgColor: "#FFE4B9",
      icon: (
        <svg
          width="88"
          height="84"
          viewBox="0 0 88 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pulse"
        >
          <ellipse
            cx="43.6282"
            cy="42.2217"
            rx="43.6282"
            ry="41.5"
            fill="#FFE4B9"
          ></ellipse>
          <path
            d="M43.5003 42.2122L43.0254 41.2498H43.9877L43.5003 42.2122Z"
            fill="#F2AB3C"
          ></path>
          <path
            d="M43.5001 59.9998H32.2526C31.5652 59.9998 30.9529 59.4248 31.0029 58.6374L32.1151 46.5126C32.2401 45.0376 33.2398 43.7751 34.652 43.3001L40.3132 41.4126L42.1878 45.1626L39.7758 55.975C39.6883 56.4 39.8133 56.8374 40.1132 57.1374L42.6127 59.6374C42.8626 59.8749 43.1751 59.9998 43.5001 59.9998Z"
            fill="#F2AB3C"
          ></path>
          <path
            d="M55.9972 58.6376C56.0472 59.4251 55.4348 60.0001 54.7475 60.0001H43.5C43.8249 60.0001 44.1374 59.8751 44.3873 59.6376L46.8868 57.1376C47.1867 56.8376 47.3117 56.4001 47.2242 55.9751L44.8247 45.1504L45.862 43.0628L46.6868 41.4128L52.348 43.3004C53.7601 43.7754 54.7599 45.0379 54.8849 46.5128L55.9972 58.6376Z"
            fill="#F2AB3C"
          ></path>
          <path
            d="M43.4996 25C40.0503 25 37.251 27.8 37.251 31.25C37.251 34.7 39.9754 38.75 43.4996 38.75C47.0238 38.75 49.7482 34.7124 49.7482 31.25C49.7482 27.7876 46.9488 25 43.4996 25Z"
            fill="#F2AB3C"
          ></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Smart Employer Dashboard",
      description:
        "A unified interface for real-time workforce management, combining HR, payroll, attendance, and analytics",
      color: "#2FA62B",
      bgColor: "rgba(47, 166, 43, 0.3)",
      icon: (
        <svg
          width="88"
          height="84"
          viewBox="0 0 88 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pulse"
        >
          <ellipse
            cx="43.6282"
            cy="42.2217"
            rx="43.6282"
            ry="41.5"
            fill="#2FA62B"
            fillOpacity="0.3"
          ></ellipse>
          <path
            d="M42.1259 27.5532V34.1148C42.1259 35.5221 40.9741 36.6679 39.5593 36.6679H28.5667C27.1518 36.6679 26 35.5221 26 34.1148V27.5532C26 26.1458 27.1518 25 28.5667 25H39.5593C40.9741 25 42.1259 26.1458 42.1259 27.5532Z"
            fill="#2FA62B"
          ></path>
          <path
            d="M39.561 39.1843H28.5656C27.1492 39.1843 26 40.3275 26 41.7364V57.0489C26 58.4579 27.1492 59.601 28.5656 59.601H39.561C40.9774 59.601 42.1265 58.4579 42.1265 57.0489V41.7364C42.1265 40.3275 40.9774 39.1843 39.561 39.1843Z"
            fill="#2FA62B"
          ></path>
          <path
            d="M61 50.8852V57.4468C61 58.8541 59.8481 59.9999 58.4333 59.9999H47.4407C46.0259 59.9999 44.874 58.8541 44.874 57.4468V50.8852C44.874 49.4778 46.0259 48.332 47.4407 48.332H58.4333C59.8481 48.332 61 49.4778 61 50.8852Z"
            fill="#2FA62B"
          ></path>
          <path
            d="M58.434 25H47.4386C46.0222 25 44.873 26.1431 44.873 27.5521V42.8646C44.873 44.2736 46.0222 45.4167 47.4386 45.4167H58.434C59.8504 45.4167 60.9996 44.2736 60.9996 42.8646V27.5521C60.9996 26.1431 59.8504 25 58.434 25Z"
            fill="#2FA62B"
          ></path>
        </svg>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false); // ADD THIS LINE
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const maxIndex = Math.max(0, benefits.length - slidesToShow);
  const isDragging = useRef(false);

  // Responsive slidesToShow
  const updateSlidesToShow = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1200) setSlidesToShow(4);
    else if (width >= 1000) setSlidesToShow(3);
    else if (width >= 640) setSlidesToShow(2);
    else setSlidesToShow(1);
  }, []);

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [updateSlidesToShow]);

  // Reset current index when slidesToShow changes
  useEffect(() => {
    // Snap to last allowed index in case the count changed
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [slidesToShow, benefits.length, currentIndex, maxIndex]);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;

      const clampedIndex = Math.max(0, Math.min(index, maxIndex));
      if (clampedIndex !== currentIndex) {
        setIsTransitioning(true);
        setCurrentIndex(clampedIndex);
        setTimeout(() => setIsTransitioning(false), 300);
      }
    },
    [currentIndex, maxIndex, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Touch swipe handlers - FIXED
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches.clientX; // FIXED: was e.touches.clientX
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // Use nextSlide for consistency
      } else {
        prevSlide(); // Use prevSlide for consistency
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        nextSlide();
      } else {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex, nextSlide]);

  if (!benefits.length) {
    return (
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-0 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-64">
        <p className="text-center text-gray-500">No benefits to display</p>
      </div>
    );
  }

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-0 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32 2xl:mt-64">
      <style jsx>{`
        .slider-container {
          overflow: hidden;
          position: relative;
        }
        .slider-track {
          display: flex;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slider-slide {
          flex-shrink: 0;
          width: calc(100% / var(--slides-to-show));
          padding: 0 6px;
          box-sizing: border-box;
        }
        .card-grid {
          display: grid;
          grid-template-rows: auto auto 1fr;
          grid-gap: 0.75em;
          height: 100%;
          min-height: 220px;
          background: #fff;
          border-radius: 1.25rem;
          border: 1px solid #f3f4f6;
          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04);
          padding: 1.4em 1em 1.2em 1em;
          transition: all 0.3s ease;
        }

        .card-grid:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          border-color: #e5e7eb;
        }

        /* Responsive grid spacings and card min-heights */
        @media (min-width: 640px) {
          .card-grid {
            min-height: 260px;
            padding: 1.6em 1.2em 1.4em 1.2em;
          }
        }
        @media (min-width: 1024px) {
          .card-grid {
            min-height: 320px;
            padding: 2em 1.4em 1.9em 1.4em;
          }
        }
        @media (min-width: 1280px) {
          .slider-slide {
            padding: 0 12px;
          }
        }

        /* Icon alignment and size */
        .icon-block {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .icon-container {
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: rgba(249, 249, 249, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .card-grid:hover .icon-container {
          transform: scale(1.1);
        }

        /* Title and description alignment */
        .card-title {
          font-weight: 600;
          font-size: 1.15rem;
          line-height: 1.28;
          text-align: center;
          margin-bottom: 0.1em;
          word-break: break-word;
          color: #1f2937;
        }
        .card-description {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          font-size: 1em;
          line-height: 1.6;
          color: #475569;
          text-align: center;
          min-height: 2.8em;
        }
        @media (min-width: 768px) {
          .card-title {
            font-size: 1.25rem;
            text-align: left;
          }
          .card-description {
            font-size: 1.01rem;
            text-align: left;
            justify-content: flex-start;
          }
          .icon-block {
            justify-content: flex-start;
          }
        }

        /* Responsive font on mobile */
        @media (max-width: 480px) {
          .card-title {
            font-size: 1rem;
          }
          .card-description {
            font-size: 0.89em;
          }
        }

        /* Focus accessibility */
        .card-grid:focus-within {
          outline: 2px solid #f97316;
          outline-offset: 4px;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .card-grid {
            transition: box-shadow 0.3s ease;
          }
          .card-grid:hover {
            transform: none;
          }
          .slider-track {
            transition: none;
          }
        }
      `}</style>

      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <div className="w-full lg:flex-1 mb-6 lg:mb-0 lg:pr-6 xl:pr-8">
            <h3 className="text-orange-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
              BENEFITS
            </h3>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
              <span className="block">Everything You Need to</span>
              <span className="block mt-1 sm:mt-2">
                Support Your Team Efficiently
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl">
              From earned wage access to HRMS tools, AGI Moneey does it all.
            </p>
          </div>
          <div className="flex gap-2 sm:gap-3 md:gap-4 self-end lg:self-auto flex-shrink-0">
            <PrevArrow onClick={prevSlide} disabled={currentIndex === 0} />
            <NextArrow
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
            />
          </div>
        </div>
        {/* Grid-based Custom Slider */}
        <div className="relative pb-6 sm:pb-8 md:pb-10 lg:pb-12">
          <div
            className="slider-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={trackRef}
              className="slider-track"
              style={{
                "--slides-to-show": slidesToShow,
                transform: `translateX(-${
                  (currentIndex * 100) / slidesToShow
                }%)`,
              }}
            >
              {benefits.map((benefit) => (
                <div key={benefit.id} className="slider-slide">
                  <article
                    tabIndex={0}
                    className="card-grid group"
                    aria-label={`Benefit: ${benefit.title}`}
                  >
                    {/* Icon */}
                    <div className="icon-block">
                      <div
                        className="icon-container"
                        style={{ color: benefit.color }}
                      >
                        {benefit.icon}
                      </div>
                    </div>
                    {/* Title */}
                    <h4 className="card-title">{benefit.title}</h4>
                    {/* Description */}
                    <div className="card-description">
                      <p>{benefit.description}</p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSlider;
