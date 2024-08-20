---
sidebar: auto
---


# AppWeekPicker

<!-- @include: ./app-week-picker-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { DateUtil } from '../..'
import type { WeekPickerValue } from '@wisemen/vue-core'

const model = ref<WeekPickerValue | null>(null)
</script>
  
<template>
  <AppWeekPicker
    v-model="model"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/week/AppWeekPicker.vue).
