import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      'perfectionist/sort-objects': 'off',
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
]
