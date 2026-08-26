import { COLORS } from "../../config/theme";

/** Site-wide fonts, clip-path utility classes, and focus/reduced-motion rules. Mounted once in App. */
export default function GlobalStyle() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

      .font-display { font-family: 'Space Grotesk', sans-serif; }
      .font-body { font-family: 'Inter', sans-serif; }
      .font-mono { font-family: 'IBM Plex Mono', monospace; }

      .diag-bottom {
        clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
      }
      .diag-top {
  clip-path: polygon(0 12%, 100% 0, 100% 100%, 0 100%);
}

@media (max-width: 768px) {
  .diag-top,
  .diag-bottom {
    clip-path: none;
  }
}
      .diag-card {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
      .diag-photo {
        clip-path: polygon(6% 0, 100% 0, 94% 100%, 0% 100%);
      }
      .kr-focus:focus-visible {
        outline: 3px solid ${COLORS.blue};
        outline-offset: 3px;
      }
        .kr-scroll-hide::-webkit-scrollbar {
        display: none;
      }
      .kr-whatsapp-btn {
        position: fixed;
        right: max(20px, env(safe-area-inset-right));
        bottom: max(20px, env(safe-area-inset-bottom));
        z-index: 70;
        width: 56px;
        height: 56px;
        border-radius: 999px;
        border: none;
        background: #25D366;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0,0,0,0.35);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        animation: kr-whatsapp-pulse 2.4s ease-in-out infinite;
      }
      .kr-whatsapp-btn:hover {
        transform: scale(1.08);
        box-shadow: 0 14px 36px rgba(0,0,0,0.42);
      }
      @keyframes kr-whatsapp-pulse {
        0%, 100% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 0 0 rgba(37,211,102,0.45); }
        50% { box-shadow: 0 10px 30px rgba(0,0,0,0.35), 0 0 0 10px rgba(37,211,102,0); }
      }
      @media (max-width: 640px) {
        .kr-whatsapp-btn {
          right: max(14px, env(safe-area-inset-right));
          bottom: max(14px, env(safe-area-inset-bottom));
          width: 50px;
          height: 50px;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
        .kr-whatsapp-btn { animation: none; }
      }
    `}</style>
  );
}