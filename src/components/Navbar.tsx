
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

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#themes", label: "Themes" },
    { href: "#mentors", label: "Mentors" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <>
      <nav id="navbar" className={`navbar ${scrolled ? "scrolled" : ""}`} aria-label="Main navigation">
        <div className="nav-container">
          {/* Logo Group: JU → NAAC → IIC */}
          <div className="nav-brand-group">
            <div className="nav-brand-logo main">
              <img src={`${import.meta.env.BASE_URL}top-logo.webp`} alt="Jagannath University" className="nav-logo-img main-logo" />
            </div>
            <div className="nav-brand-logo side">
              <img src={`${import.meta.env.BASE_URL}naac.webp`} alt="NAAC" className="nav-logo-img naac-logo" loading="lazy" />
            </div>
            <div className="nav-brand-logo side">
              <img src={`${import.meta.env.BASE_URL}iic.webp`} alt="IIC" className="nav-logo-img" loading="lazy" />
            </div>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            <ul className="nav-menu">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-right-group">
            <a href="https://vision.hack2skill.com/event/devsummit?utm_source=hack2skill&utm_medium=homepage&sectionid=69c7a84ee339f97e64d585e6" target="_blank" rel="noopener noreferrer" className="nav-register">REGISTER NOW</a>
            
            {/* Morphing Hamburger */}
            <button
              className={`mobile-toggle${mobileMenuOpen ? " is-open" : ""}`}
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              id="hamburgerBtn"
            >
              <span className="hamburger-bar bar-top" />
              <span className="hamburger-bar bar-mid" />
              <span className="hamburger-bar bar-bot" />
            </button>
          </div>
        </div>
      </nav>


      {/* Dim backdrop — tap to close */}
      <div
        className={`mobile-backdrop${mobileMenuOpen ? " visible" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Right-side Drawer */}
      <aside
        className={`mobile-drawer${mobileMenuOpen ? " open" : ""}`}
        id="mobileMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Decorative overlays */}
        <div className="drawer-scanlines" aria-hidden="true" />
        <div className="drawer-red-glow" aria-hidden="true" />

        {/* Header label */}
        <div className="drawer-header">
          <div className="drawer-header-line" />
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation">
          <ul className="drawer-nav-list">
            {navLinks.map(({ href, label }, i) => (
              <li
                key={href}
                className="drawer-nav-item"
                style={{ "--i": i } as React.CSSProperties}
              >
                <a href={href} className="drawer-nav-link" onClick={closeMobileMenu}>
                  <span className="drawer-nav-label">{label}</span>
                  <span className="drawer-nav-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA button */}
        <div className="drawer-cta">
          <a href="https://vision.hack2skill.com/event/devsummit?utm_source=hack2skill&utm_medium=homepage&sectionid=69c7a84ee339f97e64d585e6" target="_blank" rel="noopener noreferrer" className="drawer-register-btn" onClick={closeMobileMenu}>
            <span className="drawer-btn-glow" />
            <span className="drawer-btn-text">REGISTER NOW</span>
          </a>
        </div>

        {/* Branding at bottom */}
        <div className="drawer-footer-brand">
          <span className="drawer-brand-name">DEVSUMMIT <span>2026</span></span>
          <span className="drawer-brand-tagline">HACK UPSIDE DOWN</span>
        </div>
      </aside>
    </>
  );
}
