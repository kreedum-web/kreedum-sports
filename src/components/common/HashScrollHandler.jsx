import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    // If the URL contains a hash, scroll to that section.
    if (location.hash) {
      const id = decodeURIComponent(location.hash.substring(1));

      const timer = setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }

    // For normal page navigation, always start at the top.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname, location.hash]);

  return null;
}