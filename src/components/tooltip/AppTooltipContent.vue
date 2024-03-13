<script setup lang="ts">
import { TooltipContent } from 'radix-vue'

import AppTooltipArrow from './AppTooltipArrow.vue'

const props = defineProps<{
  align: 'center' | 'end' | 'start'
  hasArrow: boolean
  offset: number
}>()
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <TooltipContent
    :align="props.align"
    :arrow-padding="12"
    :side-offset="props.offset"
    class="popover-content z-popover rounded-popover border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-popover-shadow"
  >
    <!-- eslint-enable tailwindcss/no-custom-classname -->
    <slot />

    <AppTooltipArrow v-if="props.hasArrow" />
  </TooltipContent>
</template>
