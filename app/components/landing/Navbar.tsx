"use client"; // Required if using Next.js App Router

import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // 1. Check if we are at the very top of the page
      setIsAtTop(currentScrollPos < 10);

      // 2. Logic: Show if scrolling up, hide if scrolling down
      // Always show if at the very top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav 
      className={`
        fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}
        ${isAtTop ? 'bg-white py-5 border-transparent' : 'bg-white/90 backdrop-blur-md py-3 border-b border-gray-100 shadow-sm'}
      `}
    >
      <div className="max-w-360 mx-auto px-6 lg:px-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9  bg-opacity-10 rounded-xl flex items-center justify-center">
            <img src="/playstore.png" alt="logo" className=" rounded-xl" />
          </div>
          <span className="text-[22px] font-bold text-gray-900 tracking-tight">
            Bumpi Kicks
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {['Features', 'How It Works', 'Screenshots', 'Blog', 'Pricing'].map((link) => (
            <li key={link}>
              <a href="#" className="text-[15px] font-medium text-gray-600 hover:text-[#ff5a75] transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-8">
          <button className="text-[15px] font-semibold text-gray-900">Log in</button>
          <button className="bg-[#ff5a75] text-white px-7 py-3 rounded-full text-[15px] font-bold hover:shadow-lg hover:shadow-pink-100 transition-all">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};