import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ svgrOptions: {} }), react()],
  define: {
    __APP_ENV__: process.env.VITE_VERCEL_ENV,
  },
});
