<script setup lang="ts">
import { useDialogContainer } from '@/composables/dialog.composable'

const { dialogs } = useDialogContainer()
</script>

<template>
  <Component
    :is="dialog.component"
    v-for="dialog of dialogs"
    :key="dialog.id"
    v-model:is-open="dialog.isOpen"
  />
</template>
