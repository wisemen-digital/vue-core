<script setup lang="ts">
import { Motion } from 'motion-v'
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
      transition: {
        duration: 0.6,
        bounce: 0.4,
        type: 'spring',
      },
    }"
    :exit="{
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.3,
        bounce: 0,
        type: 'spring',
      },
    }"
    :layout-root="true"
  >
    <slot />
  </Motion>
</template>
