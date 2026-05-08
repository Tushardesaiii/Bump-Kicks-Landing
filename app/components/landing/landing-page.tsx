"use client";

import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import Testemonial from "./Testimonials";
import FAQSection  from "./FAQSection";
import { Footer } from "./Footer";
import FeatureGrid from "./Featuregrid";

export function LandingPage() {


  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FeatureGrid />
        <Testemonial/>
         
        <FAQSection />

      </main>
      <Footer />
    </div>
  );
}
