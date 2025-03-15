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
    }"
    :exit="{
      opacity: 0,
      scale: 1.1,
    }"
    :transition="{
      duration: 0.5,
      bounce: 0.4,
      type: 'spring',
    }"
  >
    <slot />
  </Motion>
</template>
