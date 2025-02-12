<script setup lang="ts">
import { VcButton, VcToastContainer, useToast } from '@wisemen/vue-core'

const toast = useToast()

function onClick(): void {
  toast.success({
    icon: 'check',
    message: 'This is a success toast.',
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
    <VcButton variant="tertiary" @click="onClick">Show Success Toast</VcButton>
  </div>
</template>