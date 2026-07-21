import { Phone, Heart } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Reveal from "../Reveal/Reveal";
import { WhatsAppIcon, InstagramIcon } from "../Icons/Icons";
import "./Contact.css"; // Ensure this path matches where you save the CSS file

export default function Connect() {
  return (
    <section id="contact" className="connect-section">
      <div className="connect-container">
        <SectionHeading title="Let's Connect" />

        <div className="connect-grid">
          {/* Phone */}
          <Reveal delay={0}>
            <a
              href="tel:+919592703043"
              className="card-gold card-gold-lift group connect-card"
            >
              <span className="icon-box icon-box-gold">
                <Phone className="icon-size text-gold" />
              </span>
              <span className="text-container">
                <span className="label-text text-gold-dim">
                  Phone
                </span>
                <span className="value-text">
                  98555-79753
                </span>
              </span>
            </a>
          </Reveal>

          {/* Instagram */}
          <Reveal delay={110}>
            <a
              href="https://instagram.com/Soniakaur_fitcoach"
              target="_blank"
              rel="noreferrer"
              className="card-gold card-gold-lift group connect-card"
            >
              <span className="icon-box icon-box-gold">
                <InstagramIcon className="icon-size text-gold" />
              </span>
              <span className="text-container">
                <span className="label-text text-gold-dim">
                  Instagram
                </span>
                <span className="value-text sm-text">
                  @Soniakaur_fitcoach
                </span>
              </span>
            </a>
          </Reveal>

          {/* WhatsApp */}
          <Reveal delay={220}>
            <a
              href="https://wa.me/919855579753"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp group connect-card whatsapp-card"
            >
              <span className="icon-box icon-box-whatsapp">
                <WhatsAppIcon className="whatsapp-icon-size" />
              </span>
              <span className="text-container">
                <span className="whatsapp-label">
                  WhatsApp Now
                </span>
                <span className="whatsapp-subtext">
                  Let&apos;s Start Your Journey
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        {/* Tagline */}
        <Reveal delay={300}>
          <p className="tagline">
            <Heart className="tagline-heart" />
            Your Health. Your Strength. Your Future.
          </p>
        </Reveal>
      </div>
    </section>
  );
}