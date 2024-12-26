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
    en: {},
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
