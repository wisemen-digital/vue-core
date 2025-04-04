import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  { rules: { 'import/extensions': 'off' } },
  {
    ignores: [
      '**/src/components/sonner/Toaster.vue',
    ],
  },
]
