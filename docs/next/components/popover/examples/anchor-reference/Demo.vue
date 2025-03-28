<script setup lang="ts">
import { 
  VcButton, 
  VcPopover,
} from '@wisemen/vue-core-components'
import { ref } from 'vue';

const popoverAnchorRef = ref<HTMLElement | null>(null)
</script>

<template>
  <VcPopover :anchor-reference-element="popoverAnchorRef">
    <template #trigger>
      <VcButton variant="secondary">
        Custom anchor reference
      </VcButton>
    </template>

    <template #content>
      <div class="w-80 h-40" />
    </template>
  </VcPopover>

  <div
    ref="popoverAnchorRef"
    class="absolute top-2 right-2 size-8 border border-dashed border-primary"
  />
</template>