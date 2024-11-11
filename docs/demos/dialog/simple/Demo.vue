<script setup lang="ts">
import {
  useDialog,
  VcButton,
  VcDialogContainer,
} from '@wisemen/vue-core'

const dialog = useDialog({
  component: () => import('./SimpleDialog.vue'),
})
</script>

<template>
  <!-- Make sure to bind the trigger id to the button for correct focus management -->
  <VcButton
    v-bind="dialog.triggerProps.value"
    @click="dialog.open()"
  >
    Open dialog
  </VcButton>

  <Teleport to="body">
    <VcDialogContainer />
  </Teleport>
</template>
