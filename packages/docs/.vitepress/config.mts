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
        link: '/components/button/app-button',
        text: 'AppButton',
      },
      {
        link: '/components/app-icon-button',
        text: 'AppIconButton',
      },
      {
        link: '/components/app-router-link-button',
        text: 'AppRouterLinkButton',
      },
    ],
    text: 'Button',
  },
  {
    items: [
      {
        link: '/components/app-combobox',
        text: 'AppCombobox',
      },
      {
        link: '/components/app-multi-combobox',
        text: 'AppMultiCombobox',
      },
      {
        link: '/components/form-combobox',
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
        '@': resolve(__dirname, '../'),
        '@components': resolve(__dirname, '../../components/src'),
      },
    },
  },
})
