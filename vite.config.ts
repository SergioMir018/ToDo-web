import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: 'https://sergiomir018.github.io/ToDo-web/',
  server: {
    port: 3001
  }
})
