"use client";

import { Heart, Check, ArrowRight, Download, Target } from "lucide-react";
import Link from "next/link";

export default function TenInTwoMethodPage() {
  const benefits = [
    "Built-in guide for the 10 kicks in 2 hours method",
    "Automatic tracking against this clinical standard",
    "Alerts when you've reached 10 kicks",
    "Rest periods built into the method",
    "Doctor-recommended counting technique"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#FF5A6E]/5 to-white pt-20 pb-12 border-b border-pink-100">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-[#FF5A6E] hover:text-[#FF5A6E]/80 mb-8 font-semibold">
            <ArrowRight size={16} className="rotate-180" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-200 mb-6">
              <Heart size={16} className="fill-[#FF5A6E] text-[#FF5A6E]" />
              <span className="text-sm font-semibold text-[#FF5A6E] uppercase tracking-wider">Feature Deep Dive</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              10 in 2 Method
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Implement the clinically-recommended method of counting 10 fetal movements in 2 hours with Bumpi Kicks.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5A6E] text-white rounded-lg font-semibold hover:bg-[#FF5A6E]/90 transition-colors">
                <Download size={18} />
                Download App
              </a>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-[#FF5A6E] transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-gray-900 mb-12">Method Features</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 p-6 bg-pink-50/50 rounded-xl border border-pink-100 hover:border-[#FF5A6E] transition-colors">
                <Target size={24} className="text-[#FF5A6E] flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-[#FFFBFC]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-gray-900 mb-12">How the 10 in 2 Method Works</h2>
          
          <div className="space-y-6">
            {[
              { num: 1, title: "Start Your Session", desc: "Begin tracking when you're ready to monitor movements" },
              { num: 2, title: "Count 10 Kicks", desc: "Each kick, roll, or movement counts toward your goal" },
              { num: 3, title: "Track Your Time", desc: "App automatically times how long it takes to reach 10" },
              { num: 4, title: "Get Your Result", desc: "See if you reached 10 kicks within the 2-hour window" }
            ].map((step) => (
              <div key={step.num} className="flex gap-6 items-start p-8 bg-white rounded-xl border border-gray-100 hover:border-[#FF5A6E] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#FF5A6E] text-white flex items-center justify-center font-black flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-gradient-to-r from-[#FF5A6E]/10 to-pink-50 rounded-2xl p-12 border border-pink-200 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Follow the Recommended Method</h2>
          <p className="text-gray-600 mb-8 text-lg">Clinically-backed counting technique built into the app</p>
          <a href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5A6E] text-white rounded-lg font-bold text-lg hover:bg-[#FF5A6E]/90 transition-colors">
            Download Bumpi Kicks
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
