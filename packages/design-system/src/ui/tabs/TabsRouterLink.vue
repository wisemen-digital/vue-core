<script setup lang="ts">
import { TabsRoot as RekaTabsRoot } from 'reka-ui'
import {
  computed,
  onMounted,
} from 'vue'
import {
  useRoute,
  useRouter,
} from 'vue-router'

import { toComputedRefs } from '@/composables/context.composable'
import { useTabs } from '@/ui/tabs/tabs.composable'
import { useProvideTabsContext } from '@/ui/tabs/tabs.context'
import type { TabsProps } from '@/ui/tabs/tabs.props'
import type { TabsVariants } from '@/ui/tabs/tabs.style'
import { tabsVariants } from '@/ui/tabs/tabs.style'
import { useAdaptiveTabs } from '@/ui/tabs/tabsAdaptive.composable'
import { isTouchDevice } from '@/utils/isTouchDevice.util'

import TabsList from './TabsList.vue'

const props = withDefaults(defineProps<TabsProps>(), {
  isAdaptive: false,
  isFullWidth: false,
  orientation: 'horizontal',
  variant: 'underline',
})

const route = useRoute()
const router = useRouter()
const activeRouteName = computed<string | undefined>(() =>
  typeof route.name === 'string' ? route.name : undefined)

const isTouch = computed<boolean>(() => isTouchDevice())

function onUpdateModelValue(value: string): void {
  if (value !== activeRouteName.value) {
    router.replace({
      name: value,
    })
  }
}

const {
  hasHorizontalOverflow,
  hasReachedHorizontalEnd,
  isScrolledHorizontally,
  scrollToActiveTab,
  scrollToLeft,
  scrollToRight,
  setScrollContainerRef,
} = useTabs({
  activeValue: activeRouteName,
})

const variants = computed<TabsVariants>(() => tabsVariants({
  isFullWidth: props.isFullWidth,
  variant: props.variant,
}))

onMounted(() => {
  scrollToActiveTab()
})

const {
  activeTab,
  registerTab,
  tabs,
  unregisterTab,
} = useAdaptiveTabs(activeRouteName)

useProvideTabsContext({
  isTouchDevice: isTouch,
  ...toComputedRefs(props),
  hasHorizontalOverflow,
  hasReachedHorizontalEnd,
  isScrolledHorizontally,
  activeTab,
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
    :model-value="activeRouteName"
    :orientation="props.orientation"
    @update:model-value="onUpdateModelValue"
  >
    <TabsList>
      <slot />
    </TabsList>
  </RekaTabsRoot>
</template>
