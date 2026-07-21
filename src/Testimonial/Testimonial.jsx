import { Star, Quote } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Reveal from "../Reveal/Reveal";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "I lost 8kg in 2 months. Amazing guidance!",
    name: "Neha Sharma",
  },
  {
    quote: "The diet plan was easy to follow and very effective!",
    name: "Priya Mehta",
  },
  {
    quote: "Best online fitness coach! I feel stronger and healthier every day.",
    name: "Simran Kaur",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <img
        src="/images/gold-swirl.jpg"
        alt=""
        className="testimonials-swirl"
      />
      <div className="testimonials-container">
        <SectionHeading title="Client Success Stories" />
        
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="testimonial-card card-gold card-gold-lift">
                <Quote className="testimonial-quote-icon" />
                
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="testimonial-star-icon" />
                  ))}
                </div>
                
                <blockquote className="testimonial-text">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                
                <figcaption className="testimonial-author">
                  <span className="testimonial-author-line" />
                  <span className="testimonial-author-name">
                    {t.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}