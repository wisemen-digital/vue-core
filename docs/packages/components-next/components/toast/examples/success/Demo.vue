<script setup lang="ts">
import {
  useVcToast,
  VcButton,
} from '@wisemen/vue-core-components'

const toast = useVcToast()

function showToast(): void {
  toast.success({
    title: 'Event creation successful',
    description: 'Your event has been created successfully.',
  })
}
</script>

<template>
  <div>
    <VcButton
      variant="secondary"
      @click="showToast"
    >
      Default success toast
    </VcButton>
  </div>
</template>
