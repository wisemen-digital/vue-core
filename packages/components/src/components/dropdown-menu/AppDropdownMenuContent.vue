<script setup lang="ts">
import { DropdownMenuContent } from 'radix-vue'

const props = defineProps<{
  align: 'center' | 'end' | 'start'
  side: 'bottom' | 'left' | 'right' | 'top'
  sideOffset: number
}>()
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <DropdownMenuContent
    :align="props.align"
    :arrow-padding="12"
    :side="props.side"
    :side-offset="props.sideOffset"
    class="popover-content z-popover max-h-96 min-w-40 max-w-60 overflow-y-auto rounded-popover border border-solid border-border bg-popover shadow-popover-shadow"
  >
    <!-- eslint-enable tailwindcss/no-custom-classname -->
    <slot />
  </DropdownMenuContent>
</template>
