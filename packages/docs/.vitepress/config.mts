import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

const guide = [
  {
    link: '/guide/getting-started',
    text: 'Getting started',
  },
]

const docs = [
  {
    items: [
      {
        link: '/components/badge/app-badge',
        text: 'AppBadge',
      },
    ],
    text: 'Badge',
  },
  {
    items: [
      {
        link: '/components/button/app-button',
        text: 'AppButton',
      },
      {
        link: '/components/button/app-icon-button',
        text: 'AppIconButton',
      },
      {
        link: '/components/button/app-router-link-button',
        text: 'AppRouterLinkButton',
      },
    ],
    text: 'Button',
  },
  {
    items: [
      {
        link: '/components/combobox/app-combobox',
        text: 'AppCombobox',
      },
      {
        link: '/components/app-multi-combobox',
        text: 'AppMultiCombobox',
      },
      {
        link: '/components/combobox/form-combobox',
        text: 'FormCombobox',
      },
      {
        link: '/components/form-multi-combobox',
        text: 'FormMultiCombobox',
      },
    ],
    text: 'Combobox',
  },
  {
    items: [
      {
        link: '/components/form-checkbox',
        text: 'FormCheckbox',
      },
      {
        link: '/components/form-checkbox-group',
        text: 'FormCheckboxGroup',
      },
    ],
    text: 'FormCheckbox',
  },
  {
    items: [
      {
        link: '/components/app-input',
        text: 'AppInput',
      },
      {
        link: '/components/form-input',
        text: 'FormInput',
      },
    ],
    text: 'Input',
  },
  {
    items: [
      {
        link: '/components/app-select',
        text: 'AppSelect',
      },
      {
        link: '/components/form-select',
        text: 'FormSelect',
      },
    ],
    text: 'Select',
  },
  {
    items: [
      {
        link: '/components/tooltip/app-tooltip',
        text: 'AppTooltip',
      },
    ],
    text: 'Tooltip',
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
  title: 'Vue Core',
  vite: {
    resolve: {
      alias: {
        '@docs': resolve(__dirname, '../'),
        '@': resolve(__dirname, '../../components/src'),
        '@components': resolve(__dirname, '../../components/src'),
      },
    },
  },
})
