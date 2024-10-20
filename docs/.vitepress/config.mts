import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

import ComponentPreviewPlugin from './plugins/ComponentPreview'

const guide = [
  {
    link: '/guide/getting-started',
    text: 'Getting started',
  },
  {
    link: '/guide/cli',
    text: 'CLI',
  },
  {
    link: '/guide/styling',
    text: 'Styling',
  },
]

const query = [
  {
    link: '/query/getting-started',
    text: 'Getting started',
  },
]

const docs = [
  {
    collapsed: true,
    items: [
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
    ],
    text: 'Input Field',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/select/app-select',
        text: 'AppSelect',
      },
    ],
    text: 'Select',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/button/app-button',
        text: 'AppButton',
      },
    ],
    text: 'Button',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/table/app-table',
        text: 'AppTable',
      },
    ],
    text: 'Table',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/dropdown-menu/app-dropdown-menu',
        text: 'AppDropdownMenu',
      },
    ],
    text: 'Dropdown Menu',
  },
  {
    collapsed: true,
    items: [
      {
        link: '/components/toast/app-toast',
        text: 'AppToast',
      },
    ],
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

    sidebar: [
      {
        items: guide,
        text: 'Guide',
      },
      {
        items: query,
        text: 'Query',
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
