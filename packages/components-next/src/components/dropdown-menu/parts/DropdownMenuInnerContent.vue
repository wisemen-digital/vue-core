<script setup lang="ts">
import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDropdownMenuContext()
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
