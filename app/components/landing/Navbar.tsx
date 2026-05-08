"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Scrolled state for styling
    setScrolled(latest > 20);

    // Visibility state (hide on scroll down, show on scroll up)
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container-custom">
        <div className={`glass rounded-3xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-xl shadow-brand-pink/5 border-white/50" : "border-transparent"
        }`}>
          {/* Logo */}
          <a className="flex items-center gap-3 no-underline group" href="#">
            <div className="w-10 h-10 rounded-xl bg-brand-pink flex items-center justify-center shadow-lg shadow-brand-pink/20 transition-transform group-hover:scale-110">
              <img 
                src="playstore.png" 
                alt="Bumpsy" 
                className="w-full h-full object-cover rounded-xl" 
              />
            </div>
            <h2 className="text-xl md:text-2xl font-black tracking-tight text-brand-pink m-0">
              Bumpsy
            </h2>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-sm font-bold text-text-muted hover:text-brand-pink transition-colors" href="#features">Features</a>
            <a className="text-sm font-bold text-text-muted hover:text-brand-pink transition-colors" href="#why">Why Bumpsy</a>
            <a className="text-sm font-bold text-text-muted hover:text-brand-pink transition-colors" href="#faq">FAQ</a>
            <a 
              className="btn-primary py-2.5 px-6 text-sm" 
              href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Free
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 p-6 md:hidden"
          >
            <div className="glass rounded-[2rem] p-8 flex flex-col gap-6 shadow-2xl">
              <a className="text-lg font-bold text-text-muted hover:text-brand-pink" href="#features" onClick={closeMenu}>Features</a>
              <a className="text-lg font-bold text-text-muted hover:text-brand-pink" href="#why" onClick={closeMenu}>Why Bumpsy</a>
              <a className="text-lg font-bold text-text-muted hover:text-brand-pink" href="#faq" onClick={closeMenu}>FAQ</a>
              <a 
                className="btn-primary text-center" 
                href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
                onClick={closeMenu}
              >
                Download Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}