<script lang="ts" setup>
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

const props = withDefaults(defineProps<{
  /**
   * Whether the collapsable content is visible.
   */
  isVisible: boolean
  /**
   * The duration of the transition in milliseconds.
   */
  durationInMs?: number
}>(), {
  durationInMs: 250,
})

defineSlots<{
  /** Content of the transition */
  default: () => void
}>()
</script>

<template>
  <AnimatePresence>
    <Motion
      v-if="props.isVisible"
      :as-child="true"
      :initial="{
        opacity: 0,
        height: 0,
        y: -8,
      }"
      :animate="{
        opacity: 1,
        height: 'auto',
        y: 0,
      }"
      :exit="{
        opacity: 0,
        height: 0,
        y: -8,
      }"
      :transition="{
        duration: 0.2,
      }"
      class="overflow-hidden"
    >
      <slot />
    </Motion>
  </AnimatePresence>
</template>
