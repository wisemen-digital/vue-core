<script setup lang="ts">
import type { DateRange } from '@wisemen/vue-core-components'
import { VcDateRangePicker } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const today = new Date()
const from = new Date(today.getFullYear(), today.getMonth(), 16)
const until = new Date(today.getFullYear(), today.getMonth() + 1, 8)

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
