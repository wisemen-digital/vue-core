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

// const query = [
//   {
//     link: '/query/getting-started',
//     text: 'Getting started',
//   },
// ]

const docs = [
  {
    link: '/components/autocomplete/app-address-autocomplete',
    text: 'AppAddressAutocomplete',
  },
  {
    link: '/components/button/app-button',
    text: 'AppButton',
  },
  {
    link: '/components/checkbox/app-checkbox',
    text: 'AppCheckbox',
  },
  {
    link: '/components/dialog/app-dialog',
    text: 'AppDialog',
  },
  {
    link: '/components/drawer/app-drawer',
    text: 'AppDrawer',
  },
  {
    link: '/components/dropdown-menu/app-dropdown-menu',
    text: 'AppDropdownMenu',
  },
  {
    link: '/components/input-field/app-text-field',
    text: 'AppTextField',
  },
  {
    link: '/components/input-field/app-number-field',
    text: 'AppNumberField',
  },
  {
    link: '/components/input-field/app-password-field',
    text: 'AppPasswordField',
  },
  {
    link: '/components/input-field/app-textarea',
    text: 'AppTextarea',
  },
  {
    link: '/components/input-field/app-phone-number-field',
    text: 'AppPhoneNumberField',
  },
  {
    link: '/components/select/app-select',
    text: 'AppSelect',
  },
  {
    link: '/components/switch/app-switch',
    text: 'AppSwitch',
  },
  {
    link: '/components/radio-group/app-radio-group',
    text: 'AppRadioGroup',
  },
  {
    link: '/components/table/app-table',
    text: 'AppTable',
  },
  {
    link: '/components/tabs/app-tabs',
    text: 'AppTabs',
  },
  {
    link: '/components/theme-provider/app-theme-provider',
    text: 'AppThemeProvider',
  },
  {
    link: '/components/toast/app-toast',
    text: 'AppToast',
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
  },
})
