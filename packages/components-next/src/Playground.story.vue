<script setup lang="ts">
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
  <Story title="Playground" />
</template>
