<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
</script>

<template>
  <AnimatePresence :unwrap-element="true">
    <slot />
  </AnimatePresence>
</template>
