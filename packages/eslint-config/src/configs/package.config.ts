/* eslint-disable eslint-plugin-wisemen/explicit-function-return-type-with-regex */
import antfu from '@antfu/eslint-config'
import globals from 'globals'

import { a11yConfig } from '#rules/a11y.ts'
import { baseConfig } from '#rules/base.ts'
import { compatConfig } from '#rules/compatLint.ts'
import {
  DEFAULT_I18N_LOCALES_FOLDER_PATH,
  i18nConfig,
} from '#rules/i18n.ts'
import { pathConfig } from '#rules/path.ts'
import { perfectionistConfig } from '#rules/perfectionist.ts'
import { simpleSortConfig } from '#rules/simpleSort.ts'
import { spacingConfig } from '#rules/spacing.ts'
import { unicornConfig } from '#rules/unicorn.ts'
import { vitestConfig } from '#rules/vitest.ts'
import { wisemenConfig } from '#rules/wisemen.ts'

export interface PackageConfigOptions {
  localesFolderPath?: string
}

export async function packageConfig(config?: PackageConfigOptions) {
  return await antfu(
    baseConfig,
    spacingConfig,
    perfectionistConfig,
    unicornConfig,
    a11yConfig,
    ...compatConfig,
    simpleSortConfig,
    vitestConfig,
    i18nConfig,
    pathConfig,
    wisemenConfig,
    {
      name: 'import/settings-and-parser',
      settings: {
        'import/extensions': [
          '.ts',
        ],
        'vue-i18n': {
          localeDir: config?.localesFolderPath ?? DEFAULT_I18N_LOCALES_FOLDER_PATH,
          messageSyntaxVersion: '^9.0.0',
        },
      },
    },
    {
      name: 'env-and-language-options',
      languageOptions: {
        ecmaVersion: 'latest',
        globals: {
          ...globals.browser,
        },
        sourceType: 'module',
      },
    },
  )
}
