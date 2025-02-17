import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['4bb6-2409-40c1-5004-8229-502c-2369-7af-1d12.ngrok-free.app']
  },
  plugins: [react(), tailwindcss()],
})
