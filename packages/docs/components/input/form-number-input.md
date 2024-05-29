---
sidebar: auto
---


# FormNumberInput
<script setup>
import FormNumberInputPlayground from './FormNumberInputPlayground.vue'
</script>

<FormNumberInputPlayground />

## Props

| Prop          | Type                                         | Description                                          | Default     |
| ------------ | ----------------------------------------------| ---------------------------------------------------- | ----------- |
| label*       | `string`                                      | The label of the input.                              |             |
| errors*      | `FormFieldErrors`                             | The errors associated with the input.                |             |
| isDisabled   | `boolean`                                     | Whether the input is disabled.                       | `false`     |
| isLoading    | `boolean`                                     | Whether the input is loading.                        | `false`     |
| isRequired   | `boolean`                                     | Whether the input is required.                       | `false`     |
| isTouched*   | `boolean`                                     | Whether the input is invalid.                        | `false`     |
| hideControls | `boolean`                                     | Whether to hide the increment and decrement controls.| `false`     |
| iconLeft     | `Icon` \| `null`                              | The left icon of the input.                          | `null`      |
| max          | `number` \| `null`                            | The maximum value of the input.                      | `null`      |
| min          | `number` \| `null`                            | The minimum value of the input.                      | `0`         |
| placeholder  | `string` \| `null`                            | The placeholder of the input.                        | `null`      |



## Slots

| Slot      | Type | Description                                                                                   |
| --------- | ---- | --------------------------------------------------------------------------------------------- |
| `right`   | None | Optional content on the right of the input (to the right of the increment/decrement controls) |
| `left`    | None | Optional content on the left of the input (overrides the rendering of the left Icon)          |

> The `right` slot will only show if hideControls is set to `false`

## v-model

| Model   | Type               | Description        |
| ------- | ------------------ | ------------------ |
| `model`*| `number` \| `null` | Value of the input |

## Events

| Event Name  | Description                                          |
|-------------|------------------------------------------------------|
| blur        | Emitted when the input loses focus.                  |
| focus       | Emitted when the input gains focus.                  |

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

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/AppNumberInput.vue).