

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 👇 This part is critical for GitHub Pages
  base: "/quickcart/", // Use your repository name here

  build: {
    outDir: "dist",
  },
});
