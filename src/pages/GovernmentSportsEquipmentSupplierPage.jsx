import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import SEO from "../components/common/SEO";
import { COLORS } from "../config/theme";

const buyers = [
  ["01", "Government Departments", "Sports, recreation and fitness equipment requirements for public-sector departments."],
  ["02", "Schools & Colleges", "Equipment enquiries for government schools, colleges, universities and institutional sports programmes."],
  ["03", "Sports Facilities & Projects", "Product requirements for sports grounds, training facilities, fitness rooms and public sports projects."],
  ["04", "Procurement Teams", "Product specifications, quantities and procurement details to help review a specific requirement."]
];

const categories = [
  ["01", "Sports Goods", "Cricket, football, basketball, volleyball, badminton, table tennis and training accessories."],
  ["02", "Fitness & Gym Equipment", "Cardio machines, strength equipment, dumbbells, weight plates, benches, racks and fitness accessories."],
  ["03", "Sportswear & Accessories", "Sportswear, footwear, protective equipment, sports bags and team accessories."],
  ["04", "Sports Infrastructure", "Enquiries about sports flooring, artificial turf, court-related solutions and facility equipment."]
];

const steps = [
  ["01", "Share the requirement", "Send the organisation name, product specifications, quantities, delivery location and required timeline."],
  ["02", "Provide the procurement reference", "Include the relevant GeM listing, bid or tender reference and applicable technical or commercial conditions."],
  ["03", "Review product fit", "Product suitability, availability, documentation and eligibility must be checked against the specific procurement."],
  ["04", "Confirm next steps", "Pricing, compliance, delivery terms and participation are subject to the applicable listing or tender conditions."]
];

const faqs = [
  ["Does Kreedum Sports handle government sports equipment enquiries?", "Kreedum Sports can receive enquiries for sports goods, fitness equipment and sports-related project requirements from government and institutional buyers. Product scope and availability must be confirmed for each enquiry."],
  ["Can I contact Kreedum about GeM procurement?", "Yes. Share the relevant GeM listing or bid reference, specifications, quantities and delivery location. Participation and supply are subject to the applicable listing, eligibility conditions and procurement rules."],
  ["Can I enquire about a government tender?", "Yes. Share the tender reference, technical specifications, quantities, delivery terms and submission deadline. Whether a specific tender can be supported depends on its conditions and the team's confirmation."],
  ["Which product categories can be included?", "Enquiries may cover sports goods, fitness and gym equipment, sportswear, accessories and sports infrastructure-related products. Models, specifications, availability and required standards must be reviewed."],
  ["Does contacting Kreedum guarantee tender eligibility or award?", "No. An enquiry does not guarantee eligibility, listing availability, tender participation or contract award. These depend on the procurement rules, tender conditions and evaluation process."]
];

