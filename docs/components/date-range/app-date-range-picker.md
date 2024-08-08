---
sidebar: auto
---


# AppDateRangePicker

<!-- @include: ./app-date-range-picker-meta.md -->

## Types
::: code-group
```ts [DatePickerRangeValue]
export interface DatePickerRangeValue {
  end: Date | string
  start: Date | string
}
```
```ts [DatePickerRangeConfig]
export interface DatePickerRangeConfig {
  autoRange?: number | string
  fixedEnd?: boolean // Should not be used in combination with fixedStart
  fixedStart?: boolean // Should not be used in combination with fixedEnd
  maxRange?: number | string
  minRange?: number | string
  noDisabledRange?: boolean // Prevents range selection if the range includes disabled dates
}
```
```ts [DatePickerHighlightConfig]
export interface DatePickerHighlightConfig {
  dates: Date[]
  months: { month: number, year: number }[]
  options: { highlightDisabled: boolean }
  quarters: { quarter: number, year: number }[]
  weekdays: number[]
  years: number[]
}
```
```ts [DatePickerMarker]
export interface DatePickerMarker {
  color?: string
  // el is a HTML element of a calendar cell
  customPosition?: (el: HTMLElement) => Record<string, number | string>
  date: Date | string
  tooltip?: { color?: string, text: string }[]
  type?: 'dot' | 'line'
}
```
:::


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
  DatePickerRangeConfig,
} from '@wisemen/vue-core'
import { AppDateRangePicker } from '@wisemen/vue-core'
import { DateUtil } from '../..'

const model = ref<[Date, Date] | [string, string] | null>(null)

const fixedStartModel = ref<[Date, Date] | [string, string] | null>([
  new Date(),
  DateUtil.getDaysFromToday(7),
])

const highlighted: Partial<DatePickerHighlightConfig> = {
  dates: [
    DateUtil.getTomorrow(),
  ],
}

const markers: DatePickerMarker[] = [
  {
    date: DateUtil.getDaysFromToday(3),
    type: 'dot',
    color: 'lightblue',
  },
]

const config: DatePickerRangeConfig[] = {
  maxRange: 6,
}

const fixedStartConfig: DatePickerRangeConfig[] = {
  maxRange: 6,
  fixedStart: true,
}
</script>
  
<template>
  <AppDateRangePicker
    v-model="model"
    :highlight-config="highlighted"
    :markers="markers"
    :range-config="config"
  />

  // With fixed start (do not allow user to clear the data then)
  <AppDateRangePicker
    v-model="fixedStartModel"
    :highlight-config="highlighted"
    :markers="markers"
    :range-config="fixedStartConfig"
    :has-clear-button="false"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date-range/AppDateRangePicker.vue).
