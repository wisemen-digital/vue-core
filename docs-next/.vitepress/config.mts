import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Component Library",
  description: "A modern, customizable, and accessible component library for Vue 3.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Theming', link: '/getting-started/theming' },
          { text: 'Icons', link: '/getting-started/icons' },
          { text: 'Customization', link: '/getting-started/customization' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wisemen-digital/vue-core/packages/components-next' }
    ]
  }
})
