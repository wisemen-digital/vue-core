---
sidebar: auto
---


# FormElement
<script setup>
import FormElementPlayground from './FormElementPlayground.vue'
</script>

<FormElementPlayground />

## Props

| Prop        | Type                  | Description                                                                                      | Default     |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------ | ----------- |
| isDisabled* | `boolean`             | Whether the input is disabled.                                                                   |             |
| isRequired* | `boolean`             | Whether the input is required.                                                                   |             |
| isTouched*  | `boolean`             | Whether the input is touched. This is used to determine if the input should be marked as invalid.|             |
| errors*     | `FormFieldErrors`     | The errors associated with the input.                                                            |             |
| label*      | `string` \| `null`    | The label of the input.                                                                          |             |



## Slots

| Slot      | Type                               | Description               |
| --------- | ---------------------------------- | ------------------------- |
| `default` | `id: string`, `isInvalid: boolean` | Content of the element    |

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

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/button/AppButton.vue).