<script setup lang="ts">
import { VcDateField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<Date | null>(null)
</script>

<template>
  <VcDateField
    v-model="value"
    :is-date-disabled="(date) => date.getDay() === 0 || date.getDay() === 6"
    class="w-62"
    label="Select a date"
    hint="Select a weekday for your delivery"
  />
</template>
