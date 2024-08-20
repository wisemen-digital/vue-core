---
sidebar: auto
---


# FormWeekPicker

<!-- @include: ./form-week-picker-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormWeekPicker } from '@wisemen/vue-core'
import { DateUtil } from '../..'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    date: z.date().array(),
  })
})

const model = form.register('date')
</script>
  
<template>
  <FormWeekPicker
    v-bind="model"
    label="Week"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/date/week/FormWeekPicker.vue).
