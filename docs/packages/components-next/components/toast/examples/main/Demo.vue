<script setup lang="ts">
import {
  useVcToast,
  VcButton,
} from '@wisemen/vue-core-components'
import {
  h,
  ref,
} from 'vue'

import Preview from './Preview.vue'

const toast = useVcToast()
const isAddingToCalendar = ref<boolean>(false)

async function addToCalendar(): Promise<void> {
  isAddingToCalendar.value = true

  await new Promise((resolve) => {
    setTimeout(() => {
      isAddingToCalendar.value = false
      resolve(true)
    }, 1000)
  })
}

function showToast(): void {
  toast.success({
    title: 'Event created',
    description: 'Tomorrow at 12:00 PM — join us at "Wisemen Headquarters" for the scheduled session.',
    preview: h(Preview),
    actions: [
      {
        label: 'Add to calendar',
        variant: 'secondary',
        isLoading: (): boolean => isAddingToCalendar.value,
        onClick: async (close): Promise<void> => {
          await addToCalendar()
          close()
        },
      },
    ],
  })
}
</script>

<template>
  <div>
    <VcButton
      variant="secondary"
      @click="showToast"
    >
      Show toast
    </VcButton>
  </div>
</template>
