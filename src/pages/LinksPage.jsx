import { useState } from "react";
import logo from "../assets/logo.png";
import { COLORS } from "../config/theme";

/* ============================================================
   LINKS DATA
   ============================================================ */

const mainLinks = [
  {
    id: "website",
    title: "Visit Our Website",
    description: "Explore Kreedum Sports",
    href: "/",
  },
  {
    id: "quote",
    title: "Get a Quote",
    description: "Gym & fitness equipment enquiries",
    href: "/quote",
    featured: true,
  },
  {
    id: "sports",
    title: "Sports Equipment",
    description: "Equipment for professional & recreational sports",
    href: "#",
  },
  {
    id: "fitness",
    title: "Fitness Equipment",
    description: "Build your gym with professional equipment",
    href: "#",
  },
  {
    id: "infrastructure",
    title: "Sports Infrastructure",
    description: "Complete sports infrastructure solutions",
    href: "#",
  },
];

/*
 * Replace # with the actual Kreedum social URLs.
 */
const socialLinks = [
  {
    id: "instagram",
    href: "#",
    icon: "instagram",
    label: "Instagram",
  },
  {
    id: "linkedin",
    href: "#",
    icon: "linkedin",
    label: "LinkedIn",
  },
  {
    id: "facebook",
    href: "#",
    icon: "facebook",
    label: "Facebook",
  },
  {
    id: "youtube",
    href: "#",
    icon: "youtube",
    label: "YouTube",
  },
  {
    id: "gmail",
    href: "mailto:info@kreedum.com",
    icon: "gmail",
    label: "Email",
  },
];

/*
 * Replace with actual WhatsApp URL.
 */
const WHATSAPP_URL = "#";


/* ============================================================
   ICONS
   ============================================================ */

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="18"
        cy="5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="6"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="18"
        cy="19"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M8.2 10.8L15.8 6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M8.2 13.2L15.8 17.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}


function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.4 11.6C20.4 16.45 16.45 20.4 11.6 20.4C9.99 20.4 8.48 19.97 7.18 19.22L3.6 20.4L4.78 16.82C4.03 15.52 3.6 14.01 3.6 12.4C3.6 7.55 7.55 3.6 12.4 3.6C17.25 3.6 20.4 7.55 20.4 11.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8.2 9.3C8.45 11.65 10.25 13.55 12.65 15.15C13.25 15.55 14 15.4 14.45 14.8L15.15 13.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ============================================================
   SOCIAL ICONS
   ============================================================ */

