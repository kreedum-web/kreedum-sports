import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import SEO from "../components/common/SEO";
import { COLORS } from "../config/theme";

const AREAS = [
  {
    number: "01",
    title: "Sports Equipment",
    description:
      "Sports goods and equipment for athletes, schools, academies, clubs, institutions and sports enthusiasts.",
  },
  {
    number: "02",
    title: "Fitness Equipment",
    description:
      "Cardio machines, strength equipment, free weights and fitness products for home and commercial gyms.",
  },
  {
    number: "03",
    title: "Gym Setup",
    description:
      "Complete gym equipment solutions covering equipment selection, packages and setup requirements.",
  },
  {
    number: "04",
    title: "Sports Infrastructure",
    description:
      "Solutions for sports spaces and infrastructure, including sports flooring, artificial turf and related requirements.",
  },
];

export default function AboutUsPage() {
  return (
    <div
      className="font-body"
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.navy,
      }}
    >
      <SEO
        title="About Us | Kreedum Sports"
        description="Learn about Kreedum Sports, a sports and fitness equipment company providing sports goods, gym equipment, gym setup solutions and sports infrastructure services."
        canonical="https://www.kreedum.com/about-us"
      />

      <Nav />

      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: COLORS.navy }}
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=2000&auto=format&fit=crop&q=80"
              alt=""
              className="h-full w-full object-cover"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(14,26,61,0.97) 0%, rgba(14,26,61,0.90) 50%, rgba(14,26,61,0.70) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 py-28 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <div
                className="mb-5 inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{
                  color: COLORS.white,
                  backgroundColor: "rgba(255,255,255,0.10)",
                }}
              >
                About Kreedum Sports
              </div>

              <h1
                className="font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl"
                style={{ color: COLORS.white }}
              >
                Built around
                <br />
                <span style={{ color: "#8FADFF" }}>
                  sport &amp; fitness.
                </span>
              </h1>

              <p
                className="mt-7 max-w-2xl text-base leading-7 sm:text-lg"
                style={{ color: "rgba(255,255,255,0.76)" }}
              >
                Kreedum Sports provides sports goods, fitness equipment, gym
                setup solutions and sports infrastructure services for
                individuals, institutions, businesses and fitness spaces.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p
                  className="font-mono text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: COLORS.blue }}
                >
                  Who We Are
                </p>

                <h2
                  className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl"
                  style={{ color: COLORS.navy }}
                >
                  One place for sports, fitness and gym requirements.
                </h2>
              </div>

              <div className="max-w-2xl space-y-5 text-base leading-7 text-slate-600">
                <p>
                  Kreedum International Private Limited operates Kreedum
                  Sports, a sports and fitness business serving customers
                  looking for equipment, products and solutions for active
                  spaces.
                </p>

                <p>
                  Our offering extends from individual sports and fitness
                  products to commercial gym equipment and complete gym setup
                  requirements.
                </p>

                <p>
                  We also work across sports infrastructure requirements,
                  connecting equipment and physical sports spaces under the
                  Kreedum brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: COLORS.paper }}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-12">
              <p
                className="font-mono text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: COLORS.blue }}
              >
                What We Do
              </p>

              <h2
                className="mt-3 font-display text-3xl font-bold sm:text-4xl"
                style={{ color: COLORS.navy }}
              >
                Our areas of work
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {AREAS.map((area) => (
                <article
                  key={area.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8"
                >
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: COLORS.blue }}
                  >
                    {area.number}
                  </span>

                  <h3
                    className="mt-4 font-display text-2xl font-bold"
                    style={{ color: COLORS.navy }}
                  >
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GYM SETUP */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div
              className="overflow-hidden rounded-3xl p-8 md:p-14"
              style={{ backgroundColor: COLORS.navy }}
            >
              <div className="max-w-3xl">
                <p
                  className="font-mono text-xs uppercase tracking-[0.2em]"
                  style={{ color: "#8FADFF" }}
                >
                  Gym Solutions
                </p>

                <h2
                  className="mt-4 font-display text-3xl font-bold md:text-5xl"
                  style={{ color: COLORS.white }}
                >
                  From individual equipment to complete gym setups.
                </h2>

                <p
                  className="mt-5 max-w-2xl text-base leading-7"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Explore our gym equipment, setup solutions and equipment
                  packages for different requirements and budgets.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/gym-equipment-in-lucknow"
                    className="rounded-full px-6 py-3.5 text-sm font-semibold"
                    style={{
                      backgroundColor: COLORS.blue,
                      color: COLORS.white,
                    }}
                  >
                    Gym Equipment
                  </Link>

                  <Link
                    to="/gym-setup-in-lucknow"
                    className="rounded-full border px-6 py-3.5 text-sm font-semibold"
                    style={{
                      borderColor: "rgba(255,255,255,0.25)",
                      color: COLORS.white,
                    }}
                  >
                    Gym Setup
                  </Link>

                  <Link
                    to="/gym-packages"
                    className="rounded-full border px-6 py-3.5 text-sm font-semibold"
                    style={{
                      borderColor: "rgba(255,255,255,0.25)",
                      color: COLORS.white,
                    }}
                  >
                    Gym Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="border-t border-slate-100 py-16 md:py-20"
          style={{ backgroundColor: COLORS.paper }}
        >
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <p
              className="font-mono text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: COLORS.blue }}
            >
              Talk to Kreedum
            </p>

            <h2
              className="mt-3 font-display text-3xl font-bold sm:text-4xl"
              style={{ color: COLORS.navy }}
            >
              Have a sports or fitness requirement?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600">
              Contact our team to discuss your equipment, gym setup or sports
              requirements.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/quote"
                className="rounded-full px-7 py-3.5 text-sm font-semibold"
                style={{
                  backgroundColor: COLORS.blue,
                  color: COLORS.white,
                }}
              >
                Get a Quote
              </Link>

              <a
                href="tel:+917570002458"
                className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold"
                style={{ color: COLORS.navy }}
              >
                +91 7570002458
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}