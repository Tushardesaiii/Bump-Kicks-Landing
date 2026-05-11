"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [mobileFeatureOpen, setMobileFeatureOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsAtTop(currentScrollPos < 10);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const features = [
    { label: "Baby Kick Counter", href: "/features/baby-kick-counter",  },
    { label: "Pregnancy Reminders", href: "/features/pregnancy-reminders", },
    { label: "Doctor Report", href: "/features/doctor-report",  },
    { label: "Kick Counting", href: "/features/kick-counting",  },
    { label: "10 in 2 Method", href: "/features/10-in-2-method",  },
    { label: "Fetal Movement Tracker", href: "/features/fetal-movement-tracker",  }
  ];

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Screenshots", href: "#screenshots" },
    { label: "Blog", href: "#" }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between">
          
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
            {/* Features Dropdown */}
            <li className="relative group cursor-pointer">
              <button
                onMouseEnter={() => setFeaturesDropdownOpen(true)}
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
                className="flex items-center gap-2 text-[15px] font-medium text-gray-600 hover:text-[#ff5a75] transition-colors"
              >
                Features
                <ChevronDown size={16} className={`transition-transform ${featuresDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div
                onMouseEnter={() => setFeaturesDropdownOpen(true)}
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
                className={`absolute left-0 mt-3 w-96 bg-white rounded-3xl border border-white/60 overflow-hidden transition-all duration-300 transform origin-top ${
                  featuresDropdownOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
                }`}
                style={{
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
                }}
              >
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {features.map((feature) => (
                      <a
                        key={feature.label}
                        href={feature.href}
                        className="group/item px-4 py-4 rounded-xl hover:bg-white/50 hover:backdrop-blur-xl transition-all duration-200"
                      >
                        <span className="text-[13px] font-semibold text-gray-900 group-hover/item:text-[#ff5a75] transition-colors block leading-tight">
                          {feature.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-gray-600 hover:text-[#ff5a75] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              className="px-7 py-3 rounded-full text-[15px]  bg-[#ff5a75] text-white hover:bg-white hover:text-[#ff5a75] hover:border-[#ff5a75] border-2"
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
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${mobileMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-4 sm:px-6 pb-6 pt-4 bg-white/95 backdrop-blur-xl border-t border-gray-100">
            <ul className="flex flex-col gap-2">
              {/* Mobile Features Dropdown */}
              <li>
                <button
                  onClick={() => setMobileFeatureOpen(!mobileFeatureOpen)}
                  className="w-full text-left py-3 px-4 rounded-2xl text-[15px] font-medium text-gray-700 hover:bg-pink-50 hover:text-[#ff5a75] transition-all flex items-center justify-between"
                >
                  Features
                  <ChevronDown size={16} className={`transition-transform ${mobileFeatureOpen ? "rotate-180" : ""}`} />
                </button>

                {mobileFeatureOpen && (
                  <div className="mt-2 ml-4 border-l-2 border-pink-100 space-y-1">
                    {features.map((feature) => (
                      <a
                        key={feature.label}
                        href={feature.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileFeatureOpen(false);
                        }}
                        className="block py-2 px-4 text-[14px] font-medium text-gray-600 hover:text-[#ff5a75] transition-colors"
                      >
                        {feature.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>

              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 rounded-2xl text-[15px] font-medium text-gray-700 hover:bg-pink-50 hover:text-[#ff5a75] transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="mt-5 flex items-center justify-center bg-[#ff5a75] text-white px-7 py-3.5 rounded-full text-[15px] font-bold transition-all"
              href="http://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};