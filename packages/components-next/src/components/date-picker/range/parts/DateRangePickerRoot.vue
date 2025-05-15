<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import { RangeCalendarRoot as RekaRangeCalendarRoot } from 'reka-ui'
import { computed } from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import { getCustomComponentVariant } from '@/class-variant/customClassVariants'
import { useInjectConfigContext } from '@/components/config-provider/config.context'
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
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { DateRange } from '@/types/dateRange.type'
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

const modelValue = defineModel<DateRange>({ required: true })

const placeholderValue = defineModel<Date>('placeholderValue', { required: false })

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
      modelValue.value.until = dateValueToDate(value.end)
    }
  },
})

const delegatedPlaceholderValue = computed<DateValue>({
  get: () => {
    return dateToDateValue(placeholderValue.value ?? modelValue.value.from ?? new Date())
  },
  set: (value) => {
    placeholderValue.value = dateValueToDate(value)
  },
})

const { theme } = injectThemeProviderContext()
const { locale } = useInjectConfigContext()

const dateRangePickerStyle = computed<CreateDateRangePickerStyle>(
  () => createDateRangePickerStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = computed<ResolvedClassConfig<'dateRangePicker'>>(
  () => getCustomComponentVariant('dateRangePicker', theme.value, { variant: props.variant }),
)

useProvideDateRangePickerContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  placeholderValue: computed<Date>(() => dateValueToDate(delegatedPlaceholderValue.value)),
  style: dateRangePickerStyle,
})
</script>

<template>
  <TestIdProvider :test-id="props.testId">
    <InteractableElement :is-disabled="props.isDisabled">
      <RekaRangeCalendarRoot
        v-slot="{ weekDays, grid }"
        v-model="delegatedModel"
        v-model:placeholder="delegatedPlaceholderValue"
        :week-starts-on="1"
        :prevent-deselect="!props.allowDeselect"
        :fixed-weeks="true"
        :number-of-months="props.showTwoMonths ? 2 : 1"
        :allow-non-contiguous-ranges="props.allowNonContinuousSelection"
        :is-date-unavailable="(value: DateValue) => props.isDateUnavailable(dateValueToDate(value))"
        :is-date-disabled="(value: DateValue) => props.isDateDisabled(dateValueToDate(value))"
        :calendar-label="props.label"
        :locale="locale"
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
  </TestIdProvider>
</template>
