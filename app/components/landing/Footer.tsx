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
    <footer className="bg-[#FF5A6E]/5 pt-24 pb-12 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-16">
          
          {/* Logo and Social Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden shadow-sm bg-white">
                <img src="/playstore.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Bumpi Kicks</h3>
            </div>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-10 max-w-sm">
              Smart tools to track, remind, and celebrate every little movement. Because every kick counts.
            </p>

            <div className="flex items-center gap-3 text-[14px] text-gray-600 group">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Mail size={18} className="text-[#FF5A6E]" />
              </div>
              <a href="mailto:diyanshu@speedmvps.com" className="hover:text-[#FF5A6E] transition-colors font-medium">
                diyanshu@speedmvps.com
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
            <div>
              <h4 className="font-bold text-[13px] text-gray-900 mb-8 uppercase tracking-[0.15em]">Product</h4>
              <ul className="space-y-5 text-[14px] text-gray-500">
                <li><a href="#features" className="hover:text-[#FF5A6E] transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-[#FF5A6E] transition-colors">How It Works</a></li>
                <li><a href="#screenshots" className="hover:text-[#FF5A6E] transition-colors">Screenshots</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[13px] text-gray-900 mb-8 uppercase tracking-[0.15em]">Company</h4>
              <ul className="space-y-5 text-[14px] text-gray-500">
                <li><a href="#" className="hover:text-[#FF5A6E] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FF5A6E] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#FF5A6E] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#FF5A6E] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[13px] text-gray-900 mb-8 uppercase tracking-[0.15em]">Support</h4>
              <ul className="space-y-5 text-[14px] text-gray-500">
                <li><a href="#" className="hover:text-[#FF5A6E] transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-[#FF5A6E] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FF5A6E] transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-pink-200/40 flex flex-col items-center gap-3">
          <p className="text-[13px] text-gray-400 font-medium tracking-wide">
            &copy; 2025 Bumpi Kicks. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-[11px] text-[#FF5A6E]/70 font-bold uppercase tracking-[0.25em]">
            Made with <Heart size={12} className="fill-current" /> for moms
          </p>
        </div>
      </div>
    </footer>
  );
}