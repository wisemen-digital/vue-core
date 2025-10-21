import { resolve } from 'node:path'

import { defineConfig } from 'vitepress'

import {
  getPackagesNavigation,
  getPackagesSidebar,
} from '../packages/navigation'
import ComponentPreviewPlugin from './plugins/ComponentPreview'
import ComponentPreviewV1Plugin from './plugins/ComponentPreviewV1'

// @ts-expect-error - Build fails
if (typeof __VUE_PROD_DEVTOOLS__ === 'undefined') {
  // @ts-expect-error - Build fails
  globalThis.__VUE_PROD_DEVTOOLS__ = false
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vue-core/',
  title: 'Vue Core',
  rewrites: {
    home: 'index',
  },
  description: 'The central repository of Wisemen for all internal Vue packages.',
  themeConfig: {
    nav: [
      {
        text: 'Packages',
        items: [
          ...getPackagesNavigation(),
        ],
      },
    ],

    sidebar: {
      ...getPackagesSidebar(),
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/wisemen-digital/vue-core',
      },
    ],
  },
  markdown: {
    preConfig(md) {
      md.use(ComponentPreviewPlugin)
      md.use(ComponentPreviewV1Plugin)
    },
  },
  vite: {
    resolve: {
      alias: {
        '@docs': resolve(__dirname, '../'),
        '@': resolve(__dirname, '../../components/src'),
      },
    },
  },
})
