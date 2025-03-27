<script setup lang="ts">
import { VcFormField, defineComponentVariant } from '@wisemen/vue-core-components'

defineComponentVariant({
  component: 'formField',
  target: {
    prop: 'variant',
    value: 'custom'
  },
  config: {
    label: 'text-red-500'
  },
})
</script>

<template>
  <VcFormField
    label="Label"
    :is-required="true"
    :class-config="{
      label: 'text-xl font-bold',
      asterisk: 'text-green-500',
    }"
    variant="custom"
  >
    /
  </VcFormField>
</template>