<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import type { DefaultPreferences } from '@/modules/settings/default-preferences/defaultPreferences'
import { useProvideSettingsContext } from '@/modules/settings/settings.context'
import type { SettingsProps } from '@/modules/settings/settings.props'
import type {
  SettingsCategory,
  SettingsConfig,
  SettingsView,
} from '@/modules/settings/settings.type'
import { useSettingsHistory } from '@/modules/settings/settingsHistory.composable'

const props = defineProps<SettingsProps>()

const defaultPreferences = defineModel<DefaultPreferences>('defaultPreferences', { required: true })

const searchTerm = ref<string>('')
const isSidebarVisible = ref<boolean>(false)

const {
  activeItem,
  canGoBack,
  canGoForward,
  goBack,
  goForward,
  onShowItem,
  onShowSection,
  onShowView,
} = useSettingsHistory({
  id: props.config.categories[0]!.views[0]!.id,
  type: 'view',
})

const activeView = computed<SettingsView>(() => {
  const views = props.config.categories.flatMap((category) => category.views)

  if (activeItem.value.type === 'view') {
    return views.find((view) => view.id === activeItem.value.id)!
  }

  return views.find((view) => view.sections.some(
    (section) => section.id === activeItem.value.id,
  ))!
})

const filteredCategories = computed<SettingsCategory[]>(() => {
  const isSearchTermEmpty = searchTerm.value.trim() === ''

  if (isSearchTermEmpty) {
    return props.config.categories
  }

  const categoriesWithMatchingItems = props.config.categories
    .map((category) => {
      const filteredViews = category.views
        .map((view) => {
          const matchingSections = view.sections.filter((section) => {
            const titleMatch = section.title.toLowerCase().includes(searchTerm.value.toLowerCase())
            const descriptionMatch = section.description.toLowerCase()
              .includes(searchTerm.value.toLowerCase())

            const tagsMatch = section.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm.value.toLowerCase()))

            return titleMatch || descriptionMatch || tagsMatch
          })

          const isViewTitleMatch = view.title.toLowerCase().includes(searchTerm.value.toLowerCase())
          const isViewDescriptionMatch = view.description?.toLowerCase()
            .includes(searchTerm.value.toLowerCase()) ?? false

          if (isViewTitleMatch || isViewDescriptionMatch || matchingSections.length > 0) {
            return {
              ...view,
              sections: matchingSections,
            }
          }

          return null
        })
        .filter(Boolean)

      return {
        ...category,
        views: filteredViews,
      }
    })
    .filter((category) => category.views.length > 0)

  return categoriesWithMatchingItems as SettingsCategory[]
})

useProvideSettingsContext({
  isSidebarVisible,
  activeItem,
  activeView,
  canGoBack,
  canGoForward,
  config: computed<SettingsConfig>(() => props.config),
  defaultPreferencesState: defaultPreferences,
  filteredCategories,
  goBack,
  goForward,
  searchTerm,
  onShowItem,
  onShowSection,
  onShowView,
})
</script>

<template>
  <div class="@container/settings h-full">
    <div
      class="
        grid h-full
        @3xl/settings:grid-cols-[auto_1fr]
      "
    >
      <slot />
    </div>
  </div>
</template>
