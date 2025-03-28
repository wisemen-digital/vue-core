<script setup lang="ts">
import {
  useToast,
  VcButton,
  VcToastContainer,
} from '@wisemen/vue-core'

const toast = useToast()

function onClick(): void {
  toast.info({
    icon: 'check',
    message: 'This is an info toast.',
    action: {
      label: 'Action',
      onClick: () => {
        // eslint-disable-next-line no-alert
        alert('Action clicked')
      },
    },
  })
}
</script>

<template>
  <div>
    <VcToastContainer />
    <VcButton
      variant="secondary"
      @click="onClick"
    >
      Show Info Toast
    </VcButton>
  </div>
</template>
