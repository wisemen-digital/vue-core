<script setup lang="ts">
import Button from '@/components/button/default-button/Button.vue'
import Popover from '@/components/popover/Popover.vue'
</script>

<template>
  <Story title="Popover">
    <Popover>
      <template #trigger>
        <Button>
          Label
        </Button>
      </template>

      <template #content>
        <div class="w-80 h-40" />
      </template>
    </Popover>
  </Story>
</template>
