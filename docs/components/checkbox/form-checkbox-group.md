---
sidebar: auto
---

# FormCheckboxGroup

<!-- @include: ./form-checkbox-group-meta.md -->

## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormCheckboxGroup } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    value: z.string().array()
  })
})

const value = form.register('value')

const options = ref<DataItem<string>[]>([
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
])
</script>

<template>
  <FormCheckboxGroup
    v-bind="value"
    :options="options"
    label="Options"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/checkbox/FormCheckboxGroup.vue).
