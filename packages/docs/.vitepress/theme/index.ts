import DefaultTheme from 'vitepress/theme'
import '@components/styles/index.scss'
import './index.scss'
import './override.css'

import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  enhanceApp(ctx) {
    const router = createRouter({
      history: createWebHistory(),
      routes: [],
    })
    
    const i18nPlugin = createI18n({
      fallbackWarn: false,
      legacy: false,
      missingWarn: false,
    })
    
    ctx.app.use(router).use(i18nPlugin)
    DefaultTheme.enhanceApp(ctx)
  }
}

export default theme