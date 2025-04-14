<script setup lang="ts">
import { VcDateField } from '@wisemen/vue-core-components'
import { ref } from 'vue'

const value = ref<Date | null>(null)
</script>

<template>
  <VcDateField
    v-model="value"
    :class-config="{
      datePicker: {
        weekDayLabel: 'text-brand-700',
        gridBody: 'gap-3',
        gridRow: 'border-b border-solid border-brand-100',
      },
    }"
    class="w-52"
    label="Select a date"
  />
</template>
