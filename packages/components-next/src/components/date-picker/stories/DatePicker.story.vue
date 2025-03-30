<script setup lang="ts">
import { ref } from 'vue'

import DatePicker from '@/components/date-picker/single/DatePicker.vue'
import DatePickerDate from '@/components/date-picker/single/parts/DatePickerDate.vue'
import Tooltip from '@/components/tooltip/Tooltip.vue'

const inTwoWeeks = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
const inTwoMonths = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)

const value = ref<Date | null>(inTwoWeeks)

const today = new Date()
</script>

<template>
  <Story title="DatePicker">
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
      >
        <template #date="{ date }">
          <Tooltip
            v-if="date.getDate() === 15"
            :disable-close-on-trigger-click="true"
          >
            <template #trigger>
              <DatePickerDate />
            </template>

            <template #content>
              <div class="px-lg py-sm">
                <p class="text-sm text-secondary max-w-40 text-center">
                  This date is unavailable. Please select another date.
                </p>
              </div>
            </template>
          </Tooltip>
        </template>
      </DatePicker>
    </div>
  </Story>
</template>
