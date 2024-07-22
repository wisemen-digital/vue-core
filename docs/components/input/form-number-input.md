---
sidebar: auto
---


# FormNumberInput

<!-- @include: ./form-number-input-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormNumberInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    percentage: z.string()
  })
})

const percentage = form.register('percentage')
</script>
  
<template>
  <FormNumberInput 
    v-bind="percentage" 
    :min="0" 
    :max="100" 
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/FormNumberInput.vue).
