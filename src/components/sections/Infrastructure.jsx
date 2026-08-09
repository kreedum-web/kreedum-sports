import { useState, useRef } from "react";
import { COLORS } from "../../config/theme";
import { INFRA_PHOTOS } from "../../data/photos";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../common/Icons";

export default function Infrastructure() {
  const [index, setIndex] = useState(0);
  const mobileTrackRef = useRef(null);

  const total = INFRA_PHOTOS.length;

  /* =========================================
     DESKTOP NAVIGATION
     ========================================= */

  const prev = () => {
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    setIndex((i) => (i + 1) % total);
  };

  /* =========================================
     MOBILE NAVIGATION
     ========================================= */

  const goToMobileSlide = (slideIndex) => {
    const track = mobileTrackRef.current;

    if (!track) return;

    const slide = track.children[slideIndex];

    if (!slide) return;

    slide.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setIndex(slideIndex);
  };

  const handleMobileScroll = () => {
    const track = mobileTrackRef.current;

    if (!track) return;

    const slides = Array.from(track.children);

    if (!slides.length) return;

    const trackCenter =
      track.scrollLeft + track.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, i) => {
      const slideCenter =
        slide.offsetLeft + slide.offsetWidth / 2;

      const distance = Math.abs(
        slideCenter - trackCenter
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    if (closestIndex !== index) {
      setIndex(closestIndex);
    }
  };

  return (
    <section
      id="infrastructure"
      className="
        relative
        w-full
        min-w-0
        py-24
        md:py-32
        overflow-hidden
      "
      style={{
        backgroundColor: COLORS.navy,
      }}
    >
      {/* =========================================
          BACKGROUND DECORATION
          ========================================= */}

      <div
        className="
          absolute
          -left-32
          bottom-0
          w-[420px]
          h-[420px]
          rounded-full
          opacity-10
          pointer-events-none
        "
        style={{
          background: COLORS.blue,
          filter: "blur(10px)",
        }}
      />

      {/* =========================================
          MAIN CONTAINER
          ========================================= */}

      <div
        className="
          relative
          w-full
          min-w-0
          max-w-6xl
          mx-auto
          px-6
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-14
            items-center
            w-full
            min-w-0
          "
        >

          {/* =========================================
              IMAGE / CAROUSEL
              ========================================= */}

          <div
            className="
              order-2
              md:order-1
              w-full
              min-w-0
            "
          >

            {/* =========================================
                DESKTOP CAROUSEL
                ========================================= */}

            <div className="hidden md:block w-full">

              <div
                className="
                  relative
                  w-full
                  overflow-hidden
                  rounded-2xl
                "
              >
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
                      duration-500
                    "
                    style={{
                      position:
                        i === 0
                          ? "relative"
                          : "absolute",
                      inset: 0,
                      opacity:
                        i === index ? 1 : 0,
                      pointerEvents:
                        i === index
                          ? "auto"
                          : "none",
                    }}
                  />
                ))}

                {/* Desktop Previous */}

                <button
                  onClick={prev}
                  aria-label="Previous infrastructure photo"
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    z-10
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    kr-focus
                    transition-all
                    duration-200
                    hover:scale-105
                    hover:opacity-90
                  "
                  style={{
                    backgroundColor:
                      "rgba(14,26,61,0.55)",
                    color: COLORS.white,
                    backdropFilter:
                      "blur(6px)",
                  }}
                >
                  <ChevronLeftIcon />
                </button>

                {/* Desktop Next */}

                <button
                  onClick={next}
                  aria-label="Next infrastructure photo"
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    z-10
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    kr-focus
                    transition-all
                    duration-200
                    hover:scale-105
                    hover:opacity-90
                  "
                  style={{
                    backgroundColor:
                      "rgba(14,26,61,0.55)",
                    color: COLORS.white,
                    backdropFilter:
                      "blur(6px)",
                  }}
                >
                  <ChevronRightIcon />
                </button>
              </div>

              {/* Desktop Dots */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  mt-5
                "
              >
                {INFRA_PHOTOS.map((p, i) => (
                  <button
                    key={p.alt}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${
                      i + 1
                    }`}
                    className="
                      rounded-full
                      transition-all
                      duration-300
                      p-0
                    "
                    style={{
                      width:
                        i === index
                          ? "34px"
                          : "8px",
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

            {/* =========================================
                MOBILE SWIPE CAROUSEL
                ========================================= */}

            <div
              className="
                md:hidden
                w-full
                min-w-0
                overflow-hidden
              "
            >
              <div
                ref={mobileTrackRef}
                onScroll={handleMobileScroll}
                className="
                  flex
                  w-full
                  min-w-0
                  overflow-x-auto
                  overflow-y-hidden
                  snap-x
                  snap-mandatory
                  kr-scroll-hide
                "
                style={{
                  scrollbarWidth: "none",
                  WebkitOverflowScrolling:
                    "touch",
                  touchAction: "pan-x",
                  overscrollBehaviorX:
                    "contain",
                }}
              >
                {INFRA_PHOTOS.map((p) => (
                  <div
                    key={p.alt}
                    className="
                      flex-shrink-0
                      w-full
                      min-w-full
                      snap-center
                      overflow-hidden
                      rounded-2xl
                    "
                  >
                    <img
                      src={p.src}
                      alt={p.alt}
                      draggable="false"
                      className="
                        block
                        w-full
                        h-[380px]
                        object-cover
                        select-none
                        pointer-events-none
                      "
                    />
                  </div>
                ))}
              </div>

              {/* Mobile Dots */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  mt-5
                "
              >
                {INFRA_PHOTOS.map((p, i) => (
                  <button
                    key={p.alt}
                    onClick={() =>
                      goToMobileSlide(i)
                    }
                    aria-label={`Go to photo ${
                      i + 1
                    }`}
                    className="
                      rounded-full
                      transition-all
                      duration-300
                      p-0
                    "
                    style={{
                      width:
                        i === index
                          ? "34px"
                          : "8px",
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

          {/* =========================================
              CONTENT
              ========================================= */}

          <div
            className="
              order-1
              md:order-2
              w-full
              min-w-0
              max-w-full
            "
          >
            {/* Label */}

            <div
              className="
                font-mono
                text-xs
                tracking-widest
                uppercase
                mb-4
              "
              style={{
                color: "#8FADFF",
              }}
            >
              Institutional Work
            </div>

            {/* Heading */}

            <h2
              className="
                font-display
                font-bold
                text-3xl
                md:text-4xl
                mb-6
                w-full
                max-w-full
                min-w-0
                break-words
              "
              style={{
                color: COLORS.white,
                overflowWrap: "break-word",
              }}
            >
              Sports infrastructure & ground equipment.
            </h2>

            {/* Description */}

            <p
              className="
                font-body
                text-base
                leading-relaxed
                mb-8
                w-full
                max-w-full
                min-w-0
              "
              style={{
                color:
                  "rgba(255,255,255,0.75)",
              }}
            >
              Beyond retail, we work with
              schools, academies, and
              institutions to fit out playing
              fields and training grounds —
              from ground equipment to full
              sporting infrastructure, delivered
              with the same reliability our store
              customers know us for.
            </p>

            {/* Service List */}

            <ul
              className="
                space-y-3
                w-full
                max-w-full
                min-w-0
              "
            >
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
                    min-w-0
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
                      backgroundColor:
                        COLORS.blue,
                    }}
                  />

                  <span className="min-w-0 break-words">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}