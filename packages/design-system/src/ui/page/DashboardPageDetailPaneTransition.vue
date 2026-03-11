<script setup lang="ts">
import {
  Motion,
  useReducedMotion,
} from 'motion-v'
import { computed } from 'vue'

import { useInjectDetailPaneContext } from '@/ui/page/detailPane.context'

const {
  sidebarWidth,
} = useInjectDetailPaneContext()

const isReduceMotionEnabledOnDevice = useReducedMotion()

const duration = computed<number>(() => (isReduceMotionEnabledOnDevice.value ? 0 : 0.3))
</script>

<template>
  <Motion
    :initial="{
      translateX: '100%',
    }"
    :animate="{
      translateX: '0%',
    }"
    :exit="{
      translateX: '100%',
    }"
    :transition="{
      duration,
      type: 'spring',
      bounce: 0,
    }"
    :style="{
      width: sidebarWidth,
    }"
    class="
      absolute top-0 right-0 z-4 h-full border-l border-secondary bg-secondary
    "
  >
    <slot />
  </Motion>
</template>
