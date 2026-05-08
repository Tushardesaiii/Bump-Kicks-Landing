"use client";

import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { WhySection } from "./WhySection";
import { CompareSection } from "./CompareSection";
import { DownloadCTA, SupportSection } from "./DownloadSupport";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";
import { useScrollAnimations } from "./useScrollAnimations";

export function LandingPage() {
  useScrollAnimations();

  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhySection />
        <CompareSection />
        <DownloadCTA />
        <SupportSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
