import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import SEO from "../components/common/SEO";
import GymPackageQuoteForm from "../components/gym/GymPackageQuoteForm";
import { COLORS } from "../config/theme";

const PACKAGE = {
  name: "₹10 Lakh Gym Package",
  shortName: "₹10 Lakh",
  slug: "10-lakh-gym-package",
  imageFolder: "/10_lakh",
};

const getPackageImage = (number) =>
  encodeURI(
    `${PACKAGE.imageFolder}/Image_ (${number}).png`
  );

const CATEGORIES = [
  {
    name: "Cardio",
    items: [
      "AF-10 Treadmill",
      "AF-241EL Cross Trainer",
      "AF-295 Spin Bike",
    ],
  },
  {
    name: "Strength",
    items: [
      "AF-4305 Pec Fly / Rear Delt",
      "AF-4312 Chest & Shoulder Press",
      "AF-4313 Lat & Pulley Machine",
      "AF-4314 Leg Extension & Leg Curl",
      "AF-4465 Functional Smith Machine",
      "AF-4958 Leg Press",
      "AF-7711 Adjustable Bench SL",
      "AF-570B Olympic Flat Bench",
      "AF-580B Olympic Incline Bench",
      "AF-130B Seated Preacher Curl",
      "AF-170B Deluxe Dumbbell Bench",
      "AF-790B Flat Bench",
      "AF-1010B Vertical Plate Tree",
      "AF-7236 Dumbbell Rack",
      "Commercial Dumbbells — 300 KG",
      "Rubber Triangle Plates — 200 KG",
      "Plain Olympic Rod — 4 Feet",
      "Plain Olympic Rod — 7 Feet — 3 PCS",
      "Zig Zag Olympic Rod",
    ],
  },
];

const allItems = CATEGORIES.flatMap((category) => category.items);

function EquipmentCard({ name, imageNumber }) {
  const imageSrc = getPackageImage(imageNumber);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center overflow-hidden bg-[#F6F8FC] p-6">
        <img
          src={imageSrc}
          alt={`${name} - ₹10 Lakh Gym Package`}
          loading="lazy"
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
          onError={(e) => {
            console.error("Image failed:", imageSrc);
          }}
        />
      </div>

      <div className="border-t border-slate-100 px-5 py-5">
        <p
          className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: COLORS.blue }}
        >
          Aerofit
        </p>

        <h3
          className="font-display text-base font-bold leading-tight"
          style={{ color: COLORS.navy }}
        >
          {name}
        </h3>
      </div>
    </article>
  );
}

