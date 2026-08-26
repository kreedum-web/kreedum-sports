import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.kreedum.com",
      dynamicRoutes: [
        "/",
        "/quote",
        "/links",

        // Categories
        "/products",
        "/services",
        "/gallery",
        "/contact",
        "/about",

        // Services
        "/services/gym-flooring",
        "/services/epdm-flooring",
        "/services/artificial-turf",
        "/services/gym-setup",
        "/services/sports-court-installation",

        // Product Categories
        "/products/gym-equipment",
        "/products/rubber-weight-plates",
        "/products/dumbbells",
        "/products/barbells",
        "/products/benches",
        "/products/football-goal-post",
        "/products/badminton-court-matting",
        "/products/basketball-poles",
        "/products/cricket-pitch",
        "/products/athletics-equipment"
      ]
    })
  ]
});
