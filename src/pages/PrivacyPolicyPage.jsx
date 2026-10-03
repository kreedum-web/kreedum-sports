import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";
import { COLORS } from "../config/theme";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide when you
          contact us, request a quote, enquire about products or services, or
          otherwise communicate with Kreedum Sports.
        </p>

        <p>
          This information may include your name, phone number, email address,
          company or organization name, location, requirements and other
          information that you choose to provide.
        </p>
      </>
    ),
  },
  {
    title: "2. How We Use Information",
    content: (
      <>
        <p>
          Information provided to us may be used to respond to enquiries,
          prepare quotations, communicate about products and services,
          coordinate requested services, and provide customer support.
        </p>

        <p>
          We may also use information where reasonably necessary to operate,
          maintain and improve our website and business services.
        </p>
      </>
    ),
  },
  {
    title: "3. Communications",
    content: (
      <p>
        If you contact Kreedum Sports by phone, email, WhatsApp, enquiry form
        or another communication channel, we may use the information you
        provide to respond to your request.
      </p>
    ),
  },
  {
    title: "4. Sharing of Information",
    content: (
      <p>
        We do not intend to sell personal information submitted through our
        website. Information may be shared with service providers, business
        partners or other parties where reasonably necessary to respond to an
        enquiry, provide a requested service, process an order, or comply with
        applicable legal requirements.
      </p>
    ),
  },
  {
    title: "5. Website and Third-Party Services",
    content: (
      <p>
        Our website may contain links to third-party websites or services.
        Those third parties maintain their own privacy practices and policies.
        Kreedum Sports is not responsible for the privacy practices of
        external websites that you choose to visit.
      </p>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p>
        We take reasonable measures to protect information provided to us.
        However, no method of transmission or electronic storage can be
        guaranteed to be completely secure.
      </p>
    ),
  },
  {
    title: "7. Your Information",
    content: (
      <p>
        If you have provided personal information to Kreedum Sports and would
        like to ask about, correct or update that information, you can contact
        us using the contact details below.
      </p>
    ),
  },
  {
    title: "8. Policy Updates",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        to our services, website or applicable requirements. The updated
        version will be published on this page.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div
      className="font-body"
      style={{
        backgroundColor: COLORS.white,
        color: COLORS.navy,
      }}
    >
      <SEO
        title="Privacy Policy | Kreedum Sports"
        description="Read the Privacy Policy for Kreedum Sports and learn how information provided through our website and enquiries may be collected and used."
        canonical="https://www.kreedum.com/privacy-policy"
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
              Privacy Policy
            </h1>

            <p
              className="mt-5 max-w-2xl text-base leading-7"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Information about how Kreedum Sports handles information
              provided through its website and customer communications.
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
                  9. Contact Us
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
                to="/terms-and-conditions"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Read Terms &amp; Conditions →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}