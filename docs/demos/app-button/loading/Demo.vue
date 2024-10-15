<script setup lang="ts">
import { AppButton } from '@wisemen/vue-core'

const variants = [
  'default',
  'secondary',
  'secondary-color',
  'tertiary',
  'tertiary-color',
  'destructive-primary',
  'destructive-secondary',
  'destructive-tertiary',
]
</script>

<template>
  <div class="grid grid-cols-3 gap-8">
    <AppButton
      v-for="variant of variants"
      :key="variant"
      :variant="variant"
      :is-loading="true"
    >
      Button
    </AppButton>
  </div>
</template>
