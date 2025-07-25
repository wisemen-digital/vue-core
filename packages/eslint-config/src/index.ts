import antfu from '@antfu/eslint-config'
import globals from 'globals'

import { a11yConfig } from '#configs/a11y.ts'
import { baseConfig } from '#configs/base.ts'
import { compatConfig } from '#configs/compatLint.ts'
import { i18nConfig } from '#configs/i18n.ts'
import { modulesConfig } from '#configs/modules.ts'
import { pathConfig } from '#configs/path.ts'
import { perfectionistConfig } from '#configs/perfectionist.ts'
import { simpleSortConfig } from '#configs/simpleSort.ts'
import { spacingConfig } from '#configs/spacing.ts'
import { projectStructureConfig } from '#configs/structure.ts'
import { tailwindConfig } from '#configs/tailwind.ts'
import { unicornConfig } from '#configs/unicorn.ts'
import { vitestConfig } from '#configs/vitest.ts'
import { wisemenConfig } from '#configs/wisemen.ts'

export default antfu(
  baseConfig,
  spacingConfig,
  perfectionistConfig,
  unicornConfig,
  a11yConfig,
  ...compatConfig,
  simpleSortConfig,
  vitestConfig,
  i18nConfig,
  tailwindConfig,
  modulesConfig,
  pathConfig,
  wisemenConfig,
  {
    settings: {
      'import/extensions': [
        '.ts',
      ],
      'vue-i18n': {
        localeDir: './src/locales/*.json',
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
).prepend(projectStructureConfig)
