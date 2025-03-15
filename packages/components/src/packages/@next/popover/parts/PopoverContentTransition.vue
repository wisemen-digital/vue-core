<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
    :initial="{
      opacity: 0,
      scale: 0,
    }"
    :animate="{
      opacity: 1,
      scale: 1,
    }"
    :exit="{
      opacity: 0,
      scale: 0,
    }"
    :transition="{
      duration: 0.4,
      type: 'spring',
      bounce: 0.2,
    }"
    class="data-[side=bottom]:origin-top data-[side=top]:origin-bottom data-[side=left]:origin-right data-[side=right]:origin-left"
  >
    <slot />
  </Motion>
</template>
