<script setup lang="ts">
import { DropdownMenuArrow as RekaDropdownMenuArraow } from 'reka-ui'

import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import { mergeClasses } from '@/customClassVariants'

const {
  isPopoverArrowHidden,
  classConfig,
  customClassConfig,
  style,
} = useInjectDropdownMenuContext()
</script>

<template>
  <RekaDropdownMenuArraow
    v-if="!isPopoverArrowHidden"
    as="div"
    class="relative -mb-4 h-4 w-10 overflow-hidden -translate-y-px"
  >
    <div
      :class="style.arrow({
        class: mergeClasses(customClassConfig.arrow, classConfig?.arrow),
      })"
    />
  </RekaDropdownMenuArraow>
</template>
