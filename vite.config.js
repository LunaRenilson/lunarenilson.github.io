// https://vite.dev/config/
import { defineConfig } 
from "vite";

import react from "@vitejs/plugin-react";
import path from 'path';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/portfolio",
  plugins: [
    react(),
    tailwindcss(),
  ],
  
  preview: {
    port: 5173,
    strictPort: true,
  },

  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173",
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});

