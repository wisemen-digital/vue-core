<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import { RangeCalendarRoot as RekaRangeCalendarRoot } from 'reka-ui'
import { computed } from 'vue'

import type { DateRangeValue } from '@/components/date-picker/range/dateRangePicker.context'
import { useProvideDateRangePickerContext } from '@/components/date-picker/range/dateRangePicker.context'
import type { DateRangePickerProps } from '@/components/date-picker/range/dateRangePicker.props'
import type { CreateDateRangePickerStyle } from '@/components/date-picker/range/dateRangePicker.style'
import { createDateRangePickerStyle } from '@/components/date-picker/range/dateRangePicker.style'
import type { Grid } from '@/components/date-picker/shared/datePicker.type'
import {
  dateToDateValue,
  dateValueToDate,
} from '@/components/date-picker/shared/datePicker.util'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { useComponentClassConfig } from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<DateRangePickerProps>(), {
  id: null,
  testId: null,
  maxDate: null,
  minDate: null,
  isDateDisabled: () => false,
  isDateUnavailable: () => false,
  isDisabled: false,
  allowDeselect: false,
  allowNonContinuousSelection: false,
  focusOnMount: false,
  showTwoMonths: false,
  variant: null,
})

const modelValue = defineModel<DateRangeValue>({ required: true })

const placeholderValue = defineModel<DateRangeValue>('placeholderValue', {
  default: new Date(),
  required: false,
})

const delegatedModel = computed<{ end: DateValue | undefined
  start: DateValue | undefined }>({
  get: () => {
    return {
      end: modelValue.value.until === null ? undefined : dateToDateValue(modelValue.value.until),
      start: modelValue.value.from === null ? undefined : dateToDateValue(modelValue.value.from),
    }
  },
  set: (value) => {
    if (value.start === undefined || value.end === null) {
      modelValue.value.from = null
    }
    else {
      modelValue.value.from = dateValueToDate(value.start)
    }

    if (value.end === undefined || value.end === null) {
      modelValue.value.until = null
    }
    else {
      console.log('set end', dateValueToDate(value.end))
      modelValue.value.until = dateValueToDate(value.end)
    }
  },
})

// const delegetedPlaceholderValue = computed<{ from: DateValue | undefined, until: DateValue | undefined }>({
//   get: () => {
//     return {
//       from: placeholderValue.value.from === null ? undefined : dateToDateValue(placeholderValue.value.from),
//       until: placeholderValue.value.until === null ? undefined : dateToDateValue(placeholderValue.value.until),
//     }
//   },
//   set: (value) => {
//     if (value.from === undefined || value.from === null) {
//       placeholderValue.value.from = null
//     } else {
//       placeholderValue.value.from = dateValueToDate(value.from)
//     }

//     if (value.until === undefined || value.until === null) {
//       placeholderValue.value.until = null
//     } else {
//       placeholderValue.value.until = dateValueToDate(value.until)
//     }
//   },
// })

const dateRangePickerStyle = computed<CreateDateRangePickerStyle>(
  () => createDateRangePickerStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = useComponentClassConfig('dateRangePicker', { variant: props.variant ?? undefined })

useProvideDateRangePickerContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  placeholderValue,
  style: dateRangePickerStyle,
})
</script>

<template>
  <PrimitiveElement
    :id="props.id ?? null"
    :test-id="props.testId ?? null"
  >
    <InteractableElement :is-disabled="props.isDisabled">
      <!--     TODO:    v-model:placeholder="delegetedPlaceholderValue" -->
      <RekaRangeCalendarRoot
        v-slot="{ weekDays, grid }"
        v-model="delegatedModel"
        :week-starts-on="1"
        :prevent-deselect="!props.allowDeselect"
        :fixed-weeks="true"
        :number-of-months="props.showTwoMonths ? 2 : 1"
        :is-date-unavailable="(value: DateValue) => props.isDateUnavailable(dateValueToDate(value))"
        :is-date-disabled="(value: DateValue) => props.isDateDisabled(dateValueToDate(value))"
        :calendar-label="props.label"
        :initial-focus="props.focusOnMount"
        :min-value="props.minDate === null
          ? undefined
          : dateToDateValue(props.minDate)"
        :max-value="props.maxDate === null
          ? undefined
          : dateToDateValue(props.maxDate)"
        weekday-format="short"
      >
        <slot
          :week-days="(weekDays as string[])"
          :grid="(grid as Grid<DateValue>[])"
        />
      </RekaRangeCalendarRoot>
    </InteractableElement>
  </PrimitiveElement>
</template>
