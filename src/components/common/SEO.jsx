import { useEffect } from "react";

export default function SEO({
  title,
  description,
  canonical,
  image = "https://www.kreedum.com/og-image.jpg",
  type = "website",
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, attribute, value) => {
      let element = document.head.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", value);
    };

    // Description
    setMeta('meta[name="description"]', "name", description);

    // Canonical
    let canonicalElement = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.rel = "canonical";
      document.head.appendChild(canonicalElement);
    }

    canonicalElement.href = canonical;

    // Open Graph
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[property="og:url"]', "property", canonical);
    setMeta('meta[property="og:type"]', "property", type);
    setMeta('meta[property="og:image"]', "property", image);

    // Twitter
    setMeta('meta[name="twitter:card"]', "name", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", title);
    setMeta('meta[name="twitter:description"]', "name", description);
    setMeta('meta[name="twitter:image"]', "name", image);

    // WebPage Schema
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonical,
    };

    let webPageScript = document.getElementById("seo-webpage-schema");

    if (!webPageScript) {
      webPageScript = document.createElement("script");
      webPageScript.id = "seo-webpage-schema";
      webPageScript.type = "application/ld+json";
      document.head.appendChild(webPageScript);
    }

    webPageScript.textContent = JSON.stringify(webPageSchema);

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.kreedum.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: title.split("|")[0].trim(),
          item: canonical,
        },
      ],
    };

    let breadcrumbScript = document.getElementById(
      "seo-breadcrumb-schema"
    );

    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement("script");
      breadcrumbScript.id = "seo-breadcrumb-schema";
      breadcrumbScript.type = "application/ld+json";
      document.head.appendChild(breadcrumbScript);
    }

    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
  }, [title, description, canonical, image, type]);

  return null;
}