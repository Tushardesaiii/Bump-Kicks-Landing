 "use client";

import { motion } from 'framer-motion';
import React from 'react';
import { FileText, FileDown, Share2, BarChart3, CheckCircle2, History, ClipboardList, Download, Printer, Table, Layout, ArrowRight } from 'lucide-react';

const appleStoreBadge = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
const googlePlayBadge = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";

export default function DoctorReportPage() {
  return (
    <div className="bg-white pt-12 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center">
        
        <div className="absolute top-[10%] left-[5%] opacity-[0.03] -z-10">
          <FileText size={120} fill="#FF5A75" className="text-[#FF5A75]" />
        </div>
        
        <div className="md:w-1/2 z-10">
          <nav className="flex items-center space-x-2 text-sm font-medium mb-8">
            <span className="text-[#FF5A75]">Features</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900/80">Doctor Report</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Doctor Report <br />
            <span className="text-[#FF5A75]">Ready for Your OB</span>
          </h1>

          <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
            Generate clean and organized pregnancy movement reports that can be shared directly with your doctor. Bumpi Kicks transforms your daily sessions into clear visual summaries for better clinical discussions.
          </p>

          <div className="space-y-10 mb-14">
            <FeatureItem 
              icon={<FileDown size={20} className="text-[#FF5A75]" />}
              title="Exportable Reports"
              desc="Download beautifully formatted summaries containing kick counts, session durations, and movement trends."
            />
            <FeatureItem 
              icon={<BarChart3 size={20} className="text-[#FF5A75]" />}
              title="Weekly Activity Overview"
              desc="View charts and summaries that make it easier to understand long-term movement consistency."
            />
            <FeatureItem 
              icon={<Share2 size={20} className="text-[#FF5A75]" />}
              title="Share With Your Doctor"
              desc="Quickly share movement history during appointments for more informed discussions and reassurance."
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
              alt="Doctor Report" 
              className="w-72 md:w-[380px] h-auto drop-shadow-[0_30px_60px_rgba(255,90,117,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* Unique UI Showcase Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-medium text-slate-900 mb-4">Doctor-Ready Reporting</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Transform your data into professional summaries mentioned across modern kick tracking apps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* PDF Preview Card */}
            <div className="bg-white p-6  rounded-[2.5rem] border border-slate-200  relative overflow-hidden group">
              
                <div className="absolute inset-0  opacity-100 transition-opacity flex items-center justify-center z-20">
                    <button className=" text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2">
                         <FileText className='text-red-400' size={48} />
                    </button>
                </div>
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        
                        <span className="text-sm font-semibold text-slate-800">weekly_report.pdf</span>
                    </div>
                    <span className="text-[10px] text-slate-400">2.4 MB</span>
                </div>
                <div className="space-y-3 opacity-60">
                    <div className="h-4 bg-slate-50 rounded-lg w-full" />
                    <div className="h-4 bg-slate-50 rounded-lg w-3/4" />
                    <div className="h-32 bg-slate-50 rounded-2xl w-full flex items-center justify-center">
                          </div>
                </div>
            </div>

            {/* Session History Table */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200  lg:col-span-2">
                <div className="flex justify-between items-center mb-8">
                    <h3 className=" text-slate-800 flex items-center gap-4 font-medium">
                        <Table size={18} className="text-[#FF5A75] " />Recent Sessions
                    </h3>
                    <button className="text-xs font-bold text-[#FF5A75] hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] uppercase tracking-widest text-slate-400 font-bold border-b border-slate-50">
                                <th className="pb-4">Date</th>
                                <th className="pb-4">Duration</th>
                                <th className="pb-4">Count</th>
                                <th className="pb-4">Intensity</th>
                                <th className="pb-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {[
                                { date: 'May 10', dur: '18m', count: 12, int: 'Strong' },
                                { date: 'May 09', dur: '24m', count: 10, int: 'Normal' },
                                { date: 'May 08', dur: '15m', count: 10, int: 'Active' },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-slate-50/50 group">
                                    <td className="py-4  text-slate-700">{row.date}</td>
                                    <td className="py-4 text-slate-500">{row.dur}</td>
                                    <td className="py-4  text-slate-900">{row.count}</td>
                                    <td className="py-4">
                                        <span className="px-3 py-1 bg-pink-50 text-[#FF5A75] rounded-full text-[10px] font-semibold">{row.int}</span>
                                    </td>
                                    <td className="py-4 text-right">
                                        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors"><Download size={14} className="text-slate-400" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Medical Summary Card */}
            <div className="bg-black p-8 rounded-[2.5rem] text-white ">
                <div className="flex justify-between items-start mb-10">
                    <div>
                        <h3 className="font-medium text-lg mb-1">Medical Summary</h3>
                        <p className="text-slate-400 text-[10px] uppercase tracking-widest">May 01 - May 10</p>
                    </div>
                    <div className="bg-white/10 p-2 rounded-xl"><ClipboardList size={18} /></div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Avg Count</p>
                        <p className="text-2xl font-black">11.4</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Consistency</p>
                        <p className="text-2xl font-black">98%</p>
                    </div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span className="text-xs font-medium text-slate-300">Within normal range</span>
                </div>
            </div>

            {/* Movement Heatmap Visual */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200  overflow-hidden">
                <h3 className="font-medium text-slate-800 mb-6">Movement Heatmap</h3>
                <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 28 }).map((_, i) => {
                        const opacity = [0.1, 0.3, 0.6, 0.9, 0.4, 0.2, 0.5, 0.8, 1, 0.7][i % 10];
                        return (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.01 }}
                                className="aspect-square rounded-md"
                                style={{ backgroundColor: `rgba(255, 90, 117, ${opacity})` }}
                            />
                        );
                    })}
                </div>
                <div className="flex justify-between mt-4 text-[9px] font-bold text-slate-400 uppercase">
                    <span>Less Active</span>
                    <span>Most Active</span>
                </div>
            </div>

            {/* Export Success Animation Card */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 flex flex-col items-center justify-center text-center">
                <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6"
                >
                    <CheckCircle2 size={40} />
                </motion.div>
                <h3 className="font-medium text-slate-800 mb-2">Export Success</h3>
                <p className="text-sm text-slate-400 mb-6">Your medical report has been generated and is ready to share.</p>
                <div className="flex gap-2">
                    <button className="p-3 bg-slate-50 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"><Printer size={18} /></button>
                    <button className="px-6 py-3 bg-[#FF5A75] text-white rounded-xl font-semibold text-sm">Send to Doctor</button>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="bg-[#FFFBFC] p-16 rounded-[3rem] border border-pink-50">
            <h2 className="text-3xl font-medium mb-8 text-slate-900">Be Prepared for Every Appointment</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
                Keeping a structured movement history helps expecting moms feel more informed and prepared during prenatal appointments while making important information easier to discuss.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-10">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center  border border-pink-50 text-[#FF5A75]"><ClipboardList /></div>
                    <span className="text-xs  text-slate-600 tracking-widest">Informed Discussions</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-pink-50 text-[#FF5A75]"><Layout /></div>
                    <span className="text-xs  text-slate-600 tracking-widest">Structured History</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center  border border-pink-50 text-[#FF5A75]"><Share2 /></div>
                    <span className="text-xs  text-slate-600  tracking-widest">Easy Sharing</span>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-24 mx-6">
        <div className="max-w-7xl mx-auto bg-pink-50/50 rounded-[2.5rem] p-12 md:p-20 flex flex-col md:flex-row justify-between items-center border border-pink-100">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Empower Your Health Care</h2>
            <p className="text-slate-500">Download Bumpi Kicks and start generating <br/> professional reports for your next appointment.</p>
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
