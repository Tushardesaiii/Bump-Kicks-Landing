"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Clock, FileBarChart, Zap, Calendar, Heart } from "lucide-react";

const items = [
  { 
    title: "Kick Logging", 
    desc: "Start a session instantly and tap for each movement without a complicated setup.", 
    icon: <Zap className="text-brand-pink" size={24} strokeWidth={2.5} />,
    color: "group-hover:bg-brand-pink/10"
  },
  { 
    title: "Session History", 
    desc: "Review past kick sessions and compare movement timelines across days.", 
    icon: <Calendar className="text-brand-lavender" size={24} strokeWidth={2.5} />,
    color: "group-hover:bg-brand-lavender/10"
  },
  { 
    title: "Pattern Tracking", 
    desc: "Spot active periods and notice changes in fetal movement over time.", 
    icon: <Activity className="text-brand-mint" size={24} strokeWidth={2.5} />,
    color: "group-hover:bg-brand-mint/10"
  },
  { 
    title: "Contraction Timer", 
    desc: "Record contraction timing, duration, and frequency for later pregnancy.", 
    icon: <Clock className="text-brand-pink" size={24} strokeWidth={2.5} />,
    color: "group-hover:bg-brand-pink/10"
  },
  { 
    title: "Doctor Reports", 
    desc: "Export movement summaries you can bring to appointments.", 
    icon: <FileBarChart className="text-brand-lavender" size={24} strokeWidth={2.5} />,
    color: "group-hover:bg-brand-lavender/10"
  },
];

export function CompareSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-text-main">
            What <span className="text-brand-pink">Bumpsy</span> Helps You Do
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto font-normal">
            A quick look at the core actions built into the app: logging kicks, 
            reviewing movement, timing contractions, and sharing reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[3rem] bg-gray-50 border border-gray-100 transition-all hover:bg-white hover:premium-shadow hover:border-brand-pink/20"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 transition-all shadow-sm group-hover:scale-110 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-main">{item.title}</h3>
              <p className="text-text-muted text-base font-normal leading-relaxed mb-8">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-brand-pink font-bold text-sm uppercase tracking-widest">
                Learn more <ArrowRight size={16} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
          
          {/* Featured Pillar Card - Solid Color instead of Gradient */}
          <motion.div
            whileHover={{ y: -10 }}
            className="lg:col-span-1 p-10 rounded-[3rem] bg-brand-pink text-white shadow-2xl shadow-brand-pink/30 flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                <Heart size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Bumpsy at a glance</h3>
              <p className="text-white/80 text-base font-normal leading-relaxed mb-10">
                A calm pregnancy log for kick counting, movement awareness, and doctor-friendly reporting.
              </p>
            </div>
            <a 
              href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-5 bg-white text-brand-pink rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              DOWNLOAD FREE <ArrowRight size={20} strokeWidth={3} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
