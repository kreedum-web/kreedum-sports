import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import SEO from "../components/common/SEO";
import { COLORS } from "../config/theme";
import { scrollToId } from "../utils/scrollToId";

const GYM_CATEGORIES = [
  {
    number: "01",
    title: "Cardio Equipment",
    description:
      "Treadmills, cross trainers, exercise bikes, and cardio equipment for home and commercial fitness spaces.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Strength Equipment",
    description:
      "Strength machines, benches, racks, and free-weight equipment for complete strength training.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1200&auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Free Weights",
    description:
      "Dumbbells, barbells, weight plates, kettlebells, and essential accessories for strength training.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Home Fitness",
    description:
      "Practical fitness equipment for home gyms, personal training spaces, and everyday workouts.",
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&auto=format&fit=crop&q=80",
  },
];

const EQUIPMENT = [
  "Treadmills",
  "Exercise Bikes",
  "Cross Trainers",
  "Multi Gyms",
  "Strength Machines",
  "Dumbbells",
  "Weight Plates",
  "Benches",
  "Power Racks",
  "Kettlebells",
  "Gym Accessories",
  "Home Fitness Equipment",
];

const FAQS = [
  {
    question: "Do you supply gym equipment in Lucknow?",
    answer:
      "Yes. Kreedum Sports is based in Aminabad, Lucknow and supplies fitness machines, gym equipment, and accessories.",
  },
  {
    question: "Do you sell Aerofit fitness equipment?",
    answer:
      "Kreedum Sports is an official Aerofit dealer and offers Aerofit fitness machines and equipment.",
  },
  {
    question: "Do you provide equipment for commercial gyms?",
    answer:
      "We supply fitness machines and gym equipment for different fitness requirements. Contact us with your requirements for a quote.",
  },
  {
    question: "Can I visit the Kreedum store?",
    answer:
      "Yes. You can visit the Kreedum store in Aminabad, Lucknow to discuss your equipment requirements.",
  },
];

export default function GymEquipmentPage() {
 

  const scrollTo = (id) => {
    scrollToId(id);
  };

  return (
    <div
      className="font-body"
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.navy,
      }}
    >
     <SEO
  title="Gym Equipment in Lucknow | Kreedum Sports"
  description="Buy gym equipment and fitness machines in Lucknow from Kreedum Sports. Explore treadmills, strength equipment, dumbbells, cardio machines and home fitness equipment. Official Aerofit dealer."
  canonical="https://www.kreedum.com/gym-equipment-in-lucknow"
