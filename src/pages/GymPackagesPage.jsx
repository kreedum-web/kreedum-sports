// src/pages/GymPackagesPage.jsx

import { Link } from "react-router-dom";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import SEO from "../components/common/SEO";

import { COLORS } from "../config/theme";
import { PHOTOS } from "../data/photos";

const packages = [
  {
    id: "10-lakh",
    number: "01",
    label: "COMMERCIAL GYM PACKAGE",
    title: "Complete Commercial Gym Setup",
    price: "₹9,99,999",
    description:
      "A complete commercial gym setup combining strength, cardio, free weights, benches, flooring and essential gym accessories.",
    features: [
      "Strength Equipment",
      "Cardio Equipment",
      "Free Weights",
      "Benches & Racks",
      "Gym Flooring",
      "Installation Support",
    ],
    href: "/gym-packages/10-lakh-gym-package",
  },

  {
    id: "17-5-lakh",
    number: "02",
    label: "COMMERCIAL GYM PACKAGE",
    title: "Complete Commercial Gym Setup",
    price: "₹17,50,000",
    description:
      "A larger commercial gym setup with a broader equipment range for facilities planning a more complete training environment.",
    features: [
      "Strength Equipment",
      "Cardio Equipment",
      "Functional Training",
      "Free Weights",
      "Benches & Racks",
      "Installation Support",
    ],
    href: "/gym-packages/17-5-lakh-gym-package",
  },

  {
    id: "26-5-lakh",
    number: "03",
    label: "COMMERCIAL GYM PACKAGE",
    title: "Complete Commercial Gym Setup",
    price: "₹26,50,000",
    description:
      "A comprehensive commercial gym setup for larger facilities requiring an extensive combination of strength, cardio and functional equipment.",
    features: [
      "Premium Strength Equipment",
      "Cardio Equipment",
      "Functional Training",
      "Free Weights",
      "Gym Accessories",
      "Installation Support",
    ],
    href: "/gym-packages/26-5-lakh-gym-package",
  },
];

const categories = [
  {
    number: "01",
    title: "Cardio Equipment",
    description:
      "Treadmills, cross trainers and exercise bikes.",
  },
  {
    number: "02",
    title: "Strength Equipment",
    description:
      "Machines, benches, racks and strength stations.",
  },
  {
    number: "03",
    title: "Functional Training",
    description:
      "Functional trainers and equipment for varied training.",
  },
  {
    number: "04",
    title: "Free Weights",
    description:
      "Dumbbells, barbells, plates and related equipment.",
  },
  {
    number: "05",
    title: "Gym Flooring",
    description:
      "Flooring solutions for commercial fitness spaces.",
  },
  {
    number: "06",
    title: "Setup Support",
    description:
      "Support for planning and setting up your gym.",
  },
];

