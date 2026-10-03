import { Link } from "react-router-dom";
import { COLORS } from "../../config/theme";
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_TEL } from "../../config/contact";
import { NAV_LINKS } from "../../config/navigation";
import { CONSTRUCTION_LINKS } from "../../config/externalLinks";
import SocialLinks from "../common/SocialLinks";
import logo from "../../assets/logo.png";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },

  ...NAV_LINKS.map((l) => ({
    label: l.label,
    to: l.type === "route" ? l.path : `/#${l.id}`,
  })),

  { label: "Get a Gym Quote", to: "/quote" },
];

const DIVISIONS = [
  { label: "Sports Retail Store", to: "/", external: false },
  {
    label: "Sports Infrastructure",
    to: CONSTRUCTION_LINKS.sportsInfrastructure,
    external: true,
  },
  {
    label: "Civil Construction",
    to: CONSTRUCTION_LINKS.civilConstruction,
    external: true,
  },
  {
    label: "Prefabricated Buildings",
    to: CONSTRUCTION_LINKS.prefabricatedBuildings,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.navy }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 kr-focus mb-4">
            <img src={logo} alt="Kreedum logo" className="w-7 h-7" />
            <span
              className="font-display font-semibold text-sm"
              style={{ color: COLORS.white }}
            >
              Kreedum<span style={{ color: "#8FADFF" }}>Sports</span>
            </span>
          </Link>
          <p
            className="font-body text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Sports goods, fitness equipment, and ground infrastructure — all
            under one trusted name.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <div
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#8FADFF" }}
          >
            Quick Links
          </div>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="font-body text-sm kr-focus transition-colors hover:opacity-80"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Divisions */}
        <div>
          <div
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#8FADFF" }}
          >
            Our Divisions
          </div>
          <ul className="space-y-2.5">
            {DIVISIONS.map((d) =>
              d.external ? (
                <li key={d.label}>
                  <a
                    href={d.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm kr-focus transition-colors hover:opacity-80"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {d.label}
                  </a>
                </li>
              ) : (
                <li key={d.label}>
                  <Link
                    to={d.to}
                    className="font-body text-sm kr-focus transition-colors hover:opacity-80"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {d.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#8FADFF" }}
          >
            Contact
          </div>
          <ul className="space-y-2.5 mb-5">
            <li>
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className="font-body text-sm kr-focus transition-colors hover:opacity-80"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {PHONE_NUMBER_DISPLAY}
              </a>
            </li>
            <li
              className="font-body text-sm"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              info@kreedum.com
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="font-mono text-xs tracking-widest uppercase text-center md:text-left"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            © {new Date().getFullYear()} Kreedum International Private
            Limited
          </p>
          <div className="flex items-center gap-5">
  <Link
    to="/privacy-policy"
    className="font-mono text-xs tracking-widest uppercase transition-colors hover:text-white"
    style={{ color: "rgba(255,255,255,0.3)" }}
  >
    Privacy Policy
  </Link>

  <Link
    to="/terms-and-conditions"
    className="font-mono text-xs tracking-widest uppercase transition-colors hover:text-white"
    style={{ color: "rgba(255,255,255,0.3)" }}
  >
    Terms &amp; Conditions
  </Link>
</div>
        </div>
      </div>
    </footer>
  );
}
