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
      asterisk: 'text-green-500',
    }"
    label="Label"
    variant="custom"
  >
    /
  </VcFormField>
</template>
