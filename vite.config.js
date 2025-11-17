import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import lightningcss from 'vite-plugin-lightningcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    lightningcss({
      browserslist: '>= 0.25%',
      drafts: {
        nesting: true, // Active le CSS nesting
      },
    })
  ],
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss', // Minification explicite avec Lightning CSS
  }
})