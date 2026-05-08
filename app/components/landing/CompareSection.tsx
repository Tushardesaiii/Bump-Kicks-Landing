"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Clock, FileBarChart, Zap, Calendar } from "lucide-react";

const items = [
  { 
    title: "Kick Logging", 
    desc: "Start a session instantly and tap for each movement without a complicated setup.", 
    icon: <Zap className="text-brand-pink" size={24} />,
    color: "group-hover:bg-brand-pink/10"
  },
  { 
    title: "Session History", 
    desc: "Review past kick sessions and compare movement timelines across days.", 
    icon: <Calendar className="text-brand-lavender" size={24} />,
    color: "group-hover:bg-brand-lavender/10"
  },
  { 
    title: "Pattern Tracking", 
    desc: "Spot active periods and notice changes in fetal movement over time.", 
    icon: <Activity className="text-brand-mint" size={24} />,
    color: "group-hover:bg-brand-mint/10"
  },
  { 
    title: "Contraction Timer", 
    desc: "Record contraction timing, duration, and frequency for later pregnancy.", 
    icon: <Clock className="text-brand-pink" size={24} />,
    color: "group-hover:bg-brand-pink/10"
  },
  { 
    title: "Doctor Reports", 
    desc: "Export movement summaries you can bring to appointments.", 
    icon: <FileBarChart className="text-brand-lavender" size={24} />,
    color: "group-hover:bg-brand-lavender/10"
  },
];

export function CompareSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">What Bumpsy <span className="gradient-text">Helps You Do</span></h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            A quick look at the core actions built into the app: logging kicks, 
            reviewing movement, timing contractions, and sharing reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-[2rem] bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-brand-pink/5 hover:border-brand-pink/20"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 transition-colors shadow-sm ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-brand-pink font-bold text-sm">
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
          
          {/* Featured Pillar Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="lg:col-span-1 p-8 rounded-[2rem] gradient-bg text-white shadow-xl shadow-brand-pink/20 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <HeartIcon />
              </div>
              <h3 className="text-2xl font-extrabold mb-4">Bumpsy at a glance</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                A calm pregnancy log for kick counting, movement awareness, reminders, and doctor-friendly reporting.
              </p>
            </div>
            <a 
              href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 bg-white text-brand-pink rounded-xl font-bold transition-transform hover:scale-105 active:scale-95"
            >
              Download App <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);
