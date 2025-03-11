<script setup lang="ts">
import { DialogPortal as RekaDialogPortal } from 'reka-ui'
import { computed } from 'vue'

import { useInjectDialogContext } from '@/components/v2/dialog/dialog.context'

const { teleportTargetId } = useInjectDialogContext()

const teleportTarget = computed<string | null>(() => {
  if (teleportTargetId.value === null) {
    return null
  }

  return `#${teleportTargetId.value}`
})
</script>

<template>
  <RekaDialogPortal
    :force-mount="true"
    :disabled="teleportTarget === null"
    :to="teleportTarget!"
  >
    <slot />
  </RekaDialogPortal>
</template>
