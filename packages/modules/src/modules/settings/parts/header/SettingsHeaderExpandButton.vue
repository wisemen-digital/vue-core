<script setup lang="ts">
import {
  useKeyboardShortcut,
  VcIconButton,
} from '@wisemen/vue-core-components'

import { useInjectSettingsDialogContext } from '@/modules/settings/settingsDialog.context'

const { isExpanded } = useInjectSettingsDialogContext()

useKeyboardShortcut({
  keys: [
    'meta',
    'enter',
  ],
  onTrigger: (e) => {
    e.stopImmediatePropagation()
    isExpanded.value = !isExpanded.value
  },
})
</script>

<template>
  <VcIconButton
    :icon="isExpanded ? 'shrink' : 'expand'"
    variant="tertiary"
    label="Expand"
    size="sm"
    @click="isExpanded = !isExpanded"
  />
</template>
