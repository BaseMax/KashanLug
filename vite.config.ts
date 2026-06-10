import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readdirSync } from "node:fs";
import tailwindcss from "@tailwindcss/vite";

const pagesDir = resolve(__dirname, "pages");
const pageInputs = Object.fromEntries(
  readdirSync(pagesDir)
    .filter((f) => f.endsWith(".html"))
    .map((f) => [f.replace(/\.html$/, ""), resolve(pagesDir, f)]),
);

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...pageInputs,
      },
    },
  },
});
