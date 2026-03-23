<script setup lang="ts">
import {
  Motion,
  useReducedMotion,
} from 'motion-v'
import { computed } from 'vue'

import DashboardPageContainer from '@/ui/page/DashboardPageContainer.vue'
import { useInjectDetailPaneContext } from '@/ui/page/detailPane.context'

const detailPaneContext = useInjectDetailPaneContext(null)

const isReduceMotionEnabledOnDevice = useReducedMotion()

const contentPaddingRight = computed<string>(() => {
  if (detailPaneContext === null) {
    return '0px'
  }

  if (detailPaneContext.isFloatingDetailPane.value) {
    return '0px'
  }

  if (detailPaneContext.isOpen.value) {
    return detailPaneContext.sidebarWidth.value
  }

  return '0px'
})

const isResizing = computed<boolean>(() => detailPaneContext?.isResizing.value ?? false)

const transitionDuration = computed<number>(() => {
  if (isResizing.value) {
    return 0
  }

  return isReduceMotionEnabledOnDevice.value ? 0 : 0.3
})
</script>

<template>
  <Motion
    :initial="{
      paddingRight: contentPaddingRight,
    }"
    :animate="{
      paddingRight: contentPaddingRight,
    }"
    :transition="{
      duration: transitionDuration,
      type: 'spring',
      bounce: 0,
    }"
    class="h-full overflow-y-auto"
  >
    <DashboardPageContainer class="py-4xl">
      <slot />
    </DashboardPageContainer>
  </Motion>
</template>
