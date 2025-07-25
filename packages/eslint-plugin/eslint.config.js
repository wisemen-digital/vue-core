import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  {
    ignores: [
      '**/src/configs/**/*',
      '**/src/util/**/*',
      '**/tools/**/*',

      '**/src/index.ts',
      '**/utils/src/**/*',
      '**/utils/tests/**/*',

    ],
  },

  ...(await eslintVueConfig),
  {
    rules: {
      'ts/explicit-function-return-type': 'off',
    },
  },
]
