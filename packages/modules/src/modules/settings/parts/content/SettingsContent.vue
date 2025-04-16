<script setup lang="ts">
import { computed } from 'vue'

import SettingsHiddenSectionsBanner from '@/modules/settings/parts/content/SettingsHiddenSectionsBanner.vue'
import SettingsSectionProvider from '@/modules/settings/parts/content/SettingsSectionProvider.vue'
import { useInjectSettingsContext } from '@/modules/settings/settings.context'
import type { SettingsSection } from '@/modules/settings/settings.type'

const {
  activeViewOrSectionId, activeView,
} = useInjectSettingsContext()

const filteredSections = computed<SettingsSection[]>(() => {
  const filteredSections = activeView.value.sections.filter((section) => {
    return section.id === activeViewOrSectionId.value
  })

  if (filteredSections.length === 0) {
    return activeView.value.sections
  }

  return filteredSections
})

const hiddenSectionCount = computed<number>(() => {
  return activeView.value.sections.length - filteredSections.value.length
})
</script>

<template>
  <div class="pb-2xl h-full overflow-auto">
    <SettingsSectionProvider
      v-for="section of filteredSections"
      :key="section.title"
      :section="section"
    >
      <Component :is="section.component()" />

      <div
        class="
          px-4xl
          last:hidden
        "
      >
        <div class="bg-quaternary h-px w-full" />
      </div>
    </SettingsSectionProvider>

    <SettingsHiddenSectionsBanner
      v-if="hiddenSectionCount > 0"
      :hidden-section-count="hiddenSectionCount"
    />
  </div>
</template>
