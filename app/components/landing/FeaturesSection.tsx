"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

const APP_STORE = "https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727";

const features = [
  {
    label: "Simple Logging",
    title: "One-Tap Kick Counting",
    desc: "Open Bumpsy, start a session, and tap whenever fetal movement happens. The flow is designed to stay simple, calm, and fast.",
    benefits: ["Start a session instantly","Tap once for each movement","Minimal setup with low friction","Built for quick daily use"],
    btn: "Start Logging",
    img: "/assets/app_screenshots/streak.png",
    alt: "Kick logging screenshot",
    reverse: false,
    color: "bg-brand-pink/5",
  },
  {
    label: "Session History",
    title: "Keep a Fetal Movement Journal",
    desc: "Bumpsy stores earlier sessions so you can look back on how fetal movement changed across the day or across different days of pregnancy.",
    benefits: ["See past sessions in one place","Compare movement across days","Review activity timelines","Keep a simple history of logs"],
    btn: "View History",
    img: "/assets/app_screenshots/urge.png",
    alt: "Session history screenshot",
    reverse: true,
    color: "bg-brand-lavender/5",
  },
  {
    label: "Patterns",
    title: "Understand Active Times",
    desc: "Track when the baby tends to be more active and notice shifts in movement patterns over time. The focus stays on reassurance and awareness.",
    benefits: ["Spot active periods more easily","Compare activity across sessions","Notice changes in routine movement","Keep tracking simple and consistent"],
    btn: "Explore Patterns",
    img: "/assets/app_screenshots/debt.png",
    alt: "Movement pattern screenshot",
    reverse: false,
    color: "bg-brand-mint/5",
  },
  {
    label: "Timer",
    title: "Precision Contraction Tracking",
    desc: "Use Bumpsy later in pregnancy to time contractions and keep a clear record of what you noticed, when it started, and how long it lasted.",
    benefits: ["Record contraction timing quickly","Capture duration and frequency","Keep labor-related notes organized","Useful for later pregnancy monitoring"],
    btn: "Time Contractions",
    img: "/assets/app_screenshots/community.png",
    alt: "Contraction timer screenshot",
    reverse: true,
    color: "bg-brand-pink/5",
  },
  {
    label: "Export",
    title: "Doctor-Ready Reports",
    desc: "Export kick logs and movement summaries so appointments feel more informed and your tracking is easy to review together.",
    benefits: ["Export movement data","Prepare for appointments quickly","Share clear session summaries","Keep reports easy to read"],
    btn: "Share Reports",
    img: "/assets/app_screenshots/block-apps.png",
    alt: "Report sharing screenshot",
    reverse: false,
    color: "bg-brand-lavender/5",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Everything you need for <br />
            <span className="gradient-text">Pregnancy Reassurance</span>
          </h2>
          <p className="text-lg text-text-muted">
            Simple tools designed to help you track kicks, understand patterns, and feel 
            connected to your baby throughout your pregnancy.
          </p>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${f.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 w-full">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-text-muted text-xs font-bold uppercase tracking-widest mb-6">
                  {f.label}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                  {f.title}
                </h3>
                <p className="text-lg text-text-muted mb-8 leading-relaxed">
                  {f.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {f.benefits.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-brand-pink shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-text-muted">{b}</span>
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
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className={`flex-1 w-full relative`}>
                <div className={`absolute inset-0 ${f.color} rounded-[3rem] blur-3xl -z-10 transform scale-110`} />
                <div className="relative group">
                  <img 
                    src={f.img} 
                    alt={f.alt} 
                    className="w-full max-w-[400px] mx-auto rounded-[3rem] shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                  />
                  {/* Glass Card Overlay Effect */}
                  <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
