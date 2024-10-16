<script setup lang="ts">
import {
  AppButton,
  AppToastContainer,
  useToast,
} from '@wisemen/vue-core'

const toast = useToast()

function showInfoToast(): void {
  toast.info({
    message: 'Please wait while we process your order.',
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
      <AppButton
        variant="secondary-color"
        @click="showInfoToast"
      >
        Info
      </AppButton>

      <AppButton
        variant="secondary"
        @click="showSuccessToast"
      >
        Success
      </AppButton>

      <AppButton
        variant="destructive-secondary"
        @click="showErrorToast"
      >
        Error
      </AppButton>
    </div>
  </div>

  <!-- App.vue -->
  <Teleport to="body">
    <AppToastContainer />
  </Teleport>
</template>
