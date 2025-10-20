<script setup lang="ts">
import type { VcPopoverProps } from '@wisemen/vue-core-components'
import {
  VcButton,
  VcPopover,
} from '@wisemen/vue-core-components'

const sides: VcPopoverProps['popoverSide'][] = [
  'top',
  'right',
  'bottom',
  'left',
]
</script>

<template>
  <div class="gap-xl grid grid-cols-2">
    <VcPopover
      v-for="side of sides"
      :key="side"
      :popover-side="side"
    >
      <template #trigger>
        <VcButton variant="secondary">
          {{ side }}
        </VcButton>
      </template>

      <template #content>
        <div class="h-40 w-96" />
      </template>
    </VcPopover>
  </div>
</template>
