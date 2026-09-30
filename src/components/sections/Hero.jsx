import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../config/theme";
import { HERO_SLIDES } from "../../data/photos";
import { scrollToId } from "../../utils/scrollToId";

// How long each background photo stays on screen.
const SLIDE_INTERVAL_MS = 5000;

// Unsplash images can be resized through the URL, so phones download a
// small version and large screens a sharp one. Other URLs are left as-is.
const sized = (url, width) => {
  try {
    const u = new URL(url);
    if (!u.hostname.endsWith("unsplash.com")) return url;
    u.searchParams.set("w", String(width));
    u.searchParams.set("q", "75");
    return u.toString();
  } catch {
    return url;
  }
};
const srcSetFor = (url) =>
  [800, 1280, 1920].map((w) => `${sized(url, w)} ${w}w`).join(", ");

export default function Hero() {
  const scrollTo = (id) => scrollToId(id);
  const [slide, setSlide] = useState(0);

  // Auto-advance the background slideshow. Stops for visitors who
  // prefer reduced motion, and while the browser tab is hidden. Depends on
  // `slide` so tapping a dot restarts the timer.
  useEffect(() => {
    if (HERO_SLIDES.length < 2) return undefined;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const id = setInterval(() => {
      if (!document.hidden) setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [slide]);

  return (
    <section
      id="home"
      className="relative overflow-hidden diag-bottom"
      style={{ backgroundColor: COLORS.navy }}
    >
      <style>{`
        @keyframes kr-hero-zoom {
          from { transform: scale(1); }
          to   { transform: scale(1.1); }
        }
        .kr-hero-slide.is-active img {
          animation: kr-hero-zoom ${SLIDE_INTERVAL_MS + 1200}ms ease-out forwards;
        }
      `}</style>

      {/* ---------- Sliding photo background (all screen sizes) ---------- */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.src}
            className={`kr-hero-slide absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              i === slide ? "is-active" : ""
            }`}
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={sized(s.src, 1280)}
              srcSet={srcSetFor(s.src)}
              sizes="100vw"
              alt=""
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              fetchpriority={i === 0 ? "high" : "low"}
              decoding="async"
            />
          </div>
        ))}

        {/* Dark brand overlay so the white text stays readable on any photo.
            Phones: darker towards the bottom. Tablet/desktop: dark on the
            left behind the text, fading out so the photo shows on the right. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,26,61,0.55) 0%, rgba(14,26,61,0.70) 45%, rgba(14,26,61,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(14,26,61,0.94) 0%, rgba(14,26,61,0.80) 40%, rgba(14,26,61,0.35) 75%, rgba(14,26,61,0.20) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-28 md:pt-44 md:pb-40 lg:min-h-[640px]">
        <div className="max-w-xl">
          <div
            className="font-mono text-xs tracking-widest uppercase mb-5 inline-block px-3 py-1 rounded-full"
            style={{ color: COLORS.white, backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            Lucknow · Since 1990
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] mb-6" style={{ color: COLORS.white }}>
            Equipment for
            <br />
            <span style={{ color: "#8FADFF" }}>every kind of play.</span>
          </h1>
          <p className="font-body text-base md:text-lg mb-9 max-w-md" style={{ color: "rgba(255,255,255,0.75)" }}>
            Sports equipment, apparell, footwear, fitness machines, and full
            ground infrastructure — trusted by athletes, schools, and
            institutions across Lucknow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/quote"
              className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus transition-transform hover:scale-105 inline-block"
              style={{ backgroundColor: COLORS.blue, color: COLORS.white }}
            >
              Request a Quote
            </Link>
            <button
              onClick={() => scrollTo("products")}
              className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus border transition-transform hover:scale-105"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: COLORS.white }}
            >
              View Products
            </button>
          </div>

          {/* Slideshow dots */}
          {HERO_SLIDES.length > 1 && (
            <div className="flex items-center gap-2 mt-8 md:mt-10" role="group" aria-label="Background photos">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Show photo ${i + 1}: ${s.alt}`}
                  aria-current={i === slide}
                  className="h-2 rounded-full kr-focus transition-all duration-300"
                  style={{
                    width: i === slide ? 24 : 8,
                    backgroundColor: i === slide ? COLORS.white : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}