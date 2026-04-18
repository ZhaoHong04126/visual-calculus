import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 終極解決方案：使用相對路徑，這樣無論部署在 GitHub Pages 子目錄還是 Vercel 根目錄都能正常運作
  base: './', 
})