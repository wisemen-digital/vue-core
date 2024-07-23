---
sidebar: auto
---

# FormInput

<!-- @include: ./form-input-meta.md -->


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    name: z.string()
  })
})

const name = form.register('name')
</script>

<template>
  <FormInput 
    v-bind="name" 
    label="Name"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/FormInput.vue).
