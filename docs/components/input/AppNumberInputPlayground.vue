<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { AppNumberInput } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  id: {
    default: 'app-number-input-id',
    cols: 2,
    label: 'Id',
    type: 'text',
  },
  placeholder: {
    default: 'Placeholder',
    cols: 2,
    label: 'Placeholder',
    type: 'text',
  },
  iconLeft: {
    default: null,
    cols: 2,
    label: 'Left icon',
    type: 'icon',
  },
  min: {
    default: '0',
    label: 'Minimum',
    type: 'text',
  },
  max: {
    default: '100',
    label: 'Maximum',
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
  hideControls: {
    default: false,
    label: 'Hide controls',
    type: 'switch',
  },
})

const model = ref<null | number>(50)
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <AppNumberInput
        v-bind="values"
        v-model="model"
        :min="+values.min"
        :max="+values.max"
        class="w-64"
      />
    </template>
  </ComponentPlayground>
</template>
