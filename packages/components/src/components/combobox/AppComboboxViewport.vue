<script setup lang="ts">
import { ComboboxViewport } from 'radix-vue'
</script>

<template>
  <ComboboxViewport class="max-h-[25rem] p-1.5">
    <slot />
  </ComboboxViewport>
</template>
