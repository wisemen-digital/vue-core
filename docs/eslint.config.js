import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [
  ...(await eslintVueConfig),
  {
    rules: {
      'perfectionist/sort-objects': 'off',
      '@intlify/vue-i18n/no-raw-text': 'off',
      'vuejs-accessibility/label-has-for': 'off',
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
      'better-tailwindcss/enforce-consistent-class-order': 'off',
      'better-tailwindcss/enforce-consistent-variable-syntax': 'off',
      'better-tailwindcss/enforce-consistent-important-position': 'off',
      'better-tailwindcss/enforce-shorthand-classes': 'off',
      'better-tailwindcss/no-duplicate-classes': 'off',
      'better-tailwindcss/no-deprecated-classes': 'off',
      'better-tailwindcss/no-unnecessary-whitespace': 'off',
      'better-tailwindcss/no-unregistered-classes': 'off',
      'better-tailwindcss/no-conflicting-classes': 'off',
      'better-tailwindcss/no-restricted-classes': 'off',
      'project-structure/independent-modules': 'off',
    },
  },
  {
    ignores: [
      '**/public/*',
      '**/scripts/**',
      'postcss.config.mjs',
    ],
  },
]
