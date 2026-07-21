import Reveal from "../Reveal/Reveal";
import nutritions from "../assets/about-nutrition.webp";
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
                  Certified Wellness Coach </span>passionate about helping you achieve
                  your health and fitness goals through personalized online
                  coaching. I offer customized diet plans, nutrition guidance,
                  weight loss & weight gain coaching, virtual Zumba and Bhangra
                  fitness sessions, along with continuous motivation and
                  support. My goal is to help you build sustainable healthy
                  habits while delivering visible progress from the very
                  beginning. Start your fitness journey today and become the
                  healthiest version of yourself—anytime, anywhere.
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
