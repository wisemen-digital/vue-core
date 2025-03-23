<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectPopoverContext } from '@/packages/@next/popover/popover.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectPopoverContext()
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
