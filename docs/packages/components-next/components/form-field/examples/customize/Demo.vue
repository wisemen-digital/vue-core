<script setup lang="ts">
import {
  defineComponentVariant,
  VcFormField,
} from '@wisemen/vue-core-components'

defineComponentVariant({
  component: 'formField',
  target: {
    prop: 'variant',
    value: 'custom',
  },
  config: { label: 'text-red-500' },
})
</script>

<template>
  <VcFormField
    :is-required="true"
    :class-config="{
      label: 'text-xl font-bold',
      asterisk: 'text-success-600',
    }"
    for="custom-field"
    label="Custom color field"
  >
    <input
      id="custom-field"
      type="color"
    >
  </VcFormField>
</template>
