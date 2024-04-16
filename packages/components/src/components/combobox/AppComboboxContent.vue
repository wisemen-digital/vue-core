<script setup lang="ts">
import { ComboboxContent } from 'radix-vue'
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <ComboboxContent
    :force-mount="true"
    class="combobox-content popover-content relative z-popover max-h-[--radix-combobox-content-available-height] w-[--radix-combobox-trigger-width] min-w-min overflow-hidden rounded-popover border border-solid border-border bg-background shadow-popover-shadow"
    position="popper"
  >
    <slot />
  </ComboboxContent>
</template>
