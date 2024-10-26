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
    :id="dialog.triggerId"
    @click="dialog.open()"
  >
    Open dialog
  </AppButton>
</template>
