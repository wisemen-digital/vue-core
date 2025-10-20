<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
    :initial="{ opacity: 0,
                x: '100%' }"
    :animate="{ opacity: 1,
                x: 0 }"
    :exit="{ opacity: 0,
             x: '100%' }"
    :transition="{
      duration: 0.5,
      type: 'spring',
      bounce: 0.2,
    }"
  >
    <slot />
  </Motion>
</template>
