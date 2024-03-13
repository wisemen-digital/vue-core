<script setup lang="ts">
import { DropdownMenuSubContent } from 'radix-vue'
</script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->
  <DropdownMenuSubContent
    class="popover-content min-w-40 max-w-60 overflow-hidden rounded-popover border border-solid border-border bg-popover shadow-popover-shadow"
  >
    <!-- eslint-enable tailwindcss/no-custom-classname -->
    <slot />
  </DropdownMenuSubContent>
</template>
