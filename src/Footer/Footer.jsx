import { Send, MapPin } from "lucide-react";

import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* Top metallic gold border element */}
      <div className="gold-hairline" />

   

      <div className="footer-container">
        <div className="footer-content-row">
          
          {/* Brand & Location Block */}
          <div className="footer-brand-block">
            <div className="footer-brand-header">
              
              <div className="footer-brand-text">
                <p className="footer-copyright">&copy; 2026 Royal Wellness Centre</p>
                <p className="footer-subtext">Certified Wellness Coach</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="footer-address">
              <div className="footer-address-row">
                <MapPin size={16} />
                <div>
                  <p className="footer-address-title">Royal Wellness Centre</p>
                  <p>Shop No. 207, Second Floor London Street,Patiala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Connect & Actions Block */}
          <div className="footer-actions-block">
            <span className="footer-social-label">Get in Touch</span>
            
            <div className="footer-buttons-group">
              <a
                href="https://instagram.com/SoniaKaur_fitcoach"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow on Instagram"
                className="footer-action-btn"
              >
                <FaInstagram className="footer-btn-icon" />
              </a>

              <a
                href="https://wa.me/919855579753"
                target="_blank"
                rel="noreferrer"
                aria-label="Send WhatsApp message"
                className="footer-action-btn"
              >
                <Send className="footer-btn-icon" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}