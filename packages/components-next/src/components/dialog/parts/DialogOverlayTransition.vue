<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
    :initial="{
      opacity: 0,
    }"
    :animate="{
      opacity: 1,
    }"
    :exit="{
      opacity: 0,
    }"
    :transition="{
      duration: 0.2,
    }"
  />
</template>
