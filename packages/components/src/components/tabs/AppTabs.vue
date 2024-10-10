<script setup lang="ts" generic="TMeta">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'reka-ui'
import { computed } from 'vue'

import { tabsStyle } from '@/components/tabs/tabs.style.js'
import type { TabItem } from '@/types/tabs.type.js'

const props = defineProps<{
  items: TabItem<TMeta>[]
}>()

const model = defineModel<TabItem<TMeta>>({
  required: true,
})

const modelAsString = computed<string>({
  get: () => model.value.value,
  set: (value) => {
    model.value = props.items.find((tab) => tab.value === value)!
  },
})

const style = tabsStyle()

const containerClasses = computed<string>(() => style.container())
const indicatorClasses = computed<string>(() => style.indicator())
const itemClasses = computed<string>(() => style.item())
const itemContentClasses = computed<string>(() => style.itemContent())
</script>

<template>
  <TabsRoot v-model="modelAsString">
    <TabsList :class="containerClasses">
      <div class="relative flex">
        <TabsIndicator
          :class="indicatorClasses"
        />

        <TabsTrigger
          v-for="item of props.items"
          :key="item.label"
          :value="item.value"
          :data-test-id="item.testId"
          :class="itemClasses"
          :disabled="item.isDisabled"
        >
          <div :class="itemContentClasses">
            <slot
              :item="item"
              name="item-left"
            />

            {{ item.label }}

            <slot
              :item="item"
              name="item-right"
            />
          </div>
        </TabsTrigger>
      </div>
    </TabsList>

    <slot />
  </TabsRoot>
</template>
