import AGIMoneyPlatform from "./components/AGIMoneyPlatform";
import AGIMoneyTabs from "./components/AGIMoneyTabs";
import Banner from "./components/Banner";
import FeatureSectionComponent from "./components/FeatureSectionComponent";
import InfiniteSlider from "./components/InfiniteSlider";
import ProductFeaturesSection from "./components/ProductFeaturesSection";
import ResponsiveSlider from "./components/ResponsiveSlider";
import StatisticsSlider from "./components/StatisticsSlider";
import TestimonialsComponent from "./components/TestimonialsComponent";

export default function Home() {
  return (
    <main>
      <InfiniteSlider />
      <StatisticsSlider />
      <AGIMoneyPlatform />
      <FeatureSectionComponent />
      <ProductFeaturesSection />
      <ResponsiveSlider />
      <AGIMoneyTabs />
      <Banner />
      <TestimonialsComponent />
      {/* <div>Hello From Home page</div> */}
      {/* <Navbar /> */}
      {/* <ProductPage /> */}
      {/* <FAQPage /> */}
      {/* <AboutPage /> */}
      {/* <ContactPage /> */}
    </main>
  );
}
