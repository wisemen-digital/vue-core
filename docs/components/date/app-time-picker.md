---
sidebar: auto
---


# AppTimePicker

<!-- @include: ./app-time-picker-meta.md -->

## Types
::: code-group
```ts [TimePickerValue]
export interface TimePickerValue {
  hours: number | string
  minutes: number | string
  seconds?: number | string
}

```
:::

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import type {
  DatePickerHighlightConfig,
  TimePickerValue,
} from '@wisemen/vue-core'
import { AppTimePicker } from '@wisemen/vue-core'

const model = ref<TimePickerValue | null>({
  hours: 12,
  minutes: 30,
})

const disabled: TimePickerValue[] = [
  {
    hours: 14,
    minutes: 30,
  },
]
</script>
  
<template>
  <AppTimePicker
    v-model="model"
    :disabled-times="disabled"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/time/AppTimePicker.vue).
