<script setup lang="ts">
import { TooltipArrow } from 'radix-vue'
import { computed } from 'vue'

import { useTooltipStyle } from '@/components/tooltip/tooltip.style'

const tooltipStyle = useTooltipStyle()

const arrowClasses = computed<string>(() => tooltipStyle.arrow())
const arrowContainerClasses = computed<string>(() => tooltipStyle.arrowContainer())
</script>

<template>
  <TooltipArrow :as-child="true">
    <div :class="arrowContainerClasses">
      <div :class="arrowClasses" />
    </div>
  </TooltipArrow>
</template>
