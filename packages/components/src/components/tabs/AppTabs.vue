<script setup lang="ts">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'radix-vue'
import { computed } from 'vue'

import { useTabsStyle } from '@/components/tabs/tabs.style'
import type { TabItem } from '@/types/tabItem.type'

const props = defineProps<{
  items: TabItem[]
}>()

const activeTabModel = defineModel<TabItem>('tab', {
  required: true,
})

const computedModel = computed<string>({
  get: () => activeTabModel.value.id,
  set: (value) => {
    activeTabModel.value = props.items.find((tab) => tab.id === value)!
  },
})

const tabsStyle = useTabsStyle()

const listClasses = computed<string>(() => tabsStyle.list())
const indicatorClasses = computed<string>(() => tabsStyle.indicator())
const triggerClasses = computed<string>(() => tabsStyle.trigger())
</script>

<template>
  <TabsRoot v-model="computedModel">
    <TabsList :class="listClasses">
      <TabsIndicator :class="indicatorClasses" />

      <TabsTrigger
        v-for="tab of items"
        :key="tab.label"
        :data-testid="tab.testId"
        :value="tab.id"
        :class="triggerClasses"
      >
        {{ tab.label }}
      </TabsTrigger>
    </TabsList>
  </TabsRoot>
</template>
