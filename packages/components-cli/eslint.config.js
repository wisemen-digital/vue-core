import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      'import/extensions': 'off',
      'node/prefer-global/process': 'off',
      'ts/explicit-function-return-type': 'off',
      'ts/strict-boolean-expressions': 'off',
    },
  },
]
