import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages のユーザーサイト（<user>.github.io）なのでルート配信。base は '/' のまま
export default defineConfig({
  plugins: [react()],
  base: '/',
})
