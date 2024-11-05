<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { TabItem } from '@wisemen/vue-core'
import { AppTabs } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  isFullWidth: {
    default: false,
    label: 'Is Full Width',
    type: 'switch',
  },
})

const tabs: TabItem[] = [
  {
    id: 'Tab 1',
    label: 'Tab 1',
  },
  {
    id: 'Tab 2',
    label: 'Tab 2',
  },
  {
    id: 'Tab 3',
    label: 'Tab 3',
  },
]

const activeTab = ref<TabItem>(tabs[0])
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <div class="w-[300px]">
        <AppTabs
          :is-full-width="values.isFullWidth"
          :items="tabs"
          :tab="activeTab"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
