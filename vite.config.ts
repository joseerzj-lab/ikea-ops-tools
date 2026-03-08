import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ikea-ops-tools/', // ← cambia esto por el nombre exacto de tu repo en GitHub
  build: {
    outDir: 'dist',
  },
})