/>

      <Nav />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{ backgroundColor: COLORS.navy }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=2000&auto=format&fit=crop&q=80"
            alt="Gym equipment and fitness machines"
            className="w-full h-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(14,26,61,0.96) 0%, rgba(14,26,61,0.86) 42%, rgba(14,26,61,0.42) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-28 md:pt-48 md:pb-40">
          <div className="max-w-2xl">
            <div
              className="font-mono text-xs tracking-widest uppercase mb-5 inline-block px-3 py-1 rounded-full"
              style={{
                color: COLORS.white,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              Gym Equipment · Lucknow
            </div>

           <h1
  className="font-display font-bold text-4xl md:text-6xl leading-[1.05] mb-6"
  style={{ color: COLORS.white }}
>
  Gym Equipment
  <br />
  <span style={{ color: "#8FADFF" }}>
    in Lucknow
  </span>
</h1>

            <p
              className="font-body text-base md:text-lg leading-relaxed max-w-xl mb-9"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              Explore fitness machines, strength equipment, cardio machines,
  free weights, and gym accessories for home and professional
  fitness spaces in Lucknow.
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

              <button
                onClick={() => scrollTo("equipment")}
                className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus border transition-transform hover:scale-105"
                style={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: COLORS.white,
                }}
              >
                Explore Equipment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: COLORS.white }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: COLORS.blue }}
              >
                Fitness Machines
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6"
                style={{ color: COLORS.navy }}
              >
                Everything you need for your fitness space.
              </h2>

              <p
                className="font-body text-base md:text-lg leading-relaxed mb-5"
                style={{ color: COLORS.slate }}
              >
                From treadmills and cardio machines to strength equipment,
                dumbbells and gym accessories, Kreedum Sports provides fitness
                equipment for different training environments.
              </p>

              <p
                className="font-body text-base leading-relaxed"
                style={{ color: COLORS.slate }}
              >
                We are an official Aerofit dealer, with fitness machines and
                equipment available through our Aminabad store in Lucknow.
              </p>
            </div>

            <div
              className="relative overflow-hidden rounded-3xl"
              style={{ minHeight: "360px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&auto=format&fit=crop&q=80"
                alt="Gym dumbbells and strength equipment"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14,26,61,0.8), transparent 65%)",
                }}
              />

              <div className="absolute bottom-7 left-7">
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#8FADFF" }}
                >
                  Kreedum Sports
                </div>

                <div
                  className="font-display font-semibold text-xl"
                  style={{ color: COLORS.white }}
                >
                  Fitness Machines & Accessories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORIES
      ========================================================= */}
      <section
        id="equipment"
        className="py-16 md:py-24 lg:py-32"
        style={{ backgroundColor: COLORS.paper }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: COLORS.blue }}
            >
              Explore Equipment
            </div>

            <h2
              className="font-display font-bold text-3xl md:text-5xl leading-tight"
              style={{ color: COLORS.navy }}
            >
              Fitness equipment for every kind of training.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {GYM_CATEGORIES.map((item) => (
              <article
                key={item.number}
                className="relative group overflow-hidden rounded-2xl min-h-[300px] flex flex-col justify-end"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(14,26,61,0.95), rgba(14,26,61,0.25) 70%)",
                  }}
                />

                <div className="relative z-10 p-7 md:p-8">
                  <div
                    className="font-mono text-xs mb-3"
                    style={{ color: "#8FADFF" }}
                  >
                    {item.number}
                  </div>

                  <h3
                    className="font-display font-semibold text-xl md:text-2xl mb-2"
                    style={{ color: COLORS.white }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="font-body text-sm leading-relaxed max-w-md"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EQUIPMENT LIST
      ========================================================= */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: COLORS.white }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">
            <div>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: COLORS.blue }}
              >
                What We Offer
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-4xl leading-tight"
                style={{ color: COLORS.navy }}
              >
                Equipment for complete workouts.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              {EQUIPMENT.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-4 border-b"
                  style={{
                    borderColor: "rgba(14,26,61,0.1)",
                  }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: COLORS.blue }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="font-body text-sm md:text-base font-medium"
                    style={{ color: COLORS.navy }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AEROFIT
      ========================================================= */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: COLORS.navy }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "#8FADFF" }}
              >
                Official Dealer
              </div>

              <h2
                className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6"
                style={{ color: COLORS.white }}
              >
                Aerofit® fitness equipment.
              </h2>

              <p
                className="font-body text-base md:text-lg leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Kreedum Sports is an official Aerofit® dealer, offering
                treadmills, gym equipment, and home fitness gear.
              </p>

              <Link
                to="/quote"
                className="inline-flex font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus transition-transform hover:scale-105"
                style={{
                  backgroundColor: COLORS.blue,
                  color: COLORS.white,
                }}
              >
                Request Equipment Quote
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-3xl min-h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1400&auto=format&fit=crop&q=80"
                alt="Fitness machines in a gym"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,26,61,0.05), rgba(14,26,61,0.65))",
                }}
              />

              <div className="absolute bottom-7 left-7">
                <span
                  className="font-display font-semibold text-2xl"
                  style={{ color: COLORS.white }}
                >
                  Train better.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY KREEDUM
      ========================================================= */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: COLORS.paper }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: COLORS.blue }}
            >
              Why Kreedum
            </div>

            <h2
              className="font-display font-bold text-3xl md:text-5xl"
              style={{ color: COLORS.navy }}
            >
              A local fitness equipment partner in Lucknow.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                title: "Aminabad Store",
                text: "Visit us in Aminabad, Lucknow and discuss your fitness equipment requirements.",
              },
              {
                number: "02",
                title: "Aerofit Dealer",
                text: "Access Aerofit® fitness machines and equipment through our dealership.",
              },
              {
                number: "03",
                title: "Sports Expertise",
                text: "Kreedum works across sports equipment, fitness equipment and sports infrastructure.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="p-7 rounded-2xl"
                style={{
                  backgroundColor: COLORS.white,
                  boxShadow: "0 1px 3px rgba(14,26,61,0.06)",
                }}
              >
                <div
                  className="font-mono text-xs mb-6"
                  style={{ color: COLORS.blue }}
                >
                  {item.number}
                </div>

                <h3
                  className="font-display font-semibold text-xl mb-3"
                  style={{ color: COLORS.navy }}
                >
                  {item.title}
                </h3>

                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: COLORS.slate }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: COLORS.white }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: COLORS.blue }}
            >
              FAQ
            </div>

            <h2
              className="font-display font-bold text-3xl md:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Gym equipment questions.
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
                  style={{ color: COLORS.navy }}
                >
                  {faq.question}

                  <span
                    className="absolute right-0 top-0 text-xl transition-transform group-open:rotate-45"
                    style={{ color: COLORS.blue }}
                  >
                    +
                  </span>
                </summary>

                <p
                  className="font-body text-sm leading-relaxed mt-4 max-w-3xl"
                  style={{ color: COLORS.slate }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: COLORS.paper }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="rounded-3xl p-8 md:p-14 text-center"
            style={{ backgroundColor: COLORS.navy }}
          >
            <div
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: "#8FADFF" }}
            >
              Ready to build your gym?
            </div>

            <h2
              className="font-display font-bold text-3xl md:text-5xl mb-5"
              style={{ color: COLORS.white }}
            >
              Tell us what you need.
            </h2>

            <p
              className="font-body text-base max-w-xl mx-auto mb-8"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Share your requirements with Kreedum Sports and get a quote for
              your fitness equipment.
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

      <Footer />

      <WhatsAppButton
        message="Hi Kreedum Sports, I'd like to know more about gym equipment and fitness machines."
      />
    </div>
  );
}