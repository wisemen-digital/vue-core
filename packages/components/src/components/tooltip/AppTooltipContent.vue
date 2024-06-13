<script setup lang="ts">
import { TooltipContent } from 'radix-vue'

import AppTooltipArrow from '@/components/tooltip/AppTooltipArrow.vue'

const props = defineProps<{
  hasArrow: boolean
  align: 'center' | 'end' | 'start'
  offset: number
}>()
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <TooltipContent
    :align="props.align"
    :arrow-padding="12"
    :side-offset="props.offset"
    class="custom-popover-content z-popover rounded-popover border bg-popover shadow-popover-shadow"
  >
    <!-- eslint-enable tailwindcss/no-custom-classname -->
    <slot />

    <AppTooltipArrow v-if="props.hasArrow" />
  </TooltipContent>
</template>
