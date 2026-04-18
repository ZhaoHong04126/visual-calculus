import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 加上這一行，前後都要有斜線！GitHub Pages 專用的路徑 (Repository 名稱)
  base: '/visual-calculus/', 
})