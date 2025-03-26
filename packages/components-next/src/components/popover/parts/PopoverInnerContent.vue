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
    :class="style.content({
      class: mergeClasses(customClassConfig.content, classConfig?.content),
    })"
  >
    <slot />
  </div>
</template>
