<script setup lang="ts">
import { useInjectPopoverContext } from '@/components/popover/popover.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectPopoverContext()
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
