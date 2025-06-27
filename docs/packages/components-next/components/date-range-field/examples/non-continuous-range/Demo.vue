<script setup lang="ts">
import type { DateRange } from '@wisemen/vue-core-components'
import { VcDateRangeField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const today = new Date()
const from = new Date(today.getFullYear(), today.getMonth(), 16)

const value = ref<DateRange>({
  from,
  until: null,
})
</script>

<template>
  <VcDateRangeField
    v-model="value"
    :error-message="null"
    :is-date-disabled="(date) => date.getDay() === 0 || date.getDay() === 6"
    :allow-non-continuous-selection="false"
    :show-two-months="true"
    label="Select a date range"
    hint="You cannot select a range that contains weekends."
    class="w-72"
  />
</template>
