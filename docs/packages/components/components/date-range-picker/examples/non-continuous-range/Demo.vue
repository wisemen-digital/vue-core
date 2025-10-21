<script setup lang="ts">
import type { DateRange } from '@wisemen/vue-core-components'
import { VcDateRangePicker } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<DateRange>({
  from: null,
  until: null,
})
</script>

<template>
  <VcDateRangePicker
    v-model="value"
    :show-two-months="true"
    :is-date-disabled="(date) => date.getDay() === 0 || date.getDay() === 6"
    :allow-non-continuous-selection="false"
    label="Calendar"
  />
</template>
