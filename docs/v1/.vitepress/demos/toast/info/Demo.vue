<script setup lang="ts">
import { VcButton, VcToastContainer, useToast } from '@wisemen/vue-core'

const toast = useToast()

function onClick(): void {
  toast.info({
    icon: 'check',
    message: 'This is an info toast.',
    action:{
      label: 'Action',
      onClick: () => {
        alert('Action clicked')
      }
    }
  })
}
</script>

<template>
  <div>
    <VcToastContainer />
    <VcButton @click="onClick" variant="secondary">Show Info Toast</VcButton>
  </div>
</template>