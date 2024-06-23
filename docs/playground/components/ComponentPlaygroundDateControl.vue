<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'
import { FormDatePicker } from '@wisemen/vue-core'

const props = defineProps<{
  label: string
}>()

const model = defineModel<CalendarDate | null>({
  required: true,
})
</script>

<template>
  <div>
    <FormDatePicker
      v-model="model"
      :label="props.label"
      :errors="{ _errors: [] }"
      :is-touched="false"
    />
  </div>
</template>
