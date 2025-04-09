import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      'perfectionist/sort-objects': 'off',
      '@intlify/vue-i18n/no-raw-text': 'off',
      'vuejs-accessibility/label-has-for': 'off',
    },
  },
  {
    ignores: [
      '**/public/*',
      '**/scripts/**',
    ],
  },
]
