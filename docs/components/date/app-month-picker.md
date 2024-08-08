---
sidebar: auto
---


# AppMonthPicker

<!-- @include: ./app-month-picker-meta.md -->

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
```ts [MonthPickerValue]
export interface MonthPickerValue {
  month: number | string
  year: number | string
}

```
:::

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import type {
  DatePickerHighlightConfig,
  MonthPickerValue,
} from '@wisemen/vue-core'
import { AppMonthPicker } from '@wisemen/vue-core'
import { DateUtil } from '../..'

const model = ref<MonthPickerValue | null>({
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
})

const highlighted: Partial<DatePickerHighlightConfig> = {
  months: [
    {
      month: 0,
      year: 2024,
    },
  ],
}
const disabled: Date[] = [
  DateUtil.getMonthsFromToday(2),
]
</script>
  
<template>
  <AppMonthPicker
    v-model="model"
    :highlight-config="highlighted"
    :disabled-dates="disabled"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/month/AppMonthPicker.vue).
