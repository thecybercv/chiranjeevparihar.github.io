import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/thecybercv-portfolio/', // Set to your repo name for GitHub Pages
});
