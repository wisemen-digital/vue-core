// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [...(await eslintVueConfig), {
  rules: {
    '@intlify/vue-i18n/no-raw-text': 'off',
    'project-structure/independent-modules': 'off',
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: [
          // Histoire components
          'Story',
          'Variant',
        ],
      },
    ],
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/label-has-for': 'off',
  },
}, {
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/styles/index.css',
    },
  },
}, {
  rules: {
    'unicorn/no-keyword-prefix': 'off',
  },
}, ...storybook.configs["flat/recommended"]];
