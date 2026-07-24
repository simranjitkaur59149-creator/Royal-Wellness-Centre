import { Star, Quote } from "lucide-react";
import SectionHeading from "../SectionHeading/SectionHeading";


import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const testimonials = [
  {
    quote:
      "I lost 10kg in just 3 months without starving myself. The personalized guidance and constant motivation completely changed my lifestyle.",
    name: "Akshat Malhotra",
  },
  {
    quote:
      "My energy levels have improved so much! The meal plans were simple, practical, and easy to follow even with my busy schedule.",
    name: "Anjali Verma",
  },
  {
    quote:
      "After struggling with weight for years, I finally achieved my fitness goals. The support and accountability made all the difference.",
    name: "Harpreet Kaur",
  },
  {
    quote:
      "The weekly check-ins kept me motivated. I've become healthier, more confident, and feel amazing every day.",
    name: "Varun Arora",
  },
  {
    quote:
      "I never thought healthy eating could be this enjoyable. I've lost 7kg and gained a healthier, happier lifestyle.",
    name: "Jasleen Kaur",
  },
  {
    quote:
      "Professional, knowledgeable, and genuinely caring. Every recommendation was tailored to my needs, and the results exceeded my expectations.",
    name: "Vansh Kapoor",
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
         <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <SwiperSlide  key={t.name} >
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
            </SwiperSlide >
          ))}
        </div></Swiper>
      </div>
    </section>
  );
}