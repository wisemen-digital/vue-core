<script setup lang="ts">
import { VcDatePicker } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<Date | null>(null)
</script>

<template>
  <VcDatePicker
    v-model="value"
    :is-date-unavailable="(date) => date.getDate() === 15"
    label="Example"
  />
</template>
