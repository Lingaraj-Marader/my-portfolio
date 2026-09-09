import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Matches your GitHub repository name https://github.com/Lingaraj-Marader/my-portfolio
})

