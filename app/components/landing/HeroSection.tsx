"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Smartphone, Tablet, Monitor, CreditCard } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <section className="relative pt-30 pb-20 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              
              
              <h1 className="text-6xl md:text-8xl  mb-8 leading-[0.95] tracking-tight text-text-main">
                Baby Kick <br />
                Counter <span className="text-brand-pink">Bumpsy</span>
              </h1>
              
              <p className="text-xl text-text-muted mb-12 leading-relaxed max-w-xl font-normal">
                Minimal, stress-free, and made for calm reassurance. Track fetal movements 
                with a single tap and monitor your baby's patterns with ease.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-4">
                <a 
                  href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <img 
                    src="/assets/apple-store.png" 
                    alt="Download on App Store" 
                    className="h-16 w-auto transition-all group-hover:scale-105 active:scale-95 group-hover:shadow-2xl group-hover:shadow-brand-pink/20 rounded-xl"
                  />
                </a>
                
                <div className="flex items-center gap-5 p-4 rounded-3xl bg-white premium-shadow border border-gray-50">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl p-1.5">
                    <img src="/assets/qr-code.png" alt="QR Code" className="w-full h-full object-contain grayscale opacity-80" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-1">SCAN TO OPEN</p>
                    <p className="text-sm font-semibold text-text-main">App Store Listing</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-4 p-5 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-pink shadow-sm shrink-0">
                  <ShieldCheck size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-main">Private & Secure</h4>
                  <p className="text-xs text-text-muted font-semibold">On-device tracking. No data collection.</p>
                </div>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 animate-float">
                <img 
                  src="/assets/3screens.png" 
                  alt="Bumpsy App Screens" 
                  className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
                />
              </div>
              
              {/* Soft decorative background circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-pink/5 rounded-full blur-[120px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-gray-100 bg-white/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatItem icon={<Smartphone className="text-brand-pink" size={24} />} title="iPhone" desc="iOS 13+" />
            <StatItem icon={<Tablet className="text-brand-lavender" size={24} />} title="iPad" desc="iPadOS 13+" />
            <StatItem icon={<Monitor className="text-brand-mint" size={24} />} title="Mac" desc="Apple Silicon" />
            <StatItem icon={<CreditCard className="text-brand-pink" size={24} />} title="Free" desc="with IAP" />
          </div>
        </div>
      </section>
    </>
  );
}

function StatItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-md">
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-text-main text-lg">{title}</h5>
        <p className="text-xs text-text-muted font-semibold tracking-wider">{desc}</p>
      </div>
    </div>
  );
}
