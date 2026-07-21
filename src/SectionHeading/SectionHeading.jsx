import Reveal from "../Reveal/Reveal";
import "./SectionHeading.css";

export default function SectionHeading({ title, subtitle }) {
  return (
    <Reveal className="section-heading-reveal">
      <div className="section-heading-container">
        <span className="heading-line line-left" />
        <h2 className="section-heading-title card-gold-text">
          {title}
        </h2>
        <span className="heading-line line-right" />
      </div>
      {subtitle && <p className="section-heading-subtitle">{subtitle}</p>}
    </Reveal>
  );
}