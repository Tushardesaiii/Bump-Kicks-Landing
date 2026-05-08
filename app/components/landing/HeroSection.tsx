"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Smartphone, Tablet, Monitor, CreditCard } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-lavender/5 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-pink"></span>
                </span>
                Every Kick Matters
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
                Baby Kick Counter <br />
                <span className="gradient-text">Bumpsy</span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed max-w-xl">
                Minimal, stress-free, and made for calm reassurance. Track fetal movements, 
                monitor patterns, and generate doctor-ready reports with ease.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                <a 
                  href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <img 
                    src="/assets/apple-store.png" 
                    alt="Download on App Store" 
                    className="h-16 w-auto transition-transform group-hover:scale-105 active:scale-95"
                  />
                </a>
                
                <div className="flex items-center gap-4 p-3 pr-6 rounded-2xl bg-white soft-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-gray-50 rounded-lg p-1">
                    <img src="/assets/qr-code.png" alt="QR Code" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Scan to Open</p>
                    <p className="text-sm font-semibold">Direct App Link</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-brand-pink/10 max-w-md">
                <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Private & Secure</h4>
                  <p className="text-xs text-text-muted">On-device tracking with no declared data collection.</p>
                </div>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 animate-float">
                <img 
                  src="/assets/3screens.png" 
                  alt="Bumpsy App Screens" 
                  className="w-full h-auto drop-shadow-[0_35px_60px_rgba(255,75,139,0.2)]"
                />
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-pink/10 to-brand-lavender/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={<Smartphone className="text-brand-pink" size={20} />} title="iPhone" desc="iOS 13+" />
            <StatItem icon={<Tablet className="text-brand-lavender" size={20} />} title="iPad" desc="iPadOS 13+" />
            <StatItem icon={<Monitor className="text-brand-mint" size={20} />} title="Mac" desc="Apple Silicon" />
            <StatItem icon={<CreditCard className="text-brand-pink" size={20} />} title="Free" desc="with IAP" />
          </div>
        </div>
      </section>
    </>
  );
}

function StatItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 group">
      <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center transition-colors group-hover:bg-brand-pink/5">
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-gray-900">{title}</h5>
        <p className="text-xs text-text-muted font-medium">{desc}</p>
      </div>
    </div>
  );
}
