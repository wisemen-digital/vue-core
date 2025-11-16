<script setup lang="ts">
import { VcDatePicker } from '@wisemen/vue-core-components'
import { Temporal } from 'temporal-polyfill'
import { ref } from 'vue'

const now = Temporal.Now.plainDateISO()
const twoWeeksAgo = now.subtract({ days: 14 })
const twoWeeksFromNow = now.add({ days: 14 })

const value = ref<Date | null>(null)
</script>

<template>
  <VcDatePicker
    v-model="value"
    :min-date="twoWeeksAgo"
    :max-date="twoWeeksFromNow"
    label="Example"
  />
</template>
