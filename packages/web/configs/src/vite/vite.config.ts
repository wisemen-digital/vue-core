/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
/* eslint-disable node/prefer-global/process */
import ImportMetaEnvPlugin from '@import-meta-env/unplugin'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import defu from 'defu'
import type { OutputOptions } from 'rollup'
import type { UserConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import istanbul from 'vite-plugin-istanbul'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import { VitePWA } from 'vite-plugin-pwa'

import { vitePwaConfig } from './vitePwaOptions.config'

function getOutput() {
  return {
    manualChunks: (id: string): string | undefined => {
      // Only chunk actual icon Vue files, not the index file with dynamic imports
      if (id.includes('src/icons/') && id.endsWith('.vue') && !id.includes('icons.ts')) {
        return 'icons'
      }

      if (id.includes('@wisemen/vue-core-components')) {
        return 'vue-core-components'
      }

      if (id.includes('@wisemen/vue-core-api-utils')) {
        return 'vue-core-api-utils'
      }

      if (id.includes('@wisemen/vue-core-telemetry')) {
        return 'vue-core-telemetry'
      }

      return undefined
    },
  } satisfies OutputOptions
}

export const DEFAULT_VITE_CONFIG_PLUGINS: UserConfig['plugins'] = [
  !process.env.KNIP && ImportMetaEnvPlugin.vite({
    env: process.env.NODE_ENV === 'mock' ? '.env.test' : '.env',
    example: '.env.example',
  }),
  tailwindcss(),
  viteCompression(),
  istanbul({
    exclude: [
      'node_modules',
      'tests/',
      'src/configs',
      'src/utils',
      'src/libs',
      'src/**/*.mock.ts',
      'src/plugins',
      'src/**/*.builder.ts',
      'src/constants',
      'src/mocks',
      'src/composables',
      'src/websocket',
      'src/client',
    ],
    extension: [
      '.js',
      '.ts',
      '.vue',
    ],
    include: 'src/**/*',
    requireEnv: false,
  }),
  vue(),
]

export const DEFAULT_VITE_CONFIG: Partial<UserConfig> = {
  build: {
    chunkSizeWarningLimit: 1000,
    cssMinify: 'lightningcss',
    minify: 'esbuild',
    rollupOptions: {
      output: getOutput(),
    },
    sourcemap: process.env.NODE_ENV !== 'production',
    target: 'esnext',
  },
  css: {
    devSourcemap: true,
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
    BUILD_COMMIT: JSON.stringify(process.env.BUILD_COMMIT ?? 'undefined'),
    BUILD_NUMBER: JSON.stringify(process.env.BUILD_NUMBER ?? '0'),
    BUILD_TIMESTAMP: JSON.stringify(process.env.BUILD_TIMESTAMP ?? 'undefined'),
  },
  esbuild: {
    legalComments: 'none',
    target: 'esnext',
    treeShaking: true,
  },
  optimizeDeps: {
    exclude: [
      '@tanstack/vue-query-devtools',
    ],
    include: [
      'vue',
      'vue-router',
      'pinia',
      '@vueuse/core',
      'zod',
      'formango',
      'tailwind-merge',
      'superjson',
      'superjson-temporal',
      '@tanstack/vue-query',
      'motion-v',
      'jwt-encode',
      'reka-ui',
      '@wisemen/vue-core-api-utils',
      'oidc-client-ts',
    ],
  },
  plugins: [],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
      {
        find: '@tests',
        replacement: '/tests',
      },
    ],
    dedupe: [
      'vue',
      '@wisemen/vue-core-components',
      'reka-ui',
      'motion-v',
    ],
  },
}

export function viteConfig(config?: Partial<UserConfig>, vitePwaOptions?: Partial<VitePWAOptions>): UserConfig {
  return defu(config, {
    DEFAULT_VITE_CONFIG,
    plugins: [
      VitePWA(vitePwaConfig(vitePwaOptions)),
      ...DEFAULT_VITE_CONFIG_PLUGINS ?? [],
    ],
  })
}
