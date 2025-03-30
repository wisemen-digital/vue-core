import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      '@intlify/vue-i18n/no-raw-text': 'off',
      'vue/no-undef-components': [
        'error',
        {
          ignorePatterns: [
            // Histoire components
            'Story',
            'Variant',
          ],
        },
      ],
    },
  },
  {
    ignores: [],
  },
]
