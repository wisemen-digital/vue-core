<script setup lang="ts">
import { 
  VcButton, 
  VcPopover,
} from '@wisemen/vue-core-components'
import { PopoverProps } from '../../../../../packages/components-next/dist/components/popover/popover.props';

const aligns: PopoverProps['popoverAlign'][] = [
  'start',
  'center',
  'end'
]
</script>

<template>
  <div class="grid grid-cols-3 gap-xl">
    <VcPopover 
      v-for="align of aligns" 
      :key="align" 
      :popover-align="align"
    >
      <template #trigger>
        <VcButton variant="secondary">
          {{ align }}
        </VcButton>
      </template>

      <template #content>
        <div class="w-96 h-40" />
      </template>
    </VcPopover>
  </div>
</template>