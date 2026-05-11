"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { Bell, Calendar, Droplets, CheckCircle2, ListChecks, Clock, Activity, Heart, BellRing, Smartphone, Check } from 'lucide-react';

const appleStoreBadge = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
const googlePlayBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

const Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];

export default function PregnancyRemindersPage() {
  return (
    <div className="bg-white pt-12 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center">
        
        <div className="absolute top-[10%] left-[5%] opacity-[0.03] -z-10">
          <Bell size={120} fill="#FF5A75" className="text-[#FF5A75]" />
        </div>
        
        <div className="md:w-1/2 z-10">
          <nav className="flex items-center space-x-2 text-sm font-medium mb-8">
            <span className="text-[#FF5A75]">Features</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900/80">Pregnancy Reminders</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Pregnancy Reminders <br />
            <span className="text-[#FF5A75]">Support Your Routine</span>
          </h1>

          <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
            Never miss an important pregnancy routine with gentle reminders designed to support your daily wellness and baby tracking habits. Stay consistent with kick counting, hydration, and self-care.
          </p>

          <div className="space-y-10 mb-14">
            <FeatureItem 
              icon={<BellRing size={20} className="text-[#FF5A75]" />}
              title="Smart Daily Reminders"
              desc="Receive soft and calming reminders customized around your preferred schedule and pregnancy routine."
            />
            <FeatureItem 
              icon={<Activity size={20} className="text-[#FF5A75]" />}
              title="Kick Count Notifications"
              desc="Stay consistent with fetal movement tracking by getting timely nudges for your daily sessions."
            />
            <FeatureItem 
              icon={<Droplets size={20} className="text-[#FF5A75]" />}
              title="Wellness Tracking"
              desc="Track hydration, medications, sleep, and appointments with organized reminder cards."
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
              alt="Pregnancy Reminders" 
              className="w-72 md:w-[380px] h-auto drop-shadow-[0_30px_60px_rgba(255,90,117,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Unique UI Widgets Section */}
      <section className="py-24 bg-slate-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-medium text-slate-900 mb-4">Stay Consistent with Ease</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Organized reminders help reduce stress while creating a healthier daily rhythm for both mom and baby.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Notification Preview Cards */}
            <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className=" text-slate-800 mb-6 flex items-center gap-2">
                  Notification Center
                </h3>
                <div className="space-y-4">
                    <motion.div 
                        whileHover={{ x: 5 }}
                        className="p-4 bg-pink-50/50 rounded-2xl border border-pink-100 flex gap-3 items-start"
                    >
                        <div className="bg-[#FF5A75] p-2 rounded-lg text-white"><Heart size={14} /></div>
                        <div>
                            <p className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-1">Kick Counting</p>
                            <p className="text-xs text-slate-500 leading-tight">Time for your morning kick count session!</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        whileHover={{ x: 5 }}
                        className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100 flex gap-3 items-start"
                    >
                        <div className="bg-blue-400 p-2 rounded-lg text-white"><Droplets size={14} /></div>
                        <div>
                            <p className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-1">Hydration</p>
                            <p className="text-xs text-slate-500 leading-tight">Hydration check: It's time for a glass of water.</p>
                        </div>
                    </motion.div>
                    <motion.div 
                        whileHover={{ x: 5 }}
                        className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100 flex gap-3 items-start"
                    >
                        <div className="bg-purple-400 p-2 rounded-lg text-white"><CheckCircle2 size={14} /></div>
                        <div>
                            <p className="text-xs font-medium text-slate-900 uppercase tracking-widest mb-1">Daily Vitamin</p>
                            <p className="text-xs text-slate-500 leading-tight">Don't forget your prenatal vitamins today.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Water Intake Tracker Widget */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center">
                <h3 className="font-bold text-slate-800 mb-8 self-start">Hydration Tracker</h3>
                <div className="flex gap-3 mb-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className={`w-3 h-12 rounded-full ${i <= 5 ? 'bg-blue-400' : 'bg-blue-100'}`} />
                    ))}
                </div>
                <div className="text-center">
                    <p className="text-3xl font-black text-slate-900 tracking-tight">5/8</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Glasses Today</p>
                </div>
                <button className="mt-8 w-full py-3 bg-blue-50 text-blue-500 rounded-2xl font-bold text-sm hover:bg-blue-100 transition-colors">Log Water +</button>
            </div>

            {/* Pregnancy Checklist UI */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <ListChecks size={18} className="text-[#FF5A75]" /> Daily Wellness
                </h3>
                <div className="space-y-5">
                    {[
                        { label: "Kick Counting", done: true },
                        { label: "Vitamins Taken", done: true },
                        { label: "Light Stretch", done: false },
                        { label: "Read a Book", done: false },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                            <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${item.done ? 'bg-[#FF5A75] border-[#FF5A75] text-white' : 'border-slate-300 bg-slate-50 group-hover:border-pink-200'}`}>
                                {item.done && <Check size={14} strokeWidth={3} />}
                            </div>
                            <span className={`text-sm font-medium ${item.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Daily Routine Timeline */}
            <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="font-bold text-slate-800">Your Daily Routine</h3>
                    <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#FF5A75]" />
                        <span className="w-3 h-3 rounded-full bg-blue-400" />
                        <span className="w-3 h-3 rounded-full bg-purple-400" />
                    </div>
                </div>
                <div className="relative h-24 bg-slate-50 rounded-3xl p-6 flex items-center">
                    <div className="absolute left-0 right-0 h-1 bg-slate-200 mx-6" />
                    <div className="relative w-full flex justify-between">
                        {[
                            { time: '8 AM', type: 'pink' },
                            { time: '11 AM', type: 'blue' },
                            { time: '2 PM', type: 'pink' },
                            { time: '5 PM', type: 'purple' },
                            { time: '8 PM', type: 'pink' },
                            { time: '11 PM', type: 'blue' },
                            { time: '7 AM', type: 'Purple' },
                            { time: '8 AM', type: 'pink' },
                            { time: '9 PM', type: 'blue' },
                            { time: '10 PM', type: 'purple' },

                        ].map((node, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 relative">
                                <div className={`w-4 h-4 rounded-full border-4 border-white shadow-sm z-10 
                                    ${node.type === 'pink' ? 'bg-[#FF5A75]' : node.type === 'blue' ? 'bg-blue-400' : 'bg-purple-400'}`} />
                                <span className="text-[10px] font-bold text-slate-400 absolute top-7">{node.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Weekly Consistency Graph */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-8">Weekly Consistency</h3>
                <div className="h-40 flex items-end justify-between px-2">
                    {[100, 85, 95, 99, 100, 70, 90, 100].map((val, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 flex-1">
                            <motion.div 
                                initial={{ height: 0 }}
                                whileInView={{ height: `${val * 1.2}px` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className={`w-3 rounded-full ${val === 100 ? 'bg-[#FF5A75]' : 'bg-pink-100'}`}
                            />
                            <span className="text-[10px] font-bold text-slate-400">{Days[i]}</span>
                        </div>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-[#FFFBFC] p-16 rounded-[3rem] border border-pink-50 relative overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-pink-50/50 rounded-full blur-3xl opacity-50" />
            <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-8 text-slate-900">Find Your Peaceful Rhythm</h2>
                <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
                    Pregnancy routines can become overwhelming. Organized reminders help reduce stress while creating a healthier and more structured daily rhythm for both mom and baby.
                </p>
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white px-5 py-3 rounded-2xl shadow-sm border border-pink-50">
                        <CheckCircle2 size={16} className="text-[#FF5A75]" /> Reduced Stress
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white px-5 py-3 rounded-2xl shadow-sm border border-pink-50">
                        <CheckCircle2 size={16} className="text-[#FF5A75]" /> Healthier Habits
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white px-5 py-3 rounded-2xl shadow-sm border border-pink-50">
                        <CheckCircle2 size={16} className="text-[#FF5A75]" /> Structured Routine
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 mx-6">
        <div className="max-w-7xl mx-auto bg-pink-50/50 rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center border border-pink-100">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Start Your Routine Today</h2>
            <p className="text-slate-500">Simplify your pregnancy with gentle reminders <br/> and personalized wellness tracking.</p>
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
