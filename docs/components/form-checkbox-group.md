---
sidebar: auto
---

# FormCheckboxGroup

## Props

| Prop       | Type                    | Description                                         | Default          |
|------------|-------------------------|-----------------------------------------------------|------------------|
| label **(required)**      | `string`                | The label of the checkbox group.                   |                 |
| options **(required)**   | `DataItem<string>[]`         | The options of the checkbox group.                 |                 |
| errors **(required)**     | `FormFieldErrors`       | The errors associated with the checkbox group.      |                 |
| isTouched **(required)**  | `boolean`               | Whether the checkbox group has been touched.       |                 |
| isDisabled | `boolean`               | Whether the checkbox group is disabled.            | `false`          |
| isRequired | `boolean`               | Whether the checkbox group is required.            | `false`          |

## v-model

| Prop       | Type          | Description                               |
|------------|---------------|-------------------------------------------|
| v-model **(required)**    | `string[]`     | The value of the checkbox group.                |

## Example Usage

```vue
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
  <AppCheckboxGroupInput
    v-bind="value"
    :options="options"
    label="Options"
  />
</template>
