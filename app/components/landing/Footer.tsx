"use client";

import { Mail, Heart } from "lucide-react";

const APP_STORE = "https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727";

// Custom TikTok Icon as it's not in standard Lucide
const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-5 h-5"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#FF5A6E]/8 pt-20 pb-10 border-t border-pink-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
          {/* Logo and Social Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/playstore.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Bumpi Kicks</h3>
            </div>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-xs">
              Smart tools to track, remind, and celebrate every little movement. Because every kick counts.
            </p>

            <div className="flex items-center gap-2 text-[14px] text-gray-600 group">
              <Mail size={18} className="text-brand-pink" />
              <a href="mailto:diyanshu@speedmvps.com" className="hover:text-brand-pink transition-colors font-medium">
                diyanshu@speedmvps.com
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-6 uppercase tracking-wider">Product</h4>
              <ul className="space-y-4 text-[14px] text-gray-600">
                <li><a href="#features" className="hover:text-brand-pink transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-brand-pink transition-colors">How It Works</a></li>
                <li><a href="#screenshots" className="hover:text-brand-pink transition-colors">Screenshots</a></li>
              
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-6 uppercase tracking-wider">Company</h4>
              <ul className="space-y-4 text-[14px] text-gray-600">
                <li><a href="#" className="hover:text-brand-pink transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-pink transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-brand-pink transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-pink transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900 mb-6 uppercase tracking-wider">Support</h4>
              <ul className="space-y-4 text-[14px] text-gray-600">
                <li><a href="#" className="hover:text-brand-pink transition-colors">Terms of Use </a></li>
                <li><a href="#" className="hover:text-brand-pink transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-pink transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-pink-200/50 flex flex-col items-center gap-2">
          <p className="text-[13px] text-gray-500 font-medium">
            &copy; 2025 Bumpi Kicks. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-[12px] text-brand-pink/80 font-semibold uppercase tracking-widest">
            Made with <Heart size={12} className="fill-current" /> for moms
          </p>
        </div>
      </div>
    </footer>
  );
}