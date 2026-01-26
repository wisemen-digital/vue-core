import '@wisemen/vue-core-components/style.css'
import './index.css'

import ClassConfig from '@docs/.vitepress/components/ClassConfig.vue'
import ComponentPreview from '@docs/.vitepress/components/ComponentPreview.vue'
import MethodsTable from '@docs/.vitepress/components/tables/MethodsTable.vue'
import PropsTable from '@docs/.vitepress/components/tables/PropsTable.vue'
import { router } from '@docs/router'
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
      'component.table.clear_filter': 'Clear filter|Clear filters',
      'component.table.no_data.description': 'There is currently no data available.',
      'component.table.no_data.title': 'No data available',
      'component.table.no_results.description': 'We couldn\'t find any results for your search. Please try again with different criteria.',
      'component.table.no_results.title': 'We couldn\'t find any results',
      'component.table.results_may_be_hidden': 'Some results may be hidden because of {count} active filter|Some results may be hidden because of {count} active filters',
    },
  },
})

const theme: typeof DefaultTheme = {
  Layout: DefaultTheme.Layout,
  enhanceApp(ctx) {
    ctx.app.use(i18nPlugin as any)
    ctx.app.use(router)
    ctx.app.component('ComponentPreview', ComponentPreview)
    ctx.app.component('ClassConfig', ClassConfig)
    ctx.app.component('PropsTable', PropsTable)
    ctx.app.component('MethodsTable', MethodsTable)
    DefaultTheme.enhanceApp(ctx)
  },
}

export default theme
