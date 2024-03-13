<script setup lang="ts">
import { DropdownMenuArrow } from 'radix-vue'
</script>

<template>
  <DropdownMenuArrow :as-child="true">
    <div class="relative z-10 -mb-4 size-4 -translate-y-px overflow-hidden">
      <div
        class="size-4 -translate-y-2.5 rotate-45 rounded-sm border border-solid border-border bg-popover"
      />
    </div>
  </DropdownMenuArrow>
</template>
