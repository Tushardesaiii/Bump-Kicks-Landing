"use client";

import { motion } from "framer-motion";
import { Sparkles, CloudOff, FileText, Bell, Zap, Heart } from "lucide-react";

const reasons = [
  { icon: <Zap size={20} />, text: "One-tap logging" },
  { icon: <CloudOff size={20} />, text: "Offline support" },
  { icon: <FileText size={20} />, text: "Doctor reports" },
  { icon: <Bell size={20} />, text: "Kick reminders" },
  { icon: <Sparkles size={20} />, text: "Free download" },
  { icon: <Heart size={20} />, text: "Calm & Simple" },
];

export function WhySection() {
  return (
    <section id="why" className="section-padding bg-brand-bg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-pink/10 rounded-full blur-[100px]" />
      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Why Bumpsy is <span className="gradient-text">Different</span></h2>
            
            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-white soft-shadow border border-gray-100 text-left">
              <div className="absolute top-0 left-12 -translate-y-1/2 w-16 h-16 bg-brand-pink rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-pink/20">
                <Sparkles size={32} />
              </div>
              
              <p className="text-xl md:text-2xl text-text-main font-medium leading-relaxed italic">
                "Bumpsy is built for calm, one-tap fetal movement tracking, not cluttered pregnancy management. It focuses on the moments that matter most: logging kicks quickly, reviewing session history, spotting movement patterns, and sharing reports when you want a clearer picture."
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                {reasons.map((r, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-text-muted font-bold text-sm transition-colors hover:bg-brand-pink/5 hover:border-brand-pink/20 hover:text-brand-pink"
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
