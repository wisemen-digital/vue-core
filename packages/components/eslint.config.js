import eslintVueConfig from '@wisemen/eslint-config-vue'

export const allowedComponentClasses = [
  'icon',
  'breadcrumbs',
  'button',
  'calendar',
  'checkbox',
  'dialog',
  'dropdown-menu',
  'icon-button',
  'input-field-error',
  'input-field-hint',
  'input-field-label',
  'popover',
  'select',
  'switch',
  'table',
  'tabs',
  'tag',
  'text-field',
  'textarea',
  'toast',
  'radio-group',
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
