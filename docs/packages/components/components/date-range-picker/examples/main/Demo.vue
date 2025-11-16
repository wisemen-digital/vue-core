<script setup lang="ts">
import type { DateRange } from '@wisemen/vue-core-components'
import { VcDateRangePicker } from '@wisemen/vue-core-components'
import { Temporal } from 'temporal-polyfill'
import { ref } from 'vue'

const today = Temporal.Now.plainDateISO()
const from = today.with({ day: 16 })
const until = today.add({ months: 1 }).with({ day: 8 })

const value = ref<DateRange>({
  from,
  until,
})
</script>

<template>
  <VcDateRangePicker
    v-model="value"
    :show-two-months="true"
    label="Calendar"
  />
</template>
