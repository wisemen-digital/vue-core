import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      'perfectionist/sort-objects': 'off',
      '@intlify/vue-i18n/no-raw-text': 'off',
    },
  },
  {
    ignores: [
      '**/public/*',
      '**/scripts/**',
    ],
  },
]
