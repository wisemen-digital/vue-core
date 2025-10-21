<script setup lang="ts">
import {
  useToast,
  VcButton,
} from '@wisemen/vue-core-components'

const toast = useToast()

function showToast(): void {
  toast.error({
    title: 'Event creation failed',
    description: 'There was an error creating the event. Please try again later.',
  })
}
</script>

<template>
  <div>
    <VcButton
      variant="secondary"
      @click="showToast"
    >
      Default error toast
    </VcButton>
  </div>
</template>
