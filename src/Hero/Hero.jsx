import { Trophy } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import { FaWhatsapp } from "react-icons/fa";
import portrait from "../assets/hero-portrait.jpeg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Ambient gold glows */}
      <div className="hero-glow glow-top-left" />
      <div className="hero-glow glow-mid-right" />

      <div className="hero-container">
        <div className="hero-layout-grid">
          
          {/* Portrait Graphic Block Container */}
          <Reveal className="hero-reveal-img-grid-item">
            <div className="hero-portrait-wrapper">
              {/* Outer aura rings */}
              <div className="aura-ring aura-ring-static" />
              <div className="aura-ring aura-ring-animated" />

              <div className="hero-float-container">
                <div className="portrait-gradient-border">
                  <div className="portrait-inner-frame">
                    <img
                      src={portrait}
                      alt="Jaswinder Kaur — Certified Wellness Coach"
                      className="hero-portrait-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Marketing Copy Block Container */}
          <div className="hero-copy-side hero-reveal-text-grid-item">
            <Reveal>
              <span className="hero-tag">
                ✨ India's Trusted Wellness Coach
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="hero-main-title">
                Transform Your
                <span className="gold-text"> Health Naturally</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="hero-name">
                with Royal Wellness Centre
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="hero-description-text">
                Lose weight, build healthy habits and achieve lasting wellness with
                personalized online coaching designed around your lifestyle.
              </p>
            </Reveal>


            <Reveal delay={400}>
              <div className="hero-trophy-banner">
                <Trophy className="hero-trophy-icon"/>
                <span className="hero-trophy-text">
                  Results can begin within the first 72 hours*
                </span>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="hero-actions-container">
                <a href="#contact" className="btn-gold hero-cta-main">
                  Book Free Consultation
                </a>

                <a
                  href="https://wa.me/919855579753"
                  className="btn-outline-gold hero-cta-whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp  className="hero-whatsapp-icon"/>
                  WhatsApp Now
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}