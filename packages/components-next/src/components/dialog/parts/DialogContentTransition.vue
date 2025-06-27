<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
    :initial="{
      opacity: 0,
      y: '5rem',
    }"
    :animate="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        bounce: 0,
        type: 'spring',
      },
    }"
    :exit="{
      opacity: 0,
      y: '5rem',
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
