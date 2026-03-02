import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import unicorn from 'eslint-plugin-unicorn'
import eslintImportTypescript from 'eslint-plugin-import-typescript'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const config = [
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      },
      globals: {
        ...globals.node
      }
    }
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    rules: {
      'no-undef': 'error',
      'no-console': 'warn',
      'curly': [
        'error', 'multi-line'
      ],
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'interface', format: ['PascalCase'] },
        { selector: 'class', format: ['PascalCase'] }
      ],
      'nonblock-statement-body-position': [
        'error', 'beside'
      ]
    }
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    ignores: [
      'dist',
      'node_modules',
      'src/modules/localization/generated/i18n.generated.ts'
    ]
  },
  {
    plugins: {
      unicorn
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase'
        }
      ]
    }
  },
  {
    rules: {
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',
      '@stylistic/padding-line-between-statements': ['off'],
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '#src/utils/opentelemetry/otel-*-sdk.js',
              group: 'builtin',
              position: 'before'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['**/*.test.ts'],
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      'no-magic-numbers': 'off'
    }
  },
  {
    plugins: {
      'import-typescript': eslintImportTypescript
    },
    rules: {
      'import-typescript/no-relative-parent-imports': [
        'error', { onlyPathsImport: true }
      ]
    }
  }
]

export default config
