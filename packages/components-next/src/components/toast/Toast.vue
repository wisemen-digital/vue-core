<script setup lang="ts">
import ToastActions from '@/components/toast/parts/ToastActions.vue'
import ToastCloseButton from '@/components/toast/parts/ToastCloseButton.vue'
import ToastDescription from '@/components/toast/parts/ToastDescription.vue'
import ToastIcon from '@/components/toast/parts/ToastIcon.vue'
import ToastPreview from '@/components/toast/parts/ToastPreview.vue'
import ToastRoot from '@/components/toast/parts/ToastRoot.vue'
import ToastTitle from '@/components/toast/parts/ToastTitle.vue'
import type { ToastProps } from '@/components/toast/toast.props'

const props = defineProps<ToastProps>()
</script>

<template>
  <ToastRoot v-bind="props">
    <ToastPreview />
    <ToastIcon />

    <div>
      <ToastTitle />
      <ToastDescription />
      <ToastActions />
    </div>

    <ToastCloseButton />
  </ToastRoot>
</template>
