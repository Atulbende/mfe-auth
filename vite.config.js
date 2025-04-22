import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import tailwindcss from "@tailwindcss/vite"
import federation from '@originjs/vite-plugin-federation';
import path from 'path';  // Ensure path module is imported

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './Login': './src/Login.jsx',
      },
      remotes: {
        shell: 'http://localhost:3000/assets/remoteEntry.js', // Replace with your host's address
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: { port: 3001 },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
