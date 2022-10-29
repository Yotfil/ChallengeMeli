import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      input: ['resources/sass/app.sass', 'resources/js/app.js'],
      refresh: true,
    }),
  ],
})
