"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Activity, BarChart3, PieChart, LineChart, Layout, Waves, Heart, CheckCircle2, TrendingUp, Calendar, Info, Map } from 'lucide-react';

const appleStoreBadge = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
const googlePlayBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

export default function FetalMovementTrackerPage() {
  return (
    <div className="bg-white pt-12 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center">
        
        <div className="absolute top-[10%] left-[5%] opacity-[0.03] -z-10">
          <Waves size={120} fill="#FF5A75" className="text-[#FF5A75]" />
        </div>
        
        <div className="md:w-1/2 z-10">
          <nav className="flex items-center space-x-2 text-sm font-medium mb-8">
            <span className="text-[#FF5A75]">Features</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900/80">Fetal Movement Tracker</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Fetal Movement Tracker <br />
            <span className="text-[#FF5A75]">Recognize Patterns</span>
          </h1>

          <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
            Monitor your baby’s activity with detailed fetal movement tracking designed to help you recognize patterns, trends, and daily changes with confidence. Beautiful visual insights to understand your baby’s unique rhythm.
          </p>

          <div className="space-y-10 mb-14">
            <FeatureItem 
              icon={<TrendingUp size={20} className="text-[#FF5A75]" />}
              title="Movement Trend Analysis"
              desc="Visualize daily and weekly activity levels through interactive charts and movement summaries."
            />
            <FeatureItem 
              icon={<Calendar size={20} className="text-[#FF5A75]" />}
              title="Pattern Recognition"
              desc="Understand when your baby is most active with timeline-based insights and historical tracking."
            />
            <FeatureItem 
              icon={<Layout size={20} className="text-[#FF5A75]" />}
              title="Personalized Insights"
              desc="See average kick counts, active periods, and movement consistency in a simple dashboard."
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
              alt="Fetal Movement Tracker" 
              className="w-72 md:w-[380px] h-auto drop-shadow-[0_30px_60px_rgba(255,90,117,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Unique UI Showcase Section */}
      <section className="py-24 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Interactive Movement Insights</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Beautifully designed analytics focused on trend visualization and movement patterns.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Weekly Movement Analytics Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm col-span-1 lg:col-span-2">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <LineChart size={18} className="text-[#FF5A75]" /> Weekly Trends
                    </h3>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase">
                            <span className="w-2 h-2 rounded-full bg-[#FF5A75]" /> Current Week
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase">
                            <span className="w-2 h-2 rounded-full bg-pink-100" /> Past Week
                        </div>
                    </div>
                </div>
                <div className="h-48 relative flex items-end justify-between">
                    {/* Simplified Line Chart Representation using Bars for clarity */}
                    {[40, 65, 50, 80, 95, 75, 85].map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-3 relative h-full justify-end">
                            <motion.div 
                                initial={{ height: 0 }}
                                whileInView={{ height: `${val * 1.5}px` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className="w-8 bg-[#FF5A75] rounded-t-lg z-10"
                            />
                            <motion.div 
                                initial={{ height: 0 }}
                                whileInView={{ height: `${(val - 15) * 1.5}px` }}
                                transition={{ duration: 1.2, delay: i * 0.05 }}
                                className="w-8 bg-pink-50 rounded-t-lg absolute bottom-11 opacity-60"
                            />
                            <span className="text-[10px] font-bold text-slate-400">Day {i+1}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Average Movement Cards Widget */}
            <div className="space-y-6">
                <div className="bg-[#111827] p-6 rounded-[2rem] text-white shadow-xl">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Daily Average</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black">12.5</span>
                        <span className="text-xs text-slate-400">Kicks/Session</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[10px] text-emerald-400 font-bold">
                        <TrendingUp size={12} /> +15% from last week
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Longest Session</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-slate-900">42</span>
                        <span className="text-xs text-slate-400">Minutes</span>
                    </div>
                    <p className="mt-4 text-[10px] text-slate-400 font-bold">Recorded yesterday at 8:15 PM</p>
                </div>
            </div>

            {/* Heatmap Activity Chart Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Map size={18} className="text-[#FF5A75]" /> Pattern Recognition
                </h3>
                <div className="grid grid-cols-4 gap-3">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <div className={`aspect-square rounded-xl ${[0, 3, 7, 10].includes(i) ? 'bg-[#FF5A75]' : [1, 5, 8].includes(i) ? 'bg-pink-200' : 'bg-pink-50'}`} />
                            <span className="block text-center text-[8px] font-bold text-slate-400">H{i*2}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-pink-50/50 rounded-2xl flex items-center gap-3">
                    <Info size={14} className="text-[#FF5A75]" />
                    <span className="text-[10px] font-bold text-slate-600 leading-tight">Baby is usually most active between 8 PM and 10 PM.</span>
                </div>
            </div>

            {/* Timeline Comparison Graph Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm lg:col-span-2">
                <h3 className="font-bold text-slate-800 mb-8">Daily Activity Comparison</h3>
                <div className="space-y-6">
                    {[
                        { day: 'Today', val: 100, active: true },
                        { day: 'Yesterday', val: 75, active: false },
                        { day: 'Wed, May 08', val: 90, active: false },
                        { day: 'Tue, May 07', val: 60, active: false },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-xs font-bold text-slate-500 w-24">{item.day}</span>
                            <div className="flex-1 h-3 bg-slate-50 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.val}%` }}
                                    className={`h-full ${item.active ? 'bg-[#FF5A75]' : 'bg-slate-200'}`}
                                />
                            </div>
                            <span className={`text-xs font-black ${item.active ? 'text-slate-900' : 'text-slate-400'}`}>{item.val/10}</span>
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
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Understand Baby's Unique Rhythm</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
                Every baby develops unique movement habits. Tracking these patterns over time helps moms feel more aware, connected, and informed throughout pregnancy.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4 text-left p-6 bg-white rounded-[2rem] shadow-sm border border-pink-50">
                    <div className="bg-pink-50 p-4 rounded-2xl text-[#FF5A75]"><TrendingUp /></div>
                    <div>
                        <p className="font-bold text-slate-800">Stay Aware</p>
                        <p className="text-xs text-slate-400">Notice small changes instantly</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-left p-6 bg-white rounded-[2rem] shadow-sm border border-pink-50">
                    <div className="bg-pink-50 p-4 rounded-2xl text-[#FF5A75]"><Heart /></div>
                    <div>
                        <p className="font-bold text-slate-800">Connected</p>
                        <p className="text-xs text-slate-400">Deepen your bond through data</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-left p-6 bg-white rounded-[2rem] shadow-sm border border-pink-50">
                    <div className="bg-pink-50 p-4 rounded-2xl text-[#FF5A75]"><Activity /></div>
                    <div>
                        <p className="font-bold text-slate-800">Informed</p>
                        <p className="text-xs text-slate-400">Know exactly what's normal</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 mx-6">
        <div className="max-w-7xl mx-auto bg-pink-50/50 rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center border border-pink-100">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Discover Baby's Rhythm</h2>
            <p className="text-slate-500">Join thousands of moms using beautiful analytics <br/> to track their baby's unique movement trends.</p>
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
