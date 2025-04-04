<script setup lang="ts">
import type { TabItem } from '@wisemen/vue-core'
import {
  VcTabs,
  VcTabsContent,
} from '@wisemen/vue-core'
import { ref } from 'vue'

const tabs: TabItem[] = [
  {
    label: 'Tab 1',
    value: 'tab1',
  },
  {
    label: 'Tab 2',
    value: 'tab2',
  },
  {
    label: 'Tab 3',
    value: 'tab3',
  },
]

const activeTab = ref<TabItem>(tabs[0])
</script>

<template>
  <VcTabs
    v-model="activeTab"
    :items="tabs"
  >
    <div class="p-3">
      <VcTabsContent value="tab1">
        <p>Tab 1 content</p>
      </VcTabsContent>
      <VcTabsContent value="tab2">
        <p>Tab 2 content</p>
      </VcTabsContent>
      <VcTabsContent value="tab3">
        <p>Tab 3 content</p>
      </VcTabsContent>
    </div>
  </VcTabs>
</template>
