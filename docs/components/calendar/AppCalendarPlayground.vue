<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { DateValue } from '@internationalized/date'
import {
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import {
  AppCalendar,
  AppText,
} from '@wisemen/vue-core'
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

const date = ref<DateValue>(today(getLocalTimeZone()))

const datesArray = ref<DateValue[]>([
  today(getLocalTimeZone()),
])
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <div class="flex flex-col gap-3">
        <div class="flex flex-col gap-1">
          <AppText variant="subtext">
            Single value:
          </AppText>
          <AppCalendar
            v-bind="values"
            v-model="date as DateValue"
          />
          <AppText variant="caption">
            Model value: {{ date }}
          </AppText>
        </div>
        <div class="flex flex-col gap-3">
          <AppText variant="subtext">
            Multiple values:
          </AppText>
          <AppCalendar
            v-bind="values"
            v-model="datesArray as DateValue[]"
            :multiple="true"
          />

          <AppText
            variant="caption"
            class="max-w-64"
          >
            Model value: {{ datesArray }}
          </AppText>
        </div>
      </div>
    </template>
  </ComponentPlayground>
</template>
