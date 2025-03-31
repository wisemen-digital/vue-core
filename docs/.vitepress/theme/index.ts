import './index.css'
import '@wisemen/vue-core/style.css'
import '@wisemen/vue-core-components/style.css'

import BulletList from '@docs/.vitepress/components/BulletList.vue'
import ComponentPreview from '@docs/.vitepress/components/ComponentPreview.vue'
import ComponentPreviewV1 from '@docs/.vitepress/components/ComponentPreviewV1.vue'
import { setupDefaultStyles } from '@wisemen/vue-core'
import DefaultTheme from 'vitepress/theme'
import { createI18n } from 'vue-i18n'

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
      'component.keyboard_shortcut.then': 'then',
    },
  },
})

const theme: typeof DefaultTheme = {
  Layout: DefaultTheme.Layout,
  enhanceApp(ctx) {
    ctx.app.use(i18nPlugin as any)
    ctx.app.component('ComponentPreview', ComponentPreview)
    ctx.app.component('ComponentPreviewV1', ComponentPreviewV1)
    ctx.app.component('BulletList', BulletList)
    DefaultTheme.enhanceApp(ctx)

    setupDefaultStyles()
  },
}

export default theme
