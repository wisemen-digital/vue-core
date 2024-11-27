import '@/styles/index.scss'
import '@fontsource-variable/inter'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import Playground from '@/Playground.vue'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
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
      },
    },
  },
  numberFormats: {
    en: {
      default: {
        minimumFractionDigits: 0,
        style: 'decimal',
      },
    },
  },
})

const app = createApp(Playground)

app.use(i18n)
app.mount('#app')
