<script setup lang="ts">
import {
  useToast,
  VcButton,
  VcToastContainer,
} from '@wisemen/vue-core'

const toast = useToast()

function onClick(): void {
  toast.error({
    icon: 'close',
    message: 'This is an error toast.',
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
      variant="destructive-secondary"
      @click="onClick"
    >
      Show Error Toast
    </VcButton>
  </div>
</template>
