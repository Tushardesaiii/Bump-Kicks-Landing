"use client";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="#">
          <img src="playstore.png" alt="Bumpsy App Icon" />
          <h2>Bumpsy</h2>
        </a>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <div className={`nav-menu${menuOpen ? " open" : ""}`} style={menuOpen ? undefined : undefined}>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#why">Why Bumpsy</a>
          <a className="nav-link" href="#faq">FAQ</a>
          <a className="nav-btn" href="https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727" target="_blank" rel="noopener noreferrer">Download App</a>
        </div>
      </div>
    </nav>
  );
}
