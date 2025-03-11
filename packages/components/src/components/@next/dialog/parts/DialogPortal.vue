<script setup lang="ts">
import { DialogPortal as RekaDialogPortal } from 'reka-ui'
import { computed } from 'vue'

import { useInjectDialogContext } from '@/components/@next/dialog/dialog.context'

const { teleportTargetId } = useInjectDialogContext()

const teleportTarget = computed<string | HTMLElement>(() => {
  if (teleportTargetId.value === null) {
    return document.body
  }

  return `#${teleportTargetId.value}`
})
</script>

<template>
  <RekaDialogPortal
    :force-mount="true"
    :to="teleportTarget"
  >
    <slot />
  </RekaDialogPortal>
</template>
