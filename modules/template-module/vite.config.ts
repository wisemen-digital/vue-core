import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        locales: resolve(__dirname, 'src/locales/i18n.ts'),
        routes: resolve(__dirname, 'src/routes/routes.ts'),
      },
      formats: [
        'es',
      ],
    },
    rollupOptions: {
      external: [
        'vue',
        '@wisemen/vue-core-module-registry',
      ],
      output: {
        dir: 'dist',
        entryFileNames: '[name].mjs',
      },
    },
  },
  plugins: [
    vue(),
    dts({
      include: [
        'src/**/*.ts',
        'src/**/*.vue',
      ],
      outDir: 'dist',
      rollupTypes: false,
    }),
  ],
})
