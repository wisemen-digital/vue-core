// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eslintVueConfig from '@wisemen/eslint-config-vue'

export default [...(await eslintVueConfig), {
  rules: {
    'import/extensions': 'off',
    'project-structure/independent-modules': 'off',
  },
}, {
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/styles/index.css',
    },
  },
}, ...storybook.configs["flat/recommended"]];
