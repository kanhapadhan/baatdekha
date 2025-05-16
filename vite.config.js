import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/baatdekha/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    historyApiFallback: true  // Important for dev
  }
});