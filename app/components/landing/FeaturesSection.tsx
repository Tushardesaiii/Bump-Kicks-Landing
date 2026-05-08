"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

const APP_STORE = "https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727";

const features = [
  {
    label: "SIMPLE LOGGING",
    title: "One-Tap Kick Counting",
    desc: "Open Bumpsy, start a session, and tap whenever fetal movement happens. The flow is designed to stay simple, calm, and fast.",
    benefits: ["Start a session instantly","Tap once for each movement","Minimal setup with low friction","Built for quick daily use"],
    btn: "Start Logging",
    img: "/assets/app_screenshots/streak.png",
    alt: "Kick logging screenshot",
    reverse: false,
    accent: "text-brand-pink",
    bg: "bg-brand-pink-light",
  },
  {
    label: "HISTORY",
    title: "Keep a Fetal Journal",
    desc: "Bumpsy stores earlier sessions so you can look back on how fetal movement changed across the day or across different days of pregnancy.",
    benefits: ["See past sessions in one place","Compare movement across days","Review activity timelines","Keep a simple history of logs"],
    btn: "View History",
    img: "/assets/app_screenshots/urge.png",
    alt: "Session history screenshot",
    reverse: true,
    accent: "text-brand-lavender",
    bg: "bg-purple-50",
  },
  {
    label: "PATTERNS",
    title: "Understand Active Times",
    desc: "Track when the baby tends to be more active and notice shifts in movement patterns over time. The focus stays on reassurance and awareness.",
    benefits: ["Spot active periods more easily","Compare activity across sessions","Notice changes in routine movement","Keep tracking simple and consistent"],
    btn: "Explore Patterns",
    img: "/assets/app_screenshots/debt.png",
    alt: "Movement pattern screenshot",
    reverse: false,
    accent: "text-brand-mint",
    bg: "bg-teal-50",
  },
  {
    label: "PRECISION",
    title: "Contraction Tracking",
    desc: "Use Bumpsy later in pregnancy to time contractions and keep a clear record of what you noticed, when it started, and how long it lasted.",
    benefits: ["Record contraction timing quickly","Capture duration and frequency","Keep labor-related notes organized","Useful for later pregnancy monitoring"],
    btn: "Time Contractions",
    img: "/assets/app_screenshots/community.png",
    alt: "Contraction timer screenshot",
    reverse: true,
    accent: "text-brand-pink",
    bg: "bg-brand-pink-light",
  },
  {
    label: "REPORTS",
    title: "Doctor-Ready Exports",
    desc: "Export kick logs and movement summaries so appointments feel more informed and your tracking is easy to review together.",
    benefits: ["Export movement data","Prepare for appointments quickly","Share clear session summaries","Keep reports easy to read"],
    btn: "Share Reports",
    img: "/assets/app_screenshots/block-apps.png",
    alt: "Report sharing screenshot",
    reverse: false,
    accent: "text-brand-lavender",
    bg: "bg-purple-50",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-text-main">
            Simple tools for <br />
            <span className="text-brand-pink">Reassurance</span>
          </h2>
          <p className="text-xl text-text-muted font-normal max-w-2xl mx-auto">
            Everything you need to track kicks, understand movement patterns, and share 
            pregnancy logs with confidence.
          </p>
        </div>

        <div className="flex flex-col gap-48">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-20 lg:gap-32 ${f.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 w-full">
                <span className={`inline-block font-bold text-xs tracking-[0.3em] mb-6 ${f.accent}`}>
                  {f.label}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-text-main">
                  {f.title}
                </h3>
                <p className="text-xl text-text-muted mb-10 leading-relaxed font-normal">
                  {f.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                  {f.benefits.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={22} className={`${f.accent} shrink-0 mt-0.5`} strokeWidth={2.5} />
                      <span className="text-base font-semibold text-text-main/80">{b}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={APP_STORE} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary group flex items-center justify-center gap-2 max-w-fit"
                >
                  {f.btn}
                  <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="flex-1 w-full relative">
                {/* Clean geometric background shape instead of blurry glow */}
                <div className={`absolute inset-0 ${f.bg} rounded-[4rem] -z-10 transform scale-105 rotate-2`} />
                <div className="relative group">
                  <img 
                    src={f.img} 
                    alt={f.alt} 
                    className="w-full max-w-[420px] mx-auto rounded-[3rem] drop-shadow-[0_50px_100px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