export default function GovernmentSportsEquipmentSupplierPage() {
  return (
    <div className="font-body" style={{ backgroundColor: COLORS.white, color: COLORS.navy }}>
      <SEO
        title="Government Sports Equipment Supplier | GeM & Tender Enquiries | Kreedum Sports"
        description="Contact Kreedum Sports for government and institutional sports equipment enquiries, including sports goods, gym equipment, fitness products and sports infrastructure requirements. Share your GeM bid or tender specifications for review."
        canonical="https://www.kreedum.com/government-sports-equipment-supplier"
      />
      <Nav />
      <main>
        <section className="relative min-h-[66vh] flex items-center overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(112deg, rgba(14,26,61,.99) 0%, rgba(14,26,61,.94) 50%, rgba(44,98,224,.55) 100%)" }} />
          <div className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl" style={{ backgroundColor: COLORS.blue }} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32 w-full">
            <div className="font-mono text-xs tracking-widest uppercase mb-5 inline-block px-3 py-1 rounded-full" style={{ color: COLORS.white, backgroundColor: "rgba(255,255,255,.1)" }}>Government & Institutional Procurement</div>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] mb-6 max-w-4xl" style={{ color: COLORS.white }}>Government Sports Equipment <span style={{ color: "#8FADFF" }}>Supplier & Project Enquiries</span></h1>
            <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl mb-9" style={{ color: "rgba(255,255,255,.78)" }}>Sourcing sports goods, fitness equipment or sports infrastructure products for a public-sector or institutional requirement? Share your GeM listing, bid or tender specifications with Kreedum Sports for an initial review.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#enquiry" className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus transition-transform hover:scale-105" style={{ backgroundColor: COLORS.blue, color: COLORS.white }}>Discuss a Government Requirement</a>
              <a href="#categories" className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus border" style={{ borderColor: "rgba(255,255,255,.3)", color: COLORS.white }}>View Product Categories</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">{["GeM and tender-related enquiries", "Product-specification review", "Institutional supply requirements"].map(x => <div key={x} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,.76)" }}><span style={{ color: "#8FADFF" }}>✓</span>{x}</div>)}</div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>Public-Sector Requirements</div>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: COLORS.navy }}>Start with the specification and procurement reference.</h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: COLORS.slate }}>Government procurement often requires a defined product specification, quantity, delivery schedule and supporting documentation. Providing these details at the start helps the team understand the scope of your requirement.</p>
              <p className="leading-relaxed mb-7" style={{ color: COLORS.slate }}>For GeM or tender-related enquiries, share the relevant listing or bid reference and applicable conditions. Product suitability, availability, compliance and participation must be verified for each procurement.</p>
              <a href="#enquiry" className="inline-flex font-semibold text-sm px-6 py-3 rounded-full kr-focus" style={{ backgroundColor: COLORS.blue, color: COLORS.white }}>Send Your Requirement</a>
            </div>
            <div className="rounded-3xl min-h-[340px] p-8 md:p-10 flex flex-col justify-end" style={{ background: "linear-gradient(145deg, #16234A, #2C62E0)" }}>
              <div className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#8FADFF" }}>Kreedum Sports</div>
              <div className="font-display font-semibold text-2xl md:text-3xl" style={{ color: COLORS.white }}>Sports products for institutional requirements</div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.paper }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-12"><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>Who We Support</div><h2 className="font-display font-bold text-3xl md:text-5xl mb-5" style={{ color: COLORS.navy }}>Sports equipment enquiries for public institutions.</h2><p style={{ color: COLORS.slate }}>Share the buyer's needs and procurement reference so the requested products and conditions can be reviewed.</p></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{buyers.map(([n,t,d]) => <article key={n} className="p-7 rounded-2xl" style={{ backgroundColor: COLORS.white, border: "1px solid rgba(14,26,61,.07)" }}><div className="font-mono text-xs mb-5" style={{ color: COLORS.blue }}>{n}</div><h3 className="font-display font-semibold text-xl mb-3" style={{ color: COLORS.navy }}>{t}</h3><p className="text-sm leading-relaxed" style={{ color: COLORS.slate }}>{d}</p></article>)}</div>
          </div>
        </section>

        <section id="categories" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mb-12"><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>Product Scope</div><h2 className="font-display font-bold text-3xl md:text-5xl mb-5" style={{ color: COLORS.navy }}>Sports goods, fitness equipment and project enquiries.</h2><p style={{ color: COLORS.slate }}>Product suitability, specifications, availability and mandatory standards should be checked against the relevant procurement document.</p></div>
            <div className="grid md:grid-cols-2 gap-5">{categories.map(([n,t,d]) => <article key={n} className="p-7 md:p-9 rounded-2xl" style={{ backgroundColor: COLORS.paper, border: "1px solid rgba(14,26,61,.06)" }}><div className="font-mono text-xs mb-5" style={{ color: COLORS.blue }}>{n}</div><h3 className="font-display font-semibold text-xl md:text-2xl mb-3" style={{ color: COLORS.navy }}>{t}</h3><p className="text-sm leading-relaxed" style={{ color: COLORS.slate }}>{d}</p></article>)}</div>
          </div>
        </section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.navy }}>
          <div className="max-w-6xl mx-auto px-6"><div className="max-w-3xl mb-12"><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#8FADFF" }}>Enquiry Process</div><h2 className="font-display font-bold text-3xl md:text-5xl" style={{ color: COLORS.white }}>A clear process for procurement enquiries.</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{steps.map(([n,t,d]) => <article key={n} className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)" }}><div className="font-mono text-xs mb-7" style={{ color: "#8FADFF" }}>{n}</div><h3 className="font-display font-semibold text-lg mb-3" style={{ color: COLORS.white }}>{t}</h3><p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.7)" }}>{d}</p></article>)}</div>
          </div>
        </section>

        <section id="enquiry" className="py-16 md:py-24" style={{ backgroundColor: COLORS.paper }}>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[.9fr_1.1fr] gap-10 md:gap-20">
            <div><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>Prepare Your Enquiry</div><h2 className="font-display font-bold text-3xl md:text-4xl mb-5" style={{ color: COLORS.navy }}>Details that help us review the requirement.</h2><p className="leading-relaxed mb-7" style={{ color: COLORS.slate }}>Include the procurement reference and required specifications. Do not assume a product is compliant or available until it has been checked against the relevant conditions.</p><a href="https://wa.me/917570002458?text=Hello%20Kreedum%20Sports%2C%20I%20have%20a%20government%20or%20institutional%20sports%20equipment%20enquiry." target="_blank" rel="noopener noreferrer" className="inline-flex font-semibold text-sm px-6 py-3 rounded-full kr-focus" style={{ backgroundColor: COLORS.blue, color: COLORS.white }}>Contact on WhatsApp</a></div>
            <div className="grid sm:grid-cols-2 gap-4">{[["Department / buyer","Organisation name and contact role."],["GeM or tender reference","Relevant listing ID, bid number or tender reference."],["Product specification","Required models, technical specifications and standards."],["Quantity schedule","Units, sets or line-item quantities."],["Delivery details","Destination, required date and site constraints."],["Supporting documents","Applicable technical, eligibility and commercial conditions."]].map(([t,d],i)=><div key={t} className="p-5 rounded-2xl" style={{ backgroundColor: COLORS.white, border: "1px solid rgba(14,26,61,.07)" }}><div className="font-mono text-xs mb-3" style={{ color: COLORS.blue }}>{String(i+1).padStart(2,"0")}</div><h3 className="font-display font-semibold text-lg mb-2" style={{ color: COLORS.navy }}>{t}</h3><p className="text-sm leading-relaxed" style={{ color: COLORS.slate }}>{d}</p></div>)}</div>
          </div>
        </section>

        <section className="py-16 md:py-24"><div className="max-w-4xl mx-auto px-6"><div className="text-center mb-12"><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>FAQ</div><h2 className="font-display font-bold text-3xl md:text-5xl" style={{ color: COLORS.navy }}>Government supply questions.</h2></div><div className="space-y-4">{faqs.map(([q,a])=><details key={q} className="group rounded-2xl border p-5 md:p-6" style={{ borderColor: "rgba(14,26,61,.1)" }}><summary className="cursor-pointer list-none font-display font-semibold text-base md:text-lg pr-8 relative" style={{ color: COLORS.navy }}>{q}<span className="absolute right-0 top-0 text-xl group-open:rotate-45" style={{ color: COLORS.blue }}>+</span></summary><p className="text-sm leading-relaxed mt-4 max-w-3xl" style={{ color: COLORS.slate }}>{a}</p></details>)}</div></div></section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.paper }}><div className="max-w-5xl mx-auto px-6"><div className="rounded-3xl p-8 md:p-14 text-center" style={{ backgroundColor: COLORS.navy }}><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#8FADFF" }}>Government & Institutional Enquiries</div><h2 className="font-display font-bold text-3xl md:text-5xl mb-5" style={{ color: COLORS.white }}>Have a GeM, tender or project requirement?</h2><p className="max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,.7)" }}>Share the product specification, quantity schedule, procurement reference and delivery location so the team can review the request.</p><div className="flex flex-wrap justify-center gap-4"><a href="https://wa.me/917570002458?text=Hello%20Kreedum%20Sports%2C%20I%20have%20a%20GeM%2C%20tender%20or%20government%20project%20sports%20equipment%20enquiry." target="_blank" rel="noopener noreferrer" className="inline-flex font-semibold text-sm px-8 py-4 rounded-full kr-focus" style={{ backgroundColor: COLORS.blue, color: COLORS.white }}>Discuss Your Requirement</a><Link to="/sports-equipment-wholesale" className="inline-flex font-semibold text-sm px-8 py-4 rounded-full kr-focus border" style={{ borderColor: "rgba(255,255,255,.3)", color: COLORS.white }}>Bulk Supply Page</Link></div></div></div></section>
      </main>
      <Footer />
      <WhatsAppButton message="Hello Kreedum Sports, I have a government or institutional sports equipment enquiry." />
    </div>
  );
}
