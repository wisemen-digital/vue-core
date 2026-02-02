import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        url: 'https://app.example.com/',
      },
    },
    mockReset: false,
  },
})
