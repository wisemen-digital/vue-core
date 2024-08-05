---
sidebar: auto
---


# FormDatePicker

<!-- @include: ./form-date-picker-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import type {
  DatePickerHighlightConfig,
  DatePickerMarker,
} from '@wisemen/vue-core'
import { FormDatePicker } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    date: z.date()
  })
})

const model = form.register('date')

const date = new Date()

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
  <FormDatePicker
    v-bind="model"
    :highlight-config="highlighted"
    :markers="markers"
    label="Date"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/FormDatePicker.vue).
