"use client";

import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";

import Testemonial from "./Testimonials";
import FAQSection  from "./FAQSection";
import { Footer } from "./Footer";
import FeatureGrid from "./Featuregrid";

export function LandingPage() {


  return (
    <div>
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
       
        <section id="features">
          <FeatureGrid />
        </section>
        <section id="how-it-works">
          <Testemonial/>
        </section>
         
        <section id="faq">
          <FAQSection />
        </section>

      </main>
      <Footer />
    </div>
  );
}
