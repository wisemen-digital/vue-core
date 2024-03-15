import { defineConfig } from 'vitepress'

const guide = [
  {
    text: 'Getting started',
    link: '/guide/getting-started'
  }
]

const docs = [
  {
    text: 'AppButton',
    link: '/components/app-button'
  },
  {
    text: 'AppIconButton',
    link: '/components/app-icon-button'
  },
  {
    'text': 'AppRouterLinkButton',
    link: '/components/app-router-link-button'
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Core",
  description: "Vue Core",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: guide
      },
      {
        text: 'Docs',
        items: docs,
      }
    ],
  }
})
