---
sidebar: auto
---


# FormPasswordInput

<!-- @include: ./form-password-input-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormPasswordInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    password: z.string()
  })
})

const password = form.register('password')
</script>

<template>
  <FormPasswordInput 
    v-bind="password" 
    label="Password"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/FormPasswordInput.vue).
