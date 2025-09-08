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
    :show-two-months="false"
    label="Calendar"
  />
</template>
