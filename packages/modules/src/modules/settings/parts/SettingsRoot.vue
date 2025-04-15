<script setup lang="ts">
import {
  computed,
  ref,
} from 'vue'

import { useProvideSettingsContext } from '@/modules/settings/settings.context'
import { useSettingsHistory } from '@/modules/settings/settingsHistory.composable'
import type {
  SettingsCategory,
  SettingsConfig,
  SettingsView,
} from '@/modules/settings/types/settings.type'

const props = defineProps<{
  config: SettingsConfig
}>()

const searchTerm = ref<string>('')

const {
  activeViewId,
  canGoBack,
  canGoForward,
  goBack,
  goForward,
  onChangeView,
} = useSettingsHistory(props.config.categories[0]!.views[0]!.id)

const activeView = computed<SettingsView>(() => (
  props.config.categories
    .flatMap((category) => category.views)
    .find((view) => view.id === activeViewId.value)!
))

const filteredCategories = computed<SettingsCategory[]>(() => {
  const isSearchTermEmpty = searchTerm.value.trim() === ''

  if (isSearchTermEmpty) {
    return props.config.categories
  }

  const categoriesWithMatchingItems = props.config.categories
    .map((category) => ({
      ...category,
      views: category.views.filter((view) => {
        const isViewTitleMatch = view.title.toLowerCase().includes(searchTerm.value.toLowerCase())
        const isViewDescriptionMatch = view.description?.toLowerCase().includes(searchTerm.value.toLowerCase()) ?? false

        const isTitleMatch = view.sections.some((section) => (
          section.title.toLowerCase().includes(searchTerm.value.toLowerCase())
        ))

        const isDescriptionMatch = view.sections.some((section) => (
          section.description.toLowerCase().includes(searchTerm.value.toLowerCase())
        ))

        const isTagsMatch = view.sections.some((section) => (
          section.tags.some((tag) => tag.toLowerCase().includes(searchTerm.value.toLowerCase()))
        ))

        return isViewTitleMatch
          || isViewDescriptionMatch
          || isTitleMatch
          || isDescriptionMatch
          || isTagsMatch
      }),
    }))
    .filter((category) => category.views.length > 0)

  return categoriesWithMatchingItems
})

useProvideSettingsContext({
  activeViewId,
  activeView,
  canGoBack,
  canGoForward,
  config: computed<SettingsConfig>(() => props.config),
  filteredCategories,
  goBack,
  goForward,
  searchTerm,
  onChangeView,
})
</script>

<template>
  <div class="@container/settings grid h-full grid-cols-[auto_1fr]">
    <slot />
  </div>
</template>
