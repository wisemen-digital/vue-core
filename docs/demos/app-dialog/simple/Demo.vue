<script setup lang="ts">
import {
  AppButton,
  AppDialogContainer,
  useDialog,
} from '@wisemen/vue-core'

const dialog = useDialog({
  component: () => import('./SimpleDialog.vue'),
})
</script>

<template>
  <!-- Make sure to bind the trigger id to the button for correct focus management -->
  <AppButton
    v-bind="dialog.triggerProps.value"
    @click="dialog.open()"
  >
    Open dialog
  </AppButton>

  <Teleport to="body">
    <AppDialogContainer />
  </Teleport>
</template>
