"use client";

import {motion} from 'framer-motion';
import React from 'react';
import { Heart, BarChart3, Target, Bell, MousePointerClick, TrendingUp, ShieldCheck } from 'lucide-react';

 const appleStoreBadge = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
  const googlePlayBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";


export default function KickCountingPage()


{
  return (
    <div className="bg-white pt-12 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col md:flex-row items-center overflow-hidden">
        <div className="md:w-1/2 z-10">
          <nav className="flex items-center space-x-2 text-sm text-[#ff5A6e] mb-6 font-medium">
            <span>Features</span>
            <span>/</span>
            <span className="text-black/80">Kick Counting</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Kick Counting <span className="text-[#ff5a75] whitespace-nowrap">Track Every Little Move</span>
          </h1>
          <p className="text-slate-500 text-lg mb-10 max-w-md">
            Count, track, and celebrate every kick your baby makes. Bumpi Kicks helps you stay connected with your little one's activity and growth.
          </p>

          <div className="space-y-6 mb-10">
            <FeatureItem 
              icon={<Heart className="text-[#ff5a75]" size={20} />}
              title="Accurate Kick Tracking"
              desc={<>
                Easily count kicks with a simple tap.<br/>
                Our smart algorithm helps filter out accidental taps.
              </>}
            />
            <FeatureItem 
              icon={<BarChart3 className="text-[#ff5a75]" size={20} />}
              title="Daily & Weekly Insights"
              desc={<>See patterns and trends in your baby's movements<br/>with clear charts and reports.</>}
            />
            <FeatureItem 
              icon={<Bell className="text-[#ff5a75]" size={20} />}
              title="Set Goals & Get Reminders"
              desc={<>Set daily kick goals and get gentle reminders<br/>to help you stay consistent.</>}
            />
          </div>

  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-start justify-start gap-6 w-full pl-1 md:pl-2"
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

        </div>

        {/* Phone Mockup Placeholder */}
        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-pink-50 rounded-full blur-3xl -z-10 opacity-60" />
            <img 
              src="\assets\app_screenshots\Kick-counter.png" 
              alt="Mobile App View" 
              className="w-72 md:w-80"
            />
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">How Kick Counting Works</h2>
          <p className="text-slate-400 mb-16">Simple, intuitive, and designed for moms-to-be.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepItem number="1" icon={<MousePointerClick />} title="Tap to Count" desc="Tap the button each time you feel a kick." />
            <StepItem number="2" icon={<TrendingUp />} title="Track Progress" desc="Watch your daily count grow in real-time." />
            <StepItem number="3" icon={<Target />} title="Reach Your Goal" desc="Stay motivated with goal tracking." />
            <StepItem number="4" icon={<BarChart3 />} title="Review Insights" desc="Check reports to see trends and patterns." />
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-pink-50/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Understand Your Baby's <br/><span className="text-[#ff5a75]">Unique Patterns</span></h2>
            <p className="text-slate-500 mb-8">Every baby is unique. Bumpi Kicks helps you identify what's normal for your baby by showing detailed insights into kick patterns over time.</p>
            <ul className="space-y-4">
              {['Best times of day', 'Daily averages', 'Weekly trends', 'Compare and stay informed'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                  <div className="bg-pink-100 p-1 rounded-full"><Heart size={14} className="fill-[#ff5a75] text-[#ff5a75]" /></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Chart Card Placeholder */}
          <div className="md:w-1/2 w-full bg-white p-8 rounded-3xl shadow-sm border border-pink-100">
             <div className="flex justify-between items-end mb-8">
                <div>
                   <p className="text-sm text-slate-400 font-medium">Kick Activity</p>
                   <p className="text-4xl font-bold text-slate-800">264</p>
                   <p className="text-xs text-slate-400">Total Kicks</p>
                </div>
                <select className="text-xs bg-slate-50 border-none rounded-lg p-2 outline-none">
                  <option>This Week</option>
                </select>
             </div>
             {/* Simple CSS Bar Chart Representation */}
             <div className="flex items-end justify-between h-40 gap-2">
                {[40, 60, 55, 30, 85, 45, 75].map((h, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div style={{ height: `${h}%` }} className={`w-full rounded-t-lg ${i === 4 ? 'bg-[#ff5a75]' : 'bg-pink-200'}`} />
                    <span className="text-[10px] mt-2 text-slate-400 uppercase">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Why Moms Love Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-16">Why Moms Love Kick Counting</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard icon={<ShieldCheck className="text-[#ff5a75]" />} title="Peace of Mind" desc="Knowing your baby is active brings comfort and reassurance." />
          <ValueCard icon={<Heart className="text-[#ff5a75]" />} title="Stronger Connection" desc="Track and connect with your baby's unique rhythm." />
          <ValueCard icon={<Target className="text-[#ff5a75]" />} title="Backed by Experts" desc="Designed with input from healthcare professionals." />
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 mx-6">
        <div className="max-w-7xl mx-auto bg-pink-50/50 rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center border border-pink-100">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Start Counting Today</h2>
            <p className="text-slate-500">Join thousands of moms who trust Bumpi Kicks <br/> to track their baby's movements.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <AppBadge store="apple" dark />
            <AppBadge store="google" dark />
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components for cleaner structure
function FeatureItem({ icon, title, desc }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-pink-50 p-3 rounded-2xl">{icon}</div>
      <div>
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed break-words whitespace-normal">{desc}</p>
      </div>
    </div>
  );
}

function StepItem({ icon, title, desc, number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-pink-50 text-[#ff5a75] rounded-2xl flex items-center justify-center">
          {React.cloneElement(icon, { size: 28 })}
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ff5a75] text-white rounded-full text-xs flex items-center justify-center border-4 border-white font-bold">
          {number}
        </div>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-3xl border border-slate-100 hover:border-pink-200 transition-colors bg-white text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-pink-50 p-4 rounded-full">{icon}</div>
      </div>
      <h3 className="font-bold mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function AppBadge({ store, dark }) {
    const isApple = store === 'apple';
    return (
      <div className={`${dark ? 'bg-black' : 'bg-black'} text-white px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity min-w-[140px]`}>
        <div className="text-xl">{isApple ? '' : '▶'}</div>
        <div className="text-left leading-none">
          <p className="text-[10px] uppercase">Download on the</p>
          <p className="text-sm font-bold">{isApple ? 'App Store' : 'Google Play'}</p>
        </div>
      </div>
    );
}