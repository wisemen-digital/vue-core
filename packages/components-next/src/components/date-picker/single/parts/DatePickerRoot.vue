<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import { CalendarRoot as RekaCalendarRoot } from 'reka-ui'
import { computed } from 'vue'

import type { ResolvedClassConfig } from '@/class-variant/classVariant.type'
import { getCustomComponentVariant } from '@/class-variant/customClassVariants'
import type { Grid } from '@/components/date-picker/shared/datePicker.type'
import {
  dateToDateValue,
  dateValueToDate,
} from '@/components/date-picker/shared/datePicker.util'
import { useProvideDatePickerContext } from '@/components/date-picker/single/datePicker.context'
import type { DatePickerProps } from '@/components/date-picker/single/datePicker.props'
import type { CreateDatePickerStyle } from '@/components/date-picker/single/datePicker.style'
import { createDatePickerStyle } from '@/components/date-picker/single/datePicker.style'
import InteractableElement from '@/components/shared/InteractableElement.vue'
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<DatePickerProps>(), {
  id: null,
  testId: null,
  maxDate: null,
  minDate: null,
  isDateDisabled: () => false,
  isDateUnavailable: () => false,
  isDisabled: false,
  allowDeselect: false,
  focusOnMount: false,
  showTwoMonths: false,
  variant: null,
})

const modelValue = defineModel<Date | null>({ required: true })

const placeholderValue = defineModel<Date>('placeholderValue', { required: false })

const delegatedModel = computed<DateValue | null>({
  get: () => {
    if (modelValue.value === null) {
      return null
    }

    return dateToDateValue(modelValue.value)
  },
  set: (value) => {
    if (value === null || value === undefined) {
      modelValue.value = null

      return
    }

    modelValue.value = dateValueToDate(value)
  },
})

const delegatedPlaceholderValue = computed<DateValue>({
  get: () => {
    return dateToDateValue(placeholderValue.value ?? modelValue.value ?? new Date())
  },
  set: (value) => {
    placeholderValue.value = dateValueToDate(value)
  },
})

const { theme } = injectThemeProviderContext()

const datePickerStyle = computed<CreateDatePickerStyle>(
  () => createDatePickerStyle({ variant: props.variant ?? undefined }),
)

const customClassConfig = computed<ResolvedClassConfig<'datePicker'>>(
  () => getCustomComponentVariant('datePicker', theme.value, { variant: props.variant }),
)

useProvideDatePickerContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  placeholderValue: computed<Date>(() => dateValueToDate(delegatedPlaceholderValue.value)),
  style: datePickerStyle,
})
</script>

<template>
  <TestIdProvider :test-id="props.testId">
    <InteractableElement :is-disabled="props.isDisabled">
      <RekaCalendarRoot
        v-slot="{ weekDays, grid }"
        v-model="delegatedModel"
        v-model:placeholder="delegatedPlaceholderValue"
        :week-starts-on="1"
        :prevent-deselect="!props.allowDeselect"
        :fixed-weeks="true"
        :number-of-months="props.showTwoMonths ? 2 : 1"
        :is-date-unavailable="(value: DateValue) => props.isDateUnavailable(dateValueToDate(value))"
        :is-date-disabled="(value: DateValue) => props.isDateDisabled(dateValueToDate(value))"
        :calendar-label="props.label"
        :initial-focus="props.focusOnMount"
        :min-value="props.minDate === null
          ? null
          : dateToDateValue(props.minDate)"
        :max-value="props.maxDate === null
          ? null
          : dateToDateValue(props.maxDate)"
        weekday-format="short"
      >
        <slot
          :week-days="(weekDays as string[])"
          :grid="(grid as Grid<DateValue>[])"
        />
      </RekaCalendarRoot>
    </InteractableElement>
  </TestIdProvider>
</template>
