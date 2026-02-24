<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import {
  computed,
  onMounted,
} from 'vue'

import { toComputedRefs } from '@/composables/context.composable'
import { useTabs } from '@/ui/tabs/tabs.composable'
import { useProvideTabsContext } from '@/ui/tabs/tabs.context'
import type { TabsProps } from '@/ui/tabs/tabs.props'
import type { TabsVariants } from '@/ui/tabs/tabs.style'
import { tabsVariants } from '@/ui/tabs/tabs.style'

const props = withDefaults(defineProps<TabsProps>(), {
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

useProvideTabsContext({
  ...toComputedRefs(props),
  hasHorizontalOverflow,
  hasReachedHorizontalEnd,
  isScrolledHorizontally,
  scrollToLeft,
  scrollToRight,
  setScrollContainerRef,
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
