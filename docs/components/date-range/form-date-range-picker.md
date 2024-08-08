---
sidebar: auto
---


# FormDateRangePicker

<!-- @include: ./form-date-range-picker-meta.md -->

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
import { FormDateRangePicker } from '@wisemen/vue-core'
import { DateUtil } from '../..'

const { form } = useForm({
  schema: z.object({
    date: z.date().array().length(2)
  })
})

const model = form.register('date')

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
</script>
  
<template>
  <FormDateRangePicker
    v-bind="model"
    :highlight-config="highlighted"
    :markers="markers"
    :range-config="config"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date-range/FormDateRangePicker.vue).
