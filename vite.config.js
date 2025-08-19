import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Configuration pour la production
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  
  // Configuration du serveur pour Render
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  
  // Configuration pour le preview (optionnel)
  preview: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
  
  // Base URL pour les assets (ajustez si nécessaire)
  base: './'
})