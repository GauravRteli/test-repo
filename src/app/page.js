import AGIMoneyPlatform from "./components/AGIMoneyPlatform";
import AGIMoneyTabs from "./components/AGIMoneyTabs";
import Banner from "./components/Banner";
import FeatureSectionComponent from "./components/FeatureSectionComponent";
import InfiniteSlider from "./components/InfiniteSlider";
import ProductFeaturesSection from "./components/ProductFeaturesSection";
import ParallaxSlideOver from "./components/ParallaxSlideOver";
import ScrollProgressBar from "./components/ScrollProgressBar";
import StatisticsSlider from "./components/StatisticsSlider";
import TestimonialsComponent from "./components/TestimonialsComponent";
import FAQSection from "./product/FAQSection";
import ResponsiveSlider from "./components/ResponsiveSlider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <ScrollProgressBar />
      <InfiniteSlider />
      <StatisticsSlider />
      <AGIMoneyPlatform />
      <FeatureSectionComponent />
      <ProductFeaturesSection />
      <div className="hidden lg:block">
        <ParallaxSlideOver />
      </div>
      <div className="block lg:hidden">
        <ResponsiveSlider />
      </div>
      <AGIMoneyTabs />
      <Banner />
      <TestimonialsComponent />
      <FAQSection />
    </main>
  );
}
