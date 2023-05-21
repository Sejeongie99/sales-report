import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        // target: 'http://localhost:5000',
        target: 'https://sales-report-um9k.onrender.com/api',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
