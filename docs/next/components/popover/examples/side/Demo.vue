<script setup lang="ts">
import { 
  VcButton, 
  VcPopover,
} from '@wisemen/vue-core-components'
import { PopoverProps } from '../../../../../packages/components-next/dist/components/popover/popover.props';

const sides: PopoverProps['popoverSide'][] = [
  'top',
  'right',
  'bottom',
  'left',
]
</script>

<template>
  <div class="grid grid-cols-2 gap-xl">
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
        <div class="w-96 h-40" />
      </template>
    </VcPopover>
  </div>
</template>