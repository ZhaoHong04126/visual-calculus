import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 加上這一行，前後都要有斜線！如果部署在 Vercel 根目錄，應該設為 '/' 或是移除這行
  base: '/', 
})