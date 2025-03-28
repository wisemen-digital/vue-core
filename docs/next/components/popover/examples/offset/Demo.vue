<script setup lang="ts">
import { 
  VcButton, 
  VcPopover,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcPopover :popover-offset-in-px="50">
    <template #trigger>
      <VcButton variant="secondary">
        Offset
      </VcButton>
    </template>

    <template #content>
      <div class="h-40 w-80" />
    </template>
  </VcPopover>
</template>