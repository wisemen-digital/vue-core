import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  external: [
    'vue',
    'vue-router',
  ],
  format: [
    'esm',
  ],
  shims: true,
})
