<script setup lang="ts">
import { DropdownMenuLabel as RekaDropdownMenuLabel } from 'reka-ui'

import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDropdownMenuContext()
</script>

<template>
  <RekaDropdownMenuLabel
    :class="style.label({
      class: mergeClasses(customClassConfig.label, classConfig?.label),
    })"
  >
    <slot />
  </RekaDropdownMenuLabel>
</template>
