"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Timer, Target, History, CheckCircle2, ChevronRight, Play, Activity, Heart, Clock, Trophy, ShieldCheck } from 'lucide-react';

const appleStoreBadge = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
const googlePlayBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

export default function TenInTwoMethodPage() {
  return (
    <div className="bg-white pt-12 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center">
        
        <div className="absolute top-[10%] left-[5%] opacity-[0.03] -z-10">
          <Timer size={120} fill="#FF5A75" className="text-[#FF5A75]" />
        </div>
        
        <div className="md:w-1/2 z-10">
          <nav className="flex items-center space-x-2 text-sm font-medium mb-8">
            <span className="text-[#FF5A75]">Features</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900/80">10 in 2 Method</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            10 in 2 Method <br />
            <span className="text-[#FF5A75]">Guided Sessions</span>
          </h1>

          <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
            The 10 in 2 method is a popular way of tracking fetal movement by monitoring how long it takes to feel 10 movements within a two-hour session. Bumpi Kicks simplifies this experience with guided tracking.
          </p>

          <div className="space-y-10 mb-14">
            <FeatureItem 
              icon={<Play size={20} className="text-[#FF5A75]" />}
              title="Guided Counting Sessions"
              desc="Start a focused tracking session with automatic timers and easy progress visualization."
            />
            <FeatureItem 
              icon={<Activity size={20} className="text-[#FF5A75]" />}
              title="Real-Time Progress"
              desc="Watch your movement count update live as you track your baby’s activity."
            />
            <FeatureItem 
              icon={<History size={20} className="text-[#FF5A75]" />}
              title="Session History"
              desc="Review previous sessions and compare how movement timing changes over time."
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={appleStoreBadge} alt="App Store" className="h-[44px] w-auto" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={googlePlayBadge} alt="Play Store" className="h-[44px] w-auto" />
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2 mt-20 md:mt-0 relative flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] -z-20">
            <div className="absolute top-0 right-0 w-[70%] h-[70%] bg-[#FFF0F2] rounded-full blur-[100px] opacity-80" />
            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[#FFEBEF] rounded-full blur-[80px] opacity-60" />
          </div>

          <div className="relative z-10">
            <img 
              src="/assets/app_screenshots/Kick-counter.png" 
              alt="10 in 2 Method" 
              className="w-72 md:w-[380px] h-auto drop-shadow-[0_30px_60px_rgba(255,90,117,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Unique Visual Widgets Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Master the Method</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Guided sessions with progress indicators and calming visual feedback throughout your count.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 10/10 Progress Tracker Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center">
                <h3 className="font-bold text-slate-800 mb-8 self-start">Current Session</h3>
                <div className="flex gap-2 mb-10">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <motion.div 
                            key={i}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${i <= 6 ? 'bg-[#FF5A75] text-white' : 'bg-pink-50 text-[#FF5A75]'}`}
                        >
                            {i <= 6 ? <CheckCircle2 size={12} /> : i}
                        </motion.div>
                    ))}
                </div>
                <div className="text-center">
                    <p className="text-4xl font-black text-slate-900 tracking-tight">6/10</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Movements Felt</p>
                </div>
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 w-24 h-24 bg-[#FF5A75] text-white rounded-full font-black text-lg shadow-xl shadow-pink-200 border-8 border-pink-50"
                >
                    TAP
                </motion.button>
            </div>

            {/* 2-Hour Countdown Timer Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center">
                <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                        <circle cx="96" cy="96" r="88" stroke="#FFF0F2" strokeWidth="6" fill="transparent" />
                        <motion.circle 
                            cx="96" cy="96" r="88" stroke="#FF5A75" strokeWidth="6" fill="transparent" 
                            strokeDasharray="552"
                            initial={{ strokeDashoffset: 552 }}
                            whileInView={{ strokeDashoffset: 552 * 0.3 }}
                            transition={{ duration: 2 }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Clock size={24} className="text-[#FF5A75] mb-1" />
                        <span className="text-3xl font-black text-slate-900">01:42:15</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time Remaining</span>
                    </div>
                </div>
                <div className="mt-8 flex gap-4">
                    <button className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold text-slate-600">Pause</button>
                    <button className="px-4 py-2 bg-pink-50 rounded-xl text-xs font-bold text-[#FF5A75]">Reset</button>
                </div>
            </div>

            {/* Kick Frequency Graph Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-8">Kick Frequency</h3>
                <div className="space-y-6">
                    {[
                        { label: '0-30 min', val: 2 },
                        { label: '30-60 min', val: 4 },
                        { label: '60-90 min', val: 3 },
                        { label: '90-120 min', val: 1 },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <span className="text-[10px] font-bold text-slate-400 w-16">{item.label}</span>
                            <div className="flex-1 flex gap-1">
                                {Array.from({ length: item.val }).map((_, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        className="w-4 h-4 bg-[#FFC2CD] rounded-sm"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-400">Total Movements</span>
                    <span className="text-lg font-black text-slate-900">10</span>
                </div>
            </div>

            {/* Milestone Indicators Card */}
            <div className="bg-[#111827] p-8 rounded-[2.5rem] text-white lg:col-span-2">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="font-bold text-lg">Session Milestones</h3>
                    <Trophy size={20} className="text-yellow-400" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">First Kick</p>
                        <p className="text-sm font-bold">02:15m in</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Midpoint (5/10)</p>
                        <p className="text-sm font-bold">12:40m in</p>
                    </div>
                    <div className="p-4 bg-emerald-400/10 rounded-2xl border border-emerald-400/20">
                        <p className="text-[10px] font-bold text-emerald-500 uppercase mb-2">Completed</p>
                        <p className="text-sm font-bold text-emerald-400">18:12m Total</p>
                    </div>
                </div>
            </div>

            {/* Session Completion Animation Preview */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-24 h-24 mb-6"
                >
                    <Heart size={48} className="text-[#FF5A75] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="#FF5A75" />
                    <div className="absolute inset-0 border-4 border-dashed border-pink-100 rounded-full" />
                </motion.div>
                <h3 className="font-bold text-slate-800 mb-2">Session Complete!</h3>
                <p className="text-sm text-slate-400">Your session has been saved to history.</p>
                <button className="mt-6 flex items-center gap-2 text-sm font-bold text-[#FF5A75]">
                    View Details <ChevronRight size={16} />
                </button>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-[#FFFBFC] p-16 rounded-[3rem] border border-pink-50">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">A Calm, Focused Routine</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
                Structured counting sessions help create a calm and focused routine while making it easier to monitor movement consistency over time.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-pink-50">
                    <ShieldCheck size={18} className="text-[#FF5A75]" /> Clinical Recommendation
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-pink-50">
                    <Target size={18} className="text-[#FF5A75]" /> Guided Focus
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-pink-50">
                    <Clock size={18} className="text-[#FF5A75]" /> Easy Monitoring
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 mx-6">
        <div className="max-w-7xl mx-auto bg-pink-50/50 rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center border border-pink-100">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Master the Method?</h2>
            <p className="text-slate-500">Simplify your tracking with guided 10-in-2 sessions <br/> designed for clarity and peace of mind.</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={appleStoreBadge} alt="App Store" className="h-[44px] w-auto" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={googlePlayBadge} alt="Play Store" className="h-[44px] w-auto" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="bg-pink-50 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <div>
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{desc}</p>
      </div>
    </div>
  );
}
