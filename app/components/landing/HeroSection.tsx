"use client";

import { motion } from "framer-motion";
import { Star, Play, Download, Heart } from "lucide-react";

export function HeroSection() {
  // Official badge URLs from stable CDNs
  const appleStoreBadge = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
  const googlePlayBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

  return (
    <section className="relative pt-24 pb-0 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-175 bg-linear-to-b from-pink-50 via-white to-transparent -z-10" />

      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        
        {/* 1. Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-10"
        >
          <Heart size={16} className="text-[#ff5a75] fill-[#ff5a75]" />
          <span className="text-sm font-semibold text-[#ff5a75] tracking-tight">
            Your daily kick count, made simple
          </span>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.85] tracking-tighter mb-10"
        >
          Never Miss <br /> 
          <span className="relative inline-block">
            a <span className="text-[#ff5a75]">Kick</span>
            {/* Underline Decoration */}
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#ff5a75] opacity-20 rounded-full" />
          </span>
        </motion.h1>

        {/* 3. Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-xl mb-8 font-medium leading-relaxed"
        >
          Smart tools to track, remind, and celebrate <br className="hidden md:block" /> 
          every little movement. Because every kick counts.
        </motion.p>

        {/* 4. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
        >
          <a className="flex items-center gap-2.5 bg-[#ff5a75] text-white px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:shadow-pink-200 transition-all active:scale-95"
             href="http://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727" target="_blank" rel="noopener noreferrer">
            <Download size={20} strokeWidth={3} />
            Get the App
          </a>

         
        </motion.div>

        {/* 5. Rating Component */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8 "
        >
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <div className="flex items-center text-gray-900 gap-2 text-lg">
            <span className="font-black">4.8/5</span>
            <span className="text-gray-400 font-medium">10K+ Reviews</span>
          </div>
        </motion.div>

        {/* 7. Footer App Badges - Using External CDN Assets */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="flex items-center justify-center gap-6  pb-16 w-full"
        >
          <a href="http://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
            <img 
              src={appleStoreBadge} 
              alt="Download on the App Store" 
              className="h-12 w-auto"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
            <img 
              src={googlePlayBadge} 
              alt="Get it on Google Play" 
              className="h-12 w-auto"    />
          </a>
        </motion.div>

        {/* 6. Mockups Container - Uses max-w-6xl (1152px) to avoid lint errors */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="relative items-center w-full max-w-6xl mx-auto px-4 md:px-0"
        >
            <img 
            src="/assets/3screens.png" 
            alt="Bumpi Kicks App Screens" 
            className="w-full h-auto p-12 relative z-20 select-none pointer-events-none drop-shadow-2xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-pink-100 opacity-30 blur-[120px] rounded-full -z-10" />
        </motion.div>

        
      </div>
    </section>
  );
}