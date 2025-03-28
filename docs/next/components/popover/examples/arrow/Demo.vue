<script setup lang="ts">
import { 
  VcButton, 
  VcPopover,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcPopover :is-arrow-hidden="true">
    <template #trigger>
      <VcButton variant="secondary">
        No arrow
      </VcButton>
    </template>

    <template #content>
      <div class="w-80 h-40" />
    </template>
  </VcPopover>
</template>