import { resolve } from 'node:path'
import { defineConfig } from 'vitepress'

import ComponentPreviewPlugin from './plugins/ComponentPreview'

const guide = [
  {
    link: '/guide/getting-started',
    text: 'Getting started',
  },
  {
    link: '/guide/extending-icons',
    text: 'Extending icons',
  },
  {
    link: '/guide/styling',
    text: 'Styling API',
  },
]

const docs = [
  {
    link: '/components/autocomplete/address-autocomplete',
    text: 'AddressAutocomplete',
  },
  {
    link: '/components/button/button',
    text: 'Button',
  },
  {
    link: '/components/checkbox/checkbox',
    text: 'Checkbox',
  },
  {
    link: '/components/dialog/dialog',
    text: 'Dialog',
  },
  {
    link: '/components/drawer/drawer',
    text: 'Drawer',
  },
  {
    link: '/components/dropdown-menu/dropdown-menu',
    text: 'Dropdown Menu',
  },
  {
    link: '/components/input-field/text-field',
    text: 'Text Field',
  },
  {
    link: '/components/input-field/number-field',
    text: 'Number Field',
  },
  {
    link: '/components/input-field/password-field',
    text: 'Password Field',
  },
  {
    link: '/components/input-field/textarea',
    text: 'Textarea',
  },
  {
    link: '/components/input-field/phone-number-field',
    text: 'Phone Number Field',
  },
  {
    link: '/components/select/select',
    text: 'Select',
  },
  {
    link: '/components/switch/switch',
    text: 'Switch',
  },
  {
    link: '/components/radio-group/radio-group',
    text: 'Radio Group',
  },
  {
    link: '/components/table/table',
    text: 'Table',
  },
  {
    link: '/components/tabs/tabs',
    text: 'Tabs',
  },
  {
    link: '/components/theme-provider/theme-provider',
    text: 'Theme Provider',
  },
  {
    link: '/components/toast/toast',
    text: 'Toast',
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-core/',
  description: 'Vue Core',
  themeConfig: {
    nav: [
      { link: '/', text: 'Home' },
      // { link: '/markdown-examples', text: 'Examples' },
    ],

    sidebar: [
      {
        items: guide,
        text: 'Guide',
      },
      {
        collapsed: false,
        items: docs,
        text: 'Components',
      },
    ],
  },
  markdown: {
    preConfig(md) {
      md.use(ComponentPreviewPlugin)
    },
  },
  title: 'Vue Core',
  vite: {
    resolve: {
      alias: {
        '@docs': resolve(__dirname, '../'),
        '@': resolve(__dirname, '../../components/src'),
      },
    },
    plugins: [
      // tailwindcss(),
    ]
  },
})
