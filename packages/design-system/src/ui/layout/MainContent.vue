<script setup lang="ts">
import {
  Motion,
  useReducedMotion,
} from 'motion-v'
import { computed } from 'vue'

import { useMainSidebar } from '@/ui/sidebar/mainSidebar.composable'

const {
  isFloatingSidebar,
  isSidebarOpen,
  sidebarWidth,
  variant,
} = useMainSidebar()

const isReduceMotionEnabledOnDevice = useReducedMotion()

const contentPaddingLeft = computed<string>(() => {
  if (variant.value === 'icons-only') {
    return sidebarWidth.value
  }

  if (isSidebarOpen.value && !isFloatingSidebar.value) {
    return sidebarWidth.value
  }

  return '0.5rem'
})
</script>

<template>
  <Motion
    :initial="{
      paddingLeft: contentPaddingLeft,
    }"
    :animate="{
      paddingLeft: contentPaddingLeft,
    }"
    :transition="{
      duration: isReduceMotionEnabledOnDevice ? 0 : variant === 'icons-only' ? 0.1 : 0.3,
      type: 'spring',
      bounce: 0,
    }"
    class="size-full overflow-hidden bg-secondary p-md"
  >
    <div
      class="
        size-full overflow-hidden rounded-xl border border-secondary bg-primary
        shadow-sm/5
        dark:shadow-none
      "
    >
      <slot />
    </div>
  </Motion>
</template>
