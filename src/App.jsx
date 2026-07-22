
import About from "./About.jsx/About";
import Connect from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import Testimonials from "./Testimonial/Testimonial";
import Transformation from "./Transformation/Transformation";
import WhyChooseMe from "./WhyChooseUs/WhyChooseUs";
import "./App.css"

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0703] text-white antialiased">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <WhyChooseMe />
        <Transformation/>
        <Testimonials/>
        <Connect />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919855579753"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#2fe07a] to-[#0e9b52] shadow-[0_12px_32px_-6px_rgba(37,211,102,0.65)] transition-transform duration-400 hover:scale-110"
      >
        <span className="ping-soft absolute inset-0 rounded-full bg-[#25d366]/50" />
        <FaWhatsapp  className="relative h-7 w-7 text-white" />
      </a>
    </div>
  );
}
