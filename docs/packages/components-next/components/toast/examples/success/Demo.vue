<script setup lang="ts">
import {
  useToast,
  VcButton,
} from '@wisemen/vue-core-components'

const toast = useToast()

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
