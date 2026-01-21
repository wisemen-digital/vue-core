import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@wisemen/template-module': '@wisemen/template-module',
    },
  },
  optimizeDeps: {
    exclude: [
      '@wisemen/vue-core-module-registry',
      '@wisemen/template-module',
    ],
  },
})
