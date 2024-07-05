---
sidebar: auto
---

# FormPhoneNumberInput
<script setup>
import FormPhoneNumberInputPlayground from './FormPhoneNumberInputPlayground.vue'
</script>

<FormPhoneNumberInputPlayground />

## Props

| Prop               | Type               | Description                                   | Default |
|--------------------|--------------------|-----------------------------------------------|---------|
| label*             | `string`           | The label of the input.                       |         |
| errors*            | `FormFieldErrors`  | The errors associated with the input.         |         |
| isDisabled         | `boolean`          | Whether the input is disabled.                | `false` |
| isLoading          | `boolean`          | Whether the input is loading.                 | `false` |
| isRequired         | `boolean`          | Whether the input is required.                | `false` |
| isTouched*         | `boolean`          | Whether the input is touched.                 | `false` |
| iconRight          | `Icon` \| `null`   | The right icon of the input.                  | `null`  |
| placeholder        | `null` \| `string` | The placeholder of the input.                 | `null`  |
| defaultCountryCode | `string`           | The default country code of the phone number. | `BE`    |
| tooltip            | `string`           | The tooltip of the input.                     |         |


## Slots

| Slot name | Type | Description                                |
|-----------|------|--------------------------------------------|
| `right`   | None | Replace the right icon with custom content |


## v-model

| Prop     | Type                | Description              |
|----------|---------------------|--------------------------|
| v-model* | `string` \| `null`  | The value of the input.  |


## Code

::: code-group
```vue [Usage]
<script setup lang="ts">
import { FormPhoneNumberInput } from '@wisemen/vue-core'
import { useForm } from 'formango'
import { z } from 'zod'

const { form } = useForm({
  schema: z.object({
    phoneNumber: z.string()
  })
})

const phoneNumber = form.register('phoneNumber')
</script>

<template>
  <FormPhoneNumberInput
    v-bind="phoneNumber"
    label="Phone number"
  />
</template>
```
:::

For full source code, see [Github](https://github.com/wisemen-digital/vue-core/blob/main/packages/components/src/components/input/FormPhoneNumberInput.vue).
