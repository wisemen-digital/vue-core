<script setup lang="ts">
import IconButton from '@/components/button/icon-button/IconButton.vue'
import { useInjectDateFieldContext } from '@/components/date-field/dateField.context'
import DatePicker from '@/components/date-picker/single/DatePicker.vue'
import Popover from '@/components/popover/Popover.vue'

const {
  maxDate,
  minDate,
  weekStartsOn,
  isDateDisabled,
  isDateUnavailable,
  isDisabled,
  allowDeselect,
  classConfig,
  customClassConfig,
  hideDatePicker,
  label,
  locale,
  modelValue,
  placeholderValue,
  showTwoMonths,
} = useInjectDateFieldContext()
</script>

<template>
  <Popover
    v-if="!hideDatePicker"
    :is-popover-arrow-hidden="true"
    popover-align="end"
  >
    <template #trigger>
      <IconButton
        :is-disabled="isDisabled"
        :class-config="{
          icon: 'size-4',
          root: 'min-w-7 h-7 rounded-[0.3rem]',
        }"
        icon="calendarIcon"
        label="Open"
        variant="tertiary"
        size="sm"
        class="mr-[0.3rem]"
      />
    </template>

    <template #content>
      <div class="p-lg">
        <DatePicker
          v-model="modelValue"
          :focus-on-mount="true"
          :allow-deselect="allowDeselect"
          :is-date-disabled="isDateDisabled"
          :is-date-unavailable="isDateUnavailable"
          :placeholder-value="placeholderValue"
          :max-date="maxDate"
          :locale="locale"
          :week-starts-on="weekStartsOn"
          :min-date="minDate"
          :show-two-months="showTwoMonths"
          :label="label ?? ''"
          :class-config="{
            ...customClassConfig.datePicker,
            ...classConfig?.datePicker,
          }"
        />
      </div>
    </template>
  </Popover>
</template>
