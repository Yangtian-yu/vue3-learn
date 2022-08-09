import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "192.168.4.188:2233",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  },
  plugins: [vue()]
})
