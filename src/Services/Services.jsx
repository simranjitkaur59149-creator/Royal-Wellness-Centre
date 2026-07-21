import { Weight, Dumbbell, ClipboardList, Leaf, Zap, Drum } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Reveal from "../Reveal/Reveal";
import "./Services.css";

const services = [
  { icon: Weight, title: "Weight Loss Program", desc: "Personalized plans for sustainable fat loss" },
  { icon: Dumbbell, title: "Weight Gain Program", desc: "Healthy weight gain with proper nutrition" },
  { icon: ClipboardList, title: "Personalized Diet Plans", desc: "Custom meals for your lifestyle and goals" },
  { icon: Leaf, title: "Nutrition Guidance", desc: "Right food choices for a better you" },
  { icon: Zap, title: "Virtual Workout Sessions", desc:"Expert coaching from home" },
  { icon: Drum, title: "Virtual Bhangra Fitness", desc: "Traditional moves for a stronger you" },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <img
        src="/images/gold-swirl.jpg"
        alt=""
        className="services-swirl"
      />
      <div className="services-container">
        <SectionHeading title="My Services" />
        
        <div className="services-grid">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="services-card card-gold card-gold-lift group">
                  <div className="services-icon-box">
                    <IconComponent className="services-icon" strokeWidth={1.8} />
                  </div>
                  <div className="services-content">
                    <h3 className="services-card-title">
                      {s.title}
                    </h3>
                    <p className="services-card-desc">{s.desc}</p>
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