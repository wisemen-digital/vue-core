import { fileURLToPath } from 'node:url'

import {
  configDefaults,
  defineConfig,
  mergeConfig,
} from 'vitest/config'

import viteConfig from './vite.config'

const META_URL = import.meta.url

export default defineConfig(() =>
  mergeConfig(
    viteConfig,
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [
          ...configDefaults.exclude,
        ],
        root: fileURLToPath(new URL('./', META_URL)),
      },
    }),
  ))
