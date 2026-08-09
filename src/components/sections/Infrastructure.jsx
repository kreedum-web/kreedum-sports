import { useState, useEffect, useRef } from "react";
import { COLORS } from "../../config/theme";
import { INFRA_PHOTOS } from "../../data/photos";
import { ChevronLeftIcon, ChevronRightIcon } from "../common/Icons";

export default function Infrastructure() {
  const [index, setIndex] = useState(0);
  const mobileTrackRef = useRef(null);

  const total = INFRA_PHOTOS.length;

  const prev = () => {
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    setIndex((i) => (i + 1) % total);
  };

  /*
   * Desktop automatic carousel.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth >= 768) {
        setIndex((i) => (i + 1) % total);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  /*
   * Mobile swipe position.
   */
  useEffect(() => {
    const track = mobileTrackRef.current;

    if (!track) return;

    const card = track.children[index];

    if (card) {
      track.scrollTo({
        left: card.offsetLeft - track.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [index]);

  const handleMobileScroll = () => {
    const track = mobileTrackRef.current;

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

    if (closest !== index) {
      setIndex(closest);
    }
  };

  return (
    <section
      id="infrastructure"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: COLORS.navy }}
    >
      {/* Background decoration */}
      <div
        className="
          absolute
          -left-32
          bottom-0
          w-[420px]
          h-[420px]
          rounded-full
          opacity-10
        "
        style={{
          background: COLORS.blue,
          filter: "blur(10px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* =====================================================
              DESKTOP IMAGE CAROUSEL
              ===================================================== */}
          <div className="order-2 md:order-1">

            <div className="hidden md:block">

              <div className="overflow-hidden rounded-2xl relative">

                {INFRA_PHOTOS.map((p, i) => (
                  <img
                    key={p.alt}
                    src={p.src}
                    alt={p.alt}
                    className="
                      w-full
                      h-[380px]
                      object-cover
                      transition-opacity
                      duration-700
                    "
                    style={{
                      position: i === 0 ? "relative" : "absolute",
                      inset: 0,
                      opacity: i === index ? 1 : 0,
                      pointerEvents: i === index ? "auto" : "none",
                    }}
                  />
                ))}

                {/* Previous */}
                <button
                  onClick={prev}
                  aria-label="Previous infrastructure photo"
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    kr-focus
                    transition-all
                    hover:scale-105
                    hover:opacity-90
                    z-10
                  "
                  style={{
                    backgroundColor: "rgba(14,26,61,0.55)",
                    color: COLORS.white,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <ChevronLeftIcon />
                </button>

                {/* Next */}
                <button
                  onClick={next}
                  aria-label="Next infrastructure photo"
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    kr-focus
                    transition-all
                    hover:scale-105
                    hover:opacity-90
                    z-10
                  "
                  style={{
                    backgroundColor: "rgba(14,26,61,0.55)",
                    color: COLORS.white,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <ChevronRightIcon />
                </button>

              </div>

              {/* Desktop dots */}
              <div className="flex items-center justify-center gap-2 mt-5">
                {INFRA_PHOTOS.map((p, i) => (
                  <button
                    key={p.alt}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? "34px" : "8px",
                      height: "8px",
                      backgroundColor:
                        i === index
                          ? COLORS.blue
                          : "rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </div>

            </div>


            {/* =====================================================
                MOBILE SWIPE CAROUSEL
                ===================================================== */}
            <div className="md:hidden">

              <div
                ref={mobileTrackRef}
                onScroll={handleMobileScroll}
                className="
                  flex
                  gap-5
                  overflow-x-auto
                  snap-x
                  snap-mandatory
                  -mx-6
                  px-6
                  kr-scroll-hide
                "
                style={{
                  scrollbarWidth: "none",
                }}
              >

                {INFRA_PHOTOS.map((p) => (
                  <div
                    key={p.alt}
                    className="
                      flex-shrink-0
                      snap-start
                      w-[calc(100vw-48px)]
                      overflow-hidden
                      rounded-2xl
                      relative
                    "
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      className="
                        w-full
                        h-[380px]
                        object-cover
                      "
                    />
                  </div>
                ))}

              </div>

              {/* Mobile dots */}
              <div className="flex items-center justify-center gap-2 mt-5">
                {INFRA_PHOTOS.map((p, i) => (
                  <button
                    key={p.alt}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? "34px" : "8px",
                      height: "8px",
                      backgroundColor:
                        i === index
                          ? COLORS.blue
                          : "rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </div>

            </div>

          </div>


          {/* =====================================================
              CONTENT
              ===================================================== */}
          <div className="order-1 md:order-2">

            <div
              className="
                font-mono
                text-xs
                tracking-widest
                uppercase
                mb-4
              "
              style={{ color: "#8FADFF" }}
            >
              Institutional Work
            </div>

            <h2
              className="
                font-display
                font-bold
                text-3xl
                md:text-4xl
                mb-6
              "
              style={{ color: COLORS.white }}
            >
              Sports infrastructure & ground equipment.
            </h2>

            <p
              className="
                font-body
                text-base
                leading-relaxed
                mb-8
              "
              style={{
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Beyond retail, we work with schools, academies, and institutions
              to fit out playing fields and training grounds — from ground
              equipment to full sporting infrastructure, delivered with the
              same reliability our store customers know us for.
            </p>

            <ul className="space-y-3">
              {[
                "Ground equipment supply & setup",
                "Institutional bulk orders",
                "Ongoing maintenance & support",
              ].map((t) => (
                <li
                  key={t}
                  className="
                    flex
                    items-center
                    gap-3
                    font-body
                    text-sm
                  "
                  style={{
                    color: COLORS.white,
                  }}
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      flex-shrink-0
                    "
                    style={{
                      backgroundColor: COLORS.blue,
                    }}
                  />

                  {t}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}