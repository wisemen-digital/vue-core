<script setup lang="ts">
import type { DateValue } from 'reka-ui'
import {
  CalendarHeader as RekaCalendarHeader,
  CalendarHeading as RekaCalendarHeading,
  CalendarNext as RekaCalendarNext,
  CalendarPrev as RekaCalendarPrev,
} from 'reka-ui'
import { computed, nextTick } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { useInjectConfigContext } from '@/components/config-provider/config.context'
import type { Grid } from '@/components/date-picker/shared/datePicker.type'
import { getMonthName } from '@/components/date-picker/shared/datePicker.util'
import { useInjectDatePickerContext } from '@/components/date-picker/single/datePicker.context'
import SelectItem from '@/components/select/parts/SelectItem.vue'
import Select from '@/components/select/Select.vue'
import TextField from '@/components/text-field/TextField.vue'
import { mergeClasses } from '@/customClassVariants'

const props = defineProps<{
  grid: Grid<DateValue>[]
}>()

const { locale } = useInjectConfigContext()

const {
  classConfig,
  customClassConfig,
  placeholderValue,
  showTwoMonths,
  style,
} = useInjectDatePickerContext()

const monthValue = computed<number>({
  get: () => placeholderValue.value.getMonth(),
  set: async (value) => {
    // Without nextTick, an stack overflow occurs for some weird reason
    // Took me about 2 hours to figure this out
    await nextTick()

    placeholderValue.value = new Date(
      placeholderValue.value.getFullYear(),
      value,
      placeholderValue.value.getDate(),
    )
  },
})

const yearValue = computed<number>({
  get: () => {
    return placeholderValue.value.getFullYear()
  },
  set: (value) => {
    placeholderValue.value = new Date(
      value,
      placeholderValue.value.getMonth(),
      placeholderValue.value.getDate(),
    )
  },
})
</script>

<template>
  <div
    :class="style.headerContainer({
      class: mergeClasses(classConfig?.headerContainer, customClassConfig.headerContainer),
    })"
  >
    <RekaCalendarHeader
      v-for="(month, index) of props.grid"
      :key="index"
      :class="style.header({
        class: mergeClasses(classConfig?.header, customClassConfig.header),
      })"
    >
      <RekaCalendarPrev
        v-if="index === 0"
        :as-child="true"
      >
        <IconButton
          :class-config="{
            icon: 'group-enabled/button:group-hover/button:-translate-x-px group-enabled/button:group-active/button:-translate-x-0.5 duration-200',
          }"
          icon="chevronLeft"
          label="Previous month"
          variant="tertiary"
          size="sm"
          class="justify-self-start"
        />
      </RekaCalendarPrev>

      <span v-else />

      <RekaCalendarHeading>
        <div
          v-if="showTwoMonths"
          class="text-center"
        >
          <span class="font-semibold text-primary text-sm whitespace-nowrap">
            {{ getMonthName(month.value.month - 1, locale, 'long') }} {{ month.value.year }}
          </span>
        </div>

        <div
          v-else
          class="flex items-center justify-center gap-xxs"
        >
          <Select
            v-model="monthValue"
            :icon-right="null"
            :class-config="{
              root: 'h-8 shadow-none border-none !ring-0 hover:bg-primary-hover focus-within:bg-primary-hover',
              baseSingle: 'font-semibold px-sm',
              content: 'flex gap-xs grid grid-cols-1 [grid-template-columns:auto] sm:[grid-template-columns:repeat(auto-fit,minmax(6rem,1fr))]',
              popover: {
                content: 'min-w-60',
              },
            }"
            :filter="{
              isEnabled: true,
            }"
            :display-fn="(monthIndex) => getMonthName(monthIndex, locale, 'long')"
            popover-align="start"
          >
            <SelectItem
              v-for="i in 12"
              :key="i"
              :value="i - 1"
            >
              {{ getMonthName(i - 1, locale, 'long') }}
            </SelectItem>
          </Select>

          <TextField
            :class-config="{
              root: 'h-8 shadow-none border-none !ring-0 hover:bg-primary-hover focus-within:bg-primary-hover',
              input: 'font-semibold px-sm',
            }"
            :model-value="`${yearValue}`"
            class="w-12 shrink-0"
            @blur="(event) => yearValue = Number.parseInt((event.target as HTMLInputElement).value)"
          />
        </div>
      </RekaCalendarHeading>

      <RekaCalendarNext
        v-if="index === (grid.length - 1)"
        :as-child="true"
      >
        <IconButton
          :class-config="{
            icon: 'group-enabled/button:group-hover/button:translate-x-px group-enabled/button:group-active/button:translate-x-0.5 duration-200',
          }"
          icon="chevronRight"
          label="Next month"
          variant="tertiary"
          size="sm"
          class="justify-self-end"
        />
      </RekaCalendarNext>

      <span v-else />
    </RekaCalendarHeader>
  </div>
</template>
