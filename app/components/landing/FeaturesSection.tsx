"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  Smartphone, 
  History, 
  BarChart3, 
  Timer, 
  FileDown 
} from "lucide-react";

interface Feature {
  id: string;
  label: string;
  title: string;
  desc: string;
  benefits: string[];
  icon: React.ReactNode;
  img: string;
  accent: string;
  accentBg: string;
}

const APP_STORE = "https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727";

const features: Feature[] = [
  {
    id: "01",
    label: "SIMPLE LOGGING",
    title: "One-Tap Kick Counting",
    desc: "Open Bumpsy, start a session, and tap whenever fetal movement happens. The flow is designed to stay simple and fast.",
    benefits: ["Start a session instantly", "Tap once for each movement", "Minimal setup with low friction", "Built for quick daily use"],
    icon: <Smartphone className="text-[#ff5a75]" size={24} />,
    img: "/assets/app_screenshots/streak.png",
    accent: "text-[#ff5a75]",
    accentBg: "bg-[#ff5a75]",
  },
  {
    id: "02",
    label: "HISTORY",
    title: "Keep a Fetal Journal",
    desc: "Bumpsy stores earlier sessions so you can look back on how fetal movement changed across the day or across pregnancy.",
    benefits: ["See past sessions in one place", "Compare movement across days", "Review activity timelines", "Keep a simple history of logs"],
    icon: <History className="text-[#ff5a75]" size={24} />,
    img: "/assets/app_screenshots/urge.png",
    accent: "text-[#ff5a75]",
    accentBg: "text-[#ff5a75]",
  },
  {
    id: "03",
    label: "PATTERNS",
    title: "Understand Active Times",
    desc: "Track when the baby tends to be more active and notice shifts in movement patterns over time. The focus stays on reassurance.",
    benefits: ["Spot active periods easily", "Compare activity across sessions", "Notice changes in routine", "Keep tracking consistent"],
    icon: <BarChart3 className="text-[#ff5a75]" size={24} />,
    img: "/assets/app_screenshots/debt.png",
    accent: "text-[#ff5a75]",
    accentBg: "bg-[#ff5a75]",
  },
  {
    id: "04",
    label: "PRECISION",
    title: "Contraction Timer",
    desc: "Use Bumpsy later in pregnancy to time contractions and keep a clear record of frequency and duration.",
    benefits: ["Record timing quickly", "Capture duration & frequency", "Labor-ready logs", "Stay organized and calm"],
    icon: <Timer className="text-[#ff5a75]" size={24} />,
    img: "/assets/app_screenshots/community.png",
    accent: "text-[#ff5a75]",
    accentBg: "bg-[#ff5a75]",
  },
  {
    id: "05",
    label: "REPORTS",
    title: "Doctor-Ready Exports",
    desc: "Export kick logs and summaries so appointments feel more informed and your tracking is easy to review together.",
    benefits: ["Export movement data", "Prepare for appointments", "Share clear summaries", "Professional PDF reports"],
    icon: <FileDown className="text-[#ff5a75]" size={24} />,
    img: "/assets/app_screenshots/block-apps.png",
    accent: "text-[#ff5a75]",
    accentBg: "text-[#ff5a75]",
  },
];

const DeviceMockup = ({ img, icon, accentBg }: { img: string; icon: React.ReactNode; accentBg: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative w-full max-w-sm mx-auto perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div ref={cardRef} style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative transition-all">
        <div className={`absolute -inset-10 rounded-full blur-3xl opacity-10 ${accentBg} -z-10`} />
        {/* Fixed "border-10" to standard "border-[10px]" for linting */}
        <img src={img} alt="App Feature" className="w-full h-auto rounded-[3rem]  shadow-2xl relative z-10" />
        <motion.div style={{ translateZ: "50px" }} className="absolute -right-6 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 z-20 hidden md:block">
          {icon}
        </motion.div>
      </motion.div>
    </div>
  );
};

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-white pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        
      
        <div className="space-y-40">
          {features.map((feature, index) => (
            <motion.article 
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              /* Adjusted gap-8 to move image and text closer. Constrained max-w-5xl to center content. */
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content Block */}
              <div className="flex-1 space-y-6 lg:pr-8">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-gray-100 tabular-nums leading-none">{feature.id}</span>
                  <div className={`h-px w-10 ${feature.accentBg} opacity-20`} />
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 leading-[1.1]">
                  {feature.title}
                </h3>
                
                <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-md">
                  {feature.desc}
                </p>

                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`p-1 rounded-full ${feature.accentBg} bg-opacity-10`}>
                        <CheckCircle2 size={16} className={feature.accent} />
                      </div>
                      <span className="font-bold text-gray-700 text-sm md:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <motion.a 
                    href={APP_STORE}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-7 py-3.5 rounded-2xl font-bold shadow-xl transition-all hover:bg-[#ff5a75]"
                  >
                    Explore {feature.label.toLowerCase()}
                    <ChevronRight size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Image Block */}
              <div className="flex-1 w-full flex justify-center">
                <DeviceMockup 
                  img={feature.img} 
                  icon={feature.icon} 
                  accentBg={feature.accentBg} 
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}