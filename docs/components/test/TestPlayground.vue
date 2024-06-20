<script setup lang="ts" generic="TControlKeys extends string">
import {
  AppToastContainer,
  useToast,
} from '@wisemen/vue-core'
import { onMounted } from 'vue'

const toast = useToast()

onMounted(() => {
  toast.error({
    title: 'Success',
    description: 'This is a success toast',
  })
})
</script>

<template>
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <div class="vp-raw my-8 flex w-full flex-col overflow-hidden rounded-lg border border-solid border-border bg-background">
    <AppToastContainer />
  </div>
</template>
