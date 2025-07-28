<script setup lang="ts">
import { watch } from 'vue'

import { useDialogContainer } from '@/components/dialog/dialog.composable'

const emit = defineEmits<{
  'update:activeDialogCount': [count: number]
}>()

const {
  dialogs,
} = useDialogContainer()

watch(dialogs, (dialogs) => {
  const activeDialogs = dialogs.filter((dialog) => dialog.isOpen)

  emit('update:activeDialogCount', activeDialogs.length)
}, {
  deep: true,
  immediate: true,
})
</script>

<template>
  <Component
    :is="dialog.component"
    v-for="dialog of dialogs"
    :key="dialog.id"
    :is-open="dialog.isOpen"
  />
</template>
