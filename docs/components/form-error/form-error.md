---
sidebar: auto
---


# FormError

<!-- @include: ./form-error-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormError } from '@wisemen/vue-core'

const { form } = useForm({
  schema: z.object({
    name: z.string()
  })
})

const name = form.register('name')
</script>
  
<template>
  <FormError 
    :errors="name.errors"
    :is-visible="name.errors.length"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/form-error/FormError.vue).