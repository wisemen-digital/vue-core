import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      'perfectionist/sort-objects': 'off',
      '@intlify/vue-i18n/no-raw-text': 'off',
      'import/extensions': 'off',
      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: [
            'vp-raw',
          ],
        },
      ],
    },
  },
  {
    ignores: [
      '**/public/*',
      '**/scripts/**',
    ],
  },
]
