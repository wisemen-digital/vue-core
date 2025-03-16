<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectTooltipContext } from '@/packages/@next/tooltip/tooltip.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTooltipContext()
</script>

<template>
  <div
    :class="style.content({
      class: mergeClasses(customClassConfig.content, classConfig?.content),
    })"
  >
    <slot />
  </div>
</template>
