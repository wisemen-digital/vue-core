<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  AppButton,
  AppToastContainer,
  useToast,
} from '@wisemen/vue-core'

const controls = createControls({
  title: {
    default: 'Title',
    cols: 2,
    label: 'Title',
    type: 'text',
  },
  description: {
    default: 'Description',
    cols: 2,
    label: 'Description',
    type: 'text',
  },
  type: {
    default: 'info',
    cols: 2,
    items: [
      'info',
      'error',
      'success',
    ],
    label: 'Type',
    type: 'select',
  },
})

const toast = useToast()

function onButtonClick(title: string, description: string, type: 'error' | 'info' | 'success'): void {
  if (type === 'info') {
    toast.show({
      title,
      description,
      icon: 'checkmark',
      type: 'info',
    })
  }
  if (type === 'success') {
    toast.success({
      title,
      description,
    })
  }
  if (type === 'error') {
    toast.error({
      title,
      description,
    })
  }
}
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <AppToastContainer />
      <AppButton @click="onButtonClick(values.title, values.description, values.type)">
        Click to show toast
      </AppButton>
    </template>
  </ComponentPlayground>
</template>
