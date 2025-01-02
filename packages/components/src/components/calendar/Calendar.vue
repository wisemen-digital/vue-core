<script setup lang="ts">
import {
  CalendarDate,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNext,
  CalendarPrev,
  CalendarRoot,
} from 'reka-ui'
import {
  computed,
  ref,
  watch,
} from 'vue'

import Button from '@/components/button/button/Button.vue'
import IconButton from '@/components/button/icon-button/IconButton.vue'
import type { CalendarProps } from '@/components/calendar/calendar.props'
import Collapsable2 from '@/components/collapsable/Collapsable2.vue'
import { injectConfigContext } from '@/components/config-provider/config.context'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<CalendarProps>(), {
  defaultPlaceholderDate: () => new Date(),
  isDateDisabled: () => false,
  areYearArrowsHidden: false,
})

const model = defineModel<Date | null>({
  required: true,
})

const delegatedModel = computed<DateValue | null>({
  get: () => {
    if (model.value === null) {
      return null
    }

    return dateToDateValue(model.value)
  },
  set: (value) => {
    if (value === null) {
      model.value = null

      return
    }

    model.value = value.toDate(getLocalTimeZone())
  },
})

const themeProviderContext = injectThemeProviderContext()
const globalConfigContext = injectConfigContext()

const placeholder = ref<DateValue>(dateToDateValue(model.value ?? props.defaultPlaceholderDate))

const yearScrollContainerRef = ref<HTMLElement | null>(null)
const activeView = ref<'day' | 'month' | 'year'>('day')
const now = new Date()

const placeholderYear = computed<number>({
  get: () => placeholder.value.year,
  set: (value) => {
    if (delegatedModel.value === null) {
      return
    }

    delegatedModel.value = delegatedModel.value.set({ year: value })
  },
})

const placeholderMonth = computed<number>({
  get: () => placeholder.value.month,
  set: (value) => {
    if (delegatedModel.value === null) {
      return
    }

    delegatedModel.value = delegatedModel.value.set({ month: value })
  },
})

const years = computed<number[]>(() => {
  const currentYear = now.getFullYear()

  return [
    ...Array.from({ length: 100 }, (_, i) => currentYear - i),
    ...Array.from({ length: 100 }, (_, i) => currentYear + (i + 1)),
  ].sort((a, b) => a - b) // Sort in ascending order
})

function dateToDateValue(date: Date): DateValue {
  return new CalendarDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
}

function getMonthName(month: number, format: 'long' | 'short'): string {
  return new Intl.DateTimeFormat(globalConfigContext.locale.value, { month: format }).format(new Date(1, month - 1))
}

function onShowDayView(): void {
  activeView.value = 'day'
}

function onShowMonthView(): void {
  activeView.value = 'month'

  setTimeout(() => {
    const activeMonthSelector = document.querySelector(`#month-${placeholderMonth.value}`) as HTMLElement

    activeMonthSelector.focus()
  }, 0)
}

function onShowYearView(): void {
  activeView.value = 'year'

  setTimeout(() => {
    const activeYearSelector = document.querySelector(`#year-${placeholderYear.value}`) as HTMLElement

    activeYearSelector.focus()
  }, 0)
}

function onSelectMonth(): void {
  setTimeout(() => {
    onShowDayView()
  }, 0)
}

function onSelectYear(): void {
  setTimeout(() => {
    onShowDayView()
  }, 0)
}

function pagingFunc(date: any, sign: -1 | 1): any {
  if (sign === -1) {
    return date.subtract({ years: 1 })
  }

  return date.add({ years: 1 })
}

watch(placeholderYear, () => {
  if (activeView.value !== 'year') {
    return
  }

  if (yearScrollContainerRef.value === null) {
    return
  }

  const yearScrollContainer = yearScrollContainerRef.value
  const currentYear = placeholderYear.value

  const yearElement = yearScrollContainer.querySelector(`#year-${currentYear}`) as HTMLElement

  yearScrollContainer.scrollTo({
    behavior: 'smooth',
    top: yearElement.offsetTop - yearScrollContainer.clientHeight / 2,
  })
})
</script>

