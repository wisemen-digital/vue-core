import oxlint from 'eslint-plugin-oxlint'
import globals from 'globals'

import { eslintConfig } from './src/index.ts'

export default [
  ...(await eslintConfig),
  {
    rules: {
      'project-structure/independent-modules': 'off',
    },
  },
  {
    settings: {
      'import/extensions': [
        '.js',
      ],
      'vue-i18n': {
        localeDir: '#configs/locales/*.json',
        messageSyntaxVersion: '^9.0.0',

      },
    },
  },
  {

    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
      sourceType: 'module',
    },
  },
  {
    ignores: [
      './src/oxlint/oxlint-migrate.json',
    ],
  },
  ...oxlint.buildFromOxlintConfigFile('./src/oxlint/oxlint.json'),
]
