import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

import type { LintConfig } from '#types/lint.type.ts'

export const tailwindConfig: LintConfig = [
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
      'better-tailwindcss/enforce-consistent-variable-syntax': [
        'error',
        {
          syntax: 'parentheses',
        },
      ],
      'better-tailwindcss/no-unregistered-classes': [
        'error',
        {
          ignore: [
            '^group(?:\\/(\\S*))?$',
            '^peer(?:\\/(\\S*))?$',
            // anything starting with custom- should be ignored
            '^custom-(?:\\S+)?$',
          ],
        },
      ],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/assets/styles/index.css',
      },
    },
  },
]
