<script setup lang="ts">
import { TooltipProvider } from 'reka-ui'
</script>

<template>
  <!-- eslint-disable better-tailwindcss/no-unknown-classes -->
  <TooltipProvider>
    <div
      class="
        default light flex items-center justify-center bg-primary p-4
        text-primary
      "
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
