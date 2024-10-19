import eslintVueConfig from '@wisemen/eslint-config-vue'

export const allowedComponentClasses = [
  'breadcrumbs',
  'button',
  'calendar',
  'checkbox',
  'dialog',
  'dropdown-menu',
  'dropdown-menu',
  'icon-button',
  'input-field-error',
  'input-field-hint',
  'input-field-label',
  'popover',
  'popover',
  'select',
  'switch',
  'table',
  'tabs',
  'tag',
  'text-field',
  'textarea',
  'toast',
  'tooltip',
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
