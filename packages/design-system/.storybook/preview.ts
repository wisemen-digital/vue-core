/* eslint-disable unicorn/consistent-function-scoping */
import '../src/styles/index.css'

import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import { h } from 'vue'

import { i18nPlugin } from '../src/plugins/i18n.plugin'
import StoryWrapper from './StoryWrapper.vue'

setup((app) => {
  app.use(i18nPlugin)
})

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
