import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowItWorks from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import CTAsection from "./components/CTAsection";

export default function App() {
  return (
    <>
      <HeroSection />
      <WhySection />
      <HowItWorks />
      <TestimonialsSection />
      <CTAsection />

      {/* next sections will go here… */}
    </>
  );
}
