import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Karan-Chandwani-Portfolio/',
  build: {
    outDir: 'dist',
  },
})