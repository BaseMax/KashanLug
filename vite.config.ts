import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  plugins: [tailwindcss()],
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
});
