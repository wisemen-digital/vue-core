<script setup lang="ts">
import { useDialogContainer } from '../../composables/dialog.composable'

const { dialogs } = useDialogContainer()
</script>

<template>
  <div>
    <Component
      :is="dialog.component"
      v-for="dialog of dialogs"
      :key="dialog.id"
      :is-open="dialog.isOpen"
    />
  </div>
</template>
