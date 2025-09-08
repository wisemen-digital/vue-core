<script setup lang="ts">
import type { DateRange } from '@wisemen/vue-core-components'
import { VcDateRangePicker } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const today = new Date()

const twoWeeksAgo = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000)
const twoWeeksFromNow = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)

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
