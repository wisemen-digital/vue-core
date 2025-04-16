<script setup lang="ts">
import { ListboxContent } from 'reka-ui'

import SettingsSidebarCategory from '@/modules/settings/parts/sidebar/SettingsSidebarCategory.vue'
import SettingsSidebarNoResults from '@/modules/settings/parts/sidebar/SettingsSidebarNoResults.vue'
import SettingsSidebarSectionItem from '@/modules/settings/parts/sidebar/SettingsSidebarSectionItem.vue'
import SettingsSidebarViewItem from '@/modules/settings/parts/sidebar/SettingsSidebarViewItem.vue'
import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const {
  filteredCategories, searchTerm,
} = useInjectSettingsContext()
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

        <ul
          v-if="searchTerm.trim().length > 0 && view.sections.length > 0"
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
