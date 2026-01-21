import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist',
      include: ['src/**/*.ts', 'src/**/*.vue'],
      rollupTypes: false,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        routes: resolve(__dirname, 'src/routes/routes.ts'),
        locales: resolve(__dirname, 'src/locales/i18n.ts'),
      },
      formats: ['es'],
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
})
