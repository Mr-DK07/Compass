import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/pages": `https://compass-blog.vercel.app/`,
    },
  },
  plugins: [react(), tailwindcss()],
})
