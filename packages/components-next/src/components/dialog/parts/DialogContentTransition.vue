<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { Motion } from 'motion-v'
import { ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)

const { height, width } = useElementSize(containerRef)
</script>

<template>
  <Motion
    :initial="{
      opacity: 0,
      scale: 1.1,
    }"
    :animate="{
      opacity: 1,
      scale: 1,
      width,
      height,
    }"
    :exit="{
      opacity: 0,
      scale: 1.1,
    }"
    :transition="{
      duration: 0.5,
      bounce: 0.4,
      type: 'spring',
      width: {
        bounce: 0.2,
        duration: 0.5,
        type: 'spring',
      },
      height: {
        bounce: 0.2,
        duration: 0.5,
        type: 'spring',
      },
    }"
    class="flex items-start justify-start"
  >
    <div ref="containerRef">
      <slot />
    </div>
  </Motion>
</template>
