import { resolve } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'vue-core',
      cssFileName: 'style',
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/next.ts'),
      ],
      fileName: (format, name) => {
        if (format === 'es') {
          return `${name}.js`
        }

        return `${name}.${format}`
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library (Vue)
      external: [
        'vue',
        'vue-i18n',
        'vue-router',
        'zod',
        'reka-ui',
        'i18n-iso-countries',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'i18n-iso-countries': 'i18nCountries',
          'reka-ui': 'RekaUI',
          'vue': 'Vue',
          'vue-i18n': 'VueI18n',
          'vue-router': 'VueRouter',
          'zod': 'Zod',
        },
      },
    },
  },
  plugins: [
    tailwindcss(),
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
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
