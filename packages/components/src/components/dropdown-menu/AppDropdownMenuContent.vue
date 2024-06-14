<script setup lang="ts">
import { DropdownMenuContent } from 'radix-vue'
import { computed } from 'vue'

import AppDropdownMenuArrow from '@/components/dropdown-menu/AppDropdownMenuArrow.vue'
import { useDropdownMenuStyle } from '@/components/dropdown-menu/dropdownMenu.style'

const props = defineProps<{
  hasArrow: boolean
  align: 'center' | 'end' | 'start'
  inheritTriggerWidth: boolean
  side: 'bottom' | 'left' | 'right' | 'top'
  sideOffset: number
}>()

const dropdownMenuStyle = useDropdownMenuStyle()

const contentContainerClasses = computed<string>(() => dropdownMenuStyle.contentContainer({
  inheritTriggerWidth: props.inheritTriggerWidth,
}))
const contentClasses = computed<string>(() => dropdownMenuStyle.content())
</script>

<template>
  <DropdownMenuContent
    :align="props.align"
    :arrow-padding="12"
    :side="props.side"
    :side-offset="props.sideOffset"
    :class="contentContainerClasses"
  >
    <div :class="contentClasses">
      <slot />
    </div>

    <AppDropdownMenuArrow v-if="hasArrow" />
  </DropdownMenuContent>
</template>