export default function GymPackageDetailPage() {
  let imageNumber = 0;

  return (
    <div
      className="font-body"
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.navy,
      }}
    >
      <SEO
        title="₹10 Lakh Gym Package | Gym Setup in Lucknow | Kreedum Sports"
        description="Explore the ₹10 lakh gym package from Kreedum Sports featuring cardio and strength equipment for a complete gym setup in Lucknow."
        canonical={`https://www.kreedum.com/gym-packages/${PACKAGE.slug}`}
      />

      <Nav />

      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: COLORS.navy }}
        >
          {/* Background image — same style as Gym Equipment page */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=2000&auto=format&fit=crop&q=80"
              alt=""
              className="h-full w-full object-cover"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(14,26,61,0.97) 0%, rgba(14,26,61,0.91) 45%, rgba(14,26,61,0.72) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28 lg:px-10 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_440px]">
              {/* HERO CONTENT */}
              <div className="max-w-2xl">
                <div
                  className="mb-5 inline-block rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{
                    color: COLORS.white,
                    backgroundColor: "rgba(255,255,255,0.10)",
                  }}
                >
                  Gym Packages · Kreedum Sports
                </div>

                <h1
                  className="font-display text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-7xl"
                  style={{ color: COLORS.white }}
                >
                  {PACKAGE.shortName}
                  <br />
                  <span style={{ color: "#8FADFF" }}>
                    Gym Package
                  </span>
                </h1>

                <p
                  className="mt-6 max-w-xl font-body text-base leading-relaxed sm:text-lg"
                  style={{ color: "rgba(255,255,255,0.76)" }}
                >
                  A complete gym equipment package combining cardio and
                  strength equipment for building a professional fitness
                  space.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#equipment"
                    className="rounded-full px-7 py-3.5 font-body text-sm font-semibold transition hover:scale-105"
                    style={{
                      backgroundColor: COLORS.blue,
                      color: COLORS.white,
                    }}
                  >
                    View Equipment
                  </a>

                  <Link
                    to="/gym-packages"
                    className="rounded-full border px-7 py-3.5 font-body text-sm font-semibold transition hover:bg-white hover:text-[#0E1A3D]"
                    style={{
                      borderColor: "rgba(255,255,255,0.30)",
                      color: COLORS.white,
                    }}
                  >
                    All Packages
                  </Link>
                </div>
              </div>

              {/* QUOTE FORM */}
              <GymPackageQuoteForm packageName={PACKAGE.name} />
            </div>
          </div>
        </section>

        {/* PACKAGE SUMMARY */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-3">
            <div className="border-r border-slate-200 px-5 py-7 text-center sm:px-8">
              <p
                className="font-mono text-3xl font-bold"
                style={{ color: COLORS.navy }}
              >
                ₹10L
              </p>

              <p className="mt-1 font-body text-xs uppercase tracking-wider text-slate-500">
                Package
              </p>
            </div>

            <div className="px-5 py-7 text-center sm:px-8">
              <p
                className="font-mono text-3xl font-bold"
                style={{ color: COLORS.navy }}
              >
                {allItems.length}
              </p>

              <p className="mt-1 font-body text-xs uppercase tracking-wider text-slate-500">
                Equipment
              </p>
            </div>

            <div className="col-span-2 border-t border-slate-200 px-5 py-7 text-center sm:col-span-1 sm:border-l sm:border-t-0 sm:px-8">
              <p
                className="font-mono text-3xl font-bold"
                style={{ color: COLORS.navy }}
              >
                2
              </p>

              <p className="mt-1 font-body text-xs uppercase tracking-wider text-slate-500">
                Categories
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
                  Package Overview
                </p>

                <h2
                  className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl"
                  style={{ color: COLORS.navy }}
                >
                  A complete equipment package for your gym.
                </h2>
              </div>

              <p className="max-w-2xl font-body text-base leading-7 text-slate-600">
                Browse the equipment included in the {PACKAGE.name}.
                The package brings together cardio and strength equipment
                for a complete gym setup.
              </p>
            </div>
          </div>
        </section>

        {/* EQUIPMENT */}
        <section
          id="equipment"
          className="py-16 md:py-24"
          style={{ backgroundColor: COLORS.paper }}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            {CATEGORIES.map((category) => (
              <div key={category.name} className="mb-20 last:mb-0">
                <div className="mb-8 flex items-end justify-between border-b border-slate-200 pb-5">
                  <div>
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{ color: COLORS.blue }}
                    >
                      Equipment Category
                    </p>

                    <h2
                      className="mt-2 font-display text-3xl font-bold sm:text-4xl"
                      style={{ color: COLORS.navy }}
                    >
                      {category.name}
                    </h2>
                  </div>

                  <span className="font-mono text-xs text-slate-400">
                    {String(category.items.length).padStart(2, "0")} ITEMS
                  </span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => {
                    imageNumber += 1;

                    return (
                      <EquipmentCard
                        key={item}
                        name={item}
                        imageNumber={imageNumber}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: COLORS.white }}
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div
              className="rounded-3xl p-8 text-center md:p-14"
              style={{ backgroundColor: COLORS.navy }}
            >
              <p
                className="mb-4 font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "#8FADFF" }}
              >
                Ready to build your gym?
              </p>

              <h2
                className="font-display text-3xl font-bold md:text-5xl"
                style={{ color: COLORS.white }}
              >
                Interested in the ₹10 Lakh package?
              </h2>

              <p
                className="mx-auto mb-8 mt-5 max-w-xl font-body text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Share your gym requirements with Kreedum Sports and
                enquire about this package.
              </p>

              <a
                href="#top"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="inline-flex rounded-full px-8 py-4 font-body text-sm font-semibold"
                style={{
                  backgroundColor: COLORS.blue,
                  color: COLORS.white,
                }}
              >
                Get a Package Quote
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <WhatsAppButton
        message="Hi Kreedum Sports, I'd like to know more about the ₹10 Lakh Gym Package."
      />
    </div>
  );
}