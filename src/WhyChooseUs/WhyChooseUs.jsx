import { Clock, UserRound, Laptop, Heart } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import Reveal from "../Reveal/Reveal.jsx";
import "./WhyChooseMe.css";

const reasons = [
  { icon: Clock, title: "Results Within 72 Hours", desc: "See changes faster than you think" },
  { icon: UserRound, title: "Personalized Coaching", desc: "Plans tailored to your unique needs" },
  { icon: Laptop, title: "Home-Based Virtual Sessions", desc: "Train and eat right from home" },
  { icon: Heart, title: "Continuous Support", desc: "I'm with you every step of the way" },
];

export default function WhyChooseMe() {
  return (
    <section id="why" className="why-section">
      <div className="why-container">
        <SectionHeading title="Why Choose Me" />
        
        <div className="why-grid">
          {reasons.map((r, i) => {
            const IconComponent = r.icon;
            return (
              <Reveal key={r.title} delay={i * 90}>
                <div className="why-card card-gold card-gold-lift group">
                  <div className="why-icon-box">
                    <IconComponent className="why-icon" strokeWidth={1.8} />
                  </div>
                  <div className="why-content">
                    <h3 className="why-card-title">
                      {r.title}
                    </h3>
                    <p className="why-card-desc">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}