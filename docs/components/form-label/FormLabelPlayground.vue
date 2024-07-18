<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { FormLabel } from '@wisemen/vue-core'

const controls = createControls({
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
  isRequired: {
    default: false,
    label: 'Is required',
    type: 'switch',
  },
  for: {
    default: 'input',
    label: 'For',
    type: 'text',
  },
  label: {
    default: 'Name',
    label: 'Label',
    type: 'text',
  },
  tooltip: {
    default: 'This is a tooltip',
    label: 'Tooltip',
    type: 'text',
  },
})
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <FormLabel
        :is-disabled="values.isDisabled"
        :is-invalid="values.isInvalid"
        :is-required="values.isRequired"
        :for="values.for"
        :label="values.label"
        :tooltip="values.tooltip"
      />
    </template>
  </ComponentPlayground>
</template>
