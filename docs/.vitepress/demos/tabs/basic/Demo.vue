<script setup lang="ts">
import { TabItem, VcTabs, VcTabsContent } from '@wisemen/vue-core'
import { ref } from 'vue';

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
  }
]

const activeTab = ref(tabs[0])
</script>

<template>
  <VcTabs
    :items="tabs"
    v-model="activeTab"
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
