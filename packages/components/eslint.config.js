import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    ignores: [
      '**/src/components/sonner/Toaster.vue',
    ],
  },
]
