<script setup lang="ts">
import { TooltipArrow } from 'radix-vue'
</script>

<template>
  <TooltipArrow :as-child="true">
    <div class="relative z-10 -mb-4 h-4 w-10 overflow-hidden">
      <div
        class="absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm bg-popover shadow-popover-shadow"
      />
    </div>
  </TooltipArrow>
</template>