export default function GymPackagesPage() {
  return (
    <div
      className="font-body"
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.navy,
      }}
    >
      <SEO
        title="Gym Packages in Lucknow | Commercial Gym Setup Packages | Kreedum Sports"
        description="Explore commercial gym setup packages from Kreedum Sports. Compare complete gym packages starting from ₹9,99,999 for professional fitness facilities."
        canonical="https://www.kreedum.com/gym-packages"
      />

      <Nav />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="relative overflow-hidden"
          style={{
            backgroundColor: COLORS.navy,
          }}
        >
          {/* Background Image */}

          <div className="absolute inset-0">
            <img
              src={PHOTOS.interior2}
              alt="Commercial gym equipment"
              className="w-full h-full object-cover"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(14,26,61,0.97) 0%, rgba(14,26,61,0.88) 42%, rgba(14,26,61,0.48) 100%)",
              }}
            />
          </div>

          {/* Hero Content */}

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 md:pt-48 md:pb-40">
            <div className="max-w-3xl">

              <div
                className="font-mono text-xs tracking-widest uppercase mb-5 inline-block px-3 py-1 rounded-full"
                style={{
                  color: COLORS.white,
                  backgroundColor:
                    "rgba(255,255,255,0.10)",
                }}
              >
                Kreedum Sports · Gym Setup
              </div>

              <h1
                className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-6"
                style={{
                  color: COLORS.white,
                }}
              >
                Commercial Gym
                <br />

                <span
                  style={{
                    color: "#8FADFF",
                  }}
                >
                  Packages
                </span>
              </h1>

              <p
                className="font-body text-base md:text-lg leading-relaxed max-w-2xl"
                style={{
                  color:
                    "rgba(255,255,255,0.78)",
                }}
              >
                Complete gym setup packages for
                commercial fitness facilities, bringing
                together equipment, flooring and setup
                requirements in one solution.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">

                <a
                  href="#packages"
                  className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus transition-transform hover:scale-105"
                  style={{
                    backgroundColor: COLORS.blue,
                    color: COLORS.white,
                  }}
                >
                  Explore Packages
                </a>

                <Link
                  to="/gym-setup-in-lucknow"
                  className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus border transition-transform hover:scale-105"
                  style={{
                    borderColor:
                      "rgba(255,255,255,0.3)",
                    color: COLORS.white,
                  }}
                >
                  Explore Gym Setup
                </Link>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.white,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

              <div>

                <div
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  Choose Your Setup
                </div>

                <h2
                  className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6"
                  style={{
                    color: COLORS.navy,
                  }}
                >
                  Gym packages for
                  different facility requirements.
                </h2>

              </div>

              <div>

                <p
                  className="font-body text-base md:text-lg leading-relaxed"
                  style={{
                    color: COLORS.slate,
                  }}
                >
                  Whether you are starting a new
                  commercial gym or expanding an
                  existing facility, Kreedum Sports
                  offers complete setup packages
                  across different equipment and
                  budget requirements.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            PACKAGES
        ===================================================== */}

        <section
          id="packages"
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.paper,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-2xl mb-12">

              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{
                  color: COLORS.blue,
                }}
              >
                Gym Packages
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-5xl leading-tight mb-5"
                style={{
                  color: COLORS.navy,
                }}
              >
                Complete commercial
                gym setups.
              </h2>

              <p
                className="font-body text-base leading-relaxed"
                style={{
                  color: COLORS.slate,
                }}
              >
                Choose a package based on your
                facility requirements and explore
                the detailed package information.
              </p>

            </div>

            {/* PACKAGE GRID */}

            <div className="grid md:grid-cols-3 gap-5 md:gap-6">

              {packages.map((pkg) => (
                <article
                  key={pkg.id}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor:
                      COLORS.white,
                    border:
                      "1px solid rgba(14,26,61,0.08)",
                  }}
                >

                  {/* Card Header */}

                  <div
                    className="p-7 md:p-8"
                    style={{
                      backgroundColor:
                        COLORS.navy,
                    }}
                  >

                    <div className="flex items-center justify-between mb-7">

                      <span
                        className="font-mono text-xs tracking-widest"
                        style={{
                          color: "#8FADFF",
                        }}
                      >
                        {pkg.number}
                      </span>

                      <span
                        className="font-mono text-[10px] tracking-widest uppercase"
                        style={{
                          color:
                            "rgba(255,255,255,0.58)",
                        }}
                      >
                        {pkg.label}
                      </span>

                    </div>

                    <h3
                      className="font-display font-bold text-2xl leading-tight mb-6"
                      style={{
                        color: COLORS.white,
                      }}
                    >
                      {pkg.title}
                    </h3>

                    <div
                      className="font-display font-bold text-3xl md:text-4xl"
                      style={{
                        color: COLORS.white,
                      }}
                    >
                      {pkg.price}
                    </div>

                  </div>

                  {/* Card Body */}

                  <div className="flex flex-col flex-1 p-7 md:p-8">

                    <p
                      className="font-body text-sm leading-relaxed mb-7"
                      style={{
                        color: COLORS.slate,
                      }}
                    >
                      {pkg.description}
                    </p>

                    <div
                      className="font-mono text-[10px] tracking-widest uppercase mb-4"
                      style={{
                        color: COLORS.blue,
                      }}
                    >
                      PACKAGE INCLUDES
                    </div>

                    <ul className="space-y-3 mb-8">

                      {pkg.features.map(
                        (feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3"
                          >

                            <span
                              className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                              style={{
                                backgroundColor:
                                  COLORS.tint,
                                color:
                                  COLORS.blue,
                              }}
                            >
                              ✓
                            </span>

                            <span
                              className="font-body text-sm"
                              style={{
                                color:
                                  COLORS.navy,
                              }}
                            >
                              {feature}
                            </span>

                          </li>
                        )
                      )}

                    </ul>

                    <div className="mt-auto">

                      <Link
                        to={pkg.href}
                        className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl font-body font-semibold text-sm transition-all duration-200"
                        style={{
                          backgroundColor:
                            COLORS.navy,
                          color: COLORS.white,
                        }}
                      >
                        <span>
                          View Package Details
                        </span>

                        <span
                          className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            INCLUDED CATEGORIES
        ===================================================== */}

        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.white,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">

              {/* LEFT */}

              <div>

                <div
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  Complete Solution
                </div>

                <h2
                  className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6"
                  style={{
                    color: COLORS.navy,
                  }}
                >
                  More than just
                  gym equipment.
                </h2>

                <p
                  className="font-body text-base leading-relaxed mb-7"
                  style={{
                    color: COLORS.slate,
                  }}
                >
                  A commercial gym requires more
                  than individual machines. Kreedum
                  Sports helps bring together the
                  major equipment and setup
                  requirements needed for a complete
                  fitness facility.
                </p>

                <Link
                  to="/gym-setup-in-lucknow"
                  className="inline-flex font-body font-semibold text-sm"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  Explore Gym Setup Solutions
                  <span className="ml-2">
                    →
                  </span>
                </Link>

              </div>

              {/* RIGHT */}

              <div className="grid sm:grid-cols-2 gap-3">

                {categories.map((category) => (
                  <div
                    key={category.number}
                    className="p-5 md:p-6 rounded-2xl"
                    style={{
                      backgroundColor:
                        COLORS.paper,
                    }}
                  >

                    <div
                      className="font-mono text-xs mb-4"
                      style={{
                        color: COLORS.blue,
                      }}
                    >
                      {category.number}
                    </div>

                    <h3
                      className="font-display font-semibold text-lg mb-2"
                      style={{
                        color: COLORS.navy,
                      }}
                    >
                      {category.title}
                    </h3>

                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{
                        color: COLORS.slate,
                      }}
                    >
                      {category.description}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.paper,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-2xl mb-12">

              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{
                  color: COLORS.blue,
                }}
              >
                Gym Setup Process
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-5xl leading-tight"
                style={{
                  color: COLORS.navy,
                }}
              >
                From package selection
                to gym setup.
              </h2>

            </div>

            <div className="grid md:grid-cols-4 gap-4">

              {[
                {
                  number: "01",
                  title: "Choose",
                  text: "Select a package based on your facility requirements.",
                },
                {
                  number: "02",
                  title: "Discuss",
                  text: "Share your space, equipment and gym requirements.",
                },
                {
                  number: "03",
                  title: "Plan",
                  text: "Finalize the equipment combination and setup requirements.",
                },
                {
                  number: "04",
                  title: "Setup",
                  text: "Move forward with equipment supply and gym setup support.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor:
                      COLORS.white,
                  }}
                >

                  <div
                    className="font-mono text-xs mb-7"
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    {step.number}
                  </div>

                  <h3
                    className="font-display font-semibold text-xl mb-3"
                    style={{
                      color: COLORS.navy,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{
                      color: COLORS.slate,
                    }}
                  >
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.white,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">

            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                backgroundColor:
                  COLORS.navy,
              }}
            >

              {/* subtle image */}

              <div className="absolute inset-0 opacity-20">
                <img
                  src={PHOTOS.interior2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(14,26,61,0.98), rgba(14,26,61,0.78))",
                }}
              />

              <div className="relative z-10 p-8 md:p-14">

                <div className="max-w-2xl">

                  <div
                    className="font-mono text-xs tracking-widest uppercase mb-4"
                    style={{
                      color: "#8FADFF",
                    }}
                  >
                    Need a Custom Setup?
                  </div>

                  <h2
                    className="font-display font-bold text-3xl md:text-5xl leading-tight mb-5"
                    style={{
                      color: COLORS.white,
                    }}
                  >
                    Build your gym
                    around your requirements.
                  </h2>

                  <p
                    className="font-body text-base md:text-lg leading-relaxed mb-8"
                    style={{
                      color:
                        "rgba(255,255,255,0.72)",
                    }}
                  >
                    Tell us about your gym space,
                    budget and equipment requirements.
                    Our team can help you plan the setup.
                  </p>

                  <Link
                    to="/quote"
                    className="inline-flex font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus transition-transform hover:scale-105"
                    style={{
                      backgroundColor:
                        COLORS.blue,
                      color: COLORS.white,
                    }}
                  >
                    Get a Quote
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}