<script setup lang="ts">
import {
  VcButton,
  VcPopover,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const popoverContainerElementRef = ref<HTMLElement | null>(null)
</script>

<template>
  <div class="relative">
    <VcPopover
      :popover-container-element="popoverContainerElementRef"
      popover-side="bottom"
      popover-width="available-width"
    >
      <template #trigger>
        <VcButton variant="secondary">
          Container
        </VcButton>
      </template>

      <template #content>
        <div class="w-full h-40" />
      </template>
    </VcPopover>

    <div
      ref="popoverContainerElementRef"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-80 pointer-events-none"
    />
  </div>
</template>
