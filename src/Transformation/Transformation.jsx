import React from "react";
import { MessageCircle, Leaf, ShieldCheck, ArrowRight } from "lucide-react";
import Reveal from "../Reveal/Reveal";
import "./Transformation.css";

// Provided gallery images (preserved)
import GalleryImg1 from "../assets/img1.webp";
import GalleryImg2 from "../assets/img2.webp";
import GalleryImg3 from "../assets/img3.webp";
import GalleryImg4 from "../assets/img4.webp";
import GalleryImg5 from "../assets/img5.webp";

const galleryData = [
  {
    img: GalleryImg1,
    tag: "15 KG Lost - Healthier, Happier, Stronger",
    weight1: "75 KG",
    weight2: "60 KG",
  },
  {
    img: GalleryImg2,
    tag: "Stronger Body, Better Future",
    weight1: "",
    weight2: "",
  },
  {
    img: GalleryImg3,
    tag: "35 KG Lost - Confidence Regained",
    weight1: "110 KG",
    weight2: "75 KG",
  },
  {
    img: GalleryImg4,
    tag: "Stronger Health, Happier Life",
    weight1: "",
    weight2: "",
  },
  {
    img: GalleryImg5,
    tag: "92 KG to 72 KG - A Better You, Every Day",
    weight1: "92 KG",
    weight2: "72 KG",
  },
];

export default function Transformation() {
  return (
    <section id="transformation" className="transform-section">
      <div className="transform-container">
        {/* --- 1. HERO SECTION --- */}
        <Reveal>
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                <Leaf className="leaf-decor left" />
                Real People Real Results
                <strong>Stronger Tomorrow.</strong>
              </h1>

              <p className="hero-subtitle">
                Personalized nutrition and lifestyle coaching for a healthier,
                happier you.
              </p>
            </div>
          </div>
        </Reveal>

        {/* --- 2. GALLERY SECTION --- */}
        <Reveal delay={300}>
          <div className="gallery-grid">
            {galleryData.map((item, index) => (
              <div key={index} className="gallery-card">
                <div className="gallery-img-wrapper">
                  {item.weight1 && (
                    <span className="weight-badge top-left">
                      {item.weight1}
                    </span>
                  )}
                  {item.weight2 && (
                    <span className="weight-badge top-right">
                      {item.weight2}
                    </span>
                  )}

                  <img
                    src={item.img}
                    alt={`Transformation story ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                  />

                  <div className="center-arrow-circle small">
                    <ArrowRight className="arrow-icon-green" />
                  </div>
                </div>
                <div className="gallery-card-footer">
                  <Leaf className="footer-leaf" />
                  <span>{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <MessageCircle className="btn-icon" />
              Book Your Free Consultation
            </a>
            <a href="#services" className="btn btn-outline">
              View Our Programs
            </a>
          </div>
        </Reveal>

        {/* --- 3. BOTTOM TRUST BADGE --- */}
        <div className="trusted-badge-bottom">
          <ShieldCheck className="shield-icon" />
          <span>Trusted Guidance. Real Results. Lasting Change.</span>
          <Leaf className="leaf-decor small" />
        </div>
      </div>
    </section>
  );
}
