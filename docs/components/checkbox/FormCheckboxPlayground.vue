<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { FormCheckbox } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  id: {
    default: 'form-checkbox-id',
    cols: 2,
    label: 'Id',
    type: 'text',
  },
  label: {
    default: 'Label',
    cols: 2,
    label: 'Label',
    type: 'text',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  isIndeterminate: {
    default: false,
    label: 'Is indeterminate',
    type: 'switch',
  },
  isInvalid: {
    default: false,
    label: 'Is invalid',
    type: 'switch',
  },
})

const value = ref<boolean>(false)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <FormCheckbox
        v-model="value"
        v-bind="values"
      />
    </template>
  </ComponentPlayground>
</template>
