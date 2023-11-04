import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida principal
    assetsDir: 'assets', // Carpeta de activos (archivos estáticos)
  },
})
