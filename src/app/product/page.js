import React from "react";
import BannerComponent from "./BannerComponent";
import BenefitsSlider from "./BenefitsSlider";
import SimplifiedWorkforceSolutions from "./SimplifiedWorkforceSolutions";
import AGIMoneyOnboarding from "./AGIMoneyOnboarding";
import SeamlessSalaryAccessFlow from "./SeamlessSalaryAccessFlow";
import AppFeatures from "./AppFeatures";
import HRMSBenefitsSection from "./HRMSBenefitsSection";
import HeroSection from "./HeroSection";
import FAQSection from "./FAQSection";
import Banner from "./Banner";

export default function page() {
  return (
    <div>
      <BannerComponent />
      <BenefitsSlider />
      <SimplifiedWorkforceSolutions />
      <AGIMoneyOnboarding />
      <SeamlessSalaryAccessFlow />
      <AppFeatures />
      <HRMSBenefitsSection />
      <HeroSection />
      <FAQSection />
    </div>
  );
}
