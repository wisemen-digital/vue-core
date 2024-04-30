import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@components': resolve(__dirname, '../components/src'),
    },
  },
})
