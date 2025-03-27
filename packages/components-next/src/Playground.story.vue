<script setup lang="ts">
import TextField from '@/components/text-field/TextField.vue'
import { defineComponentVariant } from '@/customClassVariants'

defineComponentVariant({
  config: {},
  target: {
    prop: 'size',
    value: 'super-large',
  },
  component: 'button',
})
</script>

<template>
  <Story title="Playground">
    <TextField
      :model-value="null"
      :class-config="{
        root: 'border-success-500',
      }"
      :is-touched="false"
      :is-disabled="false"
      :errors="['error']"
      icon-left="search"
      label="Example"
    />
  </Story>
</template>
