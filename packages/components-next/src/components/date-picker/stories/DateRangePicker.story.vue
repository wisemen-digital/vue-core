<script setup lang="ts">
import { ref } from 'vue'

import type { DateRangeValue } from '@/components/date-picker/range/dateRangePicker.context'
import DateRangePicker from '@/components/date-picker/range/DateRangePicker.vue'

const value = ref<DateRangeValue>({
  from: null,
  until: null,
})
</script>

<template>
  <Story title="DateRangePicker">
    <DateRangePicker
      :model-value="{
        from: null,
        until: null,
      }"
      label=""
    />
  </Story>
</template>
