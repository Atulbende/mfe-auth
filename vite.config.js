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
        './App': './src/App.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure path alias is correctly set
    },
  },
  server: { port: 3001 },
});
