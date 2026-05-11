"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Heart, BarChart3, Target, Bell, AlarmClock, Check, Smile, Star, Plus, Zap, History, Timer } from 'lucide-react';

const appleStoreBadge = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
const googlePlayBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

export default function BabyKickCounterPage() {
  return (
    <div className="bg-white pt-12 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center">
        
        <div className="absolute top-[10%] left-[5%] opacity-[0.03] -z-10">
          <Star size={120} fill="#FF5A75" className="text-[#FF5A75]" />
        </div>
        
        <div className="md:w-1/2 z-10">
          <nav className="flex items-center space-x-2 text-sm font-medium mb-8">
            <span className="text-[#FF5A75]">Features</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900/80">Baby Kick Counter</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Baby Kick Counter <br />
            <span className="text-[#FF5A75]">Connected Movements</span>
          </h1>

          <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
            Track every flutter, roll, and kick with a beautifully simple baby kick counter designed for expecting moms. Bumpi Kicks helps you stay connected with your baby’s daily movement patterns through one-tap counting, real-time tracking, and easy-to-read insights.
          </p>

          <div className="space-y-10 mb-14">
            <FeatureItem 
              icon={<Zap size={20} className="text-[#FF5A75]" />}
              title="One-Tap Kick Logging"
              desc="Start counting instantly with a single tap interface designed for quick and distraction-free tracking."
            />
            <FeatureItem 
              icon={<History size={20} className="text-[#FF5A75]" />}
              title="Daily Movement History"
              desc="Review all your sessions with organized timelines and daily summaries to understand patterns over time."
            />
            <FeatureItem 
              icon={<Timer size={20} className="text-[#FF5A75]" />}
              title="Smart Session Tracking"
              desc="Monitor how long it takes to reach your daily kick goals with automatic session timing."
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={appleStoreBadge} alt="App Store" className="h-11 w-auto" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={googlePlayBadge} alt="Play Store" className="h-11 w-auto" />
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
              alt="Baby Kick Counter" 
              className="w-72 md:w-95 h-auto drop-shadow-[0_30px_60px_rgba(255,90,117,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Visual UI Showcase - Unique Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Visualize Every Kick</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Modern pregnancy tracking focused on simplicity and reassurance through beautiful data visualization.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Circular Kick Counter Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center">
               <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                 <svg className="w-full h-full -rotate-90">
                   <circle cx="80" cy="80" r="70" stroke="#FFF0F2" strokeWidth="12" fill="transparent" />
                   <motion.circle 
                    cx="80" cy="80" r="70" stroke="#FF5A75" strokeWidth="12" fill="transparent" 
                    strokeDasharray="440"
                    initial={{ strokeDashoffset: 440 }}
                    whileInView={{ strokeDashoffset: 440 - (440 * 0.7) }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                   />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-slate-900">7</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">of 10</span>
                 </div>
               </div>
               <h3 className="font-bold text-slate-800 mb-2">Goal Completion</h3>
               <p className="text-sm text-slate-400 text-center">Real-time progress towards your daily kick goal.</p>
            </div>

            {/* Most Active Time Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-slate-800">Most Active Time</h3>
                    <div className="bg-pink-50 p-2 rounded-xl text-[#FF5A75]"><AlarmClock size={18} /></div>
                </div>
                <div className="space-y-4">
                    {[
                        { time: 'Morning', val: 30 },
                        { time: 'Afternoon', val: 45 },
                        { time: 'Evening', val: 90 },
                        { time: 'Night', val: 65 },
                    ].map((item, idx) => (
                        <div key={idx} className="space-y-1">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-slate-400">
                                <span>{item.time}</span>
                                <span>{item.val}%</span>
                            </div>
                            <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.val}%` }}
                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                    className={`h-full ${idx === 2 ? 'bg-[#FF5A75]' : 'bg-[#FFC2CD]'}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Daily Kick Streak Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-slate-800 mb-2">Daily Streak</h3>
                    <p className="text-sm text-slate-400 mb-6">You've been consistent for 12 days straight!</p>
                </div>
                <div className="flex justify-between items-end gap-2 px-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i < 7 ? 'bg-[#FF5A75] text-white' : 'bg-slate-50 text-slate-300'}`}>
                                <Check size={16} strokeWidth={3} />
                            </div>
                            <span className="text-[10px] font-bold text-slate-400">D{i}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-500">
                            <Star fill="currentColor" size={20} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">Perfect Week!</span>
                    </div>
                </div>
            </div>

            {/* Session Duration Analytics */}
            <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden relative">
                <h3 className="font-bold text-slate-800 mb-8">Session Duration Analytics</h3>
                <div className="h-48 flex items-end justify-between gap-4">
                    {[18, 22, 15, 28, 20, 25, 19, 30, 24, 21].map((h, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h * 3}px` }}
                            transition={{ duration: 0.8, delay: idx * 0.05 }}
                            className="flex-1 bg-[#FFC2CD] rounded-t-lg hover:bg-[#FF5A75] transition-colors relative group"
                        >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {h}m
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>10 Sessions Ago</span>
                    <span>Latest Session</span>
                </div>
            </div>

            {/* Timeline Activity Chart Small */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-6">Activity Timeline</h3>
                <div className="space-y-6">
                    {[
                        { icon: <Heart size={14} />, title: "Session Start", time: "10:15 AM" },
                        { icon: <Plus size={14} />, title: "3 Kicks Felt", time: "10:18 AM" },
                        { icon: <Plus size={14} />, title: "Strong Movement", time: "10:22 AM" },
                        { icon: <Target size={14} />, title: "Goal Reached", time: "10:30 AM" },
                    ].map((event, idx) => (
                        <div key={idx} className="flex items-center gap-4 relative">
                            {idx < 3 && <div className="absolute left-3.25 top-6 w-0.5 h-8 bg-slate-50" />}
                            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${idx === 3 ? 'bg-[#FF5A75] text-white' : 'bg-pink-50 text-[#FF5A75]'}`}>
                                {event.icon}
                            </div>
                            <div className="flex-1">
                                <p className="text-xs font-bold text-slate-800">{event.title}</p>
                                <p className="text-[10px] text-slate-400">{event.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-[#FFFBFC] p-16 rounded-[3rem] border border-pink-50">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Nurture Your Daily Ritual</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
                Tracking daily movements helps many moms feel more reassured and connected during pregnancy. Bumpi Kicks turns kick counting into a calm daily ritual that helps you notice your baby’s natural activity rhythm.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
                <span className="px-6 py-2 bg-white rounded-full text-sm font-bold text-[#FF5A75] border border-pink-100">Peace of Mind</span>
                <span className="px-6 py-2 bg-white rounded-full text-sm font-bold text-[#FF5A75] border border-pink-100 ">Stronger Bonding</span>
                <span className="px-6 py-2 bg-white rounded-full text-sm font-bold text-[#FF5A75] border border-pink-100 ">Daily Ritual</span>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 mx-6">
        <div className="max-w-7xl mx-auto bg-pink-50/50 rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center border border-pink-100">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-slate-500">Join thousands of moms who trust Bumpi Kicks <br/> for their daily movement ritual.</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={appleStoreBadge} alt="App Store" className="h-11 w-auto" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={googlePlayBadge} alt="Play Store" className="h-11 w-auto" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Sub-component
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
