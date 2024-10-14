import eslintVueConfig from '@wisemen/eslint-config-vue'

export const allowedComponentClasses = [
  'button',
  'table',
  'select',
]
export default [
  ...(await eslintVueConfig),
  {
    rules: {
      '@intlify/vue-i18n/no-raw-text': 'off',
      'import/extensions': 'off',
    },
  },
  {
    ignores: [
      '**/src/components/sonner/Toaster.vue',
    ],
  },
  {
    rules: {
      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: [
            '^custom-.*',
            ...allowedComponentClasses.map((className) => `^${className}-variant-.*`),
          ],
        },
      ],
    },
  },
]
