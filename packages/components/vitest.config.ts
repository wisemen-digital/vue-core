import { resolve } from 'node:path'

import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const projectRootDir = resolve(__dirname)

export default defineConfig({
  plugins: [
    vuePlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
  test: {
    coverage: {
      all: true,
      exclude: [
        '**/node_modules/**',
        '**/*.{spec,test}.{ts,tsx,js,jsx,vue}',
      ],
      include: [
        'src/packages/components/src/components/**/*.{ts,tsx,js,jsx,vue}',
        'src/packages/components/src/composables/**/*.{ts,tsx,js,jsx,vue}',
        'src/packages/components/src/utils/**/*.{ts,tsx,js,jsx,vue}',
      ],
      provider: 'v8',
      reporter: [
        'text',
        'html',
      ],
    },
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
})
