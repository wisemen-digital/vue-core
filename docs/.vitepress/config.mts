import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

import ComponentPreviewPlugin from './plugins/ComponentPreview'
import tailwindcss from '@tailwindcss/vite'

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

// const query = [
//   {
//     link: '/query/getting-started',
//     text: 'Getting started',
//   },
// ]

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
    text: 'DropdownMenu',
  },
  {
    link: '/components/input-field/text-field',
    text: 'TextField',
  },
  {
    link: '/components/input-field/number-field',
    text: 'NumberField',
  },
  {
    link: '/components/input-field/password-field',
    text: 'PasswordField',
  },
  {
    link: '/components/input-field/textarea',
    text: 'Textarea',
  },
  {
    link: '/components/input-field/phone-number-field',
    text: 'PhoneNumberField',
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
    text: 'RadioGroup',
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
    text: 'ThemeProvider',
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
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { link: '/', text: 'Home' },
      { link: '/markdown-examples', text: 'Examples' },
    ],

    search: {
      provider: 'local',
    },

    darkModeSwitchLabel: undefined,

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
