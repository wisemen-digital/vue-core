<script setup lang="ts">
import { TooltipContent } from 'radix-vue'
import { computed } from 'vue'

import AppTooltipArrow from '@/components/tooltip/AppTooltipArrow.vue'
import { useTooltipStyle } from '@/components/tooltip/tooltip.style'

const props = defineProps<{
  hasArrow: boolean
  align: 'center' | 'end' | 'start'
  offset: number
}>()

const tooltipStyle = useTooltipStyle()

const contentClasses = computed<string>(() => tooltipStyle.content())
</script>

<template>
  <TooltipContent
    :align="props.align"
    :arrow-padding="12"
    :side-offset="props.offset"
    :class="contentClasses"
  >
    <slot />

    <AppTooltipArrow v-if="props.hasArrow" />
  </TooltipContent>
</template>
