"use client";

import { motion } from "framer-motion";
import { Sparkles, CloudOff, FileText, Bell, Zap, Heart } from "lucide-react";

const reasons = [
  { icon: <Zap size={20} strokeWidth={2.5} />, text: "One-tap logging" },
  { icon: <CloudOff size={20} strokeWidth={2.5} />, text: "Offline support" },
  { icon: <FileText size={20} strokeWidth={2.5} />, text: "Doctor reports" },
  { icon: <Bell size={20} strokeWidth={2.5} />, text: "Kick reminders" },
  { icon: <Sparkles size={20} strokeWidth={2.5} />, text: "Free download" },
  { icon: <Heart size={20} strokeWidth={2.5} />, text: "Calm & Simple" },
];

export function WhySection() {
  return (
    <section id="why" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-1 text-text-main">
              Why <span className="text-brand-pink">Different?</span>
            </h2>
            
            <div className="relative p-10 md:p-20 rounded-[4rem] bg-white border border-gray-100 premium-shadow text-left">
            
              
              <p className="text-2xl md:text-4xl text-text-main font-bold leading-tight mb-12">
                "Bumpsy is built for calm, one-tap fetal movement tracking, not cluttered pregnancy management."
              </p>
              
              <p className="text-lg text-text-muted font-normal mb-12 leading-relaxed max-w-3xl">
                It focuses on the moments that matter most: logging kicks quickly, 
                reviewing session history, spotting movement patterns, and sharing 
                reports when you want a clearer picture.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {reasons.map((r, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 text-text-main font-bold text-sm transition-all hover:bg-white hover:border-brand-pink/30 hover:text-brand-pink hover:shadow-lg"
                  >
                    <span className="shrink-0">{r.icon}</span>
                    {r.text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
