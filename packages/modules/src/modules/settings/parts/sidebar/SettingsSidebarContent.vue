<script setup lang="ts">
import { ListboxContent } from 'reka-ui'

import SettingsSidebarCategory from '@/modules/settings/parts/sidebar/SettingsSidebarCategory.vue'
import SettingsSidebarNoResults from '@/modules/settings/parts/sidebar/SettingsSidebarNoResults.vue'
import SettingsSidebarSectionItem from '@/modules/settings/parts/sidebar/SettingsSidebarSectionItem.vue'
import SettingsSidebarViewItem from '@/modules/settings/parts/sidebar/SettingsSidebarViewItem.vue'
import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const {
  config,
  filteredCategories,
  searchTerm,
} = useInjectSettingsContext()

function viewHasMultipleSections(viewId: string): boolean {
  const views = config.value.categories
    .flatMap((category) => category.views)
    .find((view) => view.id === viewId)!

  return views.sections.length > 1
}
</script>

<template>
  <ListboxContent class="gap-y-xl flex flex-col">
    <SettingsSidebarCategory
      v-for="category of filteredCategories"
      :key="category.title"
      :label="category.title"
    >
      <template
        v-for="view of category.views"
        :key="view.id"
      >
        <SettingsSidebarViewItem :view="view" />

        <!-- When a view only has a single section even without filtering -->
        <!-- There's no need to show its views -->
        <ul
          v-if="searchTerm.trim().length > 0
            && viewHasMultipleSections(view.id)
            && view.sections.length > 0"
          class="-mt-xxs gap-y-xxs flex flex-col pl-[2.3rem]"
        >
          <SettingsSidebarSectionItem
            v-for="section of view.sections"
            :key="section.title"
            :section="section"
          />
        </ul>
      </template>
    </SettingsSidebarCategory>

    <SettingsSidebarNoResults />
  </ListboxContent>
</template>
