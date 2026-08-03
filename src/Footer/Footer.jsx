import { MapPin, Phone, Send, ChevronRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* Top metallic gold hairline gradient border */}
      <div className="gold-hairline" />

      <div className="footer-container">
        <div className="footer-content-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <h3 className="footer-title">Royal Wellness Centre</h3>
              <p className="footer-subtext">Certified Wellness Coach</p>
            </div>
            
            <p className="footer-description">
              Empowering your health journey through personalized guidance, expert nutrition, and sustainable lifestyle transformation.
            </p>

            <div className="footer-buttons-group">
              <a
                href="https://instagram.com/SoniaKaur_fitcoach"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow on Instagram"
                className="footer-action-btn instagram-btn"
              >
                <FaInstagram className="footer-btn-icon" />
              </a>
              <a
                href="https://wa.me/919855579753"
                target="_blank"
                rel="noreferrer"
                aria-label="Send WhatsApp message"
                className="footer-action-btn whatsapp-btn"
              >
                <FaWhatsapp className="footer-btn-icon" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#about"><ChevronRight size={14} /> About Coach</a>
              </li>
              <li>
                <a href="#services"><ChevronRight size={14} /> Programs & Services</a>
              </li>
              <li>
                <a href="#testimonials"><ChevronRight size={14} /> Success Stories</a>
              </li>
              <li>
                <a href="#contact"><ChevronRight size={14} /> Book Consultation</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit & Connect Card */}
          <div className="footer-card-col">
            <h4 className="footer-col-title">Visit & Connect</h4>
            <address className="footer-address">
              <div className="footer-address-row">
                <MapPin className="footer-address-icon" size={18} />
                <div className="footer-address-details">
                  <span className="footer-address-title">Royal Wellness Centre</span>
                  <p>Shop No. 207, Second Floor, London Street, Patiala</p>
                </div>
              </div>
              <div className="footer-address-row footer-phone-row">
                <Phone className="footer-address-icon" size={16} />
                <a href="tel:+919855579753" className="footer-phone-link">
                  +91 98555 79753
                </a>
              </div>
            </address>
          </div>

          {/* Column 4: CTA Section */}
          <div className="footer-cta-col">
            <h4 className="footer-col-title">Start Your Journey</h4>
            <p className="footer-cta-desc">
              Have questions or ready to transform your wellness? Chat directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/919855579753"
              target="_blank"
              rel="noreferrer"
              className="footer-cta-btn"
            >
              Message Now <Send size={15} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Royal Wellness Centre. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}