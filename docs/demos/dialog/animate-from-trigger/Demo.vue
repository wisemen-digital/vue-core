<script setup lang="ts">
import { useDialog, VcButton } from '@wisemen/vue-core'

const dialog = useDialog({
  component: () => import('./SimpleDialog.vue'),
  shouldAnimateFromTrigger: true,
})
</script>

<template>
  <VcButton
    v-bind="dialog.triggerProps.value"
    @click="dialog.open()"
  >
    Open dialog
  </VcButton>
</template>
