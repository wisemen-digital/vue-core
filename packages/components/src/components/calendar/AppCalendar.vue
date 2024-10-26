<script setup lang="ts">
import {
  type DateValue,
  getLocalTimeZone,
  today,
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

import AppButton from '@/components/button/button/AppButton.vue'
import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import AppCollapsable2 from '@/components/collapsable/AppCollapsable2.vue'
import { injectConfigContext } from '@/components/config-provider/config.context'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const model = defineModel<Date | null>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()
const globalConfigContext = injectConfigContext()

const placeholder = ref<DateValue>(today(getLocalTimeZone()))

const yearScrollContainerRef = ref<HTMLElement | null>(null)
const activeView = ref<'day' | 'month' | 'year'>('day')
const now = new Date()

const placeholderYear = computed<number>({
  get: () => placeholder.value.year,
  set: (value) => {
    placeholder.value = placeholder.value.set({ year: value })
  },
})

const placeholderMonth = computed<number>({
  get: () => placeholder.value.month,
  set: (value) => {
    placeholder.value = placeholder.value.set({ month: value })
  },
})

const years = computed<number[]>(() => {
  const currentYear = now.getFullYear()

  return [
    ...Array.from({ length: 100 }, (_, i) => currentYear - i),
    ...Array.from({ length: 100 }, (_, i) => currentYear + (i + 1)),
  ].sort((a, b) => a - b) // Sort in ascending order
})

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
    v-model="model"
    v-model:placeholder="placeholder"
    :week-starts-on="1"
    :class="themeProviderContext.theme.value"
    class="w-[350px]"
  >
    <AppCollapsable2>
      <div
        v-if="activeView === 'day'"
        class="p-5"
      >
        <CalendarHeader class="flex items-center justify-between">
          <div class="flex gap-x-1.5">
            <CalendarPrev
              :as-child="true"
              :prev-page="(date) => pagingFunc(date, -1)"
            >
              <AppIconButton
                variant="secondary"
                icon="chevronLeftDouble"
                size="sm"
                label="Previous year"
              />
            </CalendarPrev>

            <CalendarPrev :as-child="true">
              <AppIconButton
                variant="secondary"
                icon="chevronLeft"
                size="sm"
                label="Previous month"
              />
            </CalendarPrev>
          </div>

          <CalendarHeading class="flex items-center gap-x-1">
            <AppButton
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
            </AppButton>

            <AppButton
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
            </AppButton>
          </CalendarHeading>

          <div class="flex gap-x-1.5">
            <CalendarNext :as-child="true">
              <AppIconButton
                variant="secondary"
                icon="chevronRight"
                size="sm"
                label="Next month"
              />
            </CalendarNext>

            <CalendarNext
              :as-child="true"
              :next-page="(date) => pagingFunc(date, 1)"
            >
              <AppIconButton
                variant="secondary"
                icon="chevronRightDouble"
                size="sm"
                label="Next year"
              />
            </CalendarNext>
          </div>
        </CalendarHeader>

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
                class="flex items-center justify-center"
              >
                <CalendarCellTrigger
                  :day="weekDate"
                  :month="month.value"
                  class="flex size-8 items-center justify-center rounded-lg text-center text-sm text-tertiary outline-none focus:bg-brand-secondary focus:text-brand-primary data-[selected]:bg-brand-solid data-[today]:bg-secondary-hover data-[selected]:text-primary-on-brand data-[today]:text-primary data-[today]:focus:bg-brand-secondary data-[today]:focus:text-brand-primary"
                />
              </CalendarCell>
            </CalendarGridRow>
          </CalendarGridBody>
        </CalendarGrid>
      </div>

      <div
        v-else-if="activeView === 'month'"
        class="grid grid-cols-3 p-5"
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
        class="grid max-h-60 grid-cols-2 overflow-y-auto p-5"
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
    </AppCollapsable2>
  </CalendarRoot>
</template>
