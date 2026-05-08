"use client";

import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { FAQSection } from "./FAQSection";
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
        {/* testemonial */}   
        <FAQSection />

      </main>
      <Footer />
    </div>
  );
}
