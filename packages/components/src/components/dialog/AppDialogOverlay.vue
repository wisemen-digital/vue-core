<script setup lang="ts">
import { DialogOverlay } from 'radix-vue'
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <DialogOverlay
    :force-mount="true"
    class="dialog-overlay fixed inset-0 z-dialog-overlay bg-black/30 backdrop-blur-sm"
  />
  <!-- eslint-enable tailwindcss/no-custom-classname -->
</template>
