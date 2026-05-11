"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Activity, BarChart3, PieChart, LineChart, Layout, Waves, Heart, CheckCircle2, TrendingUp, Calendar, Info, Map ,Clock } from 'lucide-react';

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
<section className="py-24 bg-[#FCFCFD] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-24">
      <h2 className="text-4xl font-light text-slate-900 mb-6 tracking-tight">Interactive Movement Insights</h2>
      <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed font-light">Beautifully designed analytics focused on trend visualization and movement patterns.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
      {/* Weekly Movement Analytics Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-[3rem] border border-slate-200 col-span-1 lg:col-span-2 relative overflow-hidden"
      >
          <div className="flex justify-between items-center mb-32">
              <h3 className="text-lg font-medium text-slate-800 flex items-center gap-3">
                  <div className="p-2 bg-pink-50 rounded-lg"><LineChart size={18} className="text-[#FF5A75]" /></div>
                  Weekly Trends
              </h3>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-[11px] font-normal text-slate-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-[#FF5A75]" /> Current
                </div>
                <div className="flex items-center gap-2 text-[11px] font-normal text-slate-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-red-200" /> Past
                </div>
              </div>
          </div>
          <div className="h-72 relative flex items-end justify-between px-4 gap-6">
              {[40, 65, 50, 80, 95, 75, 85].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 relative h-full justify-end group">
                      <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "circOut", delay: i * 0.05 }}
                          className="w-full max-w-10 bg-[#FF5A75] rounded-t-lg z-10 hover:bg-red-500 transition-colors"
                      />
                      <motion.div 
                          initial={{ height: 0 }}
                          whileInView={{ height: `${val - 15}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "circOut", delay: i * 0.05 }}
                          className="w-full max-w-[40px] bg-pink-50 rounded-t-2xl absolute bottom-12 opacity-60"
                      />
                      <span className="text-[11px] font-normal text-slate-400">Day {i+1}</span>
                  </div>
              ))}
          </div>
      </motion.div>

      {/* Heatmap Activity Chart Widget */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-[3rem] border border-slate-200 flex flex-col"
      >
          <h3 className="text-lg font-medium text-slate-800 mb-8 flex items-center gap-3">
              <div className="p-2 bg-pink-50 rounded-lg"><Map size={18} className="text-[#FF5A75]" /></div>
              Patterns
          </h3>
          <div className="grid grid-cols-4 gap-4 flex-1">
              {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                      <div className={`aspect-square rounded-2xl transition-all ${[0, 3, 7, 10].includes(i) ? 'bg-[#FF5A75]' : [1, 5, 8].includes(i) ? 'bg-pink-200' : 'bg-pink-50'}`} />
                      <span className="block text-center text-[10px] font-normal text-slate-400">H{i*2}</span>
                  </div>
              ))}
          </div>
          <div className="mt-8 p-5 bg-[#FCFCFD] rounded-[2rem] border border-slate-50 flex items-start gap-4">
              <Info size={16} className="text-[#FF5A75] mt-0.5" />
              <span className="text-[12px] font-light text-slate-600 leading-snug">Baby is usually most active between 8 PM and 10 PM.</span>
          </div>
      </motion.div>

      {/* Average Movement Cards Widget */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
          <div className="bg-black p-10 rounded-[3rem] text-white border border-white/5 relative overflow-hidden">
              <p className="text-[11px] font-normal text-slate-500 uppercase tracking-[0.2em] mb-6">Daily Average</p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-light tracking-tighter">12.5</span>
                <span className="text-sm font-light text-slate-400 tracking-tight">Kicks/Session</span>
              </div>
              <div className="mt-10 flex items-center gap-3">
                  <div className="p-1.5 bg-emerald-500/10 rounded-lg"><TrendingUp size={14} className="text-emerald-400" /></div>
                  <span className="text-[11px] text-emerald-400 font-normal tracking-wide">+15% vs last week</span>

                  
              </div>
          </div>
        
      </motion.div>

      {/* Timeline Comparison Graph Widget */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white p-10 rounded-[3rem] border border-slate-100 lg:col-span-2"
      >
          <h3 className="text-lg font-medium text-slate-800 mb-10 flex items-center gap-3">
              <div className="p-2 bg-pink-50 rounded-lg"><BarChart3 size={18} className="text-[#FF5A75]" /></div>
              Activity Comparison
          </h3>
          <div className="space-y-8">
              {[
                  { day: 'Today', val: 100, active: true },
                  { day: 'Yesterday', val: 75, active: false },
                  { day: 'Wed, May 08', val: 90, active: true },
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-8">
                      <span className="text-[13px] font-light text-slate-500 w-28 tracking-tight">{item.day}</span>
                      <div className="flex-1 h-3 bg-[#FCFCFD] border border-slate-50 rounded-full overflow-hidden">
                          <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.val}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "circOut" }}
                              className={`h-full ${item.active ? 'bg-[#FF5A75]' : 'bg-pink-200'}`}
                          />
                      </div>
                      <span className={`text-[13px] font-light w-8 text-right ${item.active ? 'text-slate-900' : 'text-slate-400'}`}>
                        {item.val/10}
                      </span>
                  </div>
              ))}
          </div>
      </motion.div>

    </div>
  </div>
</section>


      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-[#FFFBFC] p-16 rounded-[3rem] border border-pink-50">
            <h2 className="text-3xl font-medium mb-8 text-slate-900">Understand Baby's Unique Rhythm</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
                Every baby develops unique movement habits. Tracking these patterns over time helps moms feel more aware, connected, and informed throughout pregnancy.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4 text-left p-6 bg-white rounded-[2rem]  border border-pink-50">
                    <div className="bg-pink-50 p-4 rounded-2xl text-[#FF5A75]"><TrendingUp /></div>
                    <div>
                        <p className="font-medium text-slate-800">Stay Aware</p>
                        <p className="text-xs text-slate-400">Notice small changes instantly</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-left p-6 bg-white rounded-[2rem]  border border-pink-50">
                    <div className="bg-pink-50 p-4 rounded-2xl text-[#FF5A75]"><Heart /></div>
                    <div>
                        <p className="font-medium text-slate-800">Connected</p>
                        <p className="text-xs text-slate-400">Deepen your bond through data</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-left p-6 bg-white rounded-[2rem]  border border-pink-50">
                    <div className="bg-pink-50 p-4 rounded-2xl text-[#FF5A75]"><Activity /></div>
                    <div>
                        <p className="font-medium text-slate-800">Informed</p>
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
            <h2 className="text-3xl font-medium mb-4">Discover Baby's Rhythm</h2>
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
