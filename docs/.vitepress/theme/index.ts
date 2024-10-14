import '@wisemen/vue-core/style.css'
import './index.scss'

import DefaultTheme from 'vitepress/theme'
import { createI18n } from 'vue-i18n'

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  legacy: false,
  messages: {
    en: {},
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

    ctx.app.use(i18nPlugin as any)
    DefaultTheme.enhanceApp(ctx)
  },
}

export default theme
