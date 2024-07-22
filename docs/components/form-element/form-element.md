---
sidebar: auto
---


# FormElement

<!-- @include: ./form-element-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { AppInput, FormElement } from '@wisemen/vue-core'

const { form } = useForm({
  schema: z.object({
    name: z.string()
  })
})

const name = form.register('name')
</script>
  
<template>
  <FormElement 
    v-bind="name"
    label="Name"
  >
    <AppInput
      v-model="model"
    />     
  </FormElement>
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/form-element/FormElement.vue).