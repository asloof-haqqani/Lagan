import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the repo name. Critical for GitHub Pages to find the CSS/JS files.
  base: '/Lagan/',
});