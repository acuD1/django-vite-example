import { fileURLToPath, URL } from 'node:url'
const { resolve } = require('path');

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.svg'],
  },

  // exemple
  root: resolve('./src'),
  base: '/static/',
  server: {
    host: 'localhost',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  build: {
    outDir: resolve('./dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./src/main.js'),
      },
      output: {
        chunkFileNames: undefined,
      },
      external: [
        new RegExp('/static/.*'),
      ]
    },
  },
})
