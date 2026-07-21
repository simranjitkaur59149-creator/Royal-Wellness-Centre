import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LotusIcon } from "../Icons/Icons";
import "./Navbar.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Me", href: "#why" },
  { label: "Transformation", href: "#transformation" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? "is-scrolled" : "is-top"}`}>
      <div className="navbar-container">
        <div className="navbar-row">
          
          {/* Logo */}
          <a href="#home" className="navbar-logo-group">
            <span className="navbar-logo-icon">
              <LotusIcon className="w-8 h-8" />
            </span>
            <span className="navbar-logo-text">
              <span className="navbar-brand-name ">
               Royal Wellness Centre
              </span>
              <span className="navbar-brand-sub">
                Certified Wellness Coach
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-desktop-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="navbar-desktop-link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="navbar-actions">
            <a href="#contact" className="btn-gold navbar-cta-btn">
              Book Consultation
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="navbar-mobile-toggle"
              aria-label="Toggle menu"
            >
              {open ? <X style={{ width: "1.25rem", height: "1.25rem" }} /> : <Menu style={{ width: "1.25rem", height: "1.25rem" }} />}
            </button>
          </div>
        </div>
      </div>

      {/* Gold hairline */}
      <div className="gold-hairline" />

      {/* Mobile Panel */}
      <div className={`navbar-mobile-panel ${open ? "is-open" : "is-closed"}`}>
        <nav className="navbar-mobile-links">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className={`navbar-mobile-link ${open ? "link-visible" : "link-hidden"}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gold navbar-mobile-cta"
          >
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}