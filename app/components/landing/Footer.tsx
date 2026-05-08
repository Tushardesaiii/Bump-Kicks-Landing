"use client";

import { Heart, Apple, Mail, ShieldCheck } from "lucide-react";

const APP_STORE = "https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727";

export function Footer() {
  return (
    <footer className="bg-white pt-32 pb-16 border-t border-gray-100 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-pink flex items-center justify-center shadow-lg shadow-brand-pink/20">
                 <img src="playstore.png" alt="Bumpsy" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-brand-pink">Bumpsy</h3>
            </div>
            <p className="text-lg text-text-muted font-normal leading-relaxed mb-10 max-w-md">
              A calm pregnancy log for kick tracking, movement patterns, contraction timing, 
              and doctor-ready reports. Built for reassurance.
            </p>
            
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-text-main mb-8">Product</h4>
              <ul className="space-y-5">
                <li><a href="#features" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Features</a></li>
                <li><a href="#why" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Why Bumpsy</a></li>
                <li><a href={APP_STORE} className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Download</a></li>
                <li><a href="mailto:support@bumpsy.app" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-text-main mb-8">Features</h4>
              <ul className="space-y-5">
                <li><a href="#faq" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">FAQ</a></li>
                <li><a href="#features" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Kick Logging</a></li>
                <li><a href="#features" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">History</a></li>
                <li><a href="#features" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Timer</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black text-xs uppercase tracking-[0.3em] text-text-main mb-8">Legal</h4>
              <ul className="space-y-5">
                <li><a href="#" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Terms</a></li>
                <li><a href="#" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Privacy</a></li>
                <li><a href="#support" className="text-base font-bold text-text-muted hover:text-brand-pink transition-colors">Help</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold text-text-muted max-w-2xl leading-relaxed text-center md:text-left">
            &copy; 2026 Bumpsy. Not medical advice. If you notice reduced fetal movement 
            or have concerns, contact emergency services.
          </p>
          <div className="flex items-center gap-2 text-brand-pink font-bold text-sm uppercase tracking-widest">
            Made with <Heart size={18} fill="currentColor" /> for Moms
          </div>
        </div>
      </div>
    </footer>
  );
}
