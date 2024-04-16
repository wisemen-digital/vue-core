import '../../components/src/styles/index.scss'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

export const i18nPlugin = createI18n({
  fallbackWarn: false,
  legacy: false,
  missingWarn: false,
})

createApp(App).use(router).use(i18nPlugin).mount('#app')
