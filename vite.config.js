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
        "/gym-equipment-in-lucknow",
        "/gym-setup-in-lucknow",
        "/gym-packages",

      ],
    }),
  ],
});