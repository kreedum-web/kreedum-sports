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
        "/construction",
        "/construction/civil-construction",
        "/construction/prefabricated-buildings",
        "/construction/sports-infrastructure",
        "/construction/projects",
        "/construction/about",
        "/construction/contact",
      ],
    }),
  ],
});