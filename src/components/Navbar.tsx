"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav id="navbar" className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <img 
              src="/logo-devsummit.png" 
              alt="DEVSUMMIT 2026" 
              className="nav-logo-img"
              fetchPriority="high"
            />
          </a>
          <div className="nav-links">
            <ul className="nav-menu">
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#themes" className="nav-link">Themes</a></li>
              <li><a href="#mentors" className="nav-link">Mentors</a></li>
              <li><a href="#sponsors" className="nav-link">Sponsors</a></li>
              <li><a href="#faq" className="nav-link">FAQ</a></li>
            </ul>
          </div>
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            {!mobileMenuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" id="menuIcon">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" id="closeIcon">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobileMenu">
        <ul className="mobile-menu-list">
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#themes" onClick={closeMobileMenu}>Themes</a></li>
          <li><a href="#mentors" onClick={closeMobileMenu}>Mentors</a></li>
          <li><a href="#sponsors" onClick={closeMobileMenu}>Sponsors</a></li>
          <li><a href="#faq" onClick={closeMobileMenu}>FAQ</a></li>
          <li className="mobile-register-li">
            <a href="#" className="mobile-register-btn">
              REGISTER NOW
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
