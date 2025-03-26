import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      '@intlify/vue-i18n/no-raw-text': 'off',
    },
  },
  {
    ignores: [],
  },
]
