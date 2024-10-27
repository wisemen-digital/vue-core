/* eslint-disable simple-import-sort/imports */
import DefaultTheme from 'vitepress/theme'
// import '@wisemen/vue-core/style.css'
import './index.scss'
import './override.css'

import ComponentPreview from '@docs/.vitepress/components/ComponentPreview.vue'
import { createI18n } from 'vue-i18n'

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  legacy: false,
  messages: {
    en: {
      components: {
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
  ...DefaultTheme,
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
  },
}

export default theme
