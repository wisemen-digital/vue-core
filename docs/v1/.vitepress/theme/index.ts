import '@wisemen/vue-core/style.css'
import './main.css'
import './override.css'

import BulletList from '@docs/.vitepress/components/BulletList.vue'
import ComponentPreview from '@docs/.vitepress/components/ComponentPreview.vue'
import { setupDefaultStyles } from '@wisemen/vue-core'
import DefaultTheme from 'vitepress/theme'
import { createI18n } from 'vue-i18n'

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  legacy: false,
  messages: {
    en: {
      shared: {
        close: 'Close',
      },
      component: {
        address_autocomplete: {
          failed_to_fetch: 'Failed to fetch predictions.',
        },
        keyboard_shortcut: {
          then: 'then',
        },
        number_field: {
          decrement: 'Decrement',
          increment: 'Increment',
        },
        password_field: {
          hide_password: 'Hide password',
          show_password: 'Show password',
        },
        select: {
          empty_text: 'No results found for \'{searchTerm}\'.',
          search_placeholder: 'Search...',
        },
        table: {
          no_data: {
            title: 'No data',
            description: 'There is currently no data to display.',
          },
          no_results: {
            title: 'No results',
            description: 'There are no results matching your search criteria.',
          },
          page_count: '{startIndex} - {endIndex} of {totalItems}',
          items: 'items',
          next: 'Next',
          of: 'of',
          previous: 'Previous',
          results_might_be_hidden_because_of_active_filters: 'Results might be hidden because of {count} active filter | Results might be hidden because of {count} active filters',
        },
        tag: {
          remove: 'Remove',
        },
      },
    },
  },
  missingWarn: false,
})

const theme: typeof DefaultTheme = {
  Layout: DefaultTheme.Layout,
  enhanceApp(ctx) {
    ctx.app.use(i18nPlugin as any)
    ctx.app.component('ComponentPreview', ComponentPreview as any)
    ctx.app.component('BulletList', BulletList as any)
    DefaultTheme.enhanceApp(ctx)

    setupDefaultStyles()
  },
}

export default theme
