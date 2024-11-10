import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    mockReset: false,
    setupFiles: [
      'vitest-localstorage-mock',
    ],
  },
})
