import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      '@intlify/vue-i18n/no-raw-text': 'off',
      'better-tailwindcss/no-unregistered-classes': 'off',
      'check-file/folder-naming-convention': 'off',
      'import/extensions': 'off',
      'project-structure/independent-modules': 'off',
      'unicorn/no-keyword-prefix': 'off',
      'vuejs-accessibility/click-events-have-key-events': 'off',
      'vuejs-accessibility/form-control-has-label': 'off',
      'vuejs-accessibility/label-has-for': 'off',
      'vuejs-accessibility/mouse-events-have-key-events': 'off',
      'vuejs-accessibility/no-static-element-interactions': 'off',
    },

    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/styles/index.css',
      },
    },
  },
  {
    ignores: [
      '**/src/components/sonner/Toaster.vue',
    ],
  },
]
