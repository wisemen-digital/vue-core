<script setup lang="ts">
import type { DateRange } from '@wisemen/vue-core-components'
import { VcDateRangePicker } from '@wisemen/vue-core-components'
import { Temporal } from 'temporal-polyfill'
import { ref } from 'vue'

const today = Temporal.Now.plainDateISO()

const twoWeeksAgo = today.subtract({
  days: 14,
})
const twoWeeksFromNow = today.add({
  days: 14,
})

const value = ref<DateRange>({
  from: null,
  until: null,
})
</script>

<template>
  <VcDateRangePicker
    v-model="value"
    :show-two-months="true"
    :min-date="twoWeeksAgo"
    :max-date="twoWeeksFromNow"
    label="Calendar"
  />
</template>
