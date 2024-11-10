<script setup lang="ts">
import {
  AppButton,
  useDialog,
} from '@wisemen/vue-core'

const dialog = useDialog({
  component: () => import('./SimpleDialog.vue'),
  shouldAnimateFromTrigger: true,
})
</script>

<template>
  <AppButton
    v-bind="dialog.triggerProps.value"
    @click="dialog.open()"
  >
    Open dialog
  </AppButton>
</template>
