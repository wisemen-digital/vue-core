<script setup lang="ts">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'radix-vue'
import { computed } from 'vue'

import type { TabItem } from '../../types/tabItem.type'

const props = defineProps<{
  items: TabItem[]
}>()

const activeTabModel = defineModel<TabItem>('tab', {
  required: true,
})

const computedModel = computed<string>({
  get: () => activeTabModel.value.id,
  set: (value) => {
    activeTabModel.value = props.items.find(tab => tab.id === value)!
  },
})
</script>

<template>
  <TabsRoot v-model="computedModel">
    <TabsList class="relative flex border-b border-solid border-border">
      <TabsIndicator class="absolute bottom-0 left-0 h-[2px] w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-t-full bg-primary px-8 duration-200" />

      <TabsTrigger
        v-for="tab of items"
        :key="tab.label"
        :value="tab.id"
        class="rounded px-4 py-3 outline-none ring-offset-background duration-200 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring"
      >
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>
  </TabsRoot>
</template>
