import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";
import { COLORS } from "../config/theme";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p>
        These Terms &amp; Conditions govern your use of the Kreedum Sports
        website and your interactions with Kreedum International Private
        Limited through the website.
      </p>
    ),
  },
  {
    title: "2. Website Information",
    content: (
      <p>
        We make reasonable efforts to keep information on the website accurate
        and useful. Product availability, specifications, prices, images,
        package contents and service details may change without prior notice.
      </p>
    ),
  },
  {
    title: "3. Product Enquiries and Quotations",
    content: (
      <>
        <p>
          Enquiry forms and contact options on the website are intended to
          allow customers to communicate their requirements to Kreedum Sports.
        </p>

        <p>
          A request submitted through the website does not by itself
          constitute a confirmed order, purchase agreement or guarantee of
          product availability.
        </p>

        <p>
          Quotations, availability, delivery arrangements, installation
          requirements and other commercial terms may be confirmed separately
          by Kreedum Sports.
        </p>
      </>
    ),
  },
  {
    title: "4. Product Images and Specifications",
    content: (
      <p>
        Product images are provided for identification and presentation
        purposes. Actual products may vary in appearance, configuration or
        finish. Product specifications are subject to manufacturer and
        supplier updates.
      </p>
    ),
  },
  {
    title: "5. Gym Packages",
    content: (
      <p>
        Gym package pages describe equipment selections associated with the
        respective package. Package contents, quantities, pricing and
        availability should be confirmed with Kreedum Sports before placing an
        order.
      </p>
    ),
  },
  {
    title: "6. External Links",
    content: (
      <p>
        The website may contain links to third-party websites, social media
        platforms or other external services. These links are provided for
        convenience, and Kreedum Sports does not control the content or
        policies of those external websites.
      </p>
    ),
  },
  {
    title: "7. Intellectual Property",
    content: (
      <p>
        Unless otherwise stated, website content including text, branding,
        logos, graphics and original materials associated with Kreedum Sports
        belongs to or is used by Kreedum International Private Limited and may
        not be reproduced, copied or distributed without appropriate
        permission.
      </p>
    ),
  },
  {
    title: "8. Website Use",
    content: (
      <p>
        You agree not to use the website for unlawful purposes, to interfere
        with its operation, to attempt unauthorized access, or to submit
        knowingly false or misleading information.
      </p>
    ),
  },
  {
    title: "9. Limitation of Information",
    content: (
      <p>
        Website content is provided for general informational and enquiry
        purposes. Commercial terms, product specifications, availability,
        delivery, installation and other order-specific matters should be
        confirmed directly with Kreedum Sports.
      </p>
    ),
  },
  {
    title: "10. Changes to These Terms",
    content: (
      <p>
        Kreedum Sports may update these Terms &amp; Conditions from time to
        time. Updated terms will be published on this page.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div
      className="font-body"
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.navy,
      }}
    >
      <SEO
        title="Terms & Conditions | Kreedum Sports"
        description="Read the Terms and Conditions governing use of the Kreedum Sports website, product enquiries, quotations, gym packages and website content."
        canonical="https://www.kreedum.com/terms-and-conditions"
      />

      <Nav />

      <main>
        {/* HEADER */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: COLORS.navy }}
        >
          <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 md:py-28">
            <p
              className="font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: "#8FADFF" }}
            >
              Legal
            </p>

            <h1
              className="mt-4 font-display text-4xl font-bold sm:text-5xl md:text-6xl"
              style={{ color: COLORS.white }}
            >
              Terms &amp; Conditions
            </h1>

            <p
              className="mt-5 max-w-2xl text-base leading-7"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Terms governing the use of the Kreedum Sports website and
              information submitted through it.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="mb-10 rounded-2xl border border-slate-200 bg-[#F6F8FC] p-6">
              <p className="text-sm leading-6 text-slate-600">
                <strong>Last updated:</strong> October 3, 2026
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 md:text-base">
                    {section.content}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
                  11. Contact
                </h2>

                <div className="mt-4 space-y-2 text-sm leading-7 text-slate-600 md:text-base">
                  <p>
                    <strong>Kreedum International Private Limited</strong>
                  </p>

                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@kreedum.com"
                      className="text-blue-600 hover:underline"
                    >
                      info@kreedum.com
                    </a>
                  </p>

                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+917570002458"
                      className="text-blue-600 hover:underline"
                    >
                      +91 7570002458
                    </a>
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-16 border-t border-slate-200 pt-8">
              <Link
                to="/privacy-policy"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Read Privacy Policy →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}