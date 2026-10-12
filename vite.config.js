import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Konfigurasi Vite standar. Tidak perlu diubah untuk deploy ke Vercel.
export default defineConfig({
  plugins: [react()],
});
