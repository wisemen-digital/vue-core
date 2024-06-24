<script setup lang="ts">
import type { CalendarDate } from '@internationalized/date'
import {
  DatePickerRoot,
  useId,
} from 'radix-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppDateMonthPickerContent from '@/components/date/AppDateMonthPickerContent.vue'
import AppDatePickerField from '@/components/date/AppDatePickerField.vue'

const props = withDefaults(defineProps<{
  /**
   * The id of the input.
   * @default null
   */
  id?: null | string
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

    return emit('update:modelValue', value)
  },
})

const { locale } = useI18n()

const id = props.id ?? useId()

function onBlur(): void {
  emit('blur')
}
</script>

<template>
  <div class="flex w-full flex-col gap-2">
    <DatePickerRoot
      :id="id"
      v-model="model"
      :fixed-weeks="true"
      :locale="locale"
      :disabled="props.isDisabled"
      @blur="onBlur"
    >
      <AppDatePickerField type="month" />
      <AppDateMonthPickerContent hide-header />
    </DatePickerRoot>
  </div>
</template>
