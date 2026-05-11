"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const pathname = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeHash, setActiveHash] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [mobileFeatureOpen, setMobileFeatureOpen] = useState(false);

  const isActivePath = (href: string) => {
    if (!pathname) return false;

    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isActiveHashLink = (href: string) => pathname === "/" && activeHash === href;

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);

    updateHash();

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsAtTop(currentScrollPos < 10);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateHash);
    };
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
          <Link href="/" className="flex items-center gap-2 cursor-pointer shrink-0">
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
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {/* Features Dropdown */}
            <li className="relative group  cursor-pointer">
              <button
                onMouseEnter={() => setFeaturesDropdownOpen(true)}
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
                className="flex items-center  gap-2 text-[15px] font-medium text-gray-600 hover:text-[#ff5a75] transition-colors"
              >
                Features
                <ChevronDown size={16} className={`transition-transform ${featuresDropdownOpen ? "rotate-180" : ""}`} />
              </button>
            
            {/* Simple Clean Premium Dropdown */}

<div
  onMouseEnter={() => setFeaturesDropdownOpen(true)}
  onMouseLeave={() => setFeaturesDropdownOpen(false)}
  className={`
    absolute left-0 top-full mt-2 w-64
    rounded-2xl border border-[#ff5a6e]/50 bg-white  p-2
    shadow-[0_12px_40px_rgba(0,0,0,0.08)]
    transition-all duration-200 ease-out
    ${
      featuresDropdownOpen
        ? "opacity-100 translate-y-0 visible  "
        : "opacity-0 -translate-y-2 invisible   "
    }
  `}
>
  <div className="flex flex-col gap-1">
    {features.map((feature) => (
      <a
        key={feature.label}
        href={feature.href}
        className="
          flex items-center rounded-xl px-4 py-3
          text-[15px] font-medium text-gray-600
          transition-all duration-200 
          hover:bg-gray-50 hover:text-[#ff5a75]
        "
      >
        {feature.label}
      </a>
    ))}
  </div>
</div>



             
            </li>

            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors ${
                    isActiveHashLink(link.href)
                      ? "text-[#ff5a75]"
                      : "text-gray-600 hover:text-[#ff5a75]"
                  }`}
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
            fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ease-in-out
            ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        >
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute inset-x-0 top-0 px-4 sm:px-6 pb-6 pt-20 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-lg">
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
                        className={`block py-2 px-4 text-[14px] font-medium transition-colors ${
                          isActivePath(feature.href) ? "text-[#ff5a75]" : "text-gray-600 hover:text-[#ff5a75]"
                        }`}
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
                    className={`block py-3 px-4 rounded-2xl text-[15px] font-medium transition-all ${
                      isActiveHashLink(link.href)
                        ? "bg-pink-50 text-[#ff5a75]"
                        : "text-gray-700 hover:bg-pink-50 hover:text-[#ff5a75]"
                    }`}
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
    </>
  );
};