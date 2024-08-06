import '@wisemen/vue-core/style.css'
import './index.scss'
import './override.css'

import DefaultTheme from 'vitepress/theme'
import { createI18n } from 'vue-i18n'

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  legacy: false,
  messages: {
    en: {
      components: {
        keyboard_shortcut: {
          then: 'then',
        },
        table: {
          clear_filter_filters: 'Clear filter | Clear {count} filters',
          clear_filters: 'Clear filters',
          empty_state: {
            no_data: {
              message: 'There is no data to display at this moment.',
              title: 'No items found',
            },
            no_results: {
              message: 'Your query did not match any results. Try changing your filters or clearing them.',
              title: 'No results found',
            },
          },
          items: 'items',
          next: 'Next',
          of: 'of',
          page: 'Page',
          previous: 'Previous',
          results_might_be_hidden_because_of_active_filters: 'Results might be hidden because of {count} active filter | Results might be hidden because of {count} active filters',
        },
        calendar: {
          select: 'Select',
          cancel: 'Cancel',
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
    DefaultTheme.enhanceApp(ctx)
  },
}

export default theme
