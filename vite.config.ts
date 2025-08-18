import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { writeFileSync } from 'node:fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'add-cname',
      closeBundle() {
        writeFileSync('dist/CNAME', 'selenazhou.com');
      },
    },
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  base: './',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
