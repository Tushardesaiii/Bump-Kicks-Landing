"use client";

import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a className="nav-logo" href="#">
          <img src="playstore.png" alt="Bumpsy App Icon" />
          <h2>Bumpsy</h2>
        </a>

        {/* Hamburger Button */}
        <button
          className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a
            className="nav-link"
            href="#features"
            onClick={closeMenu}
          >
            Features
          </a>

          <a
            className="nav-link"
            href="#why"
            onClick={closeMenu}
          >
            Why Bumpsy
          </a>

          <a
            className="nav-link"
            href="#faq"
            onClick={closeMenu}
          >
            FAQ
          </a>

          <a
            className="nav-btn"
            href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}