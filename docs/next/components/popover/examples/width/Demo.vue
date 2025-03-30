<script setup lang="ts">
import {
  VcButton,
  VcPopover,
} from '@wisemen/vue-core-components'
</script>

<template>
  <div class="grid grid-cols-2 gap-md">
    <VcPopover popover-width="anchor-width">
      <template #trigger>
        <VcButton variant="secondary">
          Anchor width
        </VcButton>
      </template>

      <template #content>
        <div class="h-40" />
      </template>
    </VcPopover>

    <VcPopover popover-width="available-width">
      <template #trigger>
        <VcButton variant="secondary">
          Available width
        </VcButton>
      </template>

      <template #content>
        <div class="h-40" />
      </template>
    </VcPopover>
  </div>
</template>
