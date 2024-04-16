<script setup lang="ts">
import { DropdownMenuContent } from 'radix-vue'

import AppDropdownMenuArrow from './AppDropdownMenuArrow.vue'

const props = defineProps<{
  align: 'center' | 'end' | 'start'
  hasArrow: boolean
  inheritTriggerWidth: boolean
  side: 'bottom' | 'left' | 'right' | 'top'
  sideOffset: number
}>()
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <DropdownMenuContent
    :align="props.align"
    :arrow-padding="12"
    :side="props.side"
    :side-offset="props.sideOffset"
    :class="{
      'w-[--radix-dropdown-menu-trigger-width]': props.inheritTriggerWidth,
      'min-w-40 max-w-60': !props.inheritTriggerWidth,
    }"
    class="popover-content z-popover rounded-popover bg-popover shadow-popover-shadow"
  >
    <!-- eslint-enable tailwindcss/no-custom-classname -->
    <div class="max-h-96 overflow-y-auto rounded-popover border border-solid border-border">
      <slot />
    </div>

    <AppDropdownMenuArrow v-if="hasArrow" />
  </DropdownMenuContent>
</template>
