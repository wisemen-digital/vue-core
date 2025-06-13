<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { Motion } from 'motion-v'
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  useId,
} from 'vue'

import { useInjectLayoutStackContext } from '@/components/layout-stack/layoutStack.context'

const props = withDefaults(defineProps<{
  /**
   * Controls how many items can be visible in the layout stack at once.
   *
   * When the number of stacked items exceeds this value, the oldest item(s) will be hidden.
   *
   * - If set to `0`, only one item is ever visible—the newest one added to the stack.
   * - If set to `1`, the newest item and one previous item are visible.
   * - Etc.
   *
   * @default 2
   */
  maxDepth?: number
}>(), { maxDepth: 2 })

const layoutStackItemRef = ref<InstanceType<any> | null>(null)
const {
  height, width,
} = useElementSize(layoutStackItemRef)

const {
  addToStack,
  getDepth,
  removeFromStack,
  stack,
} = useInjectLayoutStackContext()

const layoutId = useId()
const hasFinishedEntering = ref<boolean>(false)

addToStack(layoutId)

const depth = computed<number>(() => getDepth(layoutId))

const scale = computed<number>(() => {
  if (width.value === 0 || height.value === 0) {
    return 1
  }

  return 1 - (depth.value * 0.05) * ((width.value / height.value))
})

const y = computed<number>(() => {
  if (width.value === 0 || height.value === 0) {
    return 0
  }

  return -depth.value * (height.value / 16)
})

onMounted(() => {
  setTimeout(() => {
    hasFinishedEntering.value = true
  }, 0)
})

onBeforeUnmount(() => {
  removeFromStack(layoutId)
})
</script>

<template>
  <Motion
    ref="layoutStackItemRef"
    :initial="{
      y: stack.length > 1 ? '20%' : undefined,
      scale: stack.length === 1 ? 1.1 : undefined,
      opacity: 0,
    }"
    :exit="{
      opacity: 0,
      y: stack.length > 1 ? '20%' : undefined,
      scale: stack.length === 1 ? 1.1 : undefined,
      transition: stack.length === 1 ? {
        duration: 0.3,
        bounce: 0,
        type: 'spring',
      } : undefined,
    }"
    :animate="{
      y,
      scale,
      filter: `brightness(${1 - depth * 0.1}) blur(${depth}px)`,
      opacity: depth > props.maxDepth ? 0 : 1,
      transition: stack.length === 1 && !hasFinishedEntering ? {
        duration: 0.6,
        bounce: 0.4,
        type: 'spring',
      } : undefined,
    }"
    :transition="{
      duration: 0.6,
      type: 'spring',
      bounce: 0.2,
    }"
  >
    <slot />
  </Motion>
</template>
