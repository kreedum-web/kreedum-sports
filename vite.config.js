import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.kreedum.com",
     dynamicRoutes: [
            "/quote",
            "/links",
            "/about-us",
            "/privacy-policy",
            "/terms-and-conditions",
            "/gym-equipment-in-lucknow",
            "/gym-setup-in-lucknow",
            "/gym-packages",
            "/gym-packages/10-lakh-gym-package",
            "/gym-packages/17-5-lakh-gym-package",
            "/gym-packages/26-5-lakh-gym-package",
          ],
    }),
  ],
});