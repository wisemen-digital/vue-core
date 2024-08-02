<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import {
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import {
  AppRangeCalendar,
  AppText,
} from '@wisemen/vue-core'
import type { DateRange } from 'radix-vue'
import { ref } from 'vue'

const controls = createControls({
  numberOfMonths: {
    default: '1',
    cols: 2,
    label: 'Number of months',
    type: 'text',
  },
  pagedNavigation: {
    default: false,
    label: 'Has paged navigation',
    type: 'switch',
  },
  fixedWeeks: {
    default: true,
    label: 'Has fixed weeks',
    type: 'switch',
  },
  isDisabled: {
    default: false,
    label: 'Is disabled',
    type: 'switch',
  },
  readonly: {
    default: false,
    label: 'Is readonly',
    type: 'switch',
  },
})

const period = ref<DateRange>({
  start: today(getLocalTimeZone()),
  end: undefined,
})
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <div class="flex flex-col gap-1">
        <AppRangeCalendar
          v-bind="values"
          v-model="period"
        />
        <AppText
          variant="caption"
          class="max-w-64"
        >
          Model value: {{ period }}
        </AppText>
      </div>
    </template>
  </ComponentPlayground>
</template>
