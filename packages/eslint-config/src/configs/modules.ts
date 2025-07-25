// @ts-check
import {
  createIndependentModules,
  projectStructurePlugin,
} from 'eslint-plugin-project-structure'

import type { LintConfig } from '#types/lint.type.ts'

export const independentModulesConfig = createIndependentModules({
  modules: [
    {
      name: 'Root folder',
      allowImportsFrom: [
        'src/modules/*/index.ts',
        'src/modules/*/components.ts',
        '!src/modules/**/*',
        'virtual:pwa-register/vue',
      ],
      errorMessage:
        '🔥 The `root` folder cannot import items from the `modules` folder. 🔥',
      pattern: [
        [
          '!src/modules/**/*',
        ],

      ],
    },

    {
      name: 'Features',
      allowImportsFrom: [
        [
          'src/**/*',
          '!src/modules/**/*',
        ],
        [
          '!src/modules/**/*/features/**/*',
        ],
        [
          '{family_5}/**/*',
        ],
        [
          'src/modules/*/index.ts',
        ],
        [
          'src/modules/*/components.ts',
        ],
        [
          'virtual:pwa-register/vue',

        ],
      ],
      errorMessage:
        '🔥 Everything in the features folder is encapsulated, you cannot import from outside the folder. 🔥',
      pattern: 'src/modules/*/features/**/*',
    },
    {
      name: 'Modules',
      allowImportsFrom: [
        [
          'virtual:pwa-register/vue',
        ],
        [
          'src/**/*',
          '!src/modules/**/*',
        ],
        [
          '{family_3}/**/*',
        ],
        [
          'src/modules/*/index.ts',
        ],
        [
          'src/modules/*/components.ts',
        ],
      ],
      errorMessage:
        '🔥 Everything in the modules folder is encapsulated, you cannot import from outside the folder. 🔥',
      pattern: [
        'src/modules/**/*',
      ],
    },
  ],
})

export const modulesConfig: LintConfig = {
  files: [
    '**/*.ts',
    '**/*.tsx',
    '**/*.js',
    '**/*.jsx',
    '**/*.vue',
  ],
  plugins: {
    'project-structure': projectStructurePlugin,
  },
  rules: {
    // If you have many rules in a separate file.
    'project-structure/independent-modules': [
      'error',
      independentModulesConfig,
    ],
  },
}
