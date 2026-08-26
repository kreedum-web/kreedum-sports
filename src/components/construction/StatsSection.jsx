import { CONSTRUCTION_COLORS } from "../../config/theme";
import Reveal from "./Reveal";

const STATS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12+", label: "Years Building" },
  { value: "3", label: "Specialized Verticals" },
  { value: "8", label: "States Served" },
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-14" style={{ backgroundColor: CONSTRUCTION_COLORS.paper }}>
      <div
        className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#E5DED1]"
      >
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center px-2 md:px-6 first:pl-0">
            <div className="font-mono font-medium text-3xl md:text-4xl" style={{ color: CONSTRUCTION_COLORS.ink }}>
              {s.value}
            </div>
            <div className="kc-plate mt-1" style={{ color: CONSTRUCTION_COLORS.steel }}>
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
