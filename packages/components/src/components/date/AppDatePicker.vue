<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import {
  DatePickerRoot,
  useId,
} from 'radix-vue'
import {
  computed,
  ref,
} from 'vue'
import { useI18n } from 'vue-i18n'

import AppDateCalendarPickerContent from '@/components/date/AppDateCalendarPickerContent.vue'
import AppDateMonthPickerContent from '@/components/date/AppDateMonthPickerContent.vue'
import AppDatePickerField from '@/components/date/AppDatePickerField.vue'
import AppDateYearPickerContent from '@/components/date/AppDateYearPickerContent.vue'

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
  maxDate?: CalendarDate | null
  /**
   * The min date.
   * @default null
   */
  minDate?: CalendarDate | null
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
  modelValue: CalendarDate | null
}>(), {
  id: null,
  maxDate: null,
  minDate: null,
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
  'update:modelValue': [CalendarDate | null]
}>()

const model = computed<CalendarDate | undefined>({
  get: () => {
    const value = props.modelValue

    return value === null ? undefined : value
  },
  set: (value: CalendarDate | undefined) => {
    if (value === undefined) {
      return null
    }

    if (props.minDate !== null && value.compare(props.minDate) < 0) {
      return emit('update:modelValue', props.minDate)
    }

    if (props.maxDate !== null && value.compare(props.maxDate) > 0) {
      return emit('update:modelValue', props.maxDate)
    }

    return emit('update:modelValue', value)
  },
})

const { locale } = useI18n()

const id = props.id ?? useId()

const minDate = computed<CalendarDate | undefined>(() => {
  if (props.minDate === null) {
    return undefined
  }

  return props.minDate
})

const maxDate = computed<CalendarDate | undefined>(() => {
  if (props.maxDate === null) {
    return undefined
  }

  return props.maxDate
})

function onBlur(): void {
  emit('blur')
}

const isYearPickerVisible = ref<boolean>(false)
const isMonthPickerVisible = ref<boolean>(false)

function onShowYearPickerButtonClick(): void {
  isYearPickerVisible.value = true
  isMonthPickerVisible.value = false
}

function onShowMonthPickerButtonClick(): void {
  isMonthPickerVisible.value = true
  isYearPickerVisible.value = false
}

function onMonthSelect(month: number, year: number): void {
  model.value = new CalendarDate(year ?? new Date().getFullYear(), month, model.value?.day ?? new Date().getDate())

  isMonthPickerVisible.value = false
}

function onTriggerClick(): void {
  if (props.isDisabled) {
    return
  }

  isYearPickerVisible.value = false
  isMonthPickerVisible.value = false
}

function onYearSelect(number: number): void {
  if (model.value === undefined) {
    model.value = new CalendarDate(number, new Date().getMonth() + 1, 1)
  }
  else {
    model.value?.set({
      day: model.value?.day ?? new Date().getDate(),
      month: model.value?.month ?? new Date().getMonth(),
      year: number,
    })
  }

  isYearPickerVisible.value = false
  isMonthPickerVisible.value = true
}
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <DatePickerRoot
      :id="id"
      v-model="model"
      :fixed-weeks="true"
      :min-value="minDate"
      :max-value="maxDate"
      :locale="locale"
      :disabled="props.isDisabled"
    >
      <AppDatePickerField
        :is-invalid="props.isInvalid"
        type="date"
        @date-click="onTriggerClick"
        @blur="onBlur"
      />

      <AppDateCalendarPickerContent
        v-if="!isMonthPickerVisible && !isYearPickerVisible"
        @month-click="onShowMonthPickerButtonClick"
        @year-click="onShowYearPickerButtonClick"
      />
      <AppDateMonthPickerContent
        v-if="isMonthPickerVisible"
        @month-click="onMonthSelect"
        @year-click="onShowYearPickerButtonClick"
      />
      <AppDateYearPickerContent
        v-if="isYearPickerVisible"
        @year-click="onYearSelect"
      />
    </DatePickerRoot>
  </div>
</template>

<style>
[data-radix-popper-content-wrapper] {
  @apply !z-popover;
}
</style>
