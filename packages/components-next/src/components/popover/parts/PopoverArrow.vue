<script setup lang="ts">
import { PopoverArrow as RekaPopoverArrow } from 'reka-ui'

import { useInjectPopoverContext } from '@/components/popover/popover.context'
import { mergeClasses } from '@/customClassVariants'

const {
  isPopoverArrowHidden,
  classConfig,
  customClassConfig,
  style,
} = useInjectPopoverContext()
</script>

<template>
  <RekaPopoverArrow
    v-if="!isPopoverArrowHidden"
    as="div"
    class="relative -mb-4 h-4 w-10 overflow-hidden"
  >
    <div
      :class="style.arrow({
        class: mergeClasses(customClassConfig.arrow, classConfig?.arrow),
      })"
    />
  </RekaPopoverArrow>
</template>
