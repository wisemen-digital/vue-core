import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      'import/extensions': 'off',
      'project-structure/independent-modules': 'off',
    },
  },
]
