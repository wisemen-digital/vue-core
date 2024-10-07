<script setup lang="ts" generic="TMeta">
import {
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from 'reka-ui'
import { computed, ref } from 'vue'

import { tabsStyle } from '@/components/tabs/tabs.style.js'
import type { TabItem } from '@/types/tabs.type.js'

const props = defineProps<{
  items: TabItem<TMeta>[]
}>()

const style = tabsStyle()

const containerClasses = computed<string>(() => style.container())
const indicatorClasses = computed<string>(() => style.indicator())
const itemClasses = computed<string>(() => style.item())
const itemContentClasses = computed<string>(() => style.itemContent())

const value = ref<string>('Tab 1')
</script>

<template>
  <TabsRoot v-model="value">
    <TabsList :class="containerClasses">
      <div class="relative">
        <TabsIndicator
          :class="indicatorClasses"
        />

        <!-- TODO: focus state -->
        <TabsTrigger
          v-for="item of props.items"
          :key="item.label"
          :value="item.id"
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
  </TabsRoot>
</template>
