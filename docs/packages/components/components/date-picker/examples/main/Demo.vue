<script setup lang="ts">
import {
  VcDatePicker,
  VcDatePickerDate,
  VcTooltip,
} from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<Date | null>(null)
</script>

<template>
  <VcDatePicker
    v-model="value"
    :is-date-unavailable="(date) => date.day === 15"
    label="Example"
  >
    <template #date="{ date }">
      <VcTooltip
        v-if="date.day === 15"
        :disable-close-on-trigger-click="true"
      >
        <template #trigger>
          <VcDatePickerDate />
        </template>

        <template #content>
          <div class="px-lg py-sm">
            <p class="text-secondary max-w-40 text-center text-sm">
              This date is unavailable. Please select another date.
            </p>
          </div>
        </template>
      </VcTooltip>
    </template>
  </VcDatePicker>
</template>
