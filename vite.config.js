import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/PERSONAL_PORTFOLIO/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
