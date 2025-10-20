<script setup lang="ts">
import type { VcPopoverProps } from '@wisemen/vue-core-components'
import {
  VcButton,
  VcPopover,
} from '@wisemen/vue-core-components'

const aligns: VcPopoverProps['popoverAlign'][] = [
  'start',
  'center',
  'end',
]
</script>

<template>
  <div class="gap-xl grid grid-cols-3">
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
        <div class="h-40 w-96" />
      </template>
    </VcPopover>
  </div>
</template>
