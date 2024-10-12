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
      components: {
        password_input: {
          hide_password: 'Hide password',
          show_password: 'Show password',
        },
        select: {
          empty_text: 'No results found for \'{searchTerm}\'.',
          search_placeholder: 'Search...',
        },
      },
      shared: {
        close: 'Close',
      },
    },
  },
})

const app = createApp(Playground)

app.use(i18n)
app.mount('#app')
