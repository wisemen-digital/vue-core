import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'vue-core-query',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library (Vue)
      external: [
        'vue',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: { vue: 'Vue' },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      cleanVueFileName: true,
      exclude: [
        'src/test/**',
        'src/**/story/**',
        'src/**/*.story.vue',
      ],
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
  resolve: { alias: { '@': resolve(projectRootDir, 'src') } },
})
