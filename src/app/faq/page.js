import React from "react";
import FAQSection from "./FAQSection";
import ScrollProgressBar from "../components/ScrollProgressBar";

export const metadata = {
  title: "AGI Moneey - Your Financial Solution",
  description:
    "Transform your financial management with AGI Moneey. Access simplified workforce solutions, seamless salary access, and comprehensive HRMS benefits.",
};

export default function page() {
  return (
    <>
      <ScrollProgressBar />
      <FAQSection />
    </>
  );
}
