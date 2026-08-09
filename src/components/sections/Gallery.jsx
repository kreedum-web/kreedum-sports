import { useState, useRef, useEffect } from "react";
import { COLORS } from "../../config/theme";
import { CATEGORY_PHOTOS } from "../../data/photos";
import { ChevronLeftIcon, ChevronRightIcon } from "../common/Icons";

export default function Gallery() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = CATEGORY_PHOTOS.length;

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(i, total - 1));
    const card = track.children[clamped];

    if (card) {
      track.scrollTo({
        left: card.offsetLeft - track.offsetLeft,
        behavior: "smooth",
      });
    }

    setActiveIndex(clamped);
  };

  const handlePrev = () => {
    scrollToIndex(activeIndex === 0 ? total - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(activeIndex === total - 1 ? 0 : activeIndex + 1);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    let closest = 0;
    let closestDist = Infinity;

    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(
        child.offsetLeft - track.offsetLeft - track.scrollLeft
      );

      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  };

  /*
   * Automatic carousel:
   * Desktop only.
   * Mobile remains swipe-controlled.
   */
  useEffect(() => {
    const handleResize = () => {};

    const isDesktop = () => window.innerWidth >= 768;

    if (!isDesktop()) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    const timer = setInterval(() => {
      if (window.innerWidth >= 768) {
        setActiveIndex((current) => {
          const nextIndex = current === total - 1 ? 0 : current + 1;

          const track = trackRef.current;
          if (track) {
            const card = track.children[nextIndex];

            if (card) {
              track.scrollTo({
                left: card.offsetLeft - track.offsetLeft,
                behavior: "smooth",
              });
            }
          }

          return nextIndex;
        });
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="max-w-xl mb-10 md:mb-14">
          <div
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: COLORS.blue }}
          >
            Gear & Ground
          </div>

          <h2
            className="font-display font-bold text-3xl md:text-4xl"
            style={{ color: COLORS.navy }}
          >
            Everything you need, in every sport.
          </h2>
        </div>

        {/* Gallery */}
        <div className="relative">

          {/* Previous arrow (visible on mobile and desktop) */}
          <button
            onClick={handlePrev}
            aria-label="Previous gallery item"
            className="
              flex
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              z-20
              w-9
              h-9
              md:w-11
              md:h-11
              rounded-full
              items-center
              justify-center
              kr-focus
              transition-all
              hover:scale-105
              hover:opacity-90
            "
            style={{
              backgroundColor: "rgba(14,26,61,0.75)",
              color: COLORS.white,
              backdropFilter: "blur(6px)",
            }}
          >
            <ChevronLeftIcon />
          </button>

          {/* Next arrow (visible on mobile and desktop) */}
          <button
            onClick={handleNext}
            aria-label="Next gallery item"
            className="
              flex
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              z-20
              w-9
              h-9
              md:w-11
              md:h-11
              rounded-full
              items-center
              justify-center
              kr-focus
              transition-all
              hover:scale-105
              hover:opacity-90
            "
            style={{
              backgroundColor: "rgba(14,26,61,0.75)",
              color: COLORS.white,
              backdropFilter: "blur(6px)",
            }}
          >
            <ChevronRightIcon />
          </button>

          {/* Swipeable gallery */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="
              flex
              gap-6
              overflow-x-auto
              snap-x
              snap-mandatory
              pb-4
              -mx-6
              px-6
              kr-scroll-hide
              scroll-smooth
            "
            style={{
              scrollbarWidth: "none",
            }}
          >
            {CATEGORY_PHOTOS.map((p) => (
              <div
                key={p.label}
                className="
                  diag-card
                  overflow-hidden
                  rounded-2xl
                  flex-shrink-0
                  snap-start
                  relative
                "
                style={{
                  width: "280px",
                }}
              >
                <img
                  src={p.src}
                  alt={`${p.label} — ${p.desc}`}
                  className="
                    w-full
                    h-72
                    object-cover
                    transition-transform
                    duration-500
                    md:hover:scale-105
                  "
                />

                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(14,26,61,0.85), rgba(14,26,61,0))",
                  }}
                >
                  <div
                    className="
                      font-display
                      font-semibold
                      text-base
                      flex
                      items-center
                      gap-2
                    "
                    style={{ color: COLORS.white }}
                  >
                    <span>{p.emoji}</span>
                    {p.label}
                  </div>

                  <div
                    className="font-body text-xs"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {CATEGORY_PHOTOS.map((p, i) => (
            <button
              key={p.label}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${p.label}`}
              className="
                rounded-full
                transition-all
                duration-300
                p-0
              "
              style={{
                width: i === activeIndex ? "34px" : "8px",
                height: "8px",
                backgroundColor:
                  i === activeIndex ? COLORS.blue : COLORS.paperDim,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}