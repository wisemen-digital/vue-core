<script setup lang="ts">
import type { DateRange } from '@wisemen/vue-core-components'
import { VcDateRangeField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<DateRange>({
  from: null,
  until: null,
})
</script>

<template>
  <VcDateRangeField
    v-model="value"
    :error-message="value.from !== null && value.until !== null ? null : 'This field is required.'"
    :is-touched="true"
    :show-two-months="true"
    label="Select a date range"
    class="w-72"
  />
</template>
