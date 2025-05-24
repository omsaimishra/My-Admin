import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/My-Admin/', // 👈 must match the repo name exactly
  plugins: [react()],
})
