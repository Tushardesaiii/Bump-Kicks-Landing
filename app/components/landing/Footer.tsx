"use client";

import { Heart, Apple, Mail, ShieldCheck } from "lucide-react";

const APP_STORE = "https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727";

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/icon.png" alt="Bumpsy Icon" className="w-10 h-10 rounded-xl" />
              <h3 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-brand-pink to-brand-lavender bg-clip-text text-transparent">Bumpsy</h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-md">
              A calm pregnancy log for kick tracking, movement patterns, contraction timing, 
              and doctor-ready reports. Built for reassurance and emotional connection with your baby.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                <ShieldCheck size={16} className="text-brand-pink" />
                No Data Collection
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-wider">
                <Apple size={16} className="text-brand-lavender" />
                iOS 13+ Support
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-text-main mb-6">Product</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-sm text-text-muted hover:text-brand-pink transition-colors">Features</a></li>
                <li><a href="#why" className="text-sm text-text-muted hover:text-brand-pink transition-colors">Why Bumpsy</a></li>
                <li><a href={APP_STORE} className="text-sm text-text-muted hover:text-brand-pink transition-colors">Download</a></li>
                <li><a href="mailto:support@bumpsy.app" className="text-sm text-text-muted hover:text-brand-pink transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest text-text-main mb-6">Features</h4>
              <ul className="space-y-4">
                <li><a href="#faq" className="text-sm text-text-muted hover:text-brand-pink transition-colors">FAQ</a></li>
                <li><a href="#features" className="text-sm text-text-muted hover:text-brand-pink transition-colors">Kick Logging</a></li>
                <li><a href="#features" className="text-sm text-text-muted hover:text-brand-pink transition-colors">History</a></li>
                <li><a href="#features" className="text-sm text-text-muted hover:text-brand-pink transition-colors">Timer</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-sm uppercase tracking-widest text-text-main mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-text-muted hover:text-brand-pink transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-text-muted hover:text-brand-pink transition-colors">Privacy Policy</a></li>
                <li><a href="#support" className="text-sm text-text-muted hover:text-brand-pink transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-text-muted max-w-2xl leading-relaxed">
            &copy; 2026 Bumpsy. All rights reserved. Not medical advice. If you notice reduced fetal movement 
            or have pregnancy concerns, contact your care provider or local emergency services immediately.
          </p>
          <div className="flex items-center gap-2 text-brand-pink font-bold text-sm">
            Made with <Heart size={16} fill="currentColor" /> for Moms
          </div>
        </div>
      </div>
    </footer>
  );
}
