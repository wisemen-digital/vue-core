import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

import ComponentPreviewPlugin from './plugins/ComponentPreview'

// @ts-expect-error - Build fails
if (typeof __VUE_PROD_DEVTOOLS__ === 'undefined') {
  // @ts-expect-error - Build fails
  globalThis.__VUE_PROD_DEVTOOLS__ = false
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-core/next',
  title: 'Vue Component Library',
  description: 'A modern, customizable, and accessible component library for Vue 3.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Theming', link: '/getting-started/theming' },
          { text: 'Icons', link: '/getting-started/icons' },
          { text: 'Customization', link: '/getting-started/customization' },
          { text: 'Composition', link: '/getting-started/composition' },
        ],
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button/button' },
          { text: 'Icon Button', link: '/components/icon-button/icon-button' },
          { text: 'Router Link Button', link: '/components/router-link-button/router-link-button' },
          { text: 'Form Field', link: '/components/form-field/form-field' },
          { text: 'Text Field', link: '/components/text-field/text-field' },
          { text: 'Popover', link: '/components/popover/popover' },
          { text: 'Dialog', link: '/components/dialog/dialog' },
          { text: 'Tabs', link: '/components/tabs/tabs' },
          { text: 'Router Link Tabs', link: '/components/router-link-tabs/router-link-tabs' },
          { text: 'Tooltip', link: '/components/tooltip/tooltip' },
          { text: 'Select', link: '/components/select/select' },
          { text: 'Autocomplete', link: '/components/autocomplete/autocomplete' },
          { text: 'Phone Number Field', link: '/components/phone-number-field/phone-number-field' },
          { text: 'Date Picker', link: '/components/date-picker/date-picker' },
          { text: 'Textarea', link: '/components/textarea/textarea' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wisemen-digital/vue-core/packages/components-next' },
    ],
  },
  markdown: {
    preConfig(md) {
      md.use(ComponentPreviewPlugin)
    },
  },
  vite: {
    resolve: {
      alias: {
        '@docs': resolve(__dirname, '../'),
        '@': resolve(__dirname, '../../components/src'),
      },
    },
  },
})
