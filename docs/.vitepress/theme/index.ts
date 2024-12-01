import '@wisemen/vue-core/style.css'
import './base.css'
import './override.css'
import DefaultTheme from 'vitepress/theme'

import ComponentPreview from '@docs/.vitepress/components/ComponentPreview.vue'
import { createI18n } from 'vue-i18n'
import { setupDefaultStyles } from '@wisemen/vue-core'

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  legacy: false,
  messages: {
    en: {
      component: {
        table: {
          page_count: '{startIndex} - {endIndex} of {totalItems}',
        },
        select: {
          search_placeholder: 'Search',
        },
      },
    },
  },
  missingWarn: false,
})

const theme: typeof DefaultTheme = {
  Layout: DefaultTheme.Layout,
  enhanceApp(ctx) {
    // Add global properties
    // eslint-disable-next-line node/prefer-global/process
    if (process.env.NODE_ENV === 'development') {
      // @ts-expect-error - temp work
      globalThis.__VUE_PROD_DEVTOOLS__ = true
    }
    else {
      // @ts-expect-error - temp work
      globalThis.__VUE_PROD_DEVTOOLS__ = false
    }

    ctx.app.use(i18nPlugin as any)
    ctx.app.component('ComponentPreview', ComponentPreview)
    DefaultTheme.enhanceApp(ctx)

    setupDefaultStyles()
  },
}

export default theme
