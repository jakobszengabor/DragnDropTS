import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
