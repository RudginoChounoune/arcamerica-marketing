import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: {
    alias: {
      // so "@/components/…" maps to "<project-root>/src/components/…"
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),   // injects Tailwind’s PostCSS plugin
  ],
  server: {
    proxy: {
      '/blog': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blog/, ''),
      },
    },
  },
})