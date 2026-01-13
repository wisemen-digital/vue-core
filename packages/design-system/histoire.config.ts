import { resolve } from 'node:path'

import { HstVue } from '@histoire/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'histoire'

export default defineConfig({
  plugins: [
    HstVue(),
  ],
  setupFile: './.histoire/setup.ts',
  theme: {
    title: 'Design System',
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  },
})
