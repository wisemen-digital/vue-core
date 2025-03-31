<script setup lang="ts">
import { DropdownMenuSeparator as RekaDropdownMenuSeparator } from 'reka-ui'

import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDropdownMenuContext()
</script>

<template>
  <RekaDropdownMenuSeparator
    :class="style.separator({
      class: mergeClasses(customClassConfig.separator, classConfig?.separator),
    })"
  />
</template>
