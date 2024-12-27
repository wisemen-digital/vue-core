import '@wisemen/vue-core/style.css'
import DefaultTheme from 'vitepress/theme'
import './main.css'
import './override.css'

import ComponentPreview from '@docs/.vitepress/components/ComponentPreview.vue'
import BulletList from '@docs/.vitepress/components/BulletList.vue'
import { createI18n } from 'vue-i18n'
import { setupDefaultStyles } from '@wisemen/vue-core'

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
        },
        tag: {
          remove: 'Remove',
        },
      }
    },
  },
  missingWarn: false,
})

const theme: typeof DefaultTheme = {
  Layout: DefaultTheme.Layout,
  enhanceApp(ctx) {
    ctx.app.use(i18nPlugin as any)
    ctx.app.component('ComponentPreview', ComponentPreview)
    ctx.app.component('BulletList', BulletList)
    DefaultTheme.enhanceApp(ctx)

    setupDefaultStyles()
  },
}

export default theme
