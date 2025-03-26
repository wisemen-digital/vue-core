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
    :class="style.content({
      class: mergeClasses(customClassConfig.content, classConfig?.content),
    })"
  >
    <slot />
  </div>
</template>
