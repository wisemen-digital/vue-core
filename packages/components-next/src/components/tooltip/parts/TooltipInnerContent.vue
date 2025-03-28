<script setup lang="ts">
import { useInjectTooltipContext } from '@/components/tooltip/tooltip.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTooltipContext()
</script>

<template>
  <div
    :class="style.innerContent({
      class: mergeClasses(customClassConfig.innerContent, classConfig?.innerContent),
    })"
  >
    <slot />
  </div>
</template>
