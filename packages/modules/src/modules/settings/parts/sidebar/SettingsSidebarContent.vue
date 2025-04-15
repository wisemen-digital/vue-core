<script setup lang="ts">
import { ListboxContent } from 'reka-ui'

import SettingsSidebarCategory from '@/modules/settings/parts/sidebar/SettingsSidebarCategory.vue'
import SettingsSidebarNoResults from '@/modules/settings/parts/sidebar/SettingsSidebarNoResults.vue'
import SettingsSidebarViewItem from '@/modules/settings/parts/sidebar/SettingsSidebarViewItem.vue'
import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const { filteredCategories } = useInjectSettingsContext()
</script>

<template>
  <ListboxContent class="gap-y-xl flex flex-col">
    <SettingsSidebarCategory
      v-for="category of filteredCategories"
      :key="category.title"
      :label="category.title"
    >
      <SettingsSidebarViewItem
        v-for="item of category.views"
        :key="item.id"
        :view="item"
      />
    </SettingsSidebarCategory>

    <SettingsSidebarNoResults />
  </ListboxContent>
</template>
