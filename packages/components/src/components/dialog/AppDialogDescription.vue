<script setup lang="ts">
import { DialogDescription } from 'radix-vue'
</script>

<template>
  <DialogDescription :as-child="true">
    <slot />
  </DialogDescription>
</template>
