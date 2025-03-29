<script setup lang="ts">
import { ref } from 'vue'

import DatePicker from '@/components/date-picker/single/DatePicker.vue'

const inTwoWeeks = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000)
const inTwoMonths = new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000)

const value = ref<Date | null>(inTwoWeeks)

const today = new Date()
</script>

<template>
  <Story title="DatePicker">
    <!-- TODO: optie voorzien om bv. een tooltip te wrappen -->
    <div>
      <DatePicker
        v-model="value"
        :show-two-months="false"
        :placeholder-value="inTwoMonths"
        :min-date="today"
        :is-date-disabled="(date) => date.getDate() === 5"
        :is-date-unavailable="(date) => date.getDate() === 15"
        :is-disabled="false"
        :allow-deselect="false"
        :focus-on-mount="false"
        :max-date="null"
        label="Example"
        class="w-84"
      />
    </div>
  </Story>
</template>
