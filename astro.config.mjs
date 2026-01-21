// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // 'auto' = inline small CSS files, link big ones
    // 'always' = inline everything (good for small Tailwind projects)
    inlineStylesheets: "auto",
  },
});
