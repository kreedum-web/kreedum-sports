import { Link } from "react-router-dom";
import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import SEO from "../components/common/SEO";
import { COLORS } from "../config/theme";

const BUYER_TYPES = [
  { number: "01", title: "Schools & Colleges", description: "Sports equipment for physical education departments, school teams, college facilities and inter-school competitions." },
  { number: "02", title: "Sports Academies & Clubs", description: "Equipment for coaching centres, sports academies, clubs and teams buying for multiple players or training groups." },
  { number: "03", title: "Corporate & Institutions", description: "Sports goods and fitness equipment for workplace recreation areas, institutional facilities and organised sporting activities." },
  { number: "04", title: "Gyms & Fitness Facilities", description: "Commercial fitness machines, strength equipment, accessories and free weights for gyms and training facilities." },
  { number: "05", title: "Sports Retailers & Resellers", description: "Bulk product enquiries for businesses sourcing sporting goods, accessories, apparel and footwear for resale." },
  { number: "06", title: "Event & Tournament Organisers", description: "Equipment lists for sporting events, tournaments, training camps and group activities, based on your specifications." },
];

const PRODUCT_GROUPS = [
  { number: "01", title: "Team & Field Sports", description: "Cricket, football, basketball, volleyball and other team-sport equipment for training, practice and competition.", items: ["Cricket equipment", "Football equipment", "Basketballs", "Volleyballs", "Training cones & markers", "Nets and accessories"] },
  { number: "02", title: "Racquet Sports", description: "Sports equipment and accessories for schools, clubs, academies and racquet-sport facilities.", items: ["Badminton equipment", "Tennis equipment", "Table tennis equipment", "Racquets", "Shuttles and balls", "Posts, nets and accessories"] },
  { number: "03", title: "Fitness & Gym Equipment", description: "Equipment for gym floors, fitness rooms, conditioning areas and home or commercial training spaces.", items: ["Treadmills and cardio machines", "Strength equipment", "Dumbbells and weight plates", "Benches and racks", "Fitness accessories", "Aerofit fitness equipment"] },
  { number: "04", title: "Sportswear & Accessories", description: "Apparel, footwear and essential sporting accessories for teams, students, athletes and institutions.", items: ["Sports clothing", "Sports footwear", "Team accessories", "Protective equipment", "Sports bags", "Training essentials"] },
];

const ORDER_STEPS = [
  { number: "01", title: "Share your requirement", description: "Tell us the sports, product categories, approximate quantities, delivery city and required date." },
  { number: "02", title: "Review the product list", description: "Our team reviews requested specifications and checks which products can be quoted." },
  { number: "03", title: "Receive a quotation", description: "We prepare a quotation based on the products and quantities discussed, subject to availability and confirmation." },
  { number: "04", title: "Confirm the order", description: "After specifications, pricing, payment and delivery details are agreed, the order can proceed to confirmation." },
];

const FAQS = [
  { question: "Does Kreedum Sports accept bulk sports equipment enquiries?", answer: "Yes. Kreedum Sports accepts enquiries for institutional and bulk sports equipment requirements. Share your product list and quantities so the team can review your request." },
  { question: "Who can request a bulk sports equipment quotation?", answer: "Schools, colleges, academies, clubs, gyms, corporate organisations, event organisers, retailers and other institutional buyers can contact Kreedum with their requirements." },
  { question: "Which sports equipment can I include in a bulk enquiry?", answer: "You can enquire about products across categories such as cricket, football, badminton, basketball, volleyball, racquet sports, fitness equipment, sportswear and accessories. Availability depends on the products requested." },
  { question: "Can I send a product list with quantities?", answer: "Yes. A spreadsheet, item list or written specification helps the team understand the sports, models, quantities and other details needed to prepare a quotation." },
  { question: "Do you supply gym and fitness equipment in bulk?", answer: "Kreedum Sports accepts gym and fitness equipment enquiries, including cardio machines, strength equipment, free weights and accessories. Larger requirements should be discussed with the team for a product-specific quote." },
  { question: "Where is Kreedum Sports located?", answer: "Kreedum Sports serves customers from its stores in Aminabad, Lucknow, Uttar Pradesh. Contact the team to discuss your requirement and confirm product and delivery details." },
  { question: "Do you provide wholesale prices for every product?", answer: "Pricing depends on the product, brand, specifications, quantity, current availability and order details. Contact Kreedum with a list of items and quantities to request a quote." },
  { question: "Can I enquire about government or GeM procurement separately?", answer: "Yes. Government buyers should share relevant specifications and procurement route. GeM listings, bids and tender participation are subject to applicable product category, listing and procurement requirements." },
];

