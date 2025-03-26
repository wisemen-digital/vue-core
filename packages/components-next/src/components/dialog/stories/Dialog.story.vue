<script setup lang="ts">
import Button from '@/components/button/default-button/Button.vue'
import { useDialog } from '@/components/dialog/dialog.composable'
import DialogContainer from '@/components/dialog/DialogContainer.vue'

const dialog = useDialog({
  component: () => import('@/components/dialog/stories/ExampleDialog.vue'),
})
</script>

<template>
  <Story title="Dialog">
    <Button
      v-bind="dialog.getTriggerProps()"
      label="Open dialog"
      @click="dialog.open"
    />
    <DialogContainer />
  </Story>
</template>
