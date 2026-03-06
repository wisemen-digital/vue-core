<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import {
  computed,
  onMounted,
} from 'vue'

import { toComputedRefs } from '@/composables/context.composable'
import { useTabs } from '@/ui/tabs/tabs.composable'
import { useProvideTabsContext } from '@/ui/tabs/tabs.context'
import { useAdaptiveTabs } from '@/ui/tabs/tabsAdaptive.composable'
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

const {
  activeTab,
  nextPriority,
  registerTab,
  tabs,
  unregisterTab,
} = useAdaptiveTabs(computed<string | undefined>(() => modelValue.value))

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
