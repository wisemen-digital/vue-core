<script setup lang="ts">
import Popover from '@/components/popover/Popover.vue'
</script>

<template>
  <Story title="Playground">
    <Popover popover-width="anchor-width">
      <template #trigger>
        <div class="w-80 border h-20" />
      </template>

      <template #content>
        content
      </template>
    </Popover>
  </Story>
</template>
