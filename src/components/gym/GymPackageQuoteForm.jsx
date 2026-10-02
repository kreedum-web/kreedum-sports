import { useState } from "react";
import { COLORS } from "../../config/theme";

export default function GymPackageQuoteForm({
  packageName,
  packageSlug,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hi Kreedum Sports,

I am interested in the ${packageName}.

Package: ${packageName}
Package Page: ${packageSlug}

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}

Requirements:
${formData.message || "No additional requirements provided."}
    `.trim();

    window.open(
      `https://wa.me/917570002458?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const inputClass =
    "w-full rounded-xl border px-4 py-3 font-body text-sm outline-none transition focus:border-[#2C62E0] focus:ring-2 focus:ring-[#2C62E0]/10";

  return (
    <div
      className="rounded-3xl p-5 shadow-2xl sm:p-6"
      style={{
        backgroundColor: COLORS.white,
      }}
    >
      <div className="mb-5">
        <p
          className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: COLORS.blue }}
        >
          Package Enquiry
        </p>

        <h2
          className="font-display text-2xl font-bold leading-tight"
          style={{ color: COLORS.navy }}
        >
          Get a quote for
          <span
            className="block"
            style={{ color: COLORS.blue }}
          >
            {packageName}
          </span>
        </h2>

        <p
          className="mt-2 font-body text-xs leading-relaxed"
          style={{ color: COLORS.slate }}
        >
          Tell us about your requirements and our team will get in touch.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name *"
          required
          className={inputClass}
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number *"
          required
          className={inputClass}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={inputClass}
        />

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className={inputClass}
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={`Tell us about your ${packageName} requirements...`}
          rows={3}
          className={`${inputClass} resize-none`}
        />

        <button
          type="submit"
          className="w-full rounded-xl px-5 py-3.5 font-body text-sm font-semibold transition hover:scale-[1.01]"
          style={{
            backgroundColor: COLORS.blue,
            color: COLORS.white,
          }}
        >
          Get Quote for {packageName}
        </button>

        <p
          className="text-center font-body text-[10px]"
          style={{ color: COLORS.slateLight }}
        >
          Enquiry for {packageName}
        </p>
      </form>
    </div>
  );
}