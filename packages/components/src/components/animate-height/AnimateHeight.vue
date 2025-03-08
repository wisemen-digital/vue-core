<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { Motion } from 'motion-v'
import { ref } from 'vue'

const el = ref<HTMLDivElement | null>(null)
const { height } = useElementSize(el)
</script>

<template>
  <Motion
    :animate="{ height }"
    :transition="{
      bounce: 0,
      duration: 0.4,
      type: 'spring',
    }"
    tabindex="-1"
    class="relative overflow-hidden"
  >
    <div ref="el">
      <slot />
    </div>
  </Motion>
</template>
