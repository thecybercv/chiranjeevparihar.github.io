import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chiranjeevparihar.github.io/',
  plugins: [react()],
})
