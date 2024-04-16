<script setup lang="ts">
import { SelectContent, SelectViewport } from 'radix-vue'

import AppSelectScrollDownButton from './AppSelectScrollDownButton.vue'
import AppSelectScrollUpButton from './AppSelectScrollUpButton.vue'
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <SelectContent
    :force-mount="true"
    align="center"
    class="select-content popover-content relative z-popover min-w-min overflow-hidden rounded-popover bg-background shadow-popover-shadow"
    position="popper"
  >
    <!-- eslint-enable tailwindcss/no-custom-classname -->
    <AppSelectScrollUpButton />

    <SelectViewport class="max-h-[25rem] p-1.5">
      <slot />
    </SelectViewport>

    <AppSelectScrollDownButton />
  </SelectContent>
</template>

<style>
.select-content {
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
}
</style>
