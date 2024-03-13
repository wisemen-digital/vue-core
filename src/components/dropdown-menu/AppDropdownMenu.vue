<script setup lang="ts">
import {
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'

import AppDropdownMenuArrow from './AppDropdownMenuArrow.vue'
import AppDropdownMenuContent from './AppDropdownMenuContent.vue'

const props = withDefaults(
  defineProps<{
    align?: 'center' | 'end' | 'start'
    hasArrow?: boolean
    offset?: number
    side?: 'bottom' | 'left' | 'right' | 'top'
  }>(),
  {
    align: 'center',
    hasArrow: false,
    offset: 0,
    side: 'bottom',
  },
)
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger :as-child="true">
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <AppDropdownMenuContent
        :align="props.align"
        :side="props.side"
        :side-offset="props.offset"
      >
        <slot name="content" />

        <AppDropdownMenuArrow v-if="hasArrow" />
      </AppDropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
