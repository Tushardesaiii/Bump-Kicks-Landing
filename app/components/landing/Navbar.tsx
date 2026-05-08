"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container-custom">
        <div className={`glass rounded-2xl md:rounded-[2rem] px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-brand-pink/5" : ""
        }`}>
          {/* Logo */}
          <a className="flex items-center gap-3 no-underline group" href="#">
            <img 
              src="playstore.png" 
              alt="Bumpsy App Icon" 
              className="w-10 h-10 rounded-xl shadow-sm transition-transform group-hover:scale-110" 
            />
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-brand-pink to-brand-lavender bg-clip-text text-transparent m-0">
              Bumpsy
            </h2>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-semibold text-text-muted hover:text-brand-pink transition-colors" href="#features">Features</a>
            <a className="text-sm font-semibold text-text-muted hover:text-brand-pink transition-colors" href="#why">Why Bumpsy</a>
            <a className="text-sm font-semibold text-text-muted hover:text-brand-pink transition-colors" href="#faq">FAQ</a>
            <a 
              className="btn-primary py-2.5 px-6 text-sm" 
              href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-text-muted hover:text-brand-pink transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 md:hidden"
          >
            <div className="glass rounded-3xl p-8 flex flex-col gap-6 shadow-2xl">
              <a className="text-lg font-bold text-text-muted hover:text-brand-pink" href="#features" onClick={closeMenu}>Features</a>
              <a className="text-lg font-bold text-text-muted hover:text-brand-pink" href="#why" onClick={closeMenu}>Why Bumpsy</a>
              <a className="text-lg font-bold text-text-muted hover:text-brand-pink" href="#faq" onClick={closeMenu}>FAQ</a>
              <a 
                className="btn-primary text-center" 
                href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
                onClick={closeMenu}
              >
                Download Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}