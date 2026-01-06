import WisemenEslintConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await WisemenEslintConfig),
  {
    rules: {
      'project-structure/independent-modules': 'off',
      'require-explicit-generics/require-explicit-generics': 'off',
      'ts/explicit-function-return-type': 'off',
    },
  },

]
