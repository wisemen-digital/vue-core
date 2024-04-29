import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
]
