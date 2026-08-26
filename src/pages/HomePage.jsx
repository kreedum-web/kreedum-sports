import { useEffect } from "react";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import About from "../components/sections/About";
import Products from "../components/sections/Products";
import Infrastructure from "../components/sections/Infrastructure";
import Gallery from "../components/sections/Gallery";
import Locations from "../components/sections/Locations";
import ContactForm from "../components/sections/ContactForm";
import WhatsAppButton from "../components/common/WhatsAppButton";
import { COLORS } from "../config/theme";

export default function HomePage() {
  // Supports links like "/#products" (used by the footer's Quick Links,
  // which need to work even when navigated to from another page).
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      // Wait a tick for layout/images to settle before scrolling.
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <div className="font-body" style={{ backgroundColor: COLORS.white }}>
      <Nav />
      <Hero />
      <StatsBar />
      <About />
      <Products />
      <Infrastructure />
      <Gallery />
      <Locations />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
