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
        <div class="h-40 w-full" />
      </template>
    </VcPopover>

    <div
      ref="popoverContainerElementRef"
      class="
        pointer-events-none absolute top-1/2 left-1/2 h-80 w-96 -translate-x-1/2
        -translate-y-1/2
      "
    />
  </div>
</template>
