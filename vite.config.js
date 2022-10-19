import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ["public/screenshot.png"],
  resolve: {
    alias: {
      "node-fetch": "isomorphic-fetch",
    },
  },
  define: {
    "global": {},
  },
});
