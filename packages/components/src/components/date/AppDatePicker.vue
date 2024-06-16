<script setup lang="ts">
import { CalendarDate, type DateValue } from '@internationalized/date'
import {
  DatePickerRoot,
  useId,
} from 'radix-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppDatePickerContent from '@/components/date/AppDatePickerContent.vue'
import AppDatePickerField from '@/components/date/AppDatePickerField.vue'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
  /**
   * The max date.
   * @default null
   */
  maxDate?: Date | null
  /**
   * The min date.
   * @default null
   */
  minDate?: Date | null
  /**
   * Whether the input is disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the input is invalid.
   * @default false
   */
  isInvalid?: boolean
  /**
   * The modelValue of the date picker.
   * @default null
   */
  modelValue: Date | null
  /**
   * The placeholder of the input.
   * @default null
   */
  placeholder?: null | string
}>(), {
  id: null,
  isDisabled: false,
  isInvalid: false,
  isLoading: false,
  iconLeft: undefined,
  iconRight: undefined,
  placeholder: null,
  type: 'text',
})

const emit = defineEmits<{
  'blur': []
  'update:modelValue': [Date | null]
}>()

const model = computed<DateValue | undefined>({
  get: () => {
    const value = props.modelValue

    if (value === null) {
      return undefined
    }

    return dateToCalendarDate(value)
  },
  set: (value: DateValue | undefined) => {
    if (value === undefined) {
      return null
    }

    return emit('update:modelValue', new Date(value.year, value.month - 1, value.day))
  },
})

const { locale } = useI18n()

const id = props.id ?? useId()

function dateToCalendarDate(date: Date): CalendarDate {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
}

const minDate = computed<DateValue | undefined>(() => {
  if (props.minDate === null || props.minDate === undefined) {
    return undefined
  }

  return dateToCalendarDate(props.minDate)
})

const maxDate = computed<DateValue | undefined>(() => {
  if (props.maxDate === null || props.maxDate === undefined) {
    return undefined
  }

  return dateToCalendarDate(props.maxDate)
})

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <DatePickerRoot
      :id="id"
      v-model="model"
      :min-value="minDate"
      :max-value="maxDate"
      :locale="locale"
      :disabled="props.isDisabled"
      @blur="onBlur"
    >
      <AppDatePickerField />
      <AppDatePickerContent />
    </DatePickerRoot>
  </div>
</template>
