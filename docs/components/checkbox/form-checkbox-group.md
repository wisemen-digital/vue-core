---
sidebar: auto
---

# FormCheckboxGroup
<script setup>
import FormCheckboxGroupPlayground from './FormCheckboxGroupPlayground.vue'
</script>

<FormCheckboxGroupPlayground />

## Props

| Prop        | Type                 | Description                                    | Default |
| ----------- | -------------------- | ---------------------------------------------- | ------- |
| label       | `null` \| `string`   | The label of the checkbox group.               |  `null` |
| options*    | `DataItem<T>[]`      | The options of the checkbox group.             |         |
| errors*     | `FormFieldErrors`    | The errors associated with the checkbox group. |         |
| isTouched*  | `boolean`            | Whether the checkbox group has been touched.   |         |
| isDisabled  | `boolean`            | Whether the checkbox group is disabled.        | `false` |
| isRequired  | `boolean`            | Whether the checkbox group is required.        | `false` |

## v-model

| Prop     | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| v-model* | `T[]`  | The value of the checkbox group. |

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