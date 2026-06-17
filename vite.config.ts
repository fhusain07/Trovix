import path from "path";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    target: "esnext",
    ssr: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('scheduler')) {
            return 'vendor-react';
          }
          if (id.includes('framer-motion')) return 'vendor-framer';
          if (id.includes('@radix-ui')) return 'vendor-radix';
          if (id.includes('formik') || id.includes('yup')) return 'vendor-form';
          if (id.includes('lucide')) return 'vendor-icons';
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});