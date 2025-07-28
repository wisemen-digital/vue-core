<script setup lang="ts">
import Button from '@/components/button/default-button/Button.vue'
import { useDialog } from '@/components/dialog/dialog.composable'

const dialog = useDialog({
  component: () => import('@/components/dialog/stories/ExampleDialog.vue'),
})
</script>

<template>
  <Story title="Dialog/Basic">
    <Button
      v-bind="dialog.getTriggerProps()"
      @click="dialog.open"
    >
      Open dialog
    </Button>
  </Story>
</template>
