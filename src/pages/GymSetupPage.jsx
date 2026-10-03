import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import SEO from "../components/common/SEO";
import { COLORS } from "../config/theme";

const SERVICES = [
  {
    number: "01",
    title: "Commercial Gym Setup",
    description:
      "Complete gym setup solutions for commercial fitness spaces, from equipment selection to flooring and installation requirements.",
  },
  {
    number: "02",
    title: "Home Gym Setup",
    description:
      "Create a practical home gym around your available space, training requirements and equipment budget.",
  },
  {
    number: "03",
    title: "Gym Equipment",
    description:
      "Treadmills, cardio machines, strength equipment, free weights, benches, racks and gym accessories.",
  },
  {
    number: "04",
    title: "Gym Flooring",
    description:
      "Durable gym flooring solutions for workout areas, strength zones and fitness spaces.",
  },
  {
    number: "05",
    title: "Equipment Installation",
    description:
      "Equipment installation support as part of the gym setup process.",
  },
  {
    number: "06",
    title: "Gym Planning",
    description:
      "Plan your equipment mix around the available space, intended use and overall setup budget.",
  },
];

const SETUP_STEPS = [
  {
    number: "01",
    title: "Understand Your Requirement",
    description:
      "We understand your gym type, available space, expected usage and equipment requirements.",
  },
  {
    number: "02",
    title: "Plan the Equipment",
    description:
      "The equipment mix is planned around your available space, training requirements and budget.",
  },
  {
    number: "03",
    title: "Choose Your Setup",
    description:
      "Explore suitable equipment and gym package options based on the requirements of your facility.",
  },
  {
    number: "04",
    title: "Setup & Installation",
    description:
      "Equipment and related setup requirements are coordinated to help prepare the gym for use.",
  },
];

const FAQS = [
  {
    question: "What does a complete gym setup include?",
    answer:
      "A complete gym setup can include gym equipment, cardio machines, strength equipment, free weights, benches, racks, gym flooring and equipment installation depending on the requirements of the facility.",
  },
  {
    question: "Do you provide commercial gym setup in Lucknow?",
    answer:
      "Yes. Kreedum provides gym setup solutions for commercial fitness spaces in Lucknow.",
  },
  {
    question: "Do you provide home gym setup?",
    answer:
      "Yes. Gym setup requirements can be planned for home gyms as well as commercial fitness spaces.",
  },
  {
    question: "Do you provide gym flooring?",
    answer:
      "Yes. Gym flooring can be included as part of a gym setup requirement.",
  },
  {
    question: "Can gym equipment be selected according to budget?",
    answer:
      "Yes. Equipment selection can be planned according to the available budget, space and requirements of the gym.",
  },
  {
    question: "Do you provide gym equipment in Lucknow?",
    answer:
      "Yes. Kreedum Sports provides gym equipment and gym setup solutions in Lucknow.",
  },
];

