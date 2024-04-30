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

    // @ts-expect-error - temp work
    ctx.app.use(i18nPlugin)
    DefaultTheme.enhanceApp(ctx)
  },
}

export default theme
