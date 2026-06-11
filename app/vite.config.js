import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
       // Target all requests starting with /api to the backend port
      '/api': {
        target: 'https://event-pulse-api-nwyz.onrender.com',
        changeOrigin: true, // Needed for virtual hosted sites
        // rewrite: (path) => path.replace(/^\/api/, '') // Optional: If you don't want /api on the backend
      }
    }
  }
})
