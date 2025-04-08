<script setup lang="ts">
import FormFieldLabel from '@/components/form-field/parts/FormFieldLabel.vue'
import TextField from '@/components/text-field/TextField.vue'
import { defineComponentVariant } from '@/customClassVariants'

defineComponentVariant({
  config: {},
  // target: {
  //   prop: 'size',
  //   value: 'super-large',
  // },
  component: 'button',
})

defineComponentVariant({
  config: { root: 'bg-secondary border-none shadow-none' },
  target: {
    prop: 'variant',
    value: 'leander',
  },
  component: 'textField',
})
</script>

<template>
  <Story title="Playground">
    <TextField
      :model-value="null"
      label="Yeeeet"
    >
      <template #label>
        <FormFieldLabel>
          <template #right>
            trailing
          </template>
        </FormFieldLabel>
      </template>
    </TextField>
  </Story>
</template>
