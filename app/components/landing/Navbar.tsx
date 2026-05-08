"use client";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a className="nav-logo" href="#">
          <img src="/assets/icon.png" alt="Nogambling App Icon" />
          <h2>Nogambling</h2>
        </a>
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
        <div className={`nav-menu${menuOpen ? " open" : ""}`} style={menuOpen ? undefined : undefined}>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="https://nogambling.app/blog.html">Blog</a>
          <a className="nav-btn" href="https://apps.apple.com/rs/app/no-gambling-stop-gambling-now/id6751584830" target="_blank" rel="noopener noreferrer">Download App</a>
        </div>
      </div>
    </nav>
  );
}
