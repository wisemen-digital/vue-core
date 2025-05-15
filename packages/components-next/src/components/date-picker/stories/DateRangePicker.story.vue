<script setup lang="ts">
import DateRangePicker from '@/components/date-picker/range/DateRangePicker.vue'
import DatePicker from '@/components/date-picker/single/DatePicker.vue'

const today = new Date()
const in2Months = new Date()

in2Months.setMonth(today.getMonth() + 2)
</script>

<template>
  <Story title="DateRangePicker">
    <div class="flex">
      <DatePicker
        :model-value="null"
        :placeholder-value="in2Months"
        label=""
      />

      <DateRangePicker
        :model-value="{
          from: in2Months,
          until: null,
        }"
        :allow-non-continuous-selection="true"
        :is-date-disabled="(date) => date.getDate() === 15"
        :show-two-months="true"
        label=""
      />
    </div>
  </Story>
</template>
