import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      // Provide a broad baseline for older mobile browsers / in-app webviews.
      targets: ['defaults', 'not IE 11'],
    }),
    react(),
    tailwindcss(),
  ],
})
