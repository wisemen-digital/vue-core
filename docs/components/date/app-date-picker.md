---
sidebar: auto
---


# AppDatePicker

<!-- @include: ./app-date-picker-meta.md -->

## Types
::: code-group
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
} from '@wisemen/vue-core'
import { AppDatePicker } from '@wisemen/vue-core'

const date = new Date()

const model = ref<Date | null>(new Date())

const highlighted: Partial<DatePickerHighlightConfig> = {
  dates: [
    new Date(date.setDate(date.getDate() + 1)),
  ],
}

const markers: DatePickerMarker[] = [
  {
    date: new Date(date.setDate(date.getDate() + 3)),
    type: 'dot',
    color: 'lightblue',
  },
]
</script>
  
<template>
  <AppDatePicker
    v-model="model"
    :highlight-config="highlighted"
    :markers="markers"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/AppDatePicker.vue).
