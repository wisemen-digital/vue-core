import '../src/styles/index.css'

import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import { themes } from 'storybook/theming'
import { h } from 'vue'
import {
  createMemoryHistory,
  createRouter,
} from 'vue-router'

import { i18nPlugin } from '../src/plugins/i18n.plugin'
import StoryWrapper from './StoryWrapper.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/:catchAll(.*)',
      component: {
        template: '<div />',
      },
    },
  ],
})

setup((app) => {
  app.use(i18nPlugin)
  app.use(router)
})

const preview: Preview = {
  decorators: [
    (story) => {
      return () => h(StoryWrapper, {}, () => h(story()))
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: {
        ...themes.dark,
      },
      light: {
        ...themes.light,
      },
    },
  },

}

export default preview
