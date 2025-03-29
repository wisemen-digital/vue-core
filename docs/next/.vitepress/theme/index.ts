import './index.css'
import '@wisemen/vue-core-components/style.css'

import { createI18n } from 'vue-i18n'
import DefaultTheme from 'vitepress/theme'
import ComponentPreview from '../components/ComponentPreview.vue'

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  missingWarn: false,
  legacy: false,
  messages: {
    en: {
      'component.button.loading_label': 'Loading...',
      'component.select.empty_text': 'No results found for "{searchTerm}"',
      'component.select.remove_value': 'Remove value',
      'component.select.search_input_placeholder': 'Search',
      'shared.close': 'Close',
      'shared.loading': 'Loading...',
    }
  }
})

const theme: typeof DefaultTheme = {
  Layout: DefaultTheme.Layout,
  enhanceApp(ctx) {
    ctx.app.use(i18nPlugin)
    ctx.app.component('ComponentPreview', ComponentPreview)
    DefaultTheme.enhanceApp(ctx)
  },
}

export default theme
