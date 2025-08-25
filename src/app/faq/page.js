import React from "react";
import FAQSection from "./FAQSection";
import ScrollProgressBar from "../components/ScrollProgressBar";

export const metadata = {
  title: "AGI Moneey - FAQ",
  description:
    "Transform your financial management with AGI Money. Access simplified workforce solutions, seamless salary access, and comprehensive HRMS benefits.",
};

export default function page() {
  return (
    <>
      <ScrollProgressBar />
      <FAQSection />
    </>
  );
}
