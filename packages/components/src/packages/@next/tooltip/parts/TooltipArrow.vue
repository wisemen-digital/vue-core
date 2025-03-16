<script setup lang="ts">
import { TooltipArrow as RekaTooltipArrow } from 'reka-ui'

import { mergeClasses } from '@/customClassVariants'
import { useInjectTooltipContext } from '@/packages/@next/tooltip/tooltip.context'

const {
  isArrowHidden,
  classConfig,
  customClassConfig,
  style,
} = useInjectTooltipContext()
</script>

<template>
  <RekaTooltipArrow
    v-if="!isArrowHidden"
    as="div"
    class="relative -mb-4 h-4 w-10 overflow-hidden -translate-y-px"
  >
    <div
      :class="style.arrow({
        class: mergeClasses(customClassConfig.arrow, classConfig?.arrow),
      })"
    />
  </RekaTooltipArrow>
</template>
