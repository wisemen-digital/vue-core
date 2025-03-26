<script setup lang="ts">
import Button from '@/components/button/default-button/Button.vue'
import Tooltip from '@/components/tooltip/Tooltip.vue'
</script>

<template>
  <Story title="Tooltip">
    <Tooltip>
      <template #trigger>
        <Button label="Tooltip" />
      </template>

      <template #content>
        <div>Tooltip content</div>
      </template>
    </Tooltip>
  </Story>
</template>
