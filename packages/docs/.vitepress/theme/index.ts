import '@components/styles/index.scss'
import './index.scss'
import './override.css'

import DefaultTheme from 'vitepress/theme'
import { createI18n } from 'vue-i18n'

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  legacy: false,
  messages: {
    en: {
      'components.keyboard_shortcut.then': 'then',
    },
  },
  missingWarn: false,
})

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  enhanceApp(ctx) {
    // @ts-expect-error - temp work
    ctx.app.use(i18nPlugin)
    DefaultTheme.enhanceApp(ctx)
  },
}

export default theme
