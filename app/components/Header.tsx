"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Link href="/" className="brand" onClick={closeMenu}>
        <div className="brand-logo">AL</div>

        <div className="brand-text">
          <strong>LAWRENCE</strong>
          <span>PORTFOLIO</span>
        </div>
      </Link>

      <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/about" onClick={closeMenu}>
          About
        </Link>

        <Link href="/gallery" onClick={closeMenu}>
          Gallery
        </Link>

        <Link href="/portfolio" onClick={closeMenu}>
          Portfolio
        </Link>

        <Link href="/projects" onClick={closeMenu}>
          Projects
        </Link>
      </nav>

      <Link href="/#contact" className="header-contact">
        Contact Me
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
    </header>
  );
}