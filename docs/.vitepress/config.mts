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

const components = [
  {
    text: 'Buttons',
    items: [
      { text: 'Button', link: '/components/button/button' },
      { text: 'Icon Button', link: '/components/icon-button/icon-button' },
      { text: 'Router Link Button', link: '/components/router-link-button/router-link-button' },
      { text: 'Toggle', link: '/components/toggle/toggle' },
    ]
  },
  {
    text: 'Form Components',
    items: [
      { text: 'Checkbox', link: '/components/checkbox/checkbox' },
      { text: 'Checkbox Group', link: '/components/checkbox-group/checkbox-group' },
      { text: 'Date Field', link: '/components/date-field/date-field' },
      { text: 'Input Field', link: '/components/input-field/input-field' },
      { text: 'Number Field', link: '/components/number-field/number-field' },
      { text: 'Password Field', link: '/components/password-field/password-field' },
      { text: 'Phone Number Field', link: '/components/phone-number-field/phone-number-field' },
      { text: 'Radio Group', link: '/components/radio-group/radio-group' },
      { text: 'Select', link: '/components/select/select' },
      { text: 'Text Field', link: '/components/text-field/text-field' },
      { text: 'Textarea', link: '/components/textarea/textarea' },
    ]
  },
  {
    text: 'Overlays & Popups',
    items: [
      // { text: 'Dialog', link: '/components/dialog/dialog' },
      // { text: 'Drawer', link: '/components/drawer/drawer' },
      // { text: 'Popover', link: '/components/popover/popover' },
      { text: 'Tooltip', link: '/components/tooltip/tooltip' },
      // { text: 'Toast', link: '/components/toast/toast' },
      // { text: 'Dropdown Menu', link: '/components/dropdown-menu/dropdown-menu' }
    ]
  },
  // {
  //   text: 'Navigation & Layout',
  //   items: [
  //     { text: 'Tabs', link: '/components/tabs/tabs' },
  //     { text: 'Table', link: '/components/table/table' },
  //   ]
  // },
  // {
  //   text: 'Interactive Elements',
  //   items: [
  //     { text: 'Button', link: '/components/button/button' },
  //     { text: 'Toggle', link: '/components/toggle/toggle' },
  //     { text: 'Switch', link: '/components/switch/switch' }
  //   ]
  // },
  // {
  //   text: 'Keyboard',
  //   items: [
  //     { text: 'Keyboard Shortcut', link: '/components/keyboard/keyboard-shortcut' },
  //     { text: 'Keyboard Shortcut Provider', link: '/components/keyboard/keyboard-shortcut-provider' }
  //   ]
  // },
  // {
  //   text: 'Autocomplete',
  //   items: [
  //     { text: 'Autocomplete', link: '/components/autocomplete/autocomplete' },
  //     { text: 'Address Autocomplete', link: '/components/autocomplete/address-autocomplete' },
  //   ]
  // },
  // {
  //   text: 'Utilities',
  //   items: [
  //     { text: 'Config Provider', link: '/components/config-provider/config-provider' },
  //     { text: 'Theme Provider', link: '/components/theme-provider/theme-provider' },
  //   ]
  // }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-core/',
  description: 'Vue Core',
  themeConfig: {
    nav: [],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: false,
            prefix: false,
            boost: {
              title: 10 
            },
          }
        }
      }
    },

    sidebar: [
      {
        items: guide,
        text: 'Guide',
      },
      {
        items: components,
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
