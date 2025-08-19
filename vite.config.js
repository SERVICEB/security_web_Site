import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Configuration pour la production
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  
  // Configuration sécurisée du serveur
  server: {
    port: process.env.PORT || 3000,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
    strictPort: true,
    // Sécurité renforcée pour le développement
    cors: false
  },
  
  // Configuration pour le preview
  preview: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    strictPort: true
  },
  
  // Base URL pour les assets
  base: './',
  
  // Optimisation des dépendances
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})