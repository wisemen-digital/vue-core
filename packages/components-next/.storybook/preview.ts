import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3'
import { createI18n } from 'vue-i18n'

// Import the main CSS file that includes all component styles
import '../src/styles/index.css'

// Import providers
import ConfigProvider from '../src/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '../src/components/theme-provider/ThemeProvider.vue'

// Setup i18n
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      shared: {
        loading: 'Loading...',
      },
    },
  },
})

setup((app) => {
  app.use(i18n)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
  },
  decorators: [
    (story, context) => ({
      components: { 
        story, 
        ConfigProvider,
        ThemeProvider,
      },
      setup() {
        const appearance = context.globals.backgrounds?.value === '#333333' ? 'dark' : 'light'
        return { appearance }
      },
      template: `
        <ConfigProvider
          locale="en"
          teleport-target-selector="#storybook-teleport-target"
        >
          <ThemeProvider :appearance="appearance">
            <div class="font-sans p-4">
              <story />
              <div id="storybook-teleport-target"></div>
            </div>
          </ThemeProvider>
        </ConfigProvider>
      `,
    }),
  ],
};

export default preview;