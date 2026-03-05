<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import {
  computed,
  onMounted,
  shallowRef,
} from 'vue'

import { toComputedRefs } from '@/composables/context.composable'
import { useTabs } from '@/ui/tabs/tabs.composable'
import type { TabItemData } from '@/ui/tabs/tabs.context'
import { useProvideTabsContext } from '@/ui/tabs/tabs.context'
import type { TabsProps } from '@/ui/tabs/tabs.props'
import type { TabsVariants } from '@/ui/tabs/tabs.style'
import { tabsVariants } from '@/ui/tabs/tabs.style'

const props = withDefaults(defineProps<TabsProps>(), {
  isAdaptive: false,
  isFullWidth: false,
  orientation: 'horizontal',
  variant: 'underline',
})

const modelValue = defineModel<string>({
  required: true,
})

const {
  hasHorizontalOverflow,
  hasReachedHorizontalEnd,
  isScrolledHorizontally,
  scrollToActiveTab,
  scrollToLeft,
  scrollToRight,
  setScrollContainerRef,
} = useTabs()

const variants = computed<TabsVariants>(() => tabsVariants({
  isFullWidth: props.isFullWidth,
  variant: props.variant,
}))

onMounted(() => {
  scrollToActiveTab()
})

let priorityCounter = 0

function nextPriority(): number {
  return priorityCounter++
}

const tabs = shallowRef<TabItemData[]>([])

const activeTab = computed<TabItemData | null>(() => {
  return tabs.value.find((tab) => tab.value === modelValue.value) ?? null
})

function registerTab(tab: TabItemData): void {
  tabs.value = [
    ...tabs.value,
    tab,
  ]
}

function unregisterTab(value: string): void {
  tabs.value = tabs.value.filter((tab) => tab.value !== value)
}

useProvideTabsContext({
  ...toComputedRefs(props),
  hasHorizontalOverflow,
  hasReachedHorizontalEnd,
  isScrolledHorizontally,
  activeTab,
  nextPriority,
  registerTab,
  scrollToLeft,
  scrollToRight,
  setScrollContainerRef,
  tabs,
  unregisterTab,
  variants,
})
</script>

<template>
  <RekaTabsRoot
    v-model="modelValue"
    :orientation="props.orientation"
  >
    <slot />
  </RekaTabsRoot>
</template>
