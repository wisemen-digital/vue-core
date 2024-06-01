<script setup lang="ts">
import { CalendarDate, type DateValue } from '@internationalized/date'
import {
  DatePickerArrow,
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
  useId,
} from 'radix-vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppIconButton from '@/components/button/AppIconButton.vue'
import { useComponentAttrs } from '@/composables/componentAttrs.composable'

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
  'update:modelValue': [Date | null]
}>()

const model = computed<DateValue | undefined>({
  get: () => {
    const value = props.modelValue

    if (value === null) {
      return undefined
    }

    return new CalendarDate(value.getFullYear(), value.getMonth() + 1, value.getDate())
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

const { classAttr } = useComponentAttrs()
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
    >
      <DatePickerField
        v-slot="{ segments }"
        :class="[
          classAttr,
          {
            'border-input-border [&:has(:focus-visible)]:ring-ring': !props.isInvalid,
            'border-destructive [&:has(:focus-visible)]:border-input-border [&:has(:focus-visible)]:ring-destructive': props.isInvalid,
            'cursor-not-allowed opacity-50': props.isDisabled,
          },
        ]"
        class="relative flex h-10 w-full items-center rounded-input border border-solid bg-input pl-3 pr-1 text-sm text-input-foreground outline-none ring-offset-background duration-200 [&:has(:focus-visible)]:ring-2"
      >
        <div class="flex items-center">
          <template
            v-for="item in segments"
            :key="item.part"
          >
            <DatePickerInput
              v-if="item.part === 'literal'"
              :part="item.part"
            >
              {{ item.value }}
            </DatePickerInput>
            <DatePickerInput
              v-else
              :part="item.part"
              class="rounded-md p-0.5 focus:shadow-[0_0_0_2px] focus:shadow-primary focus:outline-none data-[placeholder]:text-input-placeholder"
            >
              {{ item.value }}
            </DatePickerInput>
          </template>
        </div>

        <DatePickerTrigger as-child>
          <AppIconButton
            label="calendar"
            class="ml-auto"
            variant="ghost"
            size="sm"
            icon="calendar"
          />
        </DatePickerTrigger>
      </DatePickerField>

      <DatePickerContent
        :side-offset="4"
        class="rounded-popover bg-popover shadow-popover-shadow will-change-[transform,opacity]"
      >
        <DatePickerArrow class="fill-white" />
        <DatePickerCalendar
          v-slot="{ weekDays, grid }"
          class="p-4"
        >
          <DatePickerHeader class="flex items-center justify-between">
            <DatePickerPrev
              as="div"
              as-child
            >
              <AppIconButton
                label="chevronLeft"
                variant="ghost"
                size="sm"
                icon="chevronLeft"
              />
            </DatePickerPrev>

            <DatePickerHeading class="font-medium text-foreground" />
            <DatePickerNext
              as="div"
              as-child
            >
              <AppIconButton
                label="chevronRight"
                variant="ghost"
                size="sm"
                icon="chevronRight"
              />
            </DatePickerNext>
          </DatePickerHeader>
          <div
            class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <DatePickerGrid
              v-for="month in grid"
              :key="month.value.toString()"
              class="w-full border-collapse select-none space-y-1"
            >
              <DatePickerGridHead>
                <DatePickerGridRow class="mb-1 flex w-full justify-between">
                  <DatePickerHeadCell
                    v-for="day in weekDays"
                    :key="day"
                    class="w-8 rounded-md text-xs text-muted-foreground"
                  >
                    {{ day }}
                  </DatePickerHeadCell>
                </DatePickerGridRow>
              </DatePickerGridHead>
              <DatePickerGridBody>
                <DatePickerGridRow
                  v-for="(weekDates, index) in month.rows"
                  :key="`weekDate-${index}`"
                  class="flex w-full"
                >
                  <DatePickerCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                  >
                    <DatePickerCellTrigger
                      :day="weekDate"
                      :month="month.value"
                      class="relative flex size-8 items-center justify-center whitespace-nowrap rounded-button border border-transparent bg-transparent text-sm font-normal text-foreground outline-none before:absolute before:top-[5px] before:hidden before:size-1 before:rounded-full before:bg-background hover:border-primary focus:shadow-[0_0_0_2px] focus:shadow-primary/50 data-[unavailable]:pointer-events-none data-[selected]:bg-primary data-[selected]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-white data-[unavailable]:text-foreground/30 data-[unavailable]:line-through data-[today]:before:block data-[selected]:before:bg-background data-[today]:before:bg-primary"
                    />
                  </DatePickerCell>
                </DatePickerGridRow>
              </DatePickerGridBody>
            </DatePickerGrid>
          </div>
        </DatePickerCalendar>
      </DatePickerContent>
    </DatePickerRoot>
  </div>
</template>
