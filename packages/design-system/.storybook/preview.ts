/* eslint-disable unicorn/consistent-function-scoping */
import '../src/styles/index.css'

import type { Preview } from '@storybook/vue3-vite'
import { h } from 'vue'

import StoryWrapper from './StoryWrapper.vue'

const preview: Preview = {
  decorators: [
    // eslint-disable-next-line eslint-plugin-wisemen/explicit-function-return-type-with-regex
    (story) => ({
      setup() {
        return () => h(StoryWrapper, {}, () => h(story()))
      },
    }),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
