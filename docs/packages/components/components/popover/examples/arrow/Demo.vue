<script setup lang="ts">
import {
  VcButton,
  VcPopover,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcPopover :is-popover-arrow-hidden="true">
    <template #trigger>
      <VcButton variant="secondary">
        No arrow
      </VcButton>
    </template>

    <template #content>
      <div class="h-40 w-80" />
    </template>
  </VcPopover>
</template>
