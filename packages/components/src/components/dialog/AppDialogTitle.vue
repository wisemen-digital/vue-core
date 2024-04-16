<script setup lang="ts">
import { DialogTitle } from 'radix-vue'
</script>

<template>
  <DialogTitle :as-child="true">
    <slot />
  </DialogTitle>
</template>
