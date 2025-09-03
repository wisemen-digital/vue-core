<script setup lang="ts">
import {
  useVcToast,
  VcButton,
} from '@wisemen/vue-core-components'

const toast = useVcToast()

function showToast(): void {
  toast.info({
    title: 'Event begins soon',
    description: 'Your event is scheduled for tomorrow at 12:00 PM.',
  })
}
</script>

<template>
  <div>
    <VcButton
      variant="secondary"
      @click="showToast"
    >
      Default info toast
    </VcButton>
  </div>
</template>
