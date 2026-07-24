import Reveal from "../Reveal/Reveal";
import nutritions from "../assets/about-nutrition.png";


import "./About.css";

export default function About() {
  const specialties = [
    "Customized Nutrition",
    "Virtual Workouts",
    "Balanced Lifestyle",
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <Reveal>
          <div className="about-card card-gold card-gold-lift">
            <div className="about-grid">
              {/* Text Content Block */}
              <div className="about-text-content">
                <h3 className="about-title">About Me</h3>
                <div className="about-divider" />
                <p className="about-description">
                 
                  
                 Hi, I&apos;m{" "}    <span className="about-highlight">Jaswinder Kaur, a
                  Certified Wellness Coach </span>dedicated to helping you achieve your health and fitness goals through personalized online coaching.

I provide customized diet plans, nutrition guidance, weight loss and weight gain coaching, virtual Zumba and Bhangra sessions, and ongoing support to help you build healthy habits and achieve lasting results.

Start your wellness journey today and become the healthiest version of yourself—anytime, anywhere.
                </p>

                <div className="about-tags-container">
                  {specialties.map((tag) => (
                    <span key={tag} className="about-tag">
                      <span className="about-tag-dot" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Block */}
              <div className="about-image-wrapper">
                <div className="about-image-glow" />
                <img
                  src={nutritions}
                  alt="Healthy nutrition bowl with dumbbell and shaker"
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
