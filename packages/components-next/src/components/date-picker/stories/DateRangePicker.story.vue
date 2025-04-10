<script setup lang="ts">
import DateRangePicker from '@/components/date-picker/range/DateRangePicker.vue'
</script>

<template>
  <Story title="DateRangePicker">
    <div class="flex">
      <DateRangePicker
        :model-value="{
          from: null,
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
