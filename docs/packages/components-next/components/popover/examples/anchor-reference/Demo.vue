<script setup lang="ts">
import {
  VcButton,
  VcPopover,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const popoverAnchorRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div class="relative">
    <VcPopover :popover-anchor-reference-element="popoverAnchorRef">
      <template #trigger>
        <VcButton variant="secondary">
          Custom anchor reference
        </VcButton>
      </template>

      <template #content>
        <div class="h-40 w-80" />
      </template>
    </VcPopover>

    <div
      ref="popoverAnchorRef"
      class="
        border-primary absolute top-2 right-2 size-8 translate-x-20 border
        border-dashed
      "
    />
  </div>
</template>