export default function GymSetupPage() {
  return (
    <>
      <SEO
        title="Gym Setup in Lucknow | Complete Gym Setup Solutions | Kreedum Sports"
        description="Complete gym setup in Lucknow for commercial and home gyms. Explore gym equipment, cardio machines, strength equipment, gym flooring, installation and setup solutions from Kreedum Sports."
        canonical="https://www.kreedum.com/gym-setup-in-lucknow"
      />

      <Nav />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          className="relative min-h-[70vh] flex items-center overflow-hidden"
          style={{
            backgroundColor: COLORS.navy,
          }}
        >
          {/* subtle background glow */}
          <div
            className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{
              backgroundColor: COLORS.blue,
            }}
          />

          <div
            className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 md:pt-48 md:pb-40 w-full"
          >
            <div className="max-w-3xl">
              <div
                className="font-mono text-xs tracking-widest uppercase mb-5 inline-block px-3 py-1 rounded-full"
                style={{
                  color: COLORS.white,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                Gym Setup · Lucknow
              </div>

              <h1
                className="font-display font-bold text-4xl md:text-6xl leading-[1.05] mb-6"
                style={{
                  color: COLORS.white,
                }}
              >
                Complete Gym Setup
                <br />
                <span style={{ color: "#8FADFF" }}>
                  in Lucknow
                </span>
              </h1>

              <p
                className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-9"
                style={{
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                From gym equipment and flooring to installation and complete
                fitness space planning, Kreedum helps you build gyms for
                commercial and home requirements.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/quote"
                  className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus transition-transform hover:scale-105"
                  style={{
                    backgroundColor: COLORS.blue,
                    color: COLORS.white,
                  }}
                >
                  Get a Gym Quote
                </Link>

                <Link
                  to="/gym-packages"
                  className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus border transition-transform hover:scale-105"
                  style={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: COLORS.white,
                  }}
                >
                  Explore Gym Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
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
                  Complete Gym Setup
                </div>

                <h2
                  className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6"
                  style={{
                    color: COLORS.navy,
                  }}
                >
                  From equipment to installation.
                </h2>

                <p
                  className="font-body text-base md:text-lg leading-relaxed mb-5"
                  style={{
                    color: COLORS.slate,
                  }}
                >
                  Setting up a gym involves more than purchasing individual
                  machines. The equipment mix, available space, training
                  requirements, flooring and installation all need to work
                  together.
                </p>

                <p
                  className="font-body text-base leading-relaxed"
                  style={{
                    color: COLORS.slate,
                  }}
                >
                  Kreedum provides gym setup solutions for commercial and
                  home fitness spaces, helping you plan the equipment and
                  requirements around your space and budget.
                </p>
              </div>

              <div
                className="relative overflow-hidden rounded-3xl min-h-[360px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&auto=format&fit=crop&q=80"
                  alt="Commercial gym setup with fitness equipment"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(14,26,61,0.85), transparent 65%)",
                  }}
                />

                <div className="absolute bottom-7 left-7">
                  <div
                    className="font-mono text-xs tracking-widest uppercase mb-2"
                    style={{
                      color: "#8FADFF",
                    }}
                  >
                    Kreedum Gym Setup
                  </div>

                  <div
                    className="font-display font-semibold text-xl"
                    style={{
                      color: COLORS.white,
                    }}
                  >
                    Build your fitness space.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ====================================================== */}
        <section
          id="services"
          className="py-16 md:py-24 lg:py-32"
          style={{
            backgroundColor: COLORS.paper,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-12 md:mb-16">
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{
                  color: COLORS.blue,
                }}
              >
                What We Provide
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-5xl leading-tight"
                style={{
                  color: COLORS.navy,
                }}
              >
                Complete gym setup solutions.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
              {SERVICES.map((service) => (
                <article
                  key={service.number}
                  className="group p-7 md:p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: COLORS.white,
                    border: "1px solid rgba(14,26,61,0.07)",
                  }}
                >
                  <div
                    className="font-mono text-xs mb-5"
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    {service.number}
                  </div>

                  <h3
                    className="font-display font-semibold text-xl md:text-2xl mb-3"
                    style={{
                      color: COLORS.navy,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{
                      color: COLORS.slate,
                    }}
                  >
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMERCIAL / HOME
        ====================================================== */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.white,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {/* Commercial */}
              <article
                className="relative overflow-hidden rounded-3xl p-8 md:p-10 min-h-[360px] flex flex-col justify-end"
                style={{
                  backgroundColor: COLORS.navy,
                }}
              >
                <div
                  className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
                  style={{
                    backgroundColor: COLORS.blue,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="font-mono text-xs tracking-widest uppercase mb-4"
                    style={{
                      color: "#8FADFF",
                    }}
                  >
                    Commercial Gyms
                  </div>

                  <h2
                    className="font-display font-bold text-3xl md:text-4xl mb-4"
                    style={{
                      color: COLORS.white,
                    }}
                  >
                    Build a commercial gym.
                  </h2>

                  <p
                    className="font-body text-sm md:text-base leading-relaxed mb-6"
                    style={{
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    Plan a commercial fitness facility with cardio equipment,
                    strength machines, functional training equipment, free
                    weights, benches, racks and other gym essentials.
                  </p>

                  <Link
                    to="/gym-packages"
                    className="inline-flex font-body font-semibold text-sm kr-focus"
                    style={{
                      color: COLORS.white,
                    }}
                  >
                    Explore Gym Packages
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>

              {/* Home */}
              <article
                className="relative overflow-hidden rounded-3xl p-8 md:p-10 min-h-[360px] flex flex-col justify-end"
                style={{
                  backgroundColor: COLORS.paper,
                  border: "1px solid rgba(14,26,61,0.07)",
                }}
              >
                <div className="relative z-10">
                  <div
                    className="font-mono text-xs tracking-widest uppercase mb-4"
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    Home Gyms
                  </div>

                  <h2
                    className="font-display font-bold text-3xl md:text-4xl mb-4"
                    style={{
                      color: COLORS.navy,
                    }}
                  >
                    Create a home gym.
                  </h2>

                  <p
                    className="font-body text-sm md:text-base leading-relaxed mb-6"
                    style={{
                      color: COLORS.slate,
                    }}
                  >
                    Set up a practical home workout space with equipment
                    selected around your available room, training goals and
                    budget.
                  </p>

                  <Link
                    to="/gym-equipment-in-lucknow"
                    className="inline-flex font-body font-semibold text-sm kr-focus"
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    Explore Gym Equipment
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            BUDGET / PACKAGES
        ====================================================== */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.paper,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20 items-start">
              <div>
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  Gym Setup Budget
                </div>

                <h2
                  className="font-display font-bold text-3xl md:text-5xl leading-tight"
                  style={{
                    color: COLORS.navy,
                  }}
                >
                  Packages for different gym setup budgets.
                </h2>
              </div>

              <div>
                <p
                  className="font-body text-base md:text-lg leading-relaxed mb-5"
                  style={{
                    color: COLORS.slate,
                  }}
                >
                  Gym setup requirements vary depending on the size of the
                  facility, available space, expected usage and equipment mix.
                </p>

                <p
                  className="font-body text-base leading-relaxed mb-7"
                  style={{
                    color: COLORS.slate,
                  }}
                >
                  Kreedum offers different gym package options for commercial
                  gym setups, with different combinations of cardio equipment,
                  strength machines, free weights, benches, racks and other
                  fitness equipment.
                </p>

                <Link
                  to="/gym-packages"
                  className="inline-flex items-center font-body font-semibold text-sm px-6 py-3 rounded-full kr-focus transition-transform hover:scale-105"
                  style={{
                    backgroundColor: COLORS.blue,
                    color: COLORS.white,
                  }}
                >
                  View Gym Packages
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ====================================================== */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.white,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-12 md:mb-16">
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{
                  color: COLORS.blue,
                }}
              >
                Our Approach
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-5xl leading-tight"
                style={{
                  color: COLORS.navy,
                }}
              >
                How a gym setup starts.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {SETUP_STEPS.map((step) => (
                <article
                  key={step.number}
                  className="p-6 md:p-7 rounded-2xl"
                  style={{
                    backgroundColor: COLORS.paper,
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
                    className="font-display font-semibold text-lg md:text-xl mb-3"
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
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            EQUIPMENT LINK
        ====================================================== */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.navy,
          }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{
                    color: "#8FADFF",
                  }}
                >
                  Gym Equipment
                </div>

                <h2
                  className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6"
                  style={{
                    color: COLORS.white,
                  }}
                >
                  Equipment for every kind of training.
                </h2>

                <p
                  className="font-body text-base md:text-lg leading-relaxed mb-8"
                  style={{
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  Explore cardio machines, strength equipment, free weights,
                  benches, racks and fitness accessories available through
                  Kreedum Sports.
                </p>

                <Link
                  to="/gym-equipment-in-lucknow"
                  className="inline-flex font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus transition-transform hover:scale-105"
                  style={{
                    backgroundColor: COLORS.blue,
                    color: COLORS.white,
                  }}
                >
                  Explore Gym Equipment
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-3xl min-h-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1400&auto=format&fit=crop&q=80"
                  alt="Gym strength equipment and dumbbells"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,26,61,0.05), rgba(14,26,61,0.75))",
                  }}
                />

                <div className="absolute bottom-7 left-7">
                  <div
                    className="font-mono text-xs tracking-widest uppercase mb-2"
                    style={{
                      color: "#8FADFF",
                    }}
                  >
                    Kreedum Sports
                  </div>

                  <div
                    className="font-display font-semibold text-2xl"
                    style={{
                      color: COLORS.white,
                    }}
                  >
                    Fitness Equipment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ====================================================== */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.white,
          }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{
                  color: COLORS.blue,
                }}
              >
                FAQ
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-5xl"
                style={{
                  color: COLORS.navy,
                }}
              >
                Gym setup questions.
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border p-5 md:p-6"
                  style={{
                    borderColor: "rgba(14,26,61,0.1)",
                  }}
                >
                  <summary
                    className="cursor-pointer list-none font-display font-semibold text-base md:text-lg pr-8 relative"
                    style={{
                      color: COLORS.navy,
                    }}
                  >
                    {faq.question}

                    <span
                      className="absolute right-0 top-0 text-xl transition-transform group-open:rotate-45"
                      style={{
                        color: COLORS.blue,
                      }}
                    >
                      +
                    </span>
                  </summary>

                  <p
                    className="font-body text-sm leading-relaxed mt-4 max-w-3xl"
                    style={{
                      color: COLORS.slate,
                    }}
                  >
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section
          className="py-16 md:py-24"
          style={{
            backgroundColor: COLORS.paper,
          }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div
              className="rounded-3xl p-8 md:p-14 text-center"
              style={{
                backgroundColor: COLORS.navy,
              }}
            >
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{
                  color: "#8FADFF",
                }}
              >
                Ready to build your gym?
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-5xl mb-5"
                style={{
                  color: COLORS.white,
                }}
              >
                Tell us what you need.
              </h2>

              <p
                className="font-body text-base max-w-xl mx-auto mb-8"
                style={{
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Share your requirements with Kreedum Sports and discuss the
                equipment and setup requirements for your fitness space.
              </p>

              <Link
                to="/quote"
                className="inline-flex font-body font-semibold text-sm px-8 py-4 rounded-full kr-focus transition-transform hover:scale-105"
                style={{
                  backgroundColor: COLORS.blue,
                  color: COLORS.white,
                }}
              >
                Get a Gym Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsAppButton
        message="Hi Kreedum Sports, I'd like to know more about gym setup."
      />
    </>
  );
}