function SectionTitle({ eyebrow, title, description, dark = false }) {
  return (
    <div className="max-w-3xl mb-12 md:mb-16">
      <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: dark ? "#8FADFF" : COLORS.blue }}>{eyebrow}</div>
      <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-5" style={{ color: dark ? COLORS.white : COLORS.navy }}>{title}</h2>
      {description && <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: dark ? "rgba(255,255,255,0.72)" : COLORS.slate }}>{description}</p>}
    </div>
  );
}

export default function SportsEquipmentWholesalePage() {
  return (
    <div className="font-body" style={{ backgroundColor: COLORS.white, color: COLORS.navy }}>
      <SEO title="Bulk Sports Equipment Supplier in India | Kreedum Sports" description="Request a bulk sports equipment quotation from Kreedum Sports for schools, colleges, academies, clubs, gyms, retailers and institutions. Cricket, football, badminton, fitness equipment, sportswear and more." canonical="https://www.kreedum.com/sports-equipment-wholesale" />
      <Nav />
      <main>
        <section className="relative min-h-[66vh] flex items-center overflow-hidden" style={{ backgroundColor: COLORS.navy }}>
          <div className="absolute inset-0" style={{ background: "linear-gradient(112deg, rgba(14,26,61,0.99) 0%, rgba(14,26,61,0.96) 48%, rgba(44,98,224,0.52) 100%)" }} />
          <div className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl" style={{ backgroundColor: COLORS.blue }} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32 w-full">
            <div className="font-mono text-xs tracking-widest uppercase mb-5 inline-block px-3 py-1 rounded-full" style={{ color: COLORS.white, backgroundColor: "rgba(255,255,255,0.1)" }}>Bulk & Institutional Supply</div>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-[1.05] mb-6 max-w-4xl" style={{ color: COLORS.white }}>Bulk Sports Equipment<br /><span style={{ color: "#8FADFF" }}>Supplier in India</span></h1>
            <p className="font-body text-base md:text-lg leading-relaxed max-w-2xl mb-9" style={{ color: "rgba(255,255,255,0.78)" }}>Sourcing sports goods for a school, academy, club, gym or institution? Share your item list and quantities with Kreedum Sports to discuss a product-specific quotation for your bulk requirement.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus transition-transform hover:scale-105" style={{ backgroundColor: COLORS.blue, color: COLORS.white }}>Request a Quote</Link>
              <a href="#products" className="font-body font-semibold text-sm px-7 py-3.5 rounded-full kr-focus border transition-transform hover:scale-105" style={{ borderColor: "rgba(255,255,255,0.3)", color: COLORS.white }}>Explore Product Categories</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3">{["Institutional enquiries", "Multi-sport product categories", "Quotation based on quantities"].map((item) => <div key={item} className="flex items-center gap-2 font-body text-sm" style={{ color: "rgba(255,255,255,0.76)" }}><span style={{ color: "#8FADFF" }}>✓</span>{item}</div>)}</div>
          </div>
        </section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.white }}>
          <div className="max-w-6xl mx-auto px-6"><div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>Bulk Sports Goods</div><h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: COLORS.navy }}>One enquiry for your sports equipment list.</h2>
              <p className="font-body text-base md:text-lg leading-relaxed mb-5" style={{ color: COLORS.slate }}>Buying for a group is different from buying a single item. You may need several sports categories, specific models, multiple sizes or quantities for an entire team or facility.</p>
              <p className="font-body text-base leading-relaxed mb-7" style={{ color: COLORS.slate }}>Kreedum Sports works across sports goods, apparel, footwear, fitness equipment and sports infrastructure. Share your list, quantities and required specifications so the team can review the request and discuss a suitable quotation.</p>
              <Link to="/quote" className="inline-flex font-body font-semibold text-sm px-6 py-3 rounded-full kr-focus transition-transform hover:scale-105" style={{ backgroundColor: COLORS.blue, color: COLORS.white }}>Discuss a Bulk Order</Link>
            </div>
            <div className="relative overflow-hidden rounded-3xl min-h-[340px]"><img src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1400&auto=format&fit=crop&q=80" alt="Sports equipment arranged for team training" loading="lazy" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,26,61,0.82), transparent 65%)" }} /><div className="absolute bottom-7 left-7 right-7"><div className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "#8FADFF" }}>Kreedum Sports</div><div className="font-display font-semibold text-xl md:text-2xl" style={{ color: COLORS.white }}>Sports goods for teams and institutions</div></div></div>
          </div></div>
        </section>

        <section className="py-16 md:py-24 lg:py-28" style={{ backgroundColor: COLORS.paper }}><div className="max-w-6xl mx-auto px-6"><SectionTitle eyebrow="Who We Serve" title="Bulk sports supply for organisations." description="Tell us who you are buying for and what the group needs. We’ll review your product list and quantities to help move the enquiry toward a clear quote." /><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">{BUYER_TYPES.map((buyer) => <article key={buyer.number} className="p-7 md:p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-1" style={{ backgroundColor: COLORS.white, border: "1px solid rgba(14,26,61,0.07)" }}><div className="font-mono text-xs mb-5" style={{ color: COLORS.blue }}>{buyer.number}</div><h3 className="font-display font-semibold text-xl mb-3" style={{ color: COLORS.navy }}>{buyer.title}</h3><p className="font-body text-sm leading-relaxed" style={{ color: COLORS.slate }}>{buyer.description}</p></article>)}</div></div></section>

        <section id="products" className="py-16 md:py-24 lg:py-32" style={{ backgroundColor: COLORS.white }}><div className="max-w-6xl mx-auto px-6"><SectionTitle eyebrow="Product Categories" title="Sports goods for different disciplines." description="Product models and quantities should be confirmed against your list. Enquire with the team for current availability and quotation details." /><div className="grid md:grid-cols-2 gap-5 md:gap-6">{PRODUCT_GROUPS.map((group) => <article key={group.number} className="p-7 md:p-9 rounded-2xl" style={{ backgroundColor: COLORS.paper, border: "1px solid rgba(14,26,61,0.06)" }}><div className="font-mono text-xs mb-5" style={{ color: COLORS.blue }}>{group.number}</div><h3 className="font-display font-semibold text-xl md:text-2xl mb-3" style={{ color: COLORS.navy }}>{group.title}</h3><p className="font-body text-sm leading-relaxed mb-6" style={{ color: COLORS.slate }}>{group.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">{group.items.map((item) => <div key={item} className="flex items-start gap-3 py-3 border-b" style={{ borderColor: "rgba(14,26,61,0.1)" }}><span className="font-mono text-xs mt-0.5" style={{ color: COLORS.blue }}>↗</span><span className="font-body text-sm" style={{ color: COLORS.navy }}>{item}</span></div>)}</div></article>)}</div></div></section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.navy }}><div className="max-w-6xl mx-auto px-6"><SectionTitle dark eyebrow="How Bulk Enquiries Work" title="From product list to quotation." /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{ORDER_STEPS.map((step) => <article key={step.number} className="p-6 md:p-7 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}><div className="font-mono text-xs mb-7" style={{ color: "#8FADFF" }}>{step.number}</div><h3 className="font-display font-semibold text-lg md:text-xl mb-3" style={{ color: COLORS.white }}>{step.title}</h3><p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{step.description}</p></article>)}</div></div></section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.paper }}><div className="max-w-6xl mx-auto px-6"><div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-20 items-start"><div><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>Make the Enquiry Easier</div><h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-5" style={{ color: COLORS.navy }}>What to include in your bulk order request.</h2><p className="font-body text-base leading-relaxed" style={{ color: COLORS.slate }}>A clear requirement helps the team confirm product specifications and prepare a more useful quotation.</p></div><div className="grid sm:grid-cols-2 gap-4">{[["Product list", "Names, models or preferred brands."], ["Quantities", "Required units or sets for each item."], ["Buyer details", "School, academy, club, business or institution."], ["Location & timeline", "Delivery city and expected requirement date."], ["Specifications", "Sizes, material, standards or other requested details."], ["Procurement route", "Retail, bulk purchase, purchase order or tender enquiry."]].map(([title, description], index) => <div key={title} className="p-5 rounded-2xl" style={{ backgroundColor: COLORS.white, border: "1px solid rgba(14,26,61,0.07)" }}><div className="font-mono text-xs mb-3" style={{ color: COLORS.blue }}>{String(index + 1).padStart(2, "0")}</div><h3 className="font-display font-semibold text-lg mb-2" style={{ color: COLORS.navy }}>{title}</h3><p className="font-body text-sm leading-relaxed" style={{ color: COLORS.slate }}>{description}</p></div>)}</div></div></div></section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.white }}><div className="max-w-6xl mx-auto px-6"><div className="grid md:grid-cols-2 gap-5 md:gap-6"><article className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: COLORS.paper }}><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>Gym & Fitness</div><h2 className="font-display font-bold text-2xl md:text-3xl mb-4" style={{ color: COLORS.navy }}>Bulk fitness and gym equipment.</h2><p className="font-body text-sm md:text-base leading-relaxed mb-6" style={{ color: COLORS.slate }}>Explore the fitness equipment and gym setup options offered through Kreedum Sports.</p><Link to="/gym-equipment-in-lucknow" className="inline-flex font-body font-semibold text-sm kr-focus" style={{ color: COLORS.blue }}>Explore Gym Equipment <span className="ml-2">→</span></Link></article><article className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: COLORS.navy }}><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#8FADFF" }}>Government & Institutional</div><h2 className="font-display font-bold text-2xl md:text-3xl mb-4" style={{ color: COLORS.white }}>Buying for a government project?</h2><p className="font-body text-sm md:text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.72)" }}>Share the product specifications and procurement route with our team for a government or tender-related enquiry.</p><Link to="/quote" className="inline-flex font-body font-semibold text-sm kr-focus" style={{ color: COLORS.white }}>Discuss an Institutional Requirement <span className="ml-2">→</span></Link></article></div></div></section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.white }}><div className="max-w-4xl mx-auto px-6"><div className="text-center mb-12"><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: COLORS.blue }}>FAQ</div><h2 className="font-display font-bold text-3xl md:text-5xl" style={{ color: COLORS.navy }}>Bulk sports equipment questions.</h2></div><div className="space-y-4">{FAQS.map((faq) => <details key={faq.question} className="group rounded-2xl border p-5 md:p-6" style={{ borderColor: "rgba(14,26,61,0.1)" }}><summary className="cursor-pointer list-none font-display font-semibold text-base md:text-lg pr-8 relative" style={{ color: COLORS.navy }}>{faq.question}<span className="absolute right-0 top-0 text-xl transition-transform group-open:rotate-45" style={{ color: COLORS.blue }}>+</span></summary><p className="font-body text-sm leading-relaxed mt-4 max-w-3xl" style={{ color: COLORS.slate }}>{faq.answer}</p></details>)}</div></div></section>

        <section className="py-16 md:py-24" style={{ backgroundColor: COLORS.paper }}><div className="max-w-5xl mx-auto px-6"><div className="rounded-3xl p-8 md:p-14 text-center" style={{ backgroundColor: COLORS.navy }}><div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#8FADFF" }}>Planning a bulk purchase?</div><h2 className="font-display font-bold text-3xl md:text-5xl mb-5" style={{ color: COLORS.white }}>Send us your sports equipment list.</h2><p className="font-body text-base max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>Include your item names, desired brands, quantities and delivery location. The Kreedum team can review your requirements and discuss a quotation.</p><div className="flex flex-wrap justify-center gap-4"><Link to="/quote" className="inline-flex font-body font-semibold text-sm px-8 py-4 rounded-full kr-focus transition-transform hover:scale-105" style={{ backgroundColor: COLORS.blue, color: COLORS.white }}>Request a Quote</Link><a href="https://wa.me/917570002458?text=Hi%20Kreedum%20Sports%2C%20I%20would%20like%20a%20quotation%20for%20bulk%20sports%20equipment." target="_blank" rel="noopener noreferrer" className="inline-flex font-body font-semibold text-sm px-8 py-4 rounded-full kr-focus border transition-transform hover:scale-105" style={{ borderColor: "rgba(255,255,255,0.3)", color: COLORS.white }}>Enquire on WhatsApp</a></div></div></div></section>
      </main>
      <Footer />
      <WhatsAppButton message="Hi Kreedum Sports, I would like a quotation for bulk sports equipment." />
    </div>
  );
}
