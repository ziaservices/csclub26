import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: '/csclub26/', // 👈 very important
  server: {
    host: "0.0.0.0",          // allow external access (LAN, No-IP)
    port: 80,                 // run on port 80
    allowedHosts: [
      "csclubtest.ddns.net",
      "csclub26.github.io",  // ✅ your No-IP domain
      "localhost",
      "127.0.0.1",
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
}));
