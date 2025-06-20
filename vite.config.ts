import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 设置为相对路径
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
