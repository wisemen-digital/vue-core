<script setup lang="ts">
import { DropdownMenuGroup as RekaDropdownMenuGroup } from 'reka-ui'
import { useAttrs } from 'vue'

import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDropdownMenuContext()

const attrs = useAttrs()
</script>

<template>
  <RekaDropdownMenuGroup
    :class="style.group({
      class: mergeClasses(customClassConfig.group, classConfig?.group, attrs.class as string),
    })"
  >
    <slot />
  </RekaDropdownMenuGroup>
</template>
