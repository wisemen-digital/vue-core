/* eslint-disable antfu/no-import-dist */
import globals from 'globals'

import eslintVueConfig from './dist/index.js'

export default [
  ...(await eslintVueConfig),
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

]