<template>
  <CalendarRoot
    v-slot="{ weekDays, grid, date }"
    v-model="delegatedModel"
    v-model:placeholder="placeholder"
    :week-starts-on="1"
    :is-date-unavailable="(date: DateValue) => {
      return props.isDateDisabled(date.toDate(
        getLocalTimeZone(),
      ))
    }"
    :prevent-deselect="true"
    :class="ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.darkModeValue.value)"
  >
    <Collapsable2>
      <div
        v-if="activeView === 'day'"
        class="flex flex-col-reverse"
      >
        <CalendarGrid
          v-for="month in grid"
          :key="month.value.toString()"
          class="w-full"
        >
          <CalendarGridHead>
            <CalendarGridRow class="grid w-full grid-cols-7 py-4">
              <CalendarHeadCell
                v-for="day in weekDays"
                :key="day"
                class="text-sm font-medium text-quaternary"
              >
                {{ day }}
              </CalendarHeadCell>
            </CalendarGridRow>
          </CalendarGridHead>

          <CalendarGridBody class="grid gap-y-1">
            <CalendarGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              class="grid grid-cols-7"
            >
              <CalendarCell
                v-for="weekDate in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
                class="relative flex items-center justify-center"
              >
                <CalendarCellTrigger
                  :day="weekDate"
                  :month="month.value"
                  class="
                    overflow-hidden
                    cursor-pointer flex size-8 items-center justify-center rounded-full text-center text-sm text-tertiary outline-none
                    duration-100
                    focus:bg-brand-secondary
                    focus:text-brand-primary
                    focus-visible:ring-brand-primary-500
                    focus-visible:ring-2
                    ring-offset-1
                    group
                    data-[selected]:bg-brand-solid
                    data-[selected]:text-primary-on-brand
                    data-[selected]:focus-visible:ring-2
                    data-[selected]:data-[unavailable]:text-primary-on-brand
                    data-[today]:bg-secondary-hover
                    data-[today]:text-primary
                    data-[today]:focus:bg-brand-secondary
                    data-[today]:focus:text-brand-primary
                    data-[disabled]:text-disabled
                    data-[unavailable]:text-disabled
                    data-[unavailable]:pointer-events-none
                    data-[unavailable]:line-through
                    data-[outside-view]:text-disabled
                  "
                >
                  {{ new Date(weekDate).getDate() }}

                  <slot
                    :date="new Date(weekDate)"
                    name="date"
                  />
                </CalendarCellTrigger>
              </CalendarCell>
            </CalendarGridRow>
          </CalendarGridBody>
        </CalendarGrid>

        <CalendarHeader class="flex items-center justify-between">
          <div class="flex gap-x-1.5">
            <CalendarPrev
              v-if="!props.areYearArrowsHidden"
              :as-child="true"
              :prev-page="(date) => pagingFunc(date, -1)"
            >
              <IconButton
                variant="tertiary"
                icon="chevronLeftDouble"
                size="sm"
                label="Previous year"
              />
            </CalendarPrev>

            <CalendarPrev :as-child="true">
              <IconButton
                variant="tertiary"
                icon="chevronLeft"
                size="sm"
                label="Previous month"
              />
            </CalendarPrev>
          </div>

          <CalendarHeading class="flex items-center gap-x-1">
            <Button
              :style-config="{
                '--button-font-weight-default': '600',
                '--button-padding-left-default': 'var(--spacing-sm)',
                '--button-padding-right-default': 'var(--spacing-sm)',
                '--button-height-default': '32px',
              }"
              variant="tertiary"
              size="sm"
              @click="onShowMonthView"
            >
              {{ getMonthName(new Date(date).getMonth() + 1, 'long') }}
            </Button>

            <Button
              :style-config="{
                '--button-font-weight-default': '600',
                '--button-padding-left-default': 'var(--spacing-sm)',
                '--button-padding-right-default': 'var(--spacing-sm)',
                '--button-height-default': '32px',
              }"
              variant="tertiary"
              size="sm"
              @click="onShowYearView"
            >
              {{ new Date(date).getFullYear() }}
            </Button>
          </CalendarHeading>

          <div class="flex gap-x-1.5">
            <CalendarNext :as-child="true">
              <IconButton
                variant="tertiary"
                icon="chevronRight"
                size="sm"
                label="Next month"
              />
            </CalendarNext>

            <CalendarNext
              v-if="!props.areYearArrowsHidden"
              :as-child="true"
              :next-page="(date) => pagingFunc(date, 1)"
            >
              <IconButton
                variant="tertiary"
                icon="chevronRightDouble"
                size="sm"
                label="Next year"
              />
            </CalendarNext>
          </div>
        </CalendarHeader>
      </div>

      <div
        v-else-if="activeView === 'month'"
        class="grid grid-cols-3"
      >
        <div
          v-for="monthIndex of 12"
          :key="monthIndex"
        >
          <input
            :id="`month-${monthIndex}`"
            v-model="placeholderMonth"
            :value="monthIndex"
            type="radio"
            name="month"
            class="absolute scale-0 opacity-0"
            @keydown.enter="onSelectMonth"
          >

          <label
            :for="`month-${monthIndex}`"
            :class="{
              'bg-secondary-hover': placeholderMonth === monthIndex,
            }"
            class="block cursor-pointer rounded-md p-2 text-center text-sm text-tertiary"
            @click="onSelectMonth"
          >
            {{ getMonthName(monthIndex, 'short') }}
          </label>
        </div>
      </div>

      <div
        v-else-if="activeView === 'year'"
        ref="yearScrollContainerRef"
        class="grid max-h-60 grid-cols-2 overflow-y-auto"
      >
        <div
          v-for="year of years"
          :key="year"
        >
          <input
            :id="`year-${year}`"
            v-model="placeholderYear"
            :value="year"
            type="radio"
            name="year"
            class="absolute scale-0 opacity-0"
            @keydown.enter="onSelectYear"
          >

          <label
            :for="`year-${year}`"
            :class="{
              'bg-secondary-hover': placeholderYear === year,
            }"
            class="block cursor-pointer rounded-md p-2 text-center text-sm text-tertiary"
            @click="onSelectYear"
          >
            {{ year }}
          </label>
        </div>
      </div>
    </Collapsable2>
  </CalendarRoot>
</template>
