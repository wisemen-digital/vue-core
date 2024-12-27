<script setup lang="ts">
import {
  useToast,
  VcButton,
  VcToastContainer,
} from '@wisemen/vue-core'

const toast = useToast()

function showInfoToast(): void {
  toast.info({
    message: 'New version available! Reload to receive the latest functionality. A little more content.',
    action: {
      label: 'Reload',
      onClick: (): void => {
        //
      },
    },
  })
}

function showSuccessToast(): void {
  toast.success({
    message: 'Your order has been placed successfully.',
  })
}

function showErrorToast(): void {
  toast.error({
    message: 'Something went wrong while placing your order.',
    action: {
      label: 'Retry',
      onClick: (): void => {
        showInfoToast()
      },
    },
  })
}
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-x-2">
      <VcButton
        variant="secondary-color"
        @click="showInfoToast"
      >
        Info
      </VcButton>

      <VcButton
        variant="secondary"
        @click="showSuccessToast"
      >
        Success
      </VcButton>

      <VcButton
        variant="destructive-secondary"
        @click="showErrorToast"
      >
        Error
      </VcButton>
    </div>
  </div>

  <Teleport to="body">
    <!-- App.vue -->
    <VcToastContainer />
  </Teleport>
</template>