function SocialIcon({ type }) {

  /* Instagram */

  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="25"
        height="25"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="17.4"
          cy="6.6"
          r="1.1"
          fill="currentColor"
        />
      </svg>
    );
  }


  /* LinkedIn */

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="25"
        height="25"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5 4.5C3.9 4.5 3 5.4 3 6.5C3 7.6 3.9 8.5 5 8.5C6.1 8.5 7 7.6 7 6.5C7 5.4 6.1 4.5 5 4.5Z" />

        <path d="M3.5 10H6.5V20H3.5V10Z" />

        <path d="M9 10H12V11.35C12.8 10.25 14 9.7 15.5 9.7C18.5 9.7 20 11.6 20 15V20H17V15.5C17 13.7 16.4 12.5 15 12.5C13.7 12.5 13 13.5 13 15.1V20H10V10H9Z" />
      </svg>
    );
  }


  /* Facebook */

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="25"
        height="25"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.5 21V13.5H16L16.5 10H13.5V8C13.5 7 14 6.5 15.2 6.5H16.7V3.2C16.1 3.1 15.3 3 14.3 3C11.4 3 9.5 4.8 9.5 8V10H6.5V13.5H9.5V21H13.5Z" />
      </svg>
    );
  }


  /* YouTube */

  if (type === "youtube") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="27"
        height="27"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M21 7.4C20.8 6.5 20.1 5.8 19.2 5.6C17.6 5.2 12 5.2 12 5.2C12 5.2 6.4 5.2 4.8 5.6C3.9 5.8 3.2 6.5 3 7.4C2.6 9 2.6 12 2.6 12C2.6 12 2.6 15 3 16.6C3.2 17.5 3.9 18.2 4.8 18.4C6.4 18.8 12 18.8 12 18.8C12 18.8 17.6 18.8 19.2 18.4C20.1 18.2 20.8 17.5 21 16.6C21.4 15 21.4 12 21.4 12C21.4 12 21.4 9 21 7.4Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M10 9L15 12L10 15V9Z"
          fill="currentColor"
        />
      </svg>
    );
  }


  /* Gmail */

  return (
    <svg
      viewBox="0 0 24 24"
      width="27"
      height="27"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 6.5L12 13L20.5 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M4 18.5V6.8C4 5.8 5.1 5.2 5.9 5.8L12 10.5L18.1 5.8C18.9 5.2 20 5.8 20 6.8V18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* ============================================================
   DECORATIVE SPORTS ICONS
   ============================================================ */

function SportsBackground() {
  return (
    <div
      className="links-sports-background"
      aria-hidden="true"
    >

      <div className="sports-ball sports-ball-one">
        ⚽
      </div>

      <div className="sports-ball sports-ball-two">
        🏀
      </div>

      <div className="sports-dumbbell">
        <svg
          viewBox="0 0 100 60"
          fill="none"
        >
          <path
            d="M25 18V42"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <path
            d="M15 23V37"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <path
            d="M75 18V42"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <path
            d="M85 23V37"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <path
            d="M25 30H75"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="sports-cross">
        +
      </div>

    </div>
  );
}


/* ============================================================
   PAGE
   ============================================================ */

export default function LinksPage() {

  const [copied, setCopied] = useState(false);


  const handleShare = async () => {

    const currentUrl = window.location.href;

    try {

      if (navigator.share) {

        await navigator.share({
          title: "Kreedum Sports",
          text: "Explore Kreedum Sports",
          url: currentUrl,
        });

        return;
      }


      if (navigator.clipboard) {

        await navigator.clipboard.writeText(currentUrl);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }

    } catch {
      // Share cancelled by user.
    }
  };


  return (
    <div className="kreedum-links-page">

      <SportsBackground />


      {/* ======================================================
          TOP BAR
      ======================================================= */}

      <header className="links-topbar">

        <a
          href="/"
          className="links-top-logo"
          aria-label="Kreedum home"
        >
          <img
            src={logo}
            alt="Kreedum Sports"
          />
        </a>


        <button
          type="button"
          className="links-share"
          onClick={handleShare}
          aria-label="Share Kreedum"
        >
          <ShareIcon />
        </button>

      </header>


      {/* ======================================================
          CONTENT
      ======================================================= */}

      <main className="links-container">


        {/* ====================================================
            PROFILE
        ===================================================== */}

        <section className="links-profile">

          <div className="links-logo-wrap">

            <img
              src={logo}
              alt="Kreedum Sports"
              className="links-main-logo"
            />

          </div>


          <h1>
            Kreedum Sports
          </h1>


          <p className="links-tagline">
            Sports Equipment • Fitness Equipment • Infrastructure
          </p>


          {/* VERIFIED */}

          <div className="links-verified">

            <span className="verified-check">
              ✓
            </span>

            <span>
              Verified
            </span>

          </div>


          {/* =================================================
              SOCIAL ICONS
          ================================================== */}

          <div className="links-social-icons">

            {socialLinks.map((social) => (

              <a
                key={social.id}
                href={social.href}
                className="links-social-icon"
                aria-label={social.label}
                target={
                  social.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  social.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
              >

                <SocialIcon type={social.icon} />

              </a>

            ))}

          </div>

        </section>


        {/* ====================================================
            FEATURED WHATSAPP CTA
        ===================================================== */}

        <a
          href={WHATSAPP_URL}
          className="links-whatsapp"
        >

          <span className="links-whatsapp-icon">
            <WhatsAppIcon />
          </span>


          <span className="links-whatsapp-text">

            <strong>
              Chat With Us
            </strong>

            <small>
              Talk to the Kreedum team on WhatsApp
            </small>

          </span>


          <span className="links-whatsapp-arrow">
            <ArrowIcon />
          </span>

        </a>


        {/* ====================================================
            LINKS
        ===================================================== */}

        <section className="links-list">

          {mainLinks.map((link) => (

            <a
              key={link.id}
              href={link.href}
              className={
                `links-card ${
                  link.featured
                    ? "links-card-featured"
                    : ""
                }`
              }
            >

              <span className="links-card-text">

                <strong>
                  {link.title}
                </strong>

                <small>
                  {link.description}
                </small>

              </span>


              <span className="links-card-arrow">
                <ArrowIcon />
              </span>

            </a>

          ))}

        </section>


        {/* ====================================================
            FOOTER
        ===================================================== */}

        <footer className="links-footer">

          <div className="links-footer-line" />

          <img
            src={logo}
            alt=""
            className="links-footer-logo"
          />

          <p>
            © {new Date().getFullYear()} Kreedum Sports
          </p>

          {copied && (
            <span className="links-copied">
              Link copied
            </span>
          )}

        </footer>


      </main>


      {/* ======================================================
          STYLES
      ======================================================= */}

      <style>{`

        /*
         * ====================================================
         * PAGE
         * ====================================================
         */

        .kreedum-links-page {

          --blue: ${COLORS.blue};
          --blue-dark: ${COLORS.blueDark};
          --navy: ${COLORS.navy};

          min-height: 100vh;
          min-height: 100svh;

          position: relative;

          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(255,255,255,0.16),
              transparent 22%
            ),
            radial-gradient(
              circle at 90% 30%,
              rgba(255,255,255,0.12),
              transparent 25%
            ),
            linear-gradient(
              145deg,
              var(--blue-dark) 0%,
              var(--blue) 48%,
              #3977ed 100%
            );

          color: #fff;

          font-family: inherit;

          -webkit-font-smoothing: antialiased;

        }


        /*
         * ====================================================
         * BACKGROUND SPORTS ELEMENTS
         * ====================================================
         */

        .links-sports-background {

          position: fixed;

          inset: 0;

          overflow: hidden;

          pointer-events: none;

          z-index: 0;

        }


        .sports-ball,
        .sports-dumbbell,
        .sports-cross {

          position: absolute;

          opacity: 0.10;

          filter: grayscale(1);

          color: #fff;

        }


        .sports-ball {

          font-size: 72px;

        }


        .sports-ball-one {

          top: 8%;

          left: -18px;

          transform: rotate(-18deg);

        }


        .sports-ball-two {

          top: 43%;

          right: -25px;

          font-size: 82px;

          transform: rotate(18deg);

        }


        .sports-dumbbell {

          width: 110px;

          top: 70%;

          left: -30px;

          transform: rotate(-20deg);

        }


        .sports-cross {

          right: 12%;

          top: 22%;

          font-size: 110px;

          font-weight: 900;

          transform: rotate(20deg);

        }


        /*
         * ====================================================
         * TOP BAR
         * ====================================================
         */

        .links-topbar {

          position: relative;

          z-index: 5;

          width: 100%;

          max-width: 680px;

          margin: 0 auto;

          padding:
            max(16px, env(safe-area-inset-top))
            18px
            0;

          box-sizing: border-box;

          display: flex;

          align-items: center;

          justify-content: space-between;

        }


        .links-top-logo {

          width: 44px;
          height: 44px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(255,255,255,0.96);

          box-shadow:
            0 7px 25px rgba(0,0,0,0.12);

        }


        .links-top-logo img {

          width: 29px;
          height: 29px;

          object-fit: contain;

        }


        .links-share {

          width: 44px;
          height: 44px;

          display: flex;

          align-items: center;
          justify-content: center;

          border: 0;

          border-radius: 50%;

          color: var(--navy);

          background: rgba(255,255,255,0.96);

          cursor: pointer;

          box-shadow:
            0 7px 25px rgba(0,0,0,0.12);

          -webkit-tap-highlight-color: transparent;

        }


        .links-share:active {

          transform: scale(0.94);

        }


        /*
         * ====================================================
         * CONTAINER
         * ====================================================
         */

        .links-container {

          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 620px;

          margin: 0 auto;

          padding:
            12px 18px
            max(45px, env(safe-area-inset-bottom));

          box-sizing: border-box;

        }


        /*
         * ====================================================
         * PROFILE
         * ====================================================
         */

        .links-profile {

          text-align: center;

          padding:
            16px 0 24px;

        }


        .links-logo-wrap {

          width: 116px;
          height: 116px;

          margin: 0 auto 17px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #fff;

          box-shadow:
            0 18px 45px rgba(0,0,0,0.18);

        }


        .links-main-logo {

          width: 82px;
          height: 82px;

          object-fit: contain;

        }


        .links-profile h1 {

          margin: 0;

          color: #fff;

          font-size: clamp(26px, 7vw, 34px);

          line-height: 1.1;

          font-weight: 800;

          letter-spacing: -0.8px;

        }


        .links-tagline {

          max-width: 460px;

          margin: 10px auto 12px;

          color: rgba(255,255,255,0.88);

          font-size: 13px;

          line-height: 1.5;

        }


        /*
         * ====================================================
         * VERIFIED BADGE
         * ====================================================
         */

        .links-verified {

          display: inline-flex;

          align-items: center;

          gap: 6px;

          padding: 5px 11px;

          border-radius: 999px;

          background: rgba(255,255,255,0.16);

          border: 1px solid rgba(255,255,255,0.18);

          color: #fff;

          font-size: 11px;

          font-weight: 700;

          backdrop-filter: blur(8px);

        }


        .verified-check {

          width: 17px;
          height: 17px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #fff;

          color: var(--blue);

          font-size: 10px;

          font-weight: 900;

        }


        /*
         * ====================================================
         * SOCIAL ICONS
         * ====================================================
         */

        .links-social-icons {

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 20px;

          margin-top: 18px;

        }


        .links-social-icon {

          width: 34px;
          height: 34px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: #fff;

          text-decoration: none;

          -webkit-tap-highlight-color: transparent;

          transition:
            transform 160ms ease,
            opacity 160ms ease;

        }


        .links-social-icon:active {

          transform: scale(0.88);

        }


        @media (hover: hover) {

          .links-social-icon:hover {

            transform: translateY(-2px);

            opacity: 0.75;

          }

        }


        /*
         * ====================================================
         * WHATSAPP
         * ====================================================
         */

        .links-whatsapp {

          min-height: 68px;

          display: flex;

          align-items: center;

          gap: 13px;

          padding: 11px 15px;

          margin-bottom: 12px;

          box-sizing: border-box;

          color: var(--navy);

          text-decoration: none;

          background: #fff;

          border-radius: 17px;

          box-shadow:
            0 10px 28px rgba(0,0,0,0.14);

          -webkit-tap-highlight-color: transparent;

          transition:
            transform 180ms ease,
            box-shadow 180ms ease;

        }


        .links-whatsapp-icon {

          width: 44px;
          height: 44px;

          flex: 0 0 44px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 13px;

          color: #fff;

          background: var(--blue);

        }


        .links-whatsapp-text {

          flex: 1;

          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 3px;

        }


        .links-whatsapp-text strong {

          font-size: 15px;

          line-height: 1.2;

        }


        .links-whatsapp-text small {

          color: #667085;

          font-size: 12px;

          line-height: 1.35;

        }


        .links-whatsapp-arrow {

          color: var(--blue);

        }


        .links-whatsapp:active {

          transform: scale(0.985);

        }


        @media (hover: hover) {

          .links-whatsapp:hover {

            transform: translateY(-2px);

            box-shadow:
              0 15px 34px rgba(0,0,0,0.18);

          }

        }


        /*
         * ====================================================
         * LINK CARDS
         * ====================================================
         */

        .links-list {

          display: flex;

          flex-direction: column;

          gap: 11px;

        }


        .links-card {

          width: 100%;

          min-height: 67px;

          box-sizing: border-box;

          display: flex;

          align-items: center;

          gap: 14px;

          padding: 11px 15px;

          border-radius: 16px;

          background: rgba(255,255,255,0.97);

          color: var(--navy);

          text-decoration: none;

          box-shadow:
            0 8px 24px rgba(0,0,0,0.11);

          -webkit-tap-highlight-color: transparent;

          transition:
            transform 180ms ease,
            box-shadow 180ms ease;

        }


        .links-card-text {

          min-width: 0;

          flex: 1;

          display: flex;

          flex-direction: column;

          gap: 4px;

        }


        .links-card-text strong {

          font-size: 15px;

          line-height: 1.25;

          font-weight: 750;

        }


        .links-card-text small {

          color: #667085;

          font-size: 12px;

          line-height: 1.35;

        }


        .links-card-arrow {

          width: 38px;
          height: 38px;

          flex: 0 0 38px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 11px;

          color: var(--blue);

          background: #eef3ff;

        }


        .links-card-featured {

          background:
            linear-gradient(
              135deg,
              #ffffff,
              #f2f6ff
            );

          border:
            1px solid rgba(44,98,224,0.25);

        }


        .links-card-featured .links-card-arrow {

          color: #fff;

          background: var(--blue);

        }


        .links-card:active {

          transform: scale(0.985);

        }


        @media (hover: hover) {

          .links-card:hover {

            transform: translateY(-2px);

            box-shadow:
              0 13px 30px rgba(0,0,0,0.16);

          }

          .links-card:hover .links-card-arrow {

            transform: translateX(2px);

          }

        }


        /*
         * ====================================================
         * FOOTER
         * ====================================================
         */

        .links-footer {

          text-align: center;

          padding-top: 30px;

        }


        .links-footer-line {

          height: 1px;

          margin-bottom: 18px;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.3),
              transparent
            );

        }


        .links-footer-logo {

          width: 58px;
          height: 30px;

          object-fit: contain;

          opacity: 0.8;

        }


        .links-footer p {

          margin: 7px 0 0;

          color: rgba(255,255,255,0.65);

          font-size: 10px;

        }


        .links-copied {

          display: block;

          margin-top: 7px;

          color: #fff;

          font-size: 11px;

          font-weight: 700;

        }


        /*
         * ====================================================
         * SMALL PHONES
         * ====================================================
         */

        @media (max-width: 360px) {

          .links-topbar {

            padding-left: 14px;
            padding-right: 14px;

          }


          .links-container {

            padding-left: 13px;
            padding-right: 13px;

          }


          .links-logo-wrap {

            width: 100px;
            height: 100px;

          }


          .links-main-logo {

            width: 70px;
            height: 70px;

          }


          .links-social-icons {

            gap: 16px;

          }


          .links-tagline {

            font-size: 12px;

          }


          .links-card-text strong {

            font-size: 14px;

          }


          .links-card-text small {

            font-size: 11px;

          }

        }


        /*
         * ====================================================
         * TABLET / DESKTOP
         * ====================================================
         */

        @media (min-width: 768px) {

          .links-topbar {

            padding-left: 24px;
            padding-right: 24px;

          }


          .links-container {

            padding-top: 20px;

          }


          .links-profile {

            padding-bottom: 30px;

          }


          .links-logo-wrap {

            width: 130px;
            height: 130px;

          }


          .links-main-logo {

            width: 92px;
            height: 92px;

          }


          .links-card {

            min-height: 72px;

          }

        }

      `}</style>

    </div>
  );
}