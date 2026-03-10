import { packageConfig } from '@wisemen/eslint-config-vue'

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

  ...(await packageConfig()),
  {
    rules: {
      'check-file/filename-naming-convention': 'off',
      'eslint-plugin-wisemen/explicit-function-return-type-with-regex': 'off',
      'max-depth': 'off',
      'ts/explicit-function-return-type': 'off',
    },
  },
]
