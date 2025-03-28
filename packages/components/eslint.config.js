import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      '@intlify/vue-i18n/no-raw-text': 'off',
      'check-file/folder-naming-convention': 'off',
      'import/extensions': 'off',
    },
  },
  {
    ignores: [
      '**/src/components/sonner/Toaster.vue',
    ],
  },
]
