import HeroCarousel from "./components/HeroCarousel";
import MasterStylistsSection from "./components/MasterStylistSection";
import SolutionsSection from "./components/SolutionsSection";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";
import VideoSection from "./components/VideoSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProcessSection from "./components/ProcessSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroCarousel />
      <MasterStylistsSection />
      <SolutionsSection />
      <ServicesSection />
      <WhyUsSection />
      <VideoSection />
      <TestimonialsSection />
      <ProcessSection />
    </main>
  );
}