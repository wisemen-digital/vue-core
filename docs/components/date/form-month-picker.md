---
sidebar: auto
---


# FormMonthPicker

<!-- @include: ./form-month-picker-meta.md -->

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
import { FormMonthPicker } from '@wisemen/vue-core'
import { DateUtil } from '../..'

const { form } = useForm({
  schema: z.object({
    date: z.object({
      month: z.number(),
      year: z.number(),
    })
  })
})

const model = form.register('date')

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
  <FormMonthPicker
    v-bind="model"
    :highlight-config="highlighted"
    :disabled-dates="disabled"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/month/FormMonthPicker.vue).
