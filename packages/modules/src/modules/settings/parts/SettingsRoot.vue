<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import type { DefaultSettings } from '@/modules/settings/defaultSetting.composable'
import { useProvideSettingsContext } from '@/modules/settings/settings.context'
import type { SettingsProps } from '@/modules/settings/settings.props'
import type {
  SettingsCategory,
  SettingsConfig,
  SettingsView,
} from '@/modules/settings/settings.type'
import { useSettingsHistory } from '@/modules/settings/settingsHistory.composable'

const props = defineProps<SettingsProps>()

const defaultSettingsState = defineModel<DefaultSettings>('defaultSettingsState', { required: true })

const searchTerm = ref<string>('')

const {
  activeViewOrSectionId,
  canGoBack,
  canGoForward,
  goBack,
  goForward,
  onSelectViewOrSection,
} = useSettingsHistory(props.config.categories[0]!.views[0]!.id)

const activeView = computed<SettingsView>(() => {
  const views = props.config.categories.flatMap((category) => category.views)

  const activeView = views.find((view) => view.id === activeViewOrSectionId.value) ?? null

  if (activeView === null) {
    const match = views.find((view) => view.sections.some(
      (section) => section.id === activeViewOrSectionId.value,
    )) ?? null

    if (match === null) {
      throw new Error('No view or section found with the given ID')
    }

    return match
  }

  return activeView
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
            const descriptionMatch = section.description?.toLowerCase()
              .includes(searchTerm.value.toLowerCase()) ?? false
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
  activeViewOrSectionId,
  activeView,
  canGoBack,
  canGoForward,
  config: computed<SettingsConfig>(() => props.config),
  defaultSettingsState,
  filteredCategories,
  goBack,
  goForward,
  searchTerm,
  onSelectViewOrSection,
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
