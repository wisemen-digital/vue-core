import { defineConfig } from 'vite'

export default defineConfig({
  // @ts-expect-error - error
  test: {
    mockReset: false,
    setupFiles: [
      'vitest-localstorage-mock',
    ],
  },
})
