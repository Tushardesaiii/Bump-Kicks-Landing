"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsAtTop(currentScrollPos < 10);

      setVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    "Features",
    "How It Works",
    "Screenshots",
    "Blog",
    "Pricing",
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-500 ease-in-out
          ${visible ? "translate-y-0" : "-translate-y-full"}
          ${
            isAtTop
              ? "bg-white py-4 md:py-5 border-transparent"
              : "bg-white/90 backdrop-blur-md py-3 border-b border-gray-100 shadow-sm"
          }
        `}
      >
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer shrink-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/playstore.png"
                alt="logo"
                className="rounded-xl object-cover"
              />
            </div>

            <span className="text-[18px] sm:text-[22px] font-bold text-gray-900 tracking-tight whitespace-nowrap">
              Bumpi Kicks
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[15px] font-medium text-gray-600 hover:text-[#ff5a75] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              className="bg-[#ff5a75] text-white px-7 py-3 rounded-full text-[15px] font-bold hover:shadow-lg hover:shadow-pink-100 hover:bg-white hover:text-[#ff5a75] transition-all"
              href="http://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center bg-white text-gray-800 active:scale-95 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${
              mobileMenuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="px-4 sm:px-6 pb-6 pt-4 bg-white/95 backdrop-blur-xl border-t border-gray-100">
            
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 rounded-2xl text-[15px] font-medium text-gray-700 hover:bg-pink-50 hover:text-[#ff5a75] transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="mt-5 flex items-center justify-center bg-[#ff5a75] text-white px-7 py-3.5 rounded-full text-[15px] font-bold hover:shadow-lg hover:shadow-pink-100 transition-all"
              href="http://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Optional overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};