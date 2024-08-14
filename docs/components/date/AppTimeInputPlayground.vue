<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppTimeInput } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  id: {
    default: 'input-id',
    cols: 2,
    label: 'Id',
    type: 'text',
  },
  iconLeft: {
    default: 'clock',
    label: 'Left icon',
    type: 'icon',
  },
  placeholder: {
    default: 'Placeholder...',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  isInvalid: {
    default: false,
    label: 'Is invalid',
    type: 'switch',
  },
  isLoading: {
    default: false,
    label: 'Is loading',
    type: 'switch',
  },
})

const model = ref<null | string>(null)
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <div>
        <AppTimeInput
          v-bind="values"
          v-model="model"
          class="mb-3"
        />
      </div>
    </template>
  </ComponentPlayground>
</template>
