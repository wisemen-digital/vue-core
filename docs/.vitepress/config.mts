import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

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
        link: '/components/text-field/app-text-field',
        text: 'AppTextField',
      },
    ],
    text: 'TextField',
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
