<script setup lang="ts">
import { useAttrs } from 'vue'

import { useInjectDropdownMenuContext } from '@/components/dropdown-menu/dropdownMenu.context'
import { useInjectDropdownMenuItemContext } from '@/components/dropdown-menu/dropdownMenuItem.context'
import Icon from '@/components/icon/Icon.vue'
import { mergeClasses } from '@/customClassVariants'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectDropdownMenuContext()

const { icon } = useInjectDropdownMenuItemContext()

const attrs = useAttrs()
</script>

<template>
  <Icon
    v-if="icon !== null"
    :class="style.itemIcon({
      class: mergeClasses(customClassConfig.itemIcon, classConfig?.itemIcon, attrs.class as string),
    })"
    :icon="icon"
  />
  <!-- Spacer for grid layout -->
  <span v-else />
</template>
