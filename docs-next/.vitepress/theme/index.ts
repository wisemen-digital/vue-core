import './index.css'
import '@wisemen/vue-core-components/style.css'

import { createI18n } from 'vue-i18n'
import DefaultTheme from 'vitepress/theme'
import ComponentPreview from '../components/ComponentPreview.vue'

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  legacy: false,
  messages: {
    en: {}
  }
})

const theme: typeof DefaultTheme = {
  Layout: DefaultTheme.Layout,
  enhanceApp(ctx) {
    ctx.app.use(i18nPlugin as any)
    ctx.app.component('ComponentPreview', ComponentPreview)
    DefaultTheme.enhanceApp(ctx)
  },
}

export default theme
