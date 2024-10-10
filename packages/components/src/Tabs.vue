<script setup lang="ts">
import { ref } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import AppTabs from '@/components/tabs/AppTabs.vue'
import type { TabItem } from '@/types/tabs.type.js'

const tabs: TabItem[] = [
  {
    label: 'Tab 1',
    value: '1',
  },
  {
    label: 'Tab 2',
    value: '2',
  },
  {
    label: 'Tab 3',
    value: '3',
  },
]
const selectedTab = ref<TabItem>(tabs[0]!)
</script>

<template>
  <div class="grid grid-cols-3 gap-12">
    <AppTabs
      v-model="selectedTab"
      :items="tabs"
    >
      <template #item-left="{ item }">
        <AppIcon
          v-if="item.value === '1'"
          icon="translate01"
          class="mr-2"
        />
      </template>

      <template #item-right="{ item }">
        <AppIcon
          v-if="item.value === '2'"
          icon="translate01"
          class="ml-2"
        />
      </template>
    </AppTabs>
  </div>
</template>